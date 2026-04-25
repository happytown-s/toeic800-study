import { useMemo } from 'react';
import type { PageName } from '../core/types';
import { parts } from '../data/config';

interface Props {
  results: { questionId: number; correct: boolean; part: number; category: string; timestamp: number }[];
  examScores: { totalQuestions: number; correctCount: number; date: string; timeSpent: number }[];
  onNavigate: (page: PageName) => void;
  onClear: () => void;
}

export default function ExamHistoryPage({ results, examScores, onNavigate, onClear }: Props) {
  const stats = useMemo(() => {
    const total = results.length;
    const correct = results.filter(r => r.correct).length;
    const accuracy = total > 0 ? correct / total : 0;

    const byPart = parts.map(p => {
      const pr = results.filter(r => r.part === p.part);
      const c = pr.filter(r => r.correct).length;
      return { part: p, total: pr.length, correct: c, accuracy: pr.length > 0 ? c / pr.length : 0 };
    });

    let currentStreak = 0;
    for (const r of [...results].reverse()) {
      if (r.correct) currentStreak++;
      else break;
    }

    return { total, correct, accuracy, byPart, currentStreak };
  }, [results]);

  const estimatedScore = stats.total > 0 ? Math.round(225 + stats.accuracy * 225) : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => onNavigate('home')} className="text-dark-muted hover:text-dark-text">← Back</button>
        <h2 className="text-xl font-bold text-dark-text">📊 Progress & History</h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border text-center">
          <div className="text-2xl font-bold text-gold">{stats.total}</div>
          <div className="text-xs text-dark-muted">Total</div>
        </div>
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border text-center">
          <div className="text-2xl font-bold text-green-400">{stats.correct}</div>
          <div className="text-xs text-dark-muted">Correct</div>
        </div>
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border text-center">
          <div className="text-2xl font-bold text-gold-dark">{stats.total > 0 ? Math.round(stats.accuracy * 100) : 0}%</div>
          <div className="text-xs text-dark-muted">Accuracy</div>
        </div>
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border text-center">
          <div className="text-2xl font-bold text-gold-light">{stats.currentStreak}</div>
          <div className="text-xs text-dark-muted">Streak</div>
        </div>
      </div>

      {/* Estimated Score */}
      <div className="bg-dark-surface rounded-xl p-6 border border-dark-border">
        <h3 className="text-sm font-semibold text-dark-muted mb-2">Estimated TOEIC Reading Score</h3>
        <div className="text-4xl font-bold text-gold">{stats.total > 0 ? estimatedScore : '---'}</div>
        <p className="text-xs text-dark-muted mt-1">Range: 225-495</p>
        {stats.total >= 10 && (
          <p className="text-sm mt-2">
            {stats.accuracy >= 0.9
              ? 'Excellent! You are consistently performing at 800+ level.'
              : stats.accuracy >= 0.75
                ? 'Good work! Focus on weak parts to reach 800+.'
                : 'Keep practicing. Review explanations for missed questions.'}
          </p>
        )}
      </div>

      {/* Part Breakdown */}
      <div className="bg-dark-surface rounded-xl p-6 border border-dark-border">
        <h3 className="text-sm font-semibold text-dark-muted mb-4">Part Breakdown</h3>
        <div className="space-y-3">
          {stats.byPart.map(({ part, total, correct, accuracy }) => (
            <div key={part.part}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">{part.icon} Part {part.part}: {part.labelJa}</span>
                <span className="text-xs text-dark-muted">
                  {total > 0 ? `${correct}/${total} (${Math.round(accuracy * 100)}%)` : 'No data'}
                </span>
              </div>
              {total > 0 && (
                <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      accuracy >= 0.8 ? 'bg-green-500' : accuracy >= 0.6 ? 'bg-gold' : 'bg-red-400'
                    }`}
                    style={{ width: `${accuracy * 100}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Exam History */}
      {examScores.length > 0 && (
        <div className="bg-dark-surface rounded-xl p-6 border border-dark-border">
          <h3 className="text-sm font-semibold text-dark-muted mb-4">Exam History</h3>
          <div className="space-y-2">
            {examScores.slice().reverse().slice(0, 10).map((exam, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-dark-border last:border-0">
                <span className="text-sm text-dark-muted">{new Date(exam.date).toLocaleDateString()}</span>
                <span className={`text-sm font-semibold ${
                  exam.correctCount / exam.totalQuestions >= 0.8 ? 'text-green-400' : 'text-gold'
                }`}>
                  {exam.correctCount}/{exam.totalQuestions} ({Math.round(exam.correctCount / exam.totalQuestions * 100)}%)
                </span>
                <span className="text-xs text-dark-muted">{exam.timeSpent}s</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Clear */}
      {results.length > 0 && (
        <div className="text-center">
          <button
            onClick={onClear}
            className="px-4 py-2 text-sm text-dark-muted hover:text-red-400 transition-colors"
          >
            Clear All Progress Data
          </button>
        </div>
      )}
    </div>
  );
}
