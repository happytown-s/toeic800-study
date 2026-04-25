import { useState, useMemo, useCallback } from 'react';
import type { PageName, Term, Idiom } from '../core/types';
import { terms } from '../data/terms';
import { idioms } from '../data/idioms';

interface Props {
  onNavigate: (page: PageName) => void;
  initialTab?: 'vocab' | 'idioms';
}

type Tab = 'vocab' | 'idioms';

const termCategories = ['business', 'finance', 'it', 'hr', 'marketing', 'legal', 'general'] as const;
const termCategoryLabels: Record<string, string> = {
  business: 'Business',
  finance: 'Finance',
  it: 'IT',
  hr: 'HR',
  marketing: 'Marketing',
  legal: 'Legal',
  general: 'General',
};

const idiomCategories = ['business', 'general', 'time', 'legal', 'negotiation', 'hr', 'it'] as const;
const idiomCategoryLabels: Record<string, string> = {
  business: 'Business',
  general: 'General',
  time: 'Time',
  legal: 'Legal',
  negotiation: 'Negotiation',
  hr: 'HR',
  it: 'IT',
};

const difficultyLabels: Record<string, string> = {
  essential: 'Essential (600-700)',
  intermediate: 'Intermediate (700-800)',
  advanced: 'Advanced (800-900)',
};

