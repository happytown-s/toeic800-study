import { useState, useCallback, useEffect, useMemo } from 'react';
import type { PageName } from '../core/types';
import { parts } from '../data/config';
import { questions } from '../data/questions';

interface Props {
  onNavigate: (page: PageName) => void;
  selectedPart: number | null;
  questionCount: number;
  onSelectedPartChange: (part: number | null) => void;
  onQuestionCountChange: (count: number) => void;
}

export default function QuizSetupPage({
  onNavigate,
  selectedPart,
  questionCount,
  onSelectedPartChange,
  onQuestionCountChange,
}: Props) {
  const [isFullExam, setIsFullExam] = useState(false);

  const partQuestions = useMemo(() => {
    if (!selectedPart) return questions;
    return questions.filter(q => q.part === selectedPart);
  }, [selectedPart]);

  const maxQuestions = partQuestions.length;

  useEffect(() => {
    if (questionCount > maxQuestions) {
      onQuestionCountChange(maxQuestions);
      setIsFullExam(false);
    }
  }, [maxQuestions, onQuestionCountChange, questionCount]);

  const startQuiz = useCallback(() => {
    onNavigate('quiz-play');
  }, [onNavigate]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('home')}
          className="text-dark-muted hover:text-dark-text transition-colors"
        >
          ← Back
        </button>
        <h2 className="text-xl font-bold text-dark-text">Quiz Setup</h2>
      </div>

      {/* Part Selection */}
      <div className="bg-dark-surface rounded-xl p-6 border border-dark-border space-y-4">
        <h3 className="text-sm font-semibold text-dark-muted">Select Part</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onSelectedPartChange(null)}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
              selectedPart === null
                ? 'bg-gold text-dark-bg font-semibold'
                : 'bg-dark-card text-dark-text hover:bg-dark-border'
            }`}
          >
            All Parts ({questions.length})
          </button>
          {parts.map(p => {
            const count = questions.filter(q => q.part === p.part).length;
            return (
              <button
                key={p.part}
                onClick={() => {
                  onSelectedPartChange(p.part);
                  if (questionCount > count) {
                    onQuestionCountChange(count);
                    setIsFullExam(false);
                  }
                }}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedPart === p.part
                    ? 'bg-gold text-dark-bg font-semibold'
                    : 'bg-dark-card text-dark-text hover:bg-dark-border'
                }`}
              >
                {p.icon} Part {p.part} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Mode Selection */}
      <div className="bg-dark-surface rounded-xl p-6 border border-dark-border space-y-4">
        <h3 className="text-sm font-semibold text-dark-muted">Number of Questions</h3>
        <div className="flex flex-wrap gap-2">
          {[5, 10, 20, 35].map(n => (
            <button
              key={n}
              onClick={() => { onQuestionCountChange(n); setIsFullExam(false); }}
              disabled={n > maxQuestions}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                questionCount === n && !isFullExam
                  ? 'bg-gold text-dark-bg font-semibold'
                  : 'bg-dark-card text-dark-text hover:bg-dark-border'
              } ${n > maxQuestions ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {n} Questions
            </button>
          ))}
          <button
            onClick={() => { setIsFullExam(true); onQuestionCountChange(maxQuestions); }}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
              isFullExam
                ? 'bg-gold text-dark-bg font-semibold'
                : 'bg-dark-card text-dark-text hover:bg-dark-border'
            }`}
          >
            All ({maxQuestions})
          </button>
        </div>
      </div>

      {/* Start button */}
      <button
        onClick={startQuiz}
        disabled={maxQuestions === 0}
        className={`w-full py-4 font-semibold rounded-xl transition-colors text-lg ${
          maxQuestions > 0
            ? 'bg-gold hover:bg-gold-dark text-dark-bg'
            : 'bg-dark-card text-dark-muted cursor-not-allowed'
        }`}
      >
        Start Quiz ({Math.min(questionCount, maxQuestions)} questions)
      </button>
    </div>
  );
}
