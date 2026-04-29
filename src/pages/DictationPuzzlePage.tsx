import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import type { PageName, Question } from '../core/types';
import { questions } from '../data/questions';

// ===== Utility =====
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Common English stop words to skip when making blanks
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'shall', 'can', 'to', 'of', 'in', 'for',
  'on', 'with', 'at', 'by', 'from', 'as', 'into', 'through', 'during',
  'before', 'after', 'above', 'below', 'between', 'under', 'over',
  'and', 'but', 'or', 'nor', 'not', 'so', 'yet', 'both', 'either',
  'neither', 'each', 'every', 'all', 'any', 'few', 'more', 'most',
  'other', 'some', 'such', 'no', 'only', 'own', 'same', 'than',
  'too', 'very', 'just', 'because', 'if', 'when', 'while', 'that',
  'which', 'who', 'whom', 'this', 'these', 'those', 'it', 'its',
  'he', 'she', 'they', 'them', 'their', 'his', 'her', 'my', 'your',
  'our', 'what', 'how', 'where', 'there', 'here', 'about', 'up',
  'out', 'also', 'then', 'now', 's', 't', 're', 've', 'll', 'd', 'm',
]);

function isContentWord(word: string): boolean {
  // Filter: length >= 3, not a stop word, contains at least one letter
  if (word.length < 3) return false;
  if (STOP_WORDS.has(word.toLowerCase())) return false;
  if (!/[a-zA-Z]/.test(word)) return false;
  return true;
}

interface Blank {
  id: number;
  correctWord: string; // lowercase
  displayWord: string; // original casing
  answered: string | null;
  hinted: boolean;
}

interface ParsedLine {
  segments: Array<{ type: 'text'; value: string } | { type: 'blank'; blankId: number }>;
}

interface PuzzleState {
  blanks: Blank[];
  parsedLines: ParsedLine[];
  dummyWords: string[];
}

function generatePuzzle(script: string, allScripts: string[]): PuzzleState {
  // Split script into lines
  const lines = script.split('\n');

  // Tokenize each line, tracking word positions
  const tokenizedLines: Array<{ tokens: string[] }> = lines.map(line => ({
    tokens: line.split(/(\s+)/),
  }));

  // Collect all content words with their positions
  const candidates: { lineIdx: number; tokenIdx: number; word: string; clean: string }[] = [];
  tokenizedLines.forEach((line, li) => {
    line.tokens.forEach((token, ti) => {
      const clean = token.replace(/[.,;:!?"')\]]+$/, '').replace(/^[('"\[]+/, '');
      if (clean && isContentWord(clean)) {
        candidates.push({ lineIdx: li, tokenIdx: ti, word: token, clean });
      }
    });
  });

  // Randomly select 30-50% of candidates for blanks
  const blankRatio = 0.3 + Math.random() * 0.2;
  const shuffledCandidates = shuffle(candidates);
  const blankCount = Math.max(2, Math.round(shuffledCandidates.length * blankRatio));
  const selectedForBlank = shuffledCandidates.slice(0, blankCount);

  // Create a set for quick lookup
  const blankKeySet = new Set(selectedForBlank.map(c => `${c.lineIdx}:${c.tokenIdx}`));

  // Build blanks array
  const blanks: Blank[] = selectedForBlank.map((c, i) => ({
    id: i,
    correctWord: c.clean.toLowerCase(),
    displayWord: c.clean,
    answered: null,
    hinted: false,
  }));

  // Build parsed lines
  const parsedLines: ParsedLine[] = tokenizedLines.map((line, li) => {
    const segments: ParsedLine['segments'] = [];
    let currentText = '';
    let blankIdx = 0;

    line.tokens.forEach((token, ti) => {
      const key = `${li}:${ti}`;
      if (blankKeySet.has(key)) {
        if (currentText) {
          segments.push({ type: 'text', value: currentText });
          currentText = '';
        }
        // Find the blank id
        const bIdx = selectedForBlank.findIndex(c => c.lineIdx === li && c.tokenIdx === ti);
        segments.push({ type: 'blank', blankId: blanks[bIdx].id });
      } else {
        currentText += token;
      }
    });

    if (currentText) {
      segments.push({ type: 'text', value: currentText });
    }

    return { segments };
  });

  // Generate dummy words from other scripts
  const allContentWords = allScripts
    .flatMap(s => s.split(/\s+/))
    .map(w => w.replace(/[.,;:!?"')\]]+$/, '').replace(/^[('"\[]+/, ''))
    .filter(w => isContentWord(w));

  const uniqueWords = [...new Set(allContentWords.map(w => w.toLowerCase()))];
  const correctWords = new Set(blanks.map(b => b.correctWord));
  const dummyPool = shuffle(uniqueWords.filter(w => !correctWords.has(w)));

  // For each blank, we need 3-4 dummies. We'll share a pool.
  const totalDummies = blankCount * 3;
  const dummyWords = dummyPool.slice(0, Math.min(totalDummies, dummyPool.length));

  // If not enough dummies, pad with some generic TOEIC words
  const genericWords = ['meeting', 'schedule', 'project', 'proposal', 'client', 'manager',
    'report', 'deadline', 'budget', 'invoice', 'employee', 'conference',
    'document', 'presentation', 'review', 'approval', 'shipment', 'delivery',
    'feedback', 'available', 'confirm', 'complete', 'include', 'provide'];
  while (dummyWords.length < totalDummies) {
    const w = genericWords[Math.floor(Math.random() * genericWords.length)];
    if (!correctWords.has(w) && !dummyWords.includes(w)) {
      dummyWords.push(w);
    }
  }

  return { blanks, parsedLines, dummyWords };
}

// Choices are generated dynamically in the component based on the selected blank.

// ===== Audio Hook =====
function useDictationAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const play = useCallback((text: string, rate: number) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = rate;
    u.pitch = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Natural'))
    ) || voices.find(v => v.lang.startsWith('en-US'))
      || voices.find(v => v.lang.startsWith('en'));
    if (preferred) u.voice = preferred;
    u.onstart = () => setIsPlaying(true);
    u.onend = () => setIsPlaying(false);
    u.onerror = () => setIsPlaying(false);
    utteranceRef.current = u;
    window.speechSynthesis.speak(u);
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    return () => { window.speechSynthesis.cancel(); };
  }, []);

  return { play, stop, isPlaying, playbackRate, setPlaybackRate };
}

