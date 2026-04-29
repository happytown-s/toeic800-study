import { useState, useMemo, useCallback } from 'react';
import type { PageName } from '../core/types';
import { questions } from '../data/questions';
import { getBookmarks, toggleBookmark } from '../utils/storage';

interface Props {
  onNavigate: (page: PageName) => void;
}

export default function BookmarksPage({ onNavigate }: Props) {
  const [, forceUpdate] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const bookmarkIds = getBookmarks();

  const bookmarkedQuestions = useMemo(() => {
    return bookmarkIds
      .map(id => questions.find(q => q.id === id))
      .filter((q): q is NonNullable<typeof q> => q !== undefined)
      .sort((a, b) => a.part - b.part || a.id - b.id);
  }, [bookmarkIds.join(',')]);

  const handleRemove = useCallback((questionId: number) => {
    toggleBookmark(questionId);
    forceUpdate(n => n + 1);
  }, []);

  if (bookmarkedQuestions.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('home')} className="text-dark-muted hover:text-dark-text">← Back</button>
          <h2 className="text-xl font-bold text-dark-text">⭐️ ブックマーク</h2>
        </div>
        <div className="bg-dark-surface rounded-xl p-8 border border-dark-border text-center">
          <p className="text-dark-muted text-lg mb-2">まだブックマークされた問題がありません</p>
          <p className="text-dark-muted text-sm">問題画面の⭐️ボタンでブックマークできます</p>
          <button
            onClick={() => onNavigate('home')}
            className="mt-4 px-6 py-2 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors"
          >
            クイズを始める
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('home')} className="text-dark-muted hover:text-dark-text">← Back</button>
          <h2 className="text-xl font-bold text-dark-text">⭐️ ブックマーク</h2>
          <span className="text-sm text-dark-muted">({bookmarkedQuestions.length}問)</span>
        </div>
      </div>

      <div className="space-y-3">
        {bookmarkedQuestions.map(q => {
          const isExpanded = expandedId === q.id;
          const truncatedQuestion = q.question.length > 80 ? q.question.slice(0, 80) + '...' : q.question;
          return (
            <div key={q.id} className="bg-dark-surface rounded-xl border border-dark-border overflow-hidden">
              <div className="px-4 py-3 space-y-2">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-dark-muted bg-dark-card px-2 py-0.5 rounded">
                      Part {q.part}
                    </span>
                    <span className="text-xs text-gold bg-gold/10 px-2 py-0.5 rounded">
                      {q.categoryLabel}
                    </span>
                  </div>
                  <button
                    onClick={() => handleRemove(q.id)}
                    className="text-dark-muted hover:text-red-400 transition-colors text-sm"
                    title="ブックマーク解除"
                  >
                    ☆
                  </button>
                </div>

                {/* Question text */}
                <p className="text-sm text-dark-text">{truncatedQuestion}</p>

                {/* Key Vocabulary */}
                {q.keyVocabulary && q.keyVocabulary.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {q.keyVocabulary.map((v, i) => (
                      <button
                        key={i}
                        onClick={() => onNavigate('vocab')}
                        className="text-xs px-2 py-0.5 bg-dark-card border border-dark-border rounded-lg text-gold hover:bg-gold/10 transition-colors"
                      >
                        {v.word}
                      </button>
                    ))}
                  </div>
                )}

                {/* Explanation toggle */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : q.id)}
                  className="text-xs text-dark-muted hover:text-dark-text transition-colors"
                >
                  {isExpanded ? '▲ 解説を閉じる' : '▼ 解説を表示'}
                </button>

                {/* Expanded explanation */}
                {isExpanded && (
                  <div className="bg-dark-card rounded-lg p-3 border border-gold/30 text-sm text-dark-text space-y-2">
                    <p>{q.explanation}</p>
                    {q.keyVocabulary && q.keyVocabulary.length > 0 && (
                      <div className="text-xs text-dark-muted space-y-1">
                        <span className="font-semibold text-gold-dark">Key Vocabulary:</span>
                        <ul className="list-disc list-inside space-y-0.5">
                          {q.keyVocabulary.map((v, i) => (
                            <li key={i}><span className="text-dark-text">{v.word}</span> — {v.meaning}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
