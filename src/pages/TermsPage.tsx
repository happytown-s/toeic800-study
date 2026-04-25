import { useState, useMemo, useCallback } from 'react';
import type { PageName } from '../core/types';
import { terms } from '../data/terms';

interface Props {
  onNavigate: (page: PageName) => void;
}

export default function TermsPage({ onNavigate }: Props) {
  const [search, setSearch] = useState('');
  const [partFilter, setPartFilter] = useState<number | null>(null);
  const [expandedWord, setExpandedWord] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let t = terms;
    if (partFilter !== null) t = t.filter(w => w.part === partFilter);
    if (search) {
      const s = search.toLowerCase();
      t = t.filter(w =>
        w.word.toLowerCase().includes(s) ||
        w.meaning.includes(s)
      );
    }
    return t;
  }, [search, partFilter]);

  const partsInTerms = useMemo(() => {
    const s = new Set(terms.filter(t => t.part).map(t => t.part!));
    return [...s].sort();
  }, []);

  const handleTTS = useCallback((word: string) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(word);
      u.lang = 'en-US';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={() => onNavigate('home')} className="text-dark-muted hover:text-dark-text">← Back</button>
        <h2 className="text-xl font-bold text-dark-text">📝 Vocabulary & Terms</h2>
      </div>

      <input
        type="text"
        placeholder="Search terms..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-xl text-dark-text placeholder-dark-muted focus:outline-none focus:border-gold"
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setPartFilter(null)}
          className={`px-3 py-1 rounded-lg text-xs ${partFilter === null ? 'bg-gold text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
        >
          All ({terms.length})
        </button>
        {partsInTerms.map(p => (
          <button
            key={p}
            onClick={() => setPartFilter(p)}
            className={`px-3 py-1 rounded-lg text-xs ${partFilter === p ? 'bg-gold text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
          >
            Part {p} ({terms.filter(t => t.part === p).length})
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-muted">{filtered.length} terms</p>

      <div className="space-y-2">
        {filtered.map(term => {
          const isExpanded = expandedWord === term.word;
          return (
            <div key={term.word} className="bg-dark-surface rounded-xl border border-dark-border overflow-hidden">
              <button
                onClick={() => setExpandedWord(isExpanded ? null : term.word)}
                className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-dark-card transition-colors"
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleTTS(term.word); }}
                    className="text-gold hover:text-gold-dark text-sm"
                    title="Pronounce"
                  >
                    🔊
                  </button>
                  <span className="font-semibold text-dark-text">{term.word}</span>
                  {term.part && (
                    <span className="text-xs text-dark-muted bg-dark-card px-2 py-0.5 rounded">P{term.part}</span>
                  )}
                </div>
                <span className="text-dark-muted text-sm">{isExpanded ? '▲' : '▼'}</span>
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-sm text-dark-text">{term.meaning}</p>
                  {term.example && (
                    <p className="text-sm italic text-dark-muted">"{term.example}"</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && <p className="text-center text-dark-muted py-8">No terms found.</p>}
      </div>
    </div>
  );
}
