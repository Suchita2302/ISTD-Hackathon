export interface Question {
  id: number;
  question: string;
  options?: string[];
  correctAnswer: string | null;
  explanation: string;
  sampleSolution?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  category?: string;
}

export interface Analysis {
  score: number;
  feedback: string;
  improvements: string;
  correctness?: number;
  efficiency?: number;
  style?: number;
  details?: {
    strengths: string[];
    weaknesses: string[];
    suggestions: string[];
  };
}

export interface QuestionResponse {
  questions: Question[];
}

export interface AnalysisResponse {
  analysis: Analysis;
}