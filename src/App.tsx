import { useState, useCallback, useMemo } from 'react';
import type { PageName, ExamScore } from './core/types';
import { useStorage } from './core/useStorage';

import HomePage from './pages/HomePage';
import QuizSetupPage from './pages/QuizSetupPage';
import QuizPlayPage from './pages/QuizPlayPage';
import TermsPage from './pages/TermsPage';
import ExamHistoryPage from './pages/ExamHistoryPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('home');
  const [selectedPart, _setSelectedPart] = useState<number | null>(null);
  const [questionCount, _setQuestionCount] = useState(10);

  const {
    results,
    examScores,
    recordAnswer,
    recordExamScore,
    clearHistory,
    getWrongQuestionIds,
    accuracy,
    streak,
  } = useStorage();

  const wrongCount = useMemo(() => getWrongQuestionIds().length, [getWrongQuestionIds]);

  const navigate = useCallback((page: string) => {
    setCurrentPage(page as PageName);
    window.scrollTo(0, 0);
  }, []);


  const handleQuizFinish = useCallback((score: { correct: number; total: number }) => {
    const examScore: ExamScore = {
      totalQuestions: score.total,
      correctCount: score.correct,
      date: new Date().toISOString(),
      timeSpent: 0,
      partScores: {},
      wrongIds: [],
    };
    recordExamScore(examScore);
    // Stay on result - navigate to home for simplicity
  }, [recordExamScore]);

  const tabs: { key: PageName; label: string }[] = [
    { key: 'home', label: 'Home' },
    { key: 'vocab', label: 'Vocab' },
    { key: 'progress', label: 'History' },
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <header className="bg-dark-surface border-b border-dark-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate('home')} className="text-xl font-bold text-gold">
            TOEIC 800+
          </button>
          <nav className="flex gap-1">
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => navigate(t.key)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === t.key || (t.key === 'vocab' && currentPage === 'idioms')
                    ? 'bg-gold text-dark-bg'
                    : 'text-dark-muted hover:text-dark-text hover:bg-dark-card'
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigate}
            examScores={examScores}
            streak={streak}
            accuracy={accuracy}
            wrongCount={wrongCount}
          />
        )}

        {currentPage === 'quiz-setup' && (
          <QuizSetupPage onNavigate={navigate} />
        )}

        {currentPage === 'quiz-play' && (
          <QuizPlayPage
            onNavigate={navigate}
            selectedPart={selectedPart}
            questionCount={questionCount}
            recordAnswer={recordAnswer}
            onFinish={handleQuizFinish}
          />
        )}

        {currentPage === 'vocab' && (
          <TermsPage onNavigate={navigate} />
        )}

        {currentPage === 'idioms' && (
          <TermsPage onNavigate={navigate} initialTab="idioms" />
        )}

        {currentPage === 'progress' && (
          <ExamHistoryPage
            results={results}
            examScores={examScores}
            onNavigate={navigate}
            onClear={clearHistory}
          />
        )}
      </main>
    </div>
  );
}
