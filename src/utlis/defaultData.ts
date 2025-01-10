import { Question } from './types';

export const defaultQuestions: Record<string, Question[]> = {
  'aptitude MCQ': [
    {
      id: 1,
      question: 'What is 15% of 200?',
      options: ['20', '25', '30', '35'],
      correctAnswer: '30',
      explanation: '15% of 200 = (15/100) × 200 = 30'
    },
    {
      id: 2,
      question: 'If a train travels 300 km in 4 hours, what is its speed?',
      options: ['60 km/h', '75 km/h', '80 km/h', '85 km/h'],
      correctAnswer: '75 km/h',
      explanation: 'Speed = Distance/Time = 300/4 = 75 km/h'
    }
  ],
  'paragraph writing': [
    {
      id: 1,
      question: 'Describe a challenging situation you faced at work or school and how you handled it.',
      correctAnswer: null,
      explanation: 'Focus on the situation, action taken, and results achieved.'
    }
  ],
  'coding': [
    {
      id: 1,
      question: 'Write a function to reverse a string without using built-in reverse methods.',
      correctAnswer: null,
      explanation: 'Consider using a two-pointer approach or reducing the string to characters.'
    }
  ]
};