// ===== Props =====
interface Props {
  onNavigate: (page: PageName) => void;
}

// ===== Component =====
export default function DictationPuzzlePage({ onNavigate }: Props) {
  const [selectedPart, setSelectedPart] = useState<number | null>(null);
  const [started, setStarted] = useState(false);

  if (!started) {
    return <SetupScreen selectedPart={selectedPart} onSelectPart={setSelectedPart} onStart={() => setStarted(true)} onNavigate={onNavigate} />;
  }

  return <PuzzleGame selectedPart={selectedPart} onNavigate={onNavigate} onBack={() => setStarted(false)} />;
}

// ===== Setup Screen =====
function SetupScreen({ selectedPart, onSelectPart, onStart, onNavigate }: {
  selectedPart: number | null;
  onSelectPart: (p: number | null) => void;
  onStart: () => void;
  onNavigate: (page: PageName) => void;
}) {
  const listeningParts = [
    { part: 1, label: 'Part 1: Photo Description', icon: '📷' },
    { part: 2, label: 'Part 2: Question-Response', icon: '🗣️' },
    { part: 3, label: 'Part 3: Short Conversations', icon: '💬' },
    { part: 4, label: 'Part 4: Short Talks', icon: '📢' },
  ];

  const questionsWithAudio = useMemo(() => {
    const pool = selectedPart !== null
      ? questions.filter(q => q.part === selectedPart && q.audioScript)
      : questions.filter(q => q.audioScript);
    return pool.length;
  }, [selectedPart]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => onNavigate('home')} className="text-dark-muted hover:text-dark-text text-sm">←</button>
        <h1 className="text-xl font-bold text-gold">🧩 Dictation Puzzle</h1>
      </div>

      <div className="bg-dark-surface rounded-xl p-5 border border-dark-border space-y-4">
        <p className="text-sm text-dark-muted">
          音声を聞いて、空所に正しい単語をタップで埋めるディクテーションパズルです。
        </p>

        <div>
          <p className="text-sm font-semibold text-dark-text mb-2">Partを選択:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {listeningParts.map(p => (
              <button
                key={p.part}
                onClick={() => onSelectPart(selectedPart === p.part ? null : p.part)}
                className={`p-3 rounded-xl border text-sm text-center transition-colors ${
                  selectedPart === p.part
                    ? 'bg-gold/20 border-gold text-gold'
                    : 'bg-dark-card border-dark-border text-dark-muted hover:border-gold/30'
                }`}
              >
                <span className="block text-lg mb-1">{p.icon}</span>
                Part {p.part}
              </button>
            ))}
          </div>
          {selectedPart === null && (
            <p className="text-xs text-dark-muted mt-2">未選択 = 全Partから出題 ({questionsWithAudio}問)</p>
          )}
        </div>

        <button
          onClick={onStart}
          disabled={questionsWithAudio === 0}
          className="w-full py-3 bg-gold hover:bg-gold-dark disabled:opacity-40 text-dark-bg font-semibold rounded-xl transition-colors"
        >
          🎯 Start Dictation Puzzle ({questionsWithAudio}問)
        </button>
      </div>
    </div>
  );
}

