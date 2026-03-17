import { QUESTIONS, Question } from './data.js';

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get N random, non-repeating questions
 */
export function getRandomQuestions(count: number = 15): Question[] {
  const shuffled = shuffleArray(QUESTIONS);
  return shuffled.slice(0, Math.min(count, QUESTIONS.length));
}

/**
 * Get all questions
 */
export function getAllQuestions(): Question[] {
  return QUESTIONS;
}
