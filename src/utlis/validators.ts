import { Question, Analysis, QuestionResponse, AnalysisResponse } from './types';

export const validateQuestions = (data: any): data is QuestionResponse => {
  if (!data || typeof data !== 'object' || !Array.isArray(data.questions)) {
    return false;
  }

  return data.questions.every((q: any): q is Question => 
    typeof q === 'object' &&
    q !== null &&
    typeof q.id === 'number' &&
    typeof q.question === 'string' &&
    typeof q.explanation === 'string' &&
    (q.correctAnswer === null || typeof q.correctAnswer === 'string') &&
    (!q.options || (
      Array.isArray(q.options) &&
      q.options.length === 4 &&
      q.options.every((o: any) => typeof o === 'string')
    )) &&
    (!q.difficulty || ['easy', 'medium', 'hard'].includes(q.difficulty)) &&
    (!q.category || typeof q.category === 'string') &&
    (!q.sampleSolution || typeof q.sampleSolution === 'string')
  );
};

export const validateAnalysis = (data: any): data is AnalysisResponse => {
  if (!data || typeof data !== 'object' || !data.analysis) {
    return false;
  }

  const { analysis } = data;
  return (
    typeof analysis === 'object' &&
    analysis !== null &&
    typeof analysis.score === 'number' &&
    analysis.score >= 0 &&
    analysis.score <= 5 &&
    typeof analysis.feedback === 'string' &&
    typeof analysis.improvements === 'string' &&
    (!analysis.correctness || (typeof analysis.correctness === 'number' && analysis.correctness >= 0 && analysis.correctness <= 5)) &&
    (!analysis.efficiency || (typeof analysis.efficiency === 'number' && analysis.efficiency >= 0 && analysis.efficiency <= 5)) &&
    (!analysis.style || (typeof analysis.style === 'number' && analysis.style >= 0 && analysis.style <= 5)) &&
    (!analysis.details || (
      typeof analysis.details === 'object' &&
      Array.isArray(analysis.details.strengths) &&
      Array.isArray(analysis.details.weaknesses) &&
      Array.isArray(analysis.details.suggestions)
    ))
  );
};