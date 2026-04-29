import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import type { PageName, Question } from '../core/types';
import { questions } from '../data/questions';

// ===== JP Translations for Part 2 =====
const jpTranslations: Record<number, { question: string; options: Record<string, string> }> = {
  // ===== Part 2 =====
  201: {
    question: '\u4E00\u756A\u8FD1\u3044\u90F5\u4FBF\u5C40\u306F\u3069\u3053\u3067\u3059\u304B\uFF1F',
    options: {
      '(A)': '5\u6642\u306B\u9589\u307E\u308A\u307E\u3059',
      '(B)': '\u3053\u3053\u304B\u30892\u30D6\u30ED\u30C3\u30AF\u304F\u3089\u3044\u3001\u30AA\u30FC\u30AF\u30B9\u30C8\u30EA\u30FC\u30C8\u306B\u3042\u308A\u307E\u3059',
      '(C)': '\u5C0F\u5305\u3092\u9001\u3089\u306A\u304D\u3083\u3044\u3051\u307E\u305B\u3093',
    },
  },
  202: {
    question: '\u91D1\u66DC\u65E5\u307E\u3067\u306B\u56DB\u534A\u671F\u5831\u544A\u66F8\u3092\u9001\u3063\u3066\u304F\u308C\u307E\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u6728\u66DC\u65E5\u307E\u3067\u306B\u7528\u610F\u3057\u307E\u3059',
      '(B)': '\u56DB\u534A\u671F\u30DF\u30FC\u30C6\u30A3\u30F3\u30B0\u306F\u6765\u9031\u306E\u6708\u66DC\u3067\u3059',
      '(C)': '\u3042\u306E\u5730\u533A\u306B\u884C\u3063\u305F\u3053\u3068\u304C\u3042\u308A\u307E\u305B\u3093',
    },
  },
  203: {
    question: '\u4E88\u7B97\u4F1A\u8B70\u306F\u660E\u65E5\u306E\u5348\u5F8C\u306B\u4E88\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3067\u3057\u305F\u304B\uFF1F',
    options: {
      '(A)': '\u306F\u3044\u3001\u6C34\u66DC\u65E5\u306E\u671D\u306B\u5909\u66F4\u3055\u308C\u307E\u3057\u305F',
      '(B)': '\u4E88\u7B97\u306F\u5148\u9031\u627F\u8A8D\u3055\u308C\u307E\u3057\u305F',
      '(C)': '\u79C1\u3082\u671D\u306E\u4F1A\u8B70\u306E\u65B9\u304C\u597D\u304D\u3067\u3059',
    },
  },
  204: {
    question: '\u4F53\u8ABF\u304C\u60AA\u304F\u3066\u3001\u4ECA\u65E5\u306E\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u306B\u53C2\u52A0\u3067\u304D\u305D\u3046\u306B\u3042\u308A\u307E\u305B\u3093',
    options: {
      '(A)': '\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u306E\u8CC7\u6599\u306F\u30C7\u30B9\u30AF\u306B\u3042\u308A\u307E\u3059',
      '(B)': '\u65E9\u304F\u826F\u304F\u306A\u308B\u3068\u3044\u3044\u3067\u3059\u306D\u3002\u4EE3\u308F\u308A\u306B\u30E1\u30E2\u3092\u53D6\u308A\u307E\u3057\u3087\u3046\u304B\uFF1F',
      '(C)': '\u30B3\u30F3\u30D9\u30F3\u30B7\u30E7\u30F3\u30BB\u30F3\u30BF\u30FC\u3067\u958B\u50AC\u3055\u308C\u307E\u3057\u305F',
    },
  },
  205: {
    question: '\u7530\u4E2D\u3055\u3093\u306F\u4F1A\u793E\u306B\u4F55\u5E74\u3044\u308B\u3093\u3067\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u90E8\u9580\u3067\u50CD\u3044\u3066\u3044\u307E\u3059',
      '(B)': '\u5927\u5B66\u5352\u696D\u4EE5\u6765\u3001\u7D048\u5E74\u3067\u3059',
      '(C)': '\u6BCE\u65E5\u96FB\u8ECA\u306B\u4E57\u3063\u3066\u3044\u307E\u3059',
    },
  },
  // ===== Part 3 =====
  301: {
    question: '\u5973\u6027\u306F\u7537\u6027\u306B\u4F55\u3092\u3057\u3066\u307B\u3057\u3044\u3068\u983C\u3093\u3067\u3044\u307E\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306B\u66F8\u985E\u3092\u63D0\u51FA\u3059\u308B',
      '(B)': '\u63D0\u6848\u66F8\u306E\u30C9\u30E9\u30D5\u30C8\u3092\u78BA\u8A8D\u3059\u308B',
      '(C)': '\u8CBB\u7528\u898B\u7A4D\u3082\u308A\u3092\u6E96\u5099\u3059\u308B',
      '(D)': '2\u6642\u306B\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3068\u4F1A\u3046',
    },
  },
  302: {
    question: '\u7537\u6027\u306F\u3044\u3064\u4FEE\u6B63\u7248\u306E\u5951\u7D04\u66F8\u3092\u9001\u308A\u307E\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u4ECA\u591C',
      '(B)': '\u660E\u65E5\u306E\u671D',
      '(C)': '\u6728\u66DC\u65E5',
      '(D)': '\u96FB\u8A71\u306E\u5F8C',
    },
  },
  303: {
    question: '\u7537\u6027\u306F\u3069\u3093\u306A\u554F\u984C\u306B\u8A00\u53CA\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u30D0\u30FC\u30B3\u30FC\u30C9\u30B9\u30AD\u30E3\u30CA\u30FC\u304C\u9045\u3059\u304E\u308B',
      '(B)': '\u30B7\u30B9\u30C6\u30E0\u304C\u4F1A\u8A08\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3068\u9023\u643A\u3067\u304D\u306A\u3044',
      '(C)': '\u30D9\u30F3\u30C0\u30FC\u304B\u3089\u8FD4\u7B54\u304C\u306A\u3044',
      '(D)': '\u30B9\u30BF\u30C3\u30D5\u306E\u7814\u4FEE\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u308B',
    },
  },
  304: {
    question: '\u5973\u6027\u306F\u4F55\u3092\u63D0\u6848\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u3088\u308A\u5927\u304D\u306A\u30D6\u30FC\u30B9\u30B9\u30DA\u30FC\u30B9\u3092\u78BA\u4FDD\u3059\u308B',
      '(B)': '\u30C7\u30B8\u30BF\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u3067\u5C55\u793A\u3059\u308B',
      '(C)': '\u5C55\u793A\u5546\u54C1\u6570\u3092\u6E1B\u3089\u3059',
      '(D)': 'AV\u4F1A\u793E\u306B\u76F4\u63A5\u4F9D\u983C\u3059\u308B',
    },
  },
  305: {
    question: '\u8A71\u8005\u305F\u3061\u306F\u6B21\u306B\u4F55\u3092\u3059\u308B\u53EF\u80FD\u6027\u304C\u9AD8\u3044\u3067\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3068\u4F1A\u3046',
      '(B)': '\u4F1A\u8B70\u5BA4\u3092\u4E88\u7D04\u3059\u308B',
      '(C)': '\u56DB\u534A\u671F\u76EE\u6A19\u3092\u78BA\u8A8D\u3059\u308B',
      '(D)': '\u58F2\u4E0A\u30C7\u30FC\u30BF\u3092\u767A\u8868\u3059\u308B',
    },
  },
  // ===== Part 4 =====
  401: {
    question: '\u3053\u306E\u6848\u5185\u306E\u76EE\u7684\u306F\u4F55\u3067\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u5E97\u8217\u9589\u9396\u3092\u77E5\u3089\u305B\u308B\u305F\u3081',
      '(B)': '\u65B0\u3057\u3044\u55B6\u696D\u6642\u9593\u3068\u30B5\u30FC\u30D3\u30B9\u3092\u77E5\u3089\u305B\u308B\u305F\u3081',
      '(C)': '\u9031\u672B\u30BB\u30FC\u30EB\u3092\u5BA3\u4F1D\u3059\u308B\u305F\u3081',
      '(D)': '\u65B0\u3057\u3044\u5E97\u8217\u306E\u5834\u6240\u3092\u77E5\u3089\u305B\u308B\u305F\u3081',
    },
  },
  402: {
    question: '\u7121\u6599\u30AE\u30D5\u30C8\u30E9\u30C3\u30D4\u30F3\u30B0\u3092\u53D7\u3051\u308B\u306B\u306F\u3044\u304F\u3089\u8CFC\u5165\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u304B\uFF1F',
    options: {
      '(A)': '25\u30C9\u30EB',
      '(B)': '50\u30C9\u30EB',
      '(C)': '75\u30C9\u30EB',
      '(D)': '100\u30C9\u30EB',
    },
  },
  403: {
    question: '\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u5BFE\u8C61\u8005\u306F\u8AB0\u3067\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u6C42\u8077\u8005',
      '(B)': '\u4F1A\u793E\u306E\u5F93\u696D\u54E1',
      '(C)': '\u5916\u90E8\u30B3\u30F3\u30B5\u30EB\u30BF\u30F3\u30C8',
      '(D)': '\u65B0\u5165\u793E\u54E1',
    },
  },
  404: {
    question: '\u5F93\u696D\u54E1\u306F\u4F55\u3092\u6E96\u5099\u3059\u308B\u3088\u3046\u306B\u6C42\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5831\u544A\u66F8',
      '(B)': '\u81EA\u5DF1\u8A55\u4FA1\u6587\u66F8',
      '(C)': '\u4F1A\u8B70\u306E\u8B70\u984C',
      '(D)': '\u7814\u4FEE\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB',
    },
  },
  405: {
    question: '\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u306F\u3069\u3053\u3067\u898B\u3064\u3051\u3089\u308C\u307E\u3059\u304B\uFF1F',
    options: {
      '(A)': '\u4EBA\u4E8B\u90E8\u304B\u3089',
      '(B)': '\u793E\u5185\u30A4\u30F3\u30C8\u30E9\u30CD\u30C3\u30C8\u3067',
      '(C)': '\u4F1A\u8B70\u5BA4\u3067',
      '(D)': '\u4E0A\u53F8\u304B\u3089',
    },
  },
};

