import { useState, useEffect } from 'react';
import type { PageName } from '../core/types';
import { generateImage } from '../utils/imageGen';

interface Props {
  onNavigate: (page: PageName) => void;
}

const API_KEY_STORAGE = 'toeic800-openai-key';

export default function ImageGenSettings({ onNavigate }: Props) {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem(API_KEY_STORAGE) ?? '');
  const [saved, setSaved] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ ok: boolean; msg: string } | null>(null);
  const [testImg, setTestImg] = useState<string | null>(null);

  useEffect(() => {
    if (saved) {
      const t = setTimeout(() => setSaved(false), 2000);
      return () => clearTimeout(t);
    }
  }, [saved]);

  const handleSave = () => {
    localStorage.setItem(API_KEY_STORAGE, apiKey.trim());
    setSaved(true);
    setTestResult(null);
    setTestImg(null);
  };

  const handleClear = () => {
    setApiKey('');
    localStorage.removeItem(API_KEY_STORAGE);
    setTestResult(null);
    setTestImg(null);
  };

  const handleTest = async () => {
    const key = apiKey.trim();
    if (!key) return;
    setTesting(true);
    setTestResult(null);
    setTestImg(null);
    try {
      const url = await generateImage(
        'A simple TOEIC-style office photo: a woman placing a document on a desk. Realistic photograph, bright office, no text, no watermarks.',
        key,
      );
      setTestImg(url);
      setTestResult({ ok: true, msg: 'Connected! Image generated successfully.' });
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Unknown error';
      setTestResult({ ok: false, msg: message });
    } finally {
      setTesting(false);
    }
  };

  const hasKey = apiKey.trim().length > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate('home')} className="text-dark-muted hover:text-dark-text text-sm">←</button>
          <h1 className="text-xl font-bold text-dark-text">Settings</h1>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${hasKey ? 'bg-green-900/40 text-green-400' : 'bg-dark-card text-dark-muted'}`}>
          {hasKey ? '● API Key Set' : '○ No API Key'}
        </div>
      </div>

      <div className="bg-dark-surface rounded-xl p-6 border border-dark-border space-y-5">
        <div>
          <h2 className="text-lg font-semibold text-gold mb-1">🖼️ Photo Generation (GPT Image)</h2>
          <p className="text-sm text-dark-muted">
            Generate realistic TOEIC Part 1 photos using OpenAI's GPT Image model. Your API key is stored locally and only sent to OpenAI.
          </p>
        </div>

        {/* API Key Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-dark-text">OpenAI API Key</label>
          <input
            type="password"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-sm text-dark-text placeholder-dark-muted focus:outline-none focus:border-gold transition-colors"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={!apiKey.trim()}
              className="px-4 py-2 bg-gold hover:bg-gold-dark disabled:opacity-40 text-dark-bg text-sm font-semibold rounded-lg transition-colors"
            >
              {saved ? '✓ Saved' : 'Save Key'}
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-dark-card hover:bg-dark-border text-dark-muted text-sm rounded-lg border border-dark-border transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Test Button */}
        <div className="space-y-3">
          <button
            onClick={handleTest}
            disabled={!hasKey || testing}
            className="px-4 py-2 bg-dark-card hover:bg-dark-border disabled:opacity-40 text-dark-text text-sm rounded-lg border border-dark-border transition-colors"
          >
            {testing ? '⏳ Generating test image...' : '🧪 Test Connection'}
          </button>

          {testResult && (
            <div className={`text-sm px-3 py-2 rounded-lg ${testResult.ok ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
              {testResult.msg}
            </div>
          )}

          {testImg && (
            <div className="rounded-lg overflow-hidden border border-dark-border">
              <img src={testImg} alt="Test generated photo" className="w-full max-w-sm mx-auto" />
              <p className="text-xs text-dark-muted text-center mt-2 pb-2">Test image generated successfully</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
