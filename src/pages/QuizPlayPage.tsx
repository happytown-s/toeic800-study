import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import type { PageName, Question } from '../core/types';
import { questions } from '../data/questions';

// ===== TTS Audio Hook =====
function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const play = useCallback((text: string, onEnd?: () => void) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.9;
    u.pitch = 1.0;
    // Prefer a natural-sounding voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Natural'))
    ) || voices.find(v => v.lang.startsWith('en-US'))
      || voices.find(v => v.lang.startsWith('en'));
    if (preferred) u.voice = preferred;
    u.onstart = () => setIsPlaying(true);
    u.onend = () => { setIsPlaying(false); onEnd?.(); };
    u.onerror = () => { setIsPlaying(false); onEnd?.(); };
    utteranceRef.current = u;
    window.speechSynthesis.speak(u);
    setHasPlayed(true);
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  // Load voices on mount
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) setIsReady(true);
    };
    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  return { play, stop, isPlaying, isReady, hasPlayed };
}

interface Props {
  onNavigate: (page: PageName) => void;
  selectedPart: number | null;
  questionCount: number;
  recordAnswer: (questionId: number, correct: boolean, part: number, category: string) => void;
  onFinish: (score: { correct: number; total: number }) => void;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizPlayPage({ onNavigate, selectedPart, questionCount, recordAnswer, onFinish }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResult, setShowResult] = useState(false);
  const [audioRevealed, setAudioRevealed] = useState(false);
  const lastCorrectRef = useRef(false);
  const audio = useAudioPlayer();

  const quizQuestions = useMemo(() => {
    const pool = selectedPart !== null ? questions.filter(q => q.part === selectedPart) : questions;
    return shuffle(pool).slice(0, Math.min(questionCount, pool.length));
  }, [selectedPart, questionCount]);

  const currentQuestion: Question | undefined = quizQuestions[currentIndex];
  const isListeningPart = currentQuestion?.part != null && currentQuestion.part >= 2 && currentQuestion.part <= 4;

