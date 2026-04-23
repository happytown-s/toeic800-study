import { useState, useMemo, useCallback } from 'react';
import type { VocabWord } from '../types';
import vocabData from '../data/advanced-vocab.json';

const FAVORITES_KEY = 'toeic800-fav-vocab';

function loadFavorites(): Set<string> {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export default function Vocabulary() {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<Set<string>>(loadFavorites);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [quizWords, setQuizWords] = useState<VocabWord[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [posFilter, setPosFilter] = useState<string>('all');

  const toggleFavorite = useCallback((word: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const filtered = useMemo(() => {
    let words = vocabData;
    if (posFilter !== 'all') words = words.filter(w => w.pos === posFilter);
    if (showFavoritesOnly) words = words.filter(w => favorites.has(w.word));
    if (search) {
      const s = search.toLowerCase();
      words = words.filter(w =>
        w.word.toLowerCase().includes(s) ||
        w.meaning.toLowerCase().includes(s) ||
        w.pos.toLowerCase().includes(s)
      );
    }
    return words;
  }, [search, showFavoritesOnly, favorites, posFilter]);

  const startVocabQuiz = useCallback(() => {
    const shuffled = [...vocabData].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuizWords(shuffled);
    setQuizIndex(0);
    setShowMeaning(false);
    setQuizMode(true);
  }, []);

  const handleTTS = useCallback((word: string) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(word);
      u.lang = 'en-US';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  }, []);

  const allPos = useMemo(() => [...new Set(vocabData.map(w => w.pos))], []);

  if (quizMode) {
    const current = quizWords[quizIndex];
    if (!current) {
      return (
        <div className="bg-dark-surface rounded-xl p-8 border border-dark-border text-center space-y-4">
          <h2 className="text-xl font-bold text-gold">Vocab Quiz Complete!</h2>
          <button onClick={() => setQuizMode(false)} className="px-6 py-3 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors">
            Back to Vocabulary
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-dark-muted">Word {quizIndex + 1}/{quizWords.length}</span>
          <button onClick={() => setQuizMode(false)} className="text-xs text-dark-muted hover:text-dark-text">Exit</button>
        </div>
        <div className="bg-dark-surface rounded-xl p-6 border border-dark-border space-y-4">
          <p className="text-2xl font-bold">{current.word}</p>
          <p className="text-sm text-dark-muted">{current.pos} | {current.level}</p>
          {!showMeaning ? (
            <button onClick={() => setShowMeaning(true)} className="w-full py-3 bg-dark-card hover:bg-dark-border rounded-xl transition-colors">
              Show Meaning
            </button>
          ) : (
            <div className="space-y-3">
              <p className="text-lg">{current.meaning}</p>
              <p className="text-sm text-dark-muted italic">{current.example}</p>
              <p className="text-sm text-dark-muted">{current.exampleJp}</p>
              {current.synonyms.length > 0 && (
                <p className="text-sm">Synonyms: {current.synonyms.join(', ')}</p>
              )}
            </div>
          )}
          {showMeaning && quizIndex < quizWords.length - 1 && (
            <button onClick={() => { setQuizIndex(i => i + 1); setShowMeaning(false); }} className="w-full py-3 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors">
              Next
            </button>
          )}
          {showMeaning && quizIndex >= quizWords.length - 1 && (
            <button onClick={() => setQuizMode(false)} className="w-full py-3 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors">
              Finish
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search words..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 bg-dark-card border border-dark-border rounded-xl text-dark-text placeholder-dark-muted focus:outline-none focus:border-gold"
        />
        <button
          onClick={startVocabQuiz}
          className="px-4 py-2 bg-gold hover:bg-gold-dark text-dark-bg font-semibold rounded-xl transition-colors"
        >
          Flashcard Quiz
        </button>
        <button
          onClick={() => setShowFavoritesOnly(v => !v)}
          className={`px-4 py-2 rounded-xl transition-colors ${showFavoritesOnly ? 'bg-gold text-dark-bg' : 'bg-dark-card text-dark-text'}`}
        >
          {showFavoritesOnly ? 'All Words' : 'Favorites'}
        </button>
      </div>

      {/* POS filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setPosFilter('all')}
          className={`px-3 py-1 rounded-lg text-xs ${posFilter === 'all' ? 'bg-gold text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
        >
          All ({vocabData.length})
        </button>
        {allPos.map(pos => (
          <button
            key={pos}
            onClick={() => setPosFilter(pos)}
            className={`px-3 py-1 rounded-lg text-xs ${posFilter === pos ? 'bg-gold text-dark-bg' : 'bg-dark-card text-dark-muted'}`}
          >
            {pos} ({vocabData.filter(w => w.pos === pos).length})
          </button>
        ))}
      </div>

      <p className="text-sm text-dark-muted">{filtered.length} words</p>

      {/* Word list */}
      <div className="space-y-2">
        {filtered.map(w => (
          <div key={w.word} className="bg-dark-surface rounded-xl p-4 border border-dark-border">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <button onClick={() => handleTTS(w.word)} className="text-gold hover:text-gold-dark text-lg" title="Pronounce">
                    &#9654;
                  </button>
                  <span className="font-semibold">{w.word}</span>
                  <span className="text-xs text-dark-muted bg-dark-card px-2 py-0.5 rounded">{w.pos}</span>
                </div>
                <p className="text-sm text-dark-muted mb-1">{w.meaning}</p>
                <p className="text-xs text-dark-muted italic">{w.example}</p>
              </div>
              <button
                onClick={() => toggleFavorite(w.word)}
                className={`text-lg ${favorites.has(w.word) ? 'text-gold' : 'text-dark-muted hover:text-gold'}`}
              >
                {favorites.has(w.word) ? '\u2605' : '\u2606'}
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-center text-dark-muted py-8">No words found.</p>}
      </div>
    </div>
  );
}
