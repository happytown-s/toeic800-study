export interface QuestionOption {
  text: string;
  correct: boolean;
}

export interface Question {
  id: number;
  category: string;
  question: string;
  passage?: string;
  options: QuestionOption[];
  explanation: string;
}

export interface VocabWord {
  word: string;
  meaning: string;
  level: string;
  pos: string;
  synonyms: string[];
  example: string;
  exampleJp: string;
}

export interface Idiom {
  idiom: string;
  meaning: string;
  example: string;
  exampleJp: string;
  category: string;
}

export interface QuizResult {
  questionId: number;
  correct: boolean;
  category: string;
  timestamp: number;
}

export type QuizMode = 'drill' | 'exam' | 'review';
export type TabName = 'quiz' | 'vocab' | 'idioms' | 'progress';