  const handleAnswer = useCallback((optionIndex: number) => {
    if (selectedAnswer !== null || !currentQuestion) return;
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    const isCorrect = currentQuestion.options[optionIndex].isCorrect;
    setScore(prev => ({ correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
    recordAnswer(currentQuestion.id, isCorrect, currentQuestion.part, currentQuestion.category);
    lastCorrectRef.current = isCorrect;
  }, [selectedAnswer, currentQuestion, recordAnswer]);

  const nextQuestion = useCallback(() => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setAudioRevealed(false);
      audio.stop();
    } else {
      setShowResult(true);
      onFinish({ correct: score.correct + (lastCorrectRef.current ? 1 : 0), total: score.total + 1 });
    }
  }, [currentIndex, quizQuestions.length, score, onFinish, audio]);

  // Auto-play audio for listening parts when question loads
  useEffect(() => {
    if (currentQuestion?.audioScript && isListeningPart) {
      setAudioRevealed(false);
      // Small delay so the question renders first
      const timer = setTimeout(() => {
        audio.play(currentQuestion.audioScript!, () => {
          setAudioRevealed(true);
        });
      }, 300);
      return () => { clearTimeout(timer); audio.stop(); };
    } else {
      setAudioRevealed(true);
    }
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!currentQuestion && !showResult) {
    return (
      <div className="text-center py-8 text-dark-muted">
        No questions available for this selection.
        <button onClick={() => onNavigate('quiz-setup')} className="block mx-auto mt-4 text-gold">Go Back</button>
      </div>
    );
  }

  if (showResult) {
    const pct = score.total > 0 ? score.correct / score.total : 0;
    return (
      <div className="bg-dark-surface rounded-xl p-8 border border-dark-border text-center space-y-4">
        <div className="text-5xl font-bold text-gold">{score.correct}/{score.total}</div>
        <p className="text-lg">
          {pct >= 0.9
            ? 'Outstanding! You are on track for 800+!'
            : pct >= 0.75
              ? 'Good progress! Keep pushing.'
              : pct >= 0.6
                ? 'Decent. Review the explanations carefully.'
                : 'Keep practicing! Focus on weak areas.'}
        </p>
        <p className="text-sm text-dark-muted">
          Estimated score: {Math.round(225 + pct * 225)}
        </p>
        <div className="flex gap-3 justify-center pt-4">
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 bg-dark-card hover:bg-dark-border text-dark-text rounded-xl transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('quiz-setup')}
            className="px-6 py-3 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const isLast = currentIndex >= quizQuestions.length - 1;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('home')} className="text-dark-muted hover:text-dark-text text-sm">←</button>
          <span className="text-sm text-dark-muted">Part {currentQuestion.part}</span>
          <span className="text-sm text-gold font-semibold">Q{currentIndex + 1}/{quizQuestions.length}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-dark-muted">Score: {score.correct}/{score.total}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-dark-card rounded-full overflow-hidden">
        <div
          className="h-full bg-gold rounded-full transition-all"
          style={{ width: `${((currentIndex + (showExplanation ? 1 : 0)) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <div className="bg-dark-surface rounded-xl p-6 border border-dark-border space-y-5">
        {/* Picture (Part 1) */}
        {currentQuestion.imageSrc && (
          <figure className="overflow-hidden rounded-lg border border-dark-border bg-slate-100">
            <img
              src={currentQuestion.imageSrc}
              alt={currentQuestion.imageAlt ?? 'Question illustration'}
              className="aspect-video w-full object-cover"
            />
          </figure>
        )}

        {/* Passage (Parts 6-7) */}
        {currentQuestion.passage && (
          <div className="bg-dark-card rounded-lg p-4 text-sm text-dark-muted leading-relaxed whitespace-pre-wrap border border-dark-border">
            {currentQuestion.passage}
          </div>
        )}

        {/* Audio Player (Listening Parts 2-4) */}
        {currentQuestion.audioScript && isListeningPart && (
          <div className="bg-dark-card rounded-lg p-4 border border-dark-border space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gold font-semibold">🔊 Audio</span>
                {audio.isPlaying && (
                  <span className="inline-block w-2 h-2 bg-gold rounded-full animate-pulse" />
                )}
              </div>
              <button
                onClick={() => audio.play(currentQuestion.audioScript!)}
                disabled={audio.isPlaying}
                className="text-xs px-3 py-1.5 bg-dark-surface hover:bg-dark-border disabled:opacity-50 rounded-lg transition-colors"
              >
                {audio.isPlaying ? '▶ Playing...' : '🔄 Replay'}
              </button>
            </div>
            {!audioRevealed && (
              <p className="text-xs text-dark-muted text-center animate-pulse">
                🔊 音声を再生しています...再生が終わると選択肢が表示されます
              </p>
            )}
          </div>
        )}

        {/* Audio Script (show after answering for listening parts) */}
        {currentQuestion.audioScript && showExplanation && (
          <div className="bg-dark-card rounded-lg p-4 text-sm text-dark-muted leading-relaxed whitespace-pre-wrap border border-dark-border">
            <p className="text-xs text-gold mb-2">📝 Audio Script:</p>
            {currentQuestion.audioScript}
          </div>
        )}

        {/* Question */}
        <p className="text-lg leading-relaxed">{currentQuestion.question}</p>

        {/* Options — hide until audio finishes for listening parts */}
        <div className={"space-y-3" + (isListeningPart && !audioRevealed ? ' opacity-30 pointer-events-none' : '')}>
          {currentQuestion.options.map((opt, i) => {
            const isCorrect = opt.isCorrect;
            const isSelected = selectedAnswer === i;
            let bg = 'bg-dark-card hover:bg-dark-border border-transparent';
            if (showExplanation) {
              if (isCorrect) bg = 'bg-green-900/40 border-green-500';
              else if (isSelected && !isCorrect) bg = 'bg-red-900/40 border-red-500';
            }
            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={showExplanation}
                className={`w-full text-left px-4 py-3 rounded-xl border ${bg} transition-colors`}
              >
                {opt.text}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-dark-card rounded-lg p-4 border border-gold/30 space-y-3">
            <p className="text-sm">
              <span className="font-semibold text-gold">解説: </span>
              <span className="text-dark-text">{currentQuestion.explanation}</span>
            </p>
            {currentQuestion.keyVocabulary && currentQuestion.keyVocabulary.length > 0 && (
              <div className="text-xs text-dark-muted space-y-1">
                <span className="font-semibold text-gold-dark">Key Vocabulary:</span>
                <ul className="list-disc list-inside space-y-0.5">
                  {currentQuestion.keyVocabulary.map((v, i) => (
                    <li key={i}><span className="text-dark-text">{v.word}</span> — {v.meaning}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Next button */}
        {showExplanation && (
          <button
            onClick={nextQuestion}
            className="w-full py-3 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors"
          >
            {isLast ? 'View Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}