function getJpTranslation(q: Question): string {
  const t = jpTranslations[q.id];
  return t ? t.question : '(翻訳なし)';
}

function getJpOptionTranslation(questionId: number, optionText: string): string {
  const t = jpTranslations[questionId];
  if (!t) return '(翻訳なし)';
  // Extract (A), (B), (C) from option text
  const key = optionText.match(/^\([A-D]\)/)?.[0];
  if (!key) return '(翻訳なし)';
  return t.options[key] || '(翻訳なし)';
}

// ===== TTS Audio Hook (mp3 priority + Web Speech API fallback) =====
function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const useTTSFallback = useRef(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const playWithTTS = useCallback((text: string, onEnd?: () => void) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.9;
    u.pitch = 1.0;
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

  const play = useCallback((text: string, onEnd?: () => void, audioSrc?: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    window.speechSynthesis.cancel();

    if (audioSrc && !useTTSFallback.current) {
      const audio = new Audio(audioSrc);
      audio.onended = () => { setIsPlaying(false); onEnd?.(); };
      audio.onerror = () => {
        useTTSFallback.current = true;
        audioRef.current = null;
        playWithTTS(text, onEnd);
      };
      audio.oncanplay = () => {
        audioRef.current = audio;
        audio.play().catch(() => {
          useTTSFallback.current = true;
          playWithTTS(text, onEnd);
        });
      };
      audio.load();
      setIsPlaying(true);
      setHasPlayed(true);
    } else {
      playWithTTS(text, onEnd);
    }
  }, [playWithTTS]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  const resetFallback = useCallback(() => {
    useTTSFallback.current = false;
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

  return { play, stop, isPlaying, isReady, hasPlayed, resetFallback };
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
  const [hintLevel, setHintLevel] = useState(0); // 0=none, 1=script, 2=script+translation
  const lastCorrectRef = useRef(false);
  const audio = useAudioPlayer();
  const isFirstPlayRef = useRef(true);

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
  // First question: audio first, then reveal. After that: show options immediately.
  useEffect(() => {
    setHintLevel(0);
    if (currentQuestion?.audioScript && isListeningPart && isFirstPlayRef.current) {
      isFirstPlayRef.current = false;
      setAudioRevealed(false);
      const timer = setTimeout(() => {
        const audioSrc = `/audio/part${currentQuestion.part}_${currentQuestion.id}.mp3`;
        audio.play(currentQuestion.audioScript!, () => {
          setAudioRevealed(true);
        }, audioSrc);
      }, 300);
      return () => { clearTimeout(timer); audio.stop(); audio.resetFallback(); };
    } else {
      setAudioRevealed(true);
      audio.resetFallback();
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
              <div className="flex gap-2">
                <button
                  onClick={() => setHintLevel(h => h === 0 ? 1 : h === 1 ? 2 : 0)}
                  className={"text-xs px-3 py-1.5 rounded-lg transition-colors " + (hintLevel > 0 ? 'bg-gold/20 text-gold' : 'bg-dark-surface hover:bg-dark-border text-dark-muted')}
                >
                  {hintLevel === 0 ? '💡 Hint' : hintLevel === 1 ? '💡 Hint 🔤' : '💡 Hint 🔤🇯🇵'}
                </button>
                <button
                  onClick={() => audio.play(currentQuestion.audioScript!, undefined, `/audio/part${currentQuestion.part}_${currentQuestion.id}.mp3`)}
                  disabled={audio.isPlaying}
                  className="text-xs px-3 py-1.5 bg-dark-surface hover:bg-dark-border disabled:opacity-50 rounded-lg transition-colors"
                >
                  {audio.isPlaying ? '▶ Playing...' : '🔄 Replay'}
                </button>
              </div>
            </div>
            {!audioRevealed && (
              <p className="text-xs text-dark-muted text-center animate-pulse">
                🔊 音声を再生しています...再生が終わると選択肢が表示されます
              </p>
            )}
          </div>
        )}

        {/* Hint: Audio Script (tap once) */}
        {currentQuestion.audioScript && isListeningPart && hintLevel >= 1 && !showExplanation && (
          <div className="bg-dark-card rounded-lg p-4 text-sm text-dark-muted leading-relaxed whitespace-pre-wrap border border-dark-border">
            <p className="text-xs text-gold mb-2">📝 Audio Script:</p>
            {currentQuestion.audioScript}
          </div>
        )}

        {/* Hint: Translation (tap twice) */}
        {currentQuestion.audioScript && isListeningPart && hintLevel >= 2 && !showExplanation && (
          <div className="bg-dark-card rounded-lg p-4 text-sm text-dark-muted leading-relaxed whitespace-pre-wrap border border-dark-border">
            <p className="text-xs text-gold mb-2">🇯🇵 日本語訳:</p>
            <p className="mb-2 text-dark-text">{getJpTranslation(currentQuestion)}</p>
            <p className="text-xs text-gold mb-2 mt-3">🇯🇵 選択肢:</p>
            {currentQuestion.options.map((opt, i) => (
              <p key={i} className="text-dark-text">{opt.text} → {getJpOptionTranslation(currentQuestion.id, opt.text)}</p>
            ))}
          </div>
        )}

        {/* Audio Script after answering (no hint needed) */}
        {currentQuestion.audioScript && showExplanation && (
          <div className="bg-dark-card rounded-lg p-4 text-sm text-dark-muted leading-relaxed whitespace-pre-wrap border border-dark-border">
            <p className="text-xs text-gold mb-2">📝 Audio Script:</p>
            {currentQuestion.audioScript}
          </div>
        )}

        {/* Question */}
        <p className="text-lg leading-relaxed">{currentQuestion.question}</p>

        {/* Options — hide until audio finishes for listening parts */}
        <div className={"space-y-3" + (isListeningPart && !audioRevealed ? ' hidden' : '')}>
          {currentQuestion.options.map((opt, i) => {
            const isCorrect = opt.isCorrect;
            const isSelected = selectedAnswer === i;
            let bg = 'bg-dark-card hover:bg-dark-border border-transparent';
            if (showExplanation) {
              if (isCorrect) bg = 'bg-green-900/40 border-green-500';
              else if (isSelected && !isCorrect) bg = 'bg-red-900/40 border-red-500';
            }
            // Part 1 options only have "(A)" etc — get full text from audioScript
            let displayText = opt.text;
            if (currentQuestion.part === 1 && currentQuestion.audioScript) {
              const lines = currentQuestion.audioScript.split('\n');
              const match = lines.find(l => l.startsWith(opt.text));
              if (match) displayText = match;
            }
            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={showExplanation}
                className={`w-full text-left px-4 py-3 rounded-xl border ${bg} transition-colors`}
              >
                {displayText}
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
