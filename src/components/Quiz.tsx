import { useState, useCallback } from 'react';
import type { Question, QuizResult, QuizMode } from '../types';
import examData from '../data/toeic800-exam.json';

const categories = [...new Set(examData.map((q: Question) => q.category))];

export default function Quiz({ results, addResult }: { results: QuizResult[]; addResult: (r: QuizResult) => void }) {
  const [mode, setMode] = useState<QuizMode>('drill');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [quizActive, setQuizActive] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const currentQuestion: Question = questions[currentIndex] || { id: '', category: '', question: '', options: [], explanation: '' };

  const startQuiz = useCallback(() => {
    const filtered = selectedCategory === 'All' ? examData : examData.filter((q: Question) => q.category === selectedCategory);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    let selected: Question[];
    if (mode === 'drill') {
      selected = shuffled.slice(0, 20);
    } else if (mode === 'exam') {
      selected = shuffled.slice(0, 50);
    } else {
      // review: wrong answers
      const wrongIds = new Set(results.filter(r => !r.correct).map(r => r.questionId));
      const reviewQs = shuffled.filter((q: Question) => wrongIds.has(q.id));
      selected = reviewQs.length > 0 ? reviewQs.slice(0, 20) : shuffled.slice(0, 20);
    }
    setQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setQuizActive(true);
  }, [selectedCategory, mode, results]);

  const handleAnswer = useCallback((optionIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    const isCorrect = currentQuestion.options[optionIndex].correct;
    setScore(prev => ({ correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
    addResult({
      questionId: currentQuestion.id,
      correct: isCorrect,
      category: currentQuestion.category,
      timestamp: Date.now(),
    });
  }, [selectedAnswer, currentQuestion, addResult]);

  const nextQuestion = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  }, [currentIndex, questions.length]);

  const finishQuiz = useCallback(() => {
    setQuizActive(false);
  }, []);

  if (!quizActive) {
    return (
      <div className="space-y-6">
        <div className="bg-dark-surface rounded-xl p-6 border border-dark-border">
          <h2 className="text-lg font-semibold text-gold mb-4">Quiz Setup</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-dark-muted mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-3 py-1.5 rounded-lg text-sm ${selectedCategory === 'All' ? 'bg-gold text-dark-bg' : 'bg-dark-card text-dark-text'}`}
                >
                  All ({examData.length})
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-sm ${selectedCategory === cat ? 'bg-gold text-dark-bg' : 'bg-dark-card text-dark-text'}`}
                  >
                    {cat} ({examData.filter((q: Question) => q.category === cat).length})
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-dark-muted mb-2">Mode</label>
              <div className="flex gap-2">
                {([
                  { key: 'drill' as QuizMode, label: 'Drill (20 Qs)', desc: 'Quick practice' },
                  { key: 'exam' as QuizMode, label: 'Exam (50 Qs)', desc: 'Full simulation' },
                  { key: 'review' as QuizMode, label: 'Review (20 Qs)', desc: 'Wrong answers' },
                ]).map(m => (
                  <button
                    key={m.key}
                    onClick={() => setMode(m.key)}
                    className={`px-4 py-2 rounded-lg text-sm ${mode === m.key ? 'bg-gold-dark text-white' : 'bg-dark-card text-dark-text'}`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={startQuiz}
            className="mt-6 w-full py-3 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors"
          >
            Start Quiz ({(() => {
              const filtered = selectedCategory === 'All' ? examData : examData.filter((q: Question) => q.category === selectedCategory);
              const count = mode === 'exam' ? Math.min(50, filtered.length) : Math.min(20, filtered.length);
              return count;
            })()} questions)
          </button>
        </div>

        {/* Category accuracy */}
        <div className="bg-dark-surface rounded-xl p-6 border border-dark-border">
          <h3 className="text-sm font-semibold text-dark-muted mb-3">Category Performance</h3>
          <div className="space-y-2">
            {categories.map(cat => {
              const catResults = results.filter(r => r.category === cat);
              const correct = catResults.filter(r => r.correct).length;
              const total = catResults.length;
              if (total === 0) return null;
              return (
                <div key={cat} className="flex items-center justify-between">
                  <span className="text-sm">{cat}</span>
                  <span className={`text-sm font-medium ${correct / total >= 0.8 ? 'text-green-400' : correct / total >= 0.6 ? 'text-gold' : 'text-red-400'}`}>
                    {correct}/{total} ({Math.round(correct / total * 100)}%)
                  </span>
                </div>
              );
            })}
            {results.length === 0 && <p className="text-sm text-dark-muted">No quiz results yet.</p>}
          </div>
        </div>
      </div>
    );
  }

  // Quiz in progress
  const isLastQuestion = currentIndex >= questions.length - 1;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-dark-muted">{currentQuestion.category}</span>
          <span className="text-sm text-gold">Q{currentIndex + 1}/{questions.length}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-dark-muted">Score: {score.correct}/{score.total}</span>
          {!showResult && (
            <button onClick={finishQuiz} className="text-xs text-dark-muted hover:text-dark-text">
              End Quiz
            </button>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-dark-card rounded-full overflow-hidden">
        <div
          className="h-full bg-gold rounded-full transition-all"
          style={{ width: `${((currentIndex + (showExplanation ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {!showResult ? (
        <div className="bg-dark-surface rounded-xl p-6 border border-dark-border space-y-6">
          {/* Question */}
          {currentQuestion.passage && (
            <div className="bg-dark-card rounded-lg p-4 text-sm text-dark-muted italic mb-4">
              {currentQuestion.passage}
            </div>
          )}
          <p className="text-lg leading-relaxed">{currentQuestion.question}</p>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((opt, i) => {
              const isCorrect = opt.correct;
              const isSelected = selectedAnswer === i;
              let bg = 'bg-dark-card hover:bg-dark-border';
              if (showExplanation) {
                if (isCorrect) bg = 'bg-green-900/40 border-green-500';
                else if (isSelected && !isCorrect) bg = 'bg-red-900/40 border-red-500';
              }
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={showExplanation}
                  className={`w-full text-left px-4 py-3 rounded-xl border border-transparent ${bg} transition-colors`}
                >
                  <span className="mr-2 text-dark-muted font-medium">{String.fromCharCode(65 + i)}.</span>
                  {opt.text}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-dark-card rounded-lg p-4 border border-gold/30">
              <p className="text-sm">
                <span className="font-semibold text-gold">Explanation: </span>
                <span className="text-dark-text">{currentQuestion.explanation}</span>
              </p>
            </div>
          )}

          {/* Next / Finish button */}
          {showExplanation && (
            <button
              onClick={nextQuestion}
              className="w-full py-3 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors"
            >
              {isLastQuestion ? 'View Results' : 'Next Question'}
            </button>
          )}
        </div>
      ) : (
        /* Quiz finished */
        <div className="bg-dark-surface rounded-xl p-8 border border-dark-border text-center space-y-4">
          <div className="text-5xl font-bold text-gold">
            {score.correct}/{score.total}
          </div>
          <p className="text-lg">
            {score.correct / score.total >= 0.9
              ? 'Outstanding! You are well on track for 800+!'
              : score.correct / score.total >= 0.75
                ? 'Good progress! Keep pushing for higher accuracy.'
                : score.correct / score.total >= 0.6
                  ? 'Decent start. Review the explanations carefully.'
                  : 'Keep practicing! Focus on your weak areas.'}
          </p>
          <p className="text-sm text-dark-muted">
            Estimated TOEIC Reading score: {Math.round(225 + (score.correct / score.total) * 200)}
          </p>
          <div className="flex gap-3 justify-center pt-4">
            <button
              onClick={() => setQuizActive(false)}
              className="px-6 py-3 bg-dark-card hover:bg-dark-border text-dark-text rounded-xl transition-colors"
            >
              Back to Setup
            </button>
            <button
              onClick={startQuiz}
              className="px-6 py-3 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