export default function TermsPage({ onNavigate }: Props) {
  const [tab, setTab] = useState<Tab>(initialTab || 'vocab');
  const [search, setSearch] = useState('');
  const [partFilter, setPartFilter] = useState<number | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
  const [expandedWord, setExpandedWord] = useState<string | null>(null);

  const partsInTerms = useMemo(() => {
    const s = new Set(terms.filter(t => t.part).map(t => t.part!));
    return [...s].sort();
  }, []);

  const filteredTerms = useMemo(() => {
    let t = terms;
    if (partFilter !== null) t = t.filter(w => w.part === partFilter);
    if (categoryFilter) t = t.filter(w => w.category === categoryFilter);
    if (difficultyFilter) t = t.filter(w => w.difficulty === difficultyFilter);
    if (search) {
      const s = search.toLowerCase();
      t = t.filter(w =>
        w.word.toLowerCase().includes(s) ||
        w.meaning.includes(s)
      );
    }
    return t;
  }, [search, partFilter, categoryFilter, difficultyFilter]);

  const filteredIdioms = useMemo(() => {
    let i = idioms;
    if (categoryFilter) i = i.filter(id => id.category === categoryFilter);
    if (difficultyFilter) i = i.filter(id => id.difficulty === difficultyFilter);
    if (search) {
      const s = search.toLowerCase();
      i = i.filter(id =>
        id.idiom.toLowerCase().includes(s) ||
        id.meaning.includes(s)
      );
    }
    return i;
  }, [search, categoryFilter, difficultyFilter]);

  const handleTTS = useCallback((word: string) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(word);
      u.lang = 'en-US';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  }, []);

  const switchTab = useCallback((newTab: Tab) => {
    setTab(newTab);
    setPartFilter(null);
    setCategoryFilter(null);
    setDifficultyFilter(null);
    setSearch('');
    setExpandedWord(null);
  }, []);

  const difficultyColors: Record<string, string> = {
    essential: 'text-green-400',
    intermediate: 'text-yellow-400',
    advanced: 'text-red-400',
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={() => onNavigate('home')} className="text-dark-muted hover:text-dark-text">← Back</button>
        <h2 className="text-xl font-bold text-dark-text">📝 Vocabulary & Terms</h2>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-2">
        <button
          onClick={() => switchTab('vocab')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            tab === 'vocab' ? 'bg-gold text-dark-bg' : 'bg-dark-surface text-dark-muted hover:text-dark-text border border-dark-border'
          }`}
        >
          📖 単語 ({terms.length})
        </button>
        <button
          onClick={() => switchTab('idioms')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            tab === 'idioms' ? 'bg-gold text-dark-bg' : 'bg-dark-surface text-dark-muted hover:text-dark-text border border-dark-border'
          }`}
        >
          💬 イディオム ({idioms.length})
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder={tab === 'vocab' ? 'Search terms...' : 'Search idioms...'}
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-xl text-dark-text placeholder-dark-muted focus:outline-none focus:border-gold"
      />

      {/* Part filter (vocab only) */}
      {tab === 'vocab' && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setPartFilter(null)}
            className={`px-3 py-1 rounded-lg text-xs ${partFilter === null ? 'bg-gold text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
          >
            All Parts
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
      )}

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setCategoryFilter(null)}
          className={`px-3 py-1 rounded-lg text-xs ${categoryFilter === null ? 'bg-gold/80 text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
        >
          All Categories
        </button>
        {(tab === 'vocab' ? termCategories : idiomCategories).map(c => {
          const count = tab === 'vocab'
            ? terms.filter(t => t.category === c).length
            : idioms.filter(id => id.category === c).length;
          return (
            <button
              key={c}
              onClick={() => setCategoryFilter(c)}
              className={`px-3 py-1 rounded-lg text-xs ${categoryFilter === c ? 'bg-gold/80 text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
            >
              {(tab === 'vocab' ? termCategoryLabels : idiomCategoryLabels)[c]} ({count})
            </button>
          );
        })}
      </div>

      {/* Difficulty filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setDifficultyFilter(null)}
          className={`px-3 py-1 rounded-lg text-xs ${difficultyFilter === null ? 'bg-gold/80 text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
        >
          All Levels
        </button>
        {(['essential', 'intermediate', 'advanced'] as const).map(d => {
          const count = tab === 'vocab'
            ? terms.filter(t => t.difficulty === d).length
            : idioms.filter(id => id.difficulty === d).length;
          return (
            <button
              key={d}
              onClick={() => setDifficultyFilter(d)}
              className={`px-3 py-1 rounded-lg text-xs ${difficultyFilter === d ? 'bg-gold/80 text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
            >
              {difficultyLabels[d]} ({count})
            </button>
          );
        })}
      </div>

      {/* Count */}
      <p className="text-sm text-dark-muted">
        {tab === 'vocab' ? filteredTerms.length : filteredIdioms.length}{' '}
        {tab === 'vocab' ? 'terms' : 'idioms'}
      </p>

      {/* Terms list */}
      {tab === 'vocab' && (
        <div className="space-y-2">
          {filteredTerms.map(term => {
            const isExpanded = expandedWord === term.word;
            return (
              <div key={term.word} className="bg-dark-surface rounded-xl border border-dark-border overflow-hidden">
                <button
                  onClick={() => setExpandedWord(isExpanded ? null : term.word)}
                  className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-dark-card transition-colors"
                >
                  <div className="flex items-center gap-2 flex-wrap">
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
                    {term.category && (
                      <span className="text-xs text-dark-muted bg-dark-card px-2 py-0.5 rounded">
                        {termCategoryLabels[term.category]}
                      </span>
                    )}
                    {term.difficulty && (
                      <span className={`text-xs px-2 py-0.5 rounded ${difficultyColors[term.difficulty]}`}>
                        {term.difficulty}
                      </span>
                    )}
                  </div>
                  <span className="text-dark-muted text-sm ml-2">{isExpanded ? '▲' : '▼'}</span>
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
          {filteredTerms.length === 0 && <p className="text-center text-dark-muted py-8">No terms found.</p>}
        </div>
      )}

      {/* Idioms list */}
      {tab === 'idioms' && (
        <div className="space-y-2">
          {filteredIdioms.map(idiom => {
            const isExpanded = expandedWord === idiom.idiom;
            return (
              <div key={idiom.id} className="bg-dark-surface rounded-xl border border-dark-border overflow-hidden">
                <button
                  onClick={() => setExpandedWord(isExpanded ? null : idiom.idiom)}
                  className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-dark-card transition-colors"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleTTS(idiom.idiom); }}
                      className="text-gold hover:text-gold-dark text-sm"
                      title="Pronounce"
                    >
                      🔊
                    </button>
                    <span className="font-semibold text-dark-text">{idiom.idiom}</span>
                    <span className="text-xs text-dark-muted bg-dark-card px-2 py-0.5 rounded">
                      {idiomCategoryLabels[idiom.category] || idiom.category}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded ${difficultyColors[idiom.difficulty]}`}>
                      {idiom.difficulty}
                    </span>
                  </div>
                  <span className="text-dark-muted text-sm ml-2">{isExpanded ? '▲' : '▼'}</span>
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 space-y-2">
                    <p className="text-sm text-dark-text">{idiom.meaning}</p>
                    <p className="text-sm italic text-dark-muted">"{idiom.example}"</p>
                  </div>
                )}
              </div>
            );
          })}
          {filteredIdioms.length === 0 && <p className="text-center text-dark-muted py-8">No idioms found.</p>}
        </div>
      )}
    </div>
  );
}
