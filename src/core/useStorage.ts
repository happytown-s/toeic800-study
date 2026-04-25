import { useState, useCallback, useEffect, useMemo } from 'react';
import type { QuizResult, ExamScore } from '../core/types';

const RESULTS_KEY = 'toeic800-results';
const EXAMS_KEY = 'toeic800-exam-scores';

function loadJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function useStorage() {
  const [results, setResults] = useState<QuizResult[]>(() => loadJson(RESULTS_KEY, []));
  const [examScores, setExamScores] = useState<ExamScore[]>(() => loadJson(EXAMS_KEY, []));

  useEffect(() => {
    localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
  }, [results]);

  useEffect(() => {
    localStorage.setItem(EXAMS_KEY, JSON.stringify(examScores));
  }, [examScores]);

  const recordAnswer = useCallback((questionId: number, correct: boolean, part: number, category: string) => {
    setResults(prev => [...prev, { questionId, correct, part, category, timestamp: Date.now() }]);
  }, []);

  const recordExamScore = useCallback((score: ExamScore) => {
    setExamScores(prev => [...prev, score]);
  }, []);

  const clearHistory = useCallback(() => {
    setResults([]);
    setExamScores([]);
    localStorage.removeItem(RESULTS_KEY);
    localStorage.removeItem(EXAMS_KEY);
  }, []);

  const getWrongQuestionIds = useCallback((): number[] => {
    const counts = new Map<number, { wrong: number; right: number }>();
    for (const r of results) {
      const c = counts.get(r.questionId) ?? { wrong: 0, right: 0 };
      if (r.correct) c.right++;
      else c.wrong++;
      counts.set(r.questionId, c);
    }
    return [...counts.entries()]
      .filter(([, v]) => v.wrong > v.right)
      .map(([id]) => id);
  }, [results]);

  const accuracy = useMemo(() => {
    if (results.length === 0) return 0;
    return results.filter(r => r.correct).length / results.length;
  }, [results]);

  const streak = useMemo(() => {
    let s = 0;
    for (const r of [...results].reverse()) {
      if (r.correct) s++;
      else break;
    }
    return s;
  }, [results]);

  return { results, examScores, recordAnswer, recordExamScore, clearHistory, getWrongQuestionIds, accuracy, streak };
}
