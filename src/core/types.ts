export interface QuestionOption {
  text: string;
  isCorrect: boolean;
}

export interface KeyVocab {
  word: string;
  meaning: string;
}

export interface Question {
  id: number;
  part: number;
  category: string;
  categoryLabel: string;
  question: string;
  imageSrc?: string;
  imageAlt?: string;
  options: QuestionOption[];
  explanation: string;
  audioScript?: string;
  passage?: string;
  keyVocabulary?: KeyVocab[];
}

export interface QuizResult {
  questionId: number;
  correct: boolean;
  part: number;
  category: string;
  timestamp: number;
}

export interface ExamScore {
  totalQuestions: number;
  correctCount: number;
  date: string;
  timeSpent: number;
  partScores: Record<number, { correct: number; total: number }>;
  wrongIds: number[];
}

export interface PartInfo {
  part: number;
  id: string;
  label: string;
  labelJa: string;
  icon: string;
  questionsPerTest: number;
  section: 'listening' | 'reading';
  description: string;
}

export interface Term {
  word: string;
  meaning: string;
  part?: number;
  example?: string;
  category?: 'business' | 'finance' | 'it' | 'hr' | 'marketing' | 'legal' | 'general' | 'travel' | 'tech' | 'manufacturing' | 'health' | 'communication';
  difficulty?: 'essential' | 'intermediate' | 'advanced';
}

export interface Idiom {
  id: number;
  idiom: string;
  meaning: string;
  example: string;
  category: string;
  difficulty: 'essential' | 'intermediate' | 'advanced';
}

export type PageName =
  | 'home'
  | 'quiz-setup'
  | 'quiz-play'
  | 'quiz-result'
  | 'vocab'
  | 'idioms'
  | 'progress'
  | 'dictation';
