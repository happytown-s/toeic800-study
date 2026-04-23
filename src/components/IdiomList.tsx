import { useState, useMemo } from 'react';
import type { Idiom } from '../types';
import idiomData from '../data/idiom-list.json';

export default function IdiomList() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = useMemo(() => [...new Set(idiomData.map((i: Idiom) => i.category))].sort(), []);

  const filtered = useMemo(() => {
    let idioms = idiomData;
    if (selectedCategory !== 'all') idioms = idioms.filter((i: Idiom) => i.category === selectedCategory);
    if (search) {
      const s = search.toLowerCase();
      idioms = idioms.filter((i: Idiom) =>
        i.idiom.toLowerCase().includes(s) ||
        i.meaning.toLowerCase().includes(s)
      );
    }
    return idioms;
  }, [search, selectedCategory]);

  return (
    <div className="space-y-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search idioms..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full px-4 py-2 bg-dark-card border border-dark-border rounded-xl text-dark-text placeholder-dark-muted focus:outline-none focus:border-gold"
      />

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1 rounded-lg text-xs ${selectedCategory === 'all' ? 'bg-gold text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
        >
          All ({idiomData.length})
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-lg text-xs ${selectedCategory === cat ? 'bg-gold text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
          >
            {cat} ({idiomData.filter((i: Idiom) => i.category === cat).length})
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-muted">{filtered.length} idioms</p>

      {/* Idiom cards */}
      <div className="space-y-2">
        {filtered.map(idiom => {
          const isExpanded = expandedId === idiom.idiom;
          return (
            <div key={idiom.idiom} className="bg-dark-surface rounded-xl border border-dark-border overflow-hidden">
              <button
                onClick={() => setExpandedId(isExpanded ? null : idiom.idiom)}
                className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-dark-card transition-colors"
              >
                <div>
                  <span className="font-semibold text-gold-dark">&ldquo;{idiom.idiom}&rdquo;</span>
                  <span className="text-xs text-dark-muted ml-2">{idiom.category}</span>
                </div>
                <span className="text-dark-muted text-sm">{isExpanded ? '\u25B2' : '\u25BC'}</span>
              </button>
              {isExpanded && (
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-sm">{idiom.meaning}</p>
                  <p className="text-sm italic text-dark-muted">{idiom.example}</p>
                  <p className="text-xs text-dark-muted">{idiom.exampleJp}</p>
                </div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && <p className="text-center text-dark-muted py-8">No idioms found.</p>}
      </div>
    </div>
  );
}
