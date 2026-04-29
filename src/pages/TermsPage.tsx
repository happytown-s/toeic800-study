import { useState, useMemo, useCallback } from 'react';
import type { PageName, Term, Idiom } from '../core/types';
import { terms } from '../data/terms';
import { idioms } from '../data/idioms';

interface Props {
  onNavigate: (page: PageName) => void;
  initialTab?: 'vocab' | 'idioms';
}

type Tab = 'vocab' | 'idioms';
type SortMode = 'default' | 'difficulty' | 'alpha-asc' | 'alpha-desc' | 'category' | 'part' | 'random';

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

const difficultyOrder: Record<string, number> = { essential: 0, intermediate: 1, advanced: 2 };
const difficultyLabels: Record<string, string> = {
  essential: 'Essential (600-700)',
  intermediate: 'Intermediate (700-800)',
  advanced: 'Advanced (800-900)',
};

const sortOptions: { value: SortMode; label: string; icon: string }[] = [
  { value: 'default', label: 'デフォルト', icon: '📋' },
  { value: 'difficulty', label: '頻出順', icon: '📊' },
  { value: 'alpha-asc', label: 'A→Z', icon: '🔤' },
  { value: 'alpha-desc', label: 'Z→A', icon: '🔤' },
  { value: 'category', label: 'カテゴリ別', icon: '🏷️' },
  { value: 'part', label: 'Part別', icon: '📑' },
  { value: 'random', label: 'ランダム', icon: '🎲' },
];

