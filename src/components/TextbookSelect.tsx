import type { PageName } from '../core/types';
import textbookData from '../data/textbook.json';

interface TextbookTopic {
  topicId: string;
  title: string;
  summary: string;
  keywords: string[];
  illustration: string;
}

interface Props {
  onNavigate: (page: string) => void;
  onSelectTopic: (topicId: string) => void;
}

const topics: TextbookTopic[] = textbookData;

export default function TextbookSelect({ onNavigate, onSelectTopic }: Props) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-dark-text">📖 Textbook</h2>
          <p className="text-sm text-dark-muted mt-1">
            TOEIC攻略の要点をトピック別に学習
          </p>
        </div>
        <button
          onClick={() => onNavigate('home')}
          className="text-dark-muted hover:text-dark-text transition-colors text-sm"
        >
          ← Home
        </button>
      </div>

      {/* Topic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <button
            key={topic.topicId}
            onClick={() => onSelectTopic(topic.topicId)}
            className="bg-dark-surface rounded-xl border border-dark-border text-left hover:border-gold/50 transition-all group"
          >
            {/* Illustration area (placeholder) */}
            {topic.illustration ? (
              <div className="w-full h-36 rounded-t-xl overflow-hidden bg-dark-card">
                <img
                  src={topic.illustration}
                  alt={topic.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="w-full h-20 rounded-t-xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                <span className="text-3xl opacity-40">📚</span>
              </div>
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold text-dark-text group-hover:text-gold transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-dark-muted mt-1 line-clamp-2">
                {topic.summary}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {topic.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
