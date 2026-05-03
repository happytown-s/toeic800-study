import textbookData from '../data/textbook.json';

interface TextbookTopic {
  topicId: string;
  title: string;
  summary: string;
  howTo: { step: string; detail: string }[];
  keywords: string[];
  examTip: string;
  illustration: string;
}

interface Props {
  onNavigate: (page: string) => void;
  topicId: string;
}

const topics: TextbookTopic[] = textbookData;

export default function TextbookView({ onNavigate, topicId }: Props) {
  const topic = topics.find((t) => t.topicId === topicId);

  if (!topic) {
    return (
      <div className="text-center py-12">
        <p className="text-dark-muted">トピックが見つかりません。</p>
        <button
          onClick={() => onNavigate('textbook')}
          className="mt-4 text-gold hover:underline"
        >
          ← Textbook一覧に戻る
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Back button */}
      <button
        onClick={() => onNavigate('textbook')}
        className="text-dark-muted hover:text-dark-text transition-colors text-sm inline-flex items-center gap-1"
      >
        <span>←</span> Textbook一覧
      </button>

      {/* Illustration */}
      {topic.illustration ? (
        <div className="w-full rounded-2xl overflow-hidden border border-dark-border bg-dark-card">
          <img
            src={topic.illustration}
            alt={topic.title}
            className="w-full h-auto"
          />
        </div>
      ) : (
        <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 border border-dark-border flex items-center justify-center">
          <span className="text-5xl opacity-30">📚</span>
        </div>
      )}

      {/* Title & Summary */}
      <div>
        <h2 className="text-2xl font-bold text-dark-text">{topic.title}</h2>
        <p className="text-dark-muted mt-2 leading-relaxed">{topic.summary}</p>
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-2">
        {topic.keywords.map((kw) => (
          <span
            key={kw}
            className="text-sm px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
          >
            #{kw}
          </span>
        ))}
      </div>

      {/* HowTo Steps */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-dark-text">📋 解き方の手順</h3>
        <div className="space-y-3">
          {topic.howTo.map((item, idx) => (
            <div
              key={idx}
              className="bg-dark-surface rounded-xl border border-dark-border p-4"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-dark-bg text-sm font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-dark-text">{item.step}</div>
                  <p className="text-sm text-dark-muted mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exam Tip */}
      <div className="bg-gold/10 border border-gold/30 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl flex-shrink-0">💡</span>
          <div>
            <h3 className="text-sm font-bold text-gold uppercase tracking-wide">
              Exam Tip
            </h3>
            <p className="text-dark-text mt-1 leading-relaxed">
              {topic.examTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
