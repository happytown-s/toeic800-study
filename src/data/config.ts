import type { PartInfo } from '../core/types';

export const parts: PartInfo[] = [
  {
    part: 1,
    id: 'part1',
    label: 'Photo Description',
    labelJa: '写真描写問題',
    icon: '📷',
    questionsPerTest: 6,
    section: 'listening',
    description: 'Listen to statements about a photograph and choose the best description.',
  },
  {
    part: 2,
    id: 'part2',
    label: 'Question-Response',
    labelJa: '応答問題',
    icon: '🗣️',
    questionsPerTest: 25,
    section: 'listening',
    description: 'Listen to a question and choose the best response.',
  },
  {
    part: 3,
    id: 'part3',
    label: 'Short Conversations',
    labelJa: '会話問題',
    icon: '💬',
    questionsPerTest: 13,
    section: 'listening',
    description: 'Listen to a conversation and answer questions about it.',
  },
  {
    part: 4,
    id: 'part4',
    label: 'Short Talks',
    labelJa: '説明文問題',
    icon: '📢',
    questionsPerTest: 10,
    section: 'listening',
    description: 'Listen to a short talk and answer questions about it.',
  },
  {
    part: 5,
    id: 'part5',
    label: 'Incomplete Sentences',
    labelJa: '短文穴埋め',
    icon: '✏️',
    questionsPerTest: 30,
    section: 'reading',
    description: 'Choose the word or phrase that best completes the sentence.',
  },
  {
    part: 6,
    id: 'part6',
    label: 'Text Completion',
    labelJa: '長文穴埋め',
    icon: '📄',
    questionsPerTest: 16,
    section: 'reading',
    description: 'Complete a passage by choosing the best word or phrase for each blank.',
  },
  {
    part: 7,
    id: 'part7',
    label: 'Reading Comprehension',
    labelJa: '読解問題',
    icon: '📖',
    questionsPerTest: 54,
    section: 'reading',
    description: 'Read passages and answer questions about them.',
  },
];

export const quizConfig = {
  title: 'TOEIC 800+ Study',
  examTimeLimit: 75, // 75 minutes for full test
  passLine: 80, // 80% target for 800+
};
