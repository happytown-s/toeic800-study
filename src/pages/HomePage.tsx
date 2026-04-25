import type { PageName } from '../core/types';
import { parts } from '../data/config';

interface Props {
  onNavigate: (page: PageName) => void;
  examScores: { date: string; correctCount: number; totalQuestions: number }[];
  streak: number;
  accuracy: number;
  wrongCount: number;
}

export default function HomePage({ onNavigate, examScores, streak, accuracy, wrongCount }: Props) {
  const listeningParts = parts.filter(p => p.section === 'listening');
  const readingParts = parts.filter(p => p.section === 'reading');
  const latestExam = examScores.length > 0 ? examScores[examScores.length - 1] : null;

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="bg-gradient-to-br from-dark-surface to-dark-card rounded-2xl p-6 border border-dark-border">
        <h1 className="text-3xl font-bold text-gold mb-1">TOEIC 800+</h1>
        <p className="text-dark-muted">Study for the TOEIC L&R Test</p>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border text-center">
          <div className="text-2xl font-bold text-gold">{accuracy > 0 ? Math.round(accuracy * 100) : 0}%</div>
          <div className="text-xs text-dark-muted">Accuracy</div>
        </div>
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border text-center">
          <div className="text-2xl font-bold text-green-400">{streak}</div>
          <div className="text-xs text-dark-muted">Streak</div>
        </div>
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border text-center">
          <div className="text-2xl font-bold text-red-400">{wrongCount}</div>
          <div className="text-xs text-dark-muted">To Review</div>
        </div>
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border text-center">
          <div className="text-2xl font-bold text-blue-400">{examScores.length}</div>
          <div className="text-xs text-dark-muted">Exams</div>
        </div>
      </div>

      {/* Latest exam score */}
      {latestExam && (
        <div className="bg-dark-surface rounded-xl p-4 border border-dark-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-dark-muted">Latest Exam</span>
            <span className={`text-sm font-bold ${latestExam.correctCount / latestExam.totalQuestions >= 0.8 ? 'text-green-400' : 'text-gold'}`}>
              {latestExam.correctCount}/{latestExam.totalQuestions}
            </span>
          </div>
          <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden mt-2">
            <div
              className="h-full rounded-full transition-all bg-gold"
              style={{ width: `${(latestExam.correctCount / latestExam.totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Listening Section */}
      <div>
        <h2 className="text-lg font-semibold text-dark-text mb-3 flex items-center gap-2">
          🎧 Listening (Parts 1-4)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {listeningParts.map(part => (
            <button
              key={part.part}
              onClick={() => onNavigate('quiz-setup')}
              className="bg-dark-surface rounded-xl p-4 border border-dark-border text-left hover:border-gold/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{part.icon}</span>
                <span className="font-semibold text-dark-text">Part {part.part}</span>
              </div>
              <div className="text-sm text-dark-muted">{part.label}</div>
              <div className="text-xs text-dark-muted mt-1">{part.labelJa} · {part.questionsPerTest} Qs</div>
            </button>
          ))}
        </div>
      </div>

      {/* Reading Section */}
      <div>
        <h2 className="text-lg font-semibold text-dark-text mb-3 flex items-center gap-2">
          📝 Reading (Parts 5-7)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {readingParts.map(part => (
            <button
              key={part.part}
              onClick={() => onNavigate('quiz-setup')}
              className="bg-dark-surface rounded-xl p-4 border border-dark-border text-left hover:border-gold/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{part.icon}</span>
                <span className="font-semibold text-dark-text">Part {part.part}</span>
              </div>
              <div className="text-sm text-dark-muted">{part.label}</div>
              <div className="text-xs text-dark-muted mt-1">{part.labelJa} · {part.questionsPerTest} Qs</div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => onNavigate('quiz-setup')}
          className="bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl p-4 transition-colors text-center"
        >
          📋 Quick Quiz
        </button>
        <button
          onClick={() => onNavigate('vocab')}
          className="bg-dark-surface hover:bg-dark-card border border-dark-border rounded-xl p-4 transition-colors text-center"
        >
          📖 Vocabulary
        </button>
        <button
          onClick={() => onNavigate('progress')}
          className="bg-dark-surface hover:bg-dark-card border border-dark-border rounded-xl p-4 transition-colors text-center"
        >
          📊 History
        </button>
      </div>
    </div>
  );
}