// ===== Puzzle Game =====
function PuzzleGame({ selectedPart, onNavigate, onBack }: {
  selectedPart: number | null;
  onNavigate: (page: PageName) => void;
  onBack: () => void;
}) {
  const audio = useDictationAudio();

  // Filter questions with audioScript
  const poolQuestions = useMemo(() => {
    const pool = selectedPart !== null
      ? questions.filter(q => q.part === selectedPart && q.audioScript)
      : questions.filter(q => q.audioScript);
    return shuffle(pool);
  }, [selectedPart]);

  const allScripts = useMemo(() => poolQuestions.map(q => q.audioScript!).filter(Boolean), [poolQuestions]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBlankId, setSelectedBlankId] = useState<number | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResult, setShowResult] = useState(false);
  const [shakingBlank, setShakingBlank] = useState<number | null>(null);

  // Generate puzzle for current question
  const currentQuestion = poolQuestions[currentIndex];
  const puzzle = useMemo(() => {
    if (!currentQuestion?.audioScript) return null;
    return generatePuzzle(currentQuestion.audioScript, allScripts);
  }, [currentIndex, currentQuestion?.audioScript]); // eslint-disable-line react-hooks/exhaustive-deps

  const [blanks, setBlanks] = useState<Blank[]>([]);
  const [hintUsed, setHintUsed] = useState(false);

  // Reset state on question change
  useEffect(() => {
    if (puzzle) {
      setBlanks(puzzle.blanks.map(b => ({ ...b })));
      setSelectedBlankId(null);
      setHintUsed(false);
    }
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-play audio on mount
  useEffect(() => {
    if (currentQuestion?.audioScript) {
      const timer = setTimeout(() => {
        audio.play(currentQuestion.audioScript!, audio.playbackRate);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // Check if all blanks are filled
  const allFilled = blanks.length > 0 && blanks.every(b => b.answered !== null);

  // Auto-grade when all filled
  useEffect(() => {
    if (allFilled && puzzle) {
      const correctCount = blanks.filter(b => b.answered?.toLowerCase() === b.correctWord).length;
      setScore(prev => ({
        correct: prev.correct + correctCount,
        total: prev.total + blanks.length,
      }));
    }
  }, [allFilled]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle blank tap
  const handleBlankTap = useCallback((blankId: number) => {
    if (blanks.find(b => b.id === blankId)?.answered) return; // already answered
    setSelectedBlankId(blankId);
  }, [blanks]);

  // Handle word tap
  const handleWordTap = useCallback((word: string) => {
    if (selectedBlankId === null) return;
    const blank = blanks.find(b => b.id === selectedBlankId);
    if (!blank || blank.answered) return;

    const isCorrect = word.toLowerCase() === blank.correctWord;

    if (isCorrect) {
      setBlanks(prev => prev.map(b =>
        b.id === selectedBlankId ? { ...b, answered: word } : b
      ));
      setSelectedBlankId(null);
    } else {
      // Shake animation
      setShakingBlank(selectedBlankId);
      setTimeout(() => setShakingBlank(null), 500);
    }
  }, [selectedBlankId, blanks]);

  // Hint
  const handleHint = useCallback(() => {
    if (selectedBlankId === null) return;
    setBlanks(prev => prev.map(b =>
      b.id === selectedBlankId ? { ...b, hinted: true } : b
    ));
    setHintUsed(true);
  }, [selectedBlankId]);

  // Next question
  const handleNext = useCallback(() => {
    audio.stop();
    if (currentIndex < poolQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  }, [currentIndex, poolQuestions.length, audio]);

  const handleSkip = useCallback(() => {
    audio.stop();
    if (currentIndex < poolQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  }, [currentIndex, poolQuestions.length, audio]);

  // Speed controls
  const speeds = [0.8, 1.0, 1.2];

  // Build choices for current blank
  const choices = useMemo(() => {
    if (!puzzle || selectedBlankId === null) return [];
    const blank = blanks.find(b => b.id === selectedBlankId);
    if (!blank) return [];

    const correctWord = blank.displayWord;
    const dummies = shuffle(puzzle.dummyWords).slice(0, 3);
    // Filter dummies that aren't the same as correct
    const filteredDummies = dummies.filter(d => d.toLowerCase() !== blank.correctWord);
    const allChoices = shuffle([correctWord, ...filteredDummies.map(d => d.charAt(0).toUpperCase() + d.slice(1))]);
    return allChoices;
  }, [selectedBlankId, blanks, puzzle]);

  // ===== Render =====
  if (!currentQuestion && !showResult) {
    return (
      <div className="text-center py-8 text-dark-muted">
        No questions with audio available.
        <button onClick={() => onNavigate('home')} className="block mx-auto mt-4 text-gold">Home</button>
      </div>
    );
  }

  if (showResult) {
    const pct = score.total > 0 ? score.correct / score.total : 0;
    return (
      <div className="bg-dark-surface rounded-xl p-8 border border-dark-border text-center space-y-4">
        <div className="text-3xl mb-2">🧩</div>
        <div className="text-4xl font-bold text-gold">{score.correct}/{score.total}</div>
        <p className="text-lg text-dark-text">
          {pct >= 0.9
            ? 'Perfect! Outstanding listening comprehension!'
            : pct >= 0.75
              ? 'Great work! Keep practicing.'
              : pct >= 0.5
                ? 'Good effort. Focus on key vocabulary.'
                : 'Keep trying! Listen carefully for content words.'}
        </p>
        <p className="text-sm text-dark-muted">Accuracy: {score.total > 0 ? Math.round(pct * 100) : 0}%</p>
        <div className="flex gap-3 justify-center pt-4">
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 bg-dark-card hover:bg-dark-border text-dark-text rounded-xl transition-colors"
          >
            Home
          </button>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  const currentBlank = blanks.find(b => b.id === selectedBlankId);
  const totalBlanks = blanks.length;
  const filledBlanks = blanks.filter(b => b.answered !== null).length;
  const correctSoFar = blanks.filter(b => b.answered !== null && b.answered.toLowerCase() === b.correctWord).length;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('home')} className="text-dark-muted hover:text-dark-text text-sm">←</button>
          <span className="text-sm text-dark-muted">🧩 Dictation</span>
          <span className="text-sm text-gold font-semibold">
            Q{currentIndex + 1}/{poolQuestions.length}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-dark-muted">
            {correctSoFar}/{totalBlanks} filled
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-dark-card rounded-full overflow-hidden">
        <div
          className="h-full bg-gold rounded-full transition-all"
          style={{ width: `${((currentIndex + (allFilled ? 1 : filledBlanks / Math.max(totalBlanks, 1))) / poolQuestions.length) * 100}%` }}
        />
      </div>

      {/* Audio Controls */}
      <div className="bg-dark-surface rounded-xl p-4 border border-dark-border space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => audio.play(currentQuestion.audioScript!, audio.playbackRate)}
              disabled={audio.isPlaying}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/20 hover:bg-gold/30 disabled:opacity-50 transition-colors"
            >
              {audio.isPlaying ? (
                <span className="inline-block w-2 h-2 bg-gold rounded-full animate-pulse" />
              ) : (
                <span className="text-lg">🔊</span>
              )}
            </button>
            <span className="text-sm text-dark-muted">
              {audio.isPlaying ? 'Playing...' : 'Play Audio'}
            </span>
          </div>
          <div className="flex gap-1">
            {speeds.map(speed => (
              <button
                key={speed}
                onClick={() => audio.setPlaybackRate(speed)}
                className={`px-2.5 py-1 text-xs rounded-lg transition-colors ${
                  audio.playbackRate === speed
                    ? 'bg-gold text-dark-bg font-semibold'
                    : 'bg-dark-card text-dark-muted hover:text-dark-text'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Script with blanks */}
      <div className="bg-dark-surface rounded-xl p-5 border border-dark-border">
        <p className="text-xs text-gold font-semibold mb-3">
          Part {currentQuestion.part} — Listen and fill in the blanks:
        </p>
        <div className="text-base leading-loose tracking-wide select-none">
          {puzzle?.parsedLines.map((line, li) => (
            <div key={li} className="mb-1">
              {line.segments.map((seg, si) => {
                if (seg.type === 'text') {
                  return <span key={si}>{seg.value}</span>;
                }
                // It's a blank
                const blank = blanks.find(b => b.id === seg.blankId);
                if (!blank) return null;

                const isSelected = selectedBlankId === blank.id;
                const isShaking = shakingBlank === blank.id;
                const isAnswered = blank.answered !== null;
                const isCorrect = isAnswered && blank.answered.toLowerCase() === blank.correctWord;
                const isWrong = isAnswered && blank.answered.toLowerCase() !== blank.correctWord;

                let blankClass = 'inline-flex items-center justify-center min-w-[80px] px-2 py-0.5 mx-0.5 rounded-lg border-b-2 transition-all duration-200 cursor-pointer align-middle ';
                if (isAnswered) {
                  blankClass += isCorrect
                    ? 'bg-green-900/30 border-green-400 text-green-300 '
                    : 'bg-red-900/30 border-red-400 text-red-300 ';
                } else if (isSelected) {
                  blankClass += 'bg-gold/20 border-gold text-gold animate-pulse ';
                } else if (blank.hinted) {
                  blankClass += 'bg-dark-card border-dark-border text-dark-muted ';
                } else {
                  blankClass += 'bg-dark-card border-dark-border text-dark-muted hover:border-gold/50 ';
                }
                if (isShaking) {
                  blankClass += 'animate-shake ';
                }

                return (
                  <span
                    key={si}
                    onClick={() => !isAnswered && handleBlankTap(blank.id)}
                    className={blankClass}
                  >
                    {isAnswered
                      ? blank.answered
                      : blank.hinted
                        ? blank.correctWord.charAt(0).toUpperCase() + '___'
                        : '___'}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Choices */}
      {selectedBlankId !== null && !allFilled && (
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border space-y-3">
          <p className="text-xs text-dark-muted">
            Tap the correct word for the highlighted blank:
          </p>
          <div className="flex flex-wrap gap-2">
            {choices.map((word, i) => (
              <button
                key={i}
                onClick={() => handleWordTap(word)}
                className="px-4 py-2 bg-dark-card hover:bg-dark-border border border-dark-border rounded-xl text-sm text-dark-text transition-colors active:scale-95"
              >
                {word}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleHint}
              disabled={currentBlank?.hinted || currentBlank?.answered !== null}
              className="px-4 py-2 text-xs bg-gold/10 hover:bg-gold/20 text-gold rounded-lg transition-colors disabled:opacity-40"
            >
              💡 Hint
            </button>
            <button
              onClick={() => setSelectedBlankId(null)}
              className="px-4 py-2 text-xs bg-dark-card hover:bg-dark-border text-dark-muted rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Question info (after completion or for reference) */}
      {(allFilled || !selectedBlankId) && currentQuestion.explanation && (
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border space-y-3">
          {allFilled && (
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gold">
                Score: {blanks.filter(b => b.answered?.toLowerCase() === b.correctWord).length}/{totalBlanks}
              </span>
              {hintUsed && <span className="text-xs text-dark-muted">(hint used)</span>}
            </div>
          )}

          {/* Key Vocabulary */}
          {currentQuestion.keyVocabulary && currentQuestion.keyVocabulary.length > 0 && (
            <div className="text-xs text-dark-muted space-y-1">
              <span className="font-semibold text-gold-dark">Key Vocabulary:</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {currentQuestion.keyVocabulary.map((v, i) => (
                  <span key={i}>
                    <span className="text-dark-text">{v.word}</span> — {v.meaning}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Next/Skip buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleSkip}
          className="flex-1 py-3 bg-dark-card hover:bg-dark-border text-dark-muted rounded-xl transition-colors text-sm"
        >
          Skip
        </button>
        <button
          onClick={handleNext}
          disabled={!allFilled}
          className="flex-1 py-3 bg-gold hover:bg-gold-dark disabled:opacity-40 text-dark-bg font-semibold rounded-xl transition-colors"
        >
          {currentIndex >= poolQuestions.length - 1 ? 'View Results' : 'Next'}
        </button>
      </div>
    </div>
  );
}