export default function TermsPage({ onNavigate, initialTab }: Props) {
  const [tab, setTab] = useState<Tab>(initialTab || 'vocab');
  const [search, setSearch] = useState('');
  const [sortMode, setSortMode] = useState<SortMode>('default');
  const [selectedDifficulties, setSelectedDifficulties] = useState<Set<string>>(new Set());
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [selectedParts, setSelectedParts] = useState<Set<number>>(new Set());
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [expandedWord, setExpandedWord] = useState<string | null>(null);

  // Unique parts from terms
  const partsInTerms = useMemo(() => {
    const s = new Set(terms.filter(t => t.part).map(t => t.part!));
    return [...s].sort();
  }, []);

  // Active filter count
  const activeFilterCount = useMemo(() => {
    return selectedDifficulties.size + selectedCategories.size + selectedParts.size + (search.trim() ? 1 : 0);
  }, [selectedDifficulties, selectedCategories, selectedParts, search]);

  // Toggle set helper
  const toggleSet = useCallback(<T,>(set: Set<T>, item: T) => {
    const next = new Set(set);
    if (next.has(item)) next.delete(item);
    else next.add(item);
    return next;
  }, []);

  // Random seed (stable per render cycle for random sort)
  const randomSeed = useMemo(() => Math.random(), [sortMode === 'random' ? Date.now() : 0]);

  // Sort function
  const sortItems = useCallback(<T extends Term | Idiom>(
    items: T[],
    mode: SortMode,
    getWord: (item: T) => string,
  ): T[] => {
    const sorted = [...items];
    switch (mode) {
      case 'difficulty':
        return sorted.sort((a, b) => {
          const da = (a as Term).difficulty ? difficultyOrder[(a as Term).difficulty!] ?? 99 : 99;
          const db = (b as Term).difficulty ? difficultyOrder[(b as Term).difficulty!] ?? 99 : 99;
          return da - db;
        });
      case 'alpha-asc':
        return sorted.sort((a, b) => getWord(a).localeCompare(getWord(b)));
      case 'alpha-desc':
        return sorted.sort((a, b) => getWord(b).localeCompare(getWord(a)));
      case 'category': {
        const catKey = (item: T) => (item as Term).category ?? 'zzz';
        return sorted.sort((a, b) => catKey(a).localeCompare(catKey(b)));
      }
      case 'part': {
        const partKey = (item: T) => (item as Term).part ?? 99;
        return sorted.sort((a, b) => partKey(a) - partKey(b));
      }
      case 'random':
        // Fisher-Yates with seeded-ish shuffle
        for (let i = sorted.length - 1; i > 0; i--) {
          const j = Math.floor(((i * randomSeed + 1) % 1) * (i + 1));
          [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
        }
        return sorted;
      default:
        return sorted;
    }
  }, [randomSeed]);

  // Filtered & sorted terms
  const filteredTerms = useMemo(() => {
    let t = terms;
    if (selectedParts.size > 0) t = t.filter(w => w.part != null && selectedParts.has(w.part));
    if (selectedCategories.size > 0) t = t.filter(w => w.category != null && selectedCategories.has(w.category));
    if (selectedDifficulties.size > 0) t = t.filter(w => w.difficulty != null && selectedDifficulties.has(w.difficulty));
    if (search) {
      const s = search.toLowerCase();
      t = t.filter(w =>
        w.word.toLowerCase().includes(s) ||
        w.meaning.includes(s)
      );
    }
    return sortItems(t, sortMode, (item) => item.word);
  }, [search, selectedParts, selectedCategories, selectedDifficulties, sortMode, sortItems]);

  // Filtered & sorted idioms
  const filteredIdioms = useMemo(() => {
    let i = idioms;
    if (selectedCategories.size > 0) i = i.filter(id => selectedCategories.has(id.category));
    if (selectedDifficulties.size > 0) i = i.filter(id => selectedDifficulties.has(id.difficulty));
    if (search) {
      const s = search.toLowerCase();
      i = i.filter(id =>
        id.idiom.toLowerCase().includes(s) ||
        id.meaning.includes(s)
      );
    }
    return sortItems(i, sortMode, (item) => item.idiom);
  }, [search, selectedCategories, selectedDifficulties, sortMode, sortItems]);

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
    setSearch('');
    setSortMode('default');
    setSelectedDifficulties(new Set());
    setSelectedCategories(new Set());
    setSelectedParts(new Set());
    setExpandedWord(null);
  }, []);

  const clearAllFilters = useCallback(() => {
    setSearch('');
    setSelectedDifficulties(new Set());
    setSelectedCategories(new Set());
    setSelectedParts(new Set());
    setSortMode('default');
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

      {/* Sort buttons */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-dark-muted uppercase tracking-wider">Sort</div>
        <div className="flex flex-wrap gap-1.5">
          {sortOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setSortMode(opt.value === sortMode ? 'default' : opt.value)}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                sortMode === opt.value
                  ? 'bg-gold text-dark-bg font-semibold'
                  : 'bg-dark-card text-dark-muted hover:text-dark-text border border-dark-border'
              }`}
            >
              {opt.icon} {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filter toggle */}
      <button
        onClick={() => setFiltersOpen(!filtersOpen)}
        className="w-full flex items-center justify-between px-4 py-2.5 bg-dark-surface border border-dark-border rounded-xl text-sm hover:bg-dark-card transition-colors"
      >
        <span className="flex items-center gap-2">
          <span>🔽 フィルター</span>
          {activeFilterCount > 0 && (
            <span className="bg-gold text-dark-bg text-xs font-bold px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </span>
        <span className="text-dark-muted">{filtersOpen ? '▲' : '▼'}</span>
      </button>

      {/* Collapsible filter area */}
      {filtersOpen && (
        <div className="bg-dark-surface border border-dark-border rounded-xl p-4 space-y-4 animate-[fadeIn_0.15s_ease-in]">
          {/* Difficulty filter (multi-select) */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-dark-muted uppercase tracking-wider">Difficulty</div>
            <div className="flex flex-wrap gap-1.5">
              {(['essential', 'intermediate', 'advanced'] as const).map(d => {
                const isActive = selectedDifficulties.has(d);
                const count = tab === 'vocab'
                  ? terms.filter(t => t.difficulty === d).length
                  : idioms.filter(id => id.difficulty === d).length;
                return (
                  <button
                    key={d}
                    onClick={() => setSelectedDifficulties(toggleSet(selectedDifficulties, d))}
                    className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                      isActive
                        ? `${difficultyColors[d]} bg-dark-card border border-current font-semibold`
                        : 'bg-dark-card text-dark-muted hover:text-dark-text border border-dark-border'
                    }`}
                  >
                    {difficultyLabels[d]} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category filter (multi-select) */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-dark-muted uppercase tracking-wider">Category</div>
            <div className="flex flex-wrap gap-1.5">
              {(tab === 'vocab' ? termCategories : idiomCategories).map(c => {
                const isActive = selectedCategories.has(c);
                const count = tab === 'vocab'
                  ? terms.filter(t => t.category === c).length
                  : idioms.filter(id => id.category === c).length;
                const label = (tab === 'vocab' ? termCategoryLabels : idiomCategoryLabels)[c];
                return (
                  <button
                    key={c}
                    onClick={() => setSelectedCategories(toggleSet(selectedCategories, c))}
                    className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                      isActive
                        ? 'bg-gold/80 text-dark-bg font-semibold'
                        : 'bg-dark-card text-dark-muted hover:text-dark-text border border-dark-border'
                    }`}
                  >
                    {label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Part filter (vocab only, multi-select) */}
          {tab === 'vocab' && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-dark-muted uppercase tracking-wider">Part</div>
              <div className="flex flex-wrap gap-1.5">
                {partsInTerms.map(p => {
                  const isActive = selectedParts.has(p);
                  const count = terms.filter(t => t.part === p).length;
                  return (
                    <button
                      key={p}
                      onClick={() => setSelectedParts(toggleSet(selectedParts, p))}
                      className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                        isActive
                          ? 'bg-gold/80 text-dark-bg font-semibold'
                          : 'bg-dark-card text-dark-muted hover:text-dark-text border border-dark-border'
                      }`}
                    >
                      Part {p} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Clear all */}
          {activeFilterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-gold hover:text-gold-dark underline"
            >
              フィルターを全てクリア
            </button>
          )}
        </div>
      )}

      {/* Result count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-dark-muted">
          {tab === 'vocab' ? filteredTerms.length : filteredIdioms.length}{' '}
          {tab === 'vocab' ? 'terms' : 'idioms'}
          {sortMode !== 'default' && (
            <span className="ml-2 text-gold">
              ({sortOptions.find(o => o.value === sortMode)?.icon} {sortOptions.find(o => o.value === sortMode)?.label})
            </span>
          )}
        </p>
        {sortMode === 'random' && (
          <button
            onClick={() => setSortMode('random')}
            className="text-xs text-gold hover:text-gold-dark px-2 py-1 rounded border border-gold/30"
          >
            🎲 再シャッフル
          </button>
        )}
      </div>

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
