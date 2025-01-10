import { GoogleGenerativeAI } from '@google/generative-ai';
import { Question, Analysis } from './types';
import { defaultQuestions } from './defaultData';
import { extractJSONFromText, JSONExtractionError } from './jsonExtractor';
import { validateQuestions, validateAnalysis } from './validators';

const genAI = new GoogleGenerativeAI('AIzaSyAhTRcJ6bVbFrMagiwTbBkKdciPT99Wfzw');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const createQuestionPrompt = (type: string, count: number): string => {
  const basePrompt = `Generate ${count} ${type} interview questions. Include a mix of difficulties and categories.`;
  
  const formatInstructions = {
    'aptitude MCQ': `Each question should have 4 options and one correct answer. Format:
    {
      "questions": [
        {
          "id": number,
          "question": "clear mathematical or logical question",
          "options": ["option1", "option2", "option3", "option4"],
          "correctAnswer": "exact option text",
          "explanation": "detailed solution explanation",
          "difficulty": "easy|medium|hard",
          "category": "arithmetic|logical|verbal|quantitative"
        }
      ]
    }`,
    
    'paragraph writing': `Each question should assess writing skills. Format:
    {
      "questions": [
        {
          "id": number,
          "question": "writing prompt",
          "correctAnswer": null,
          "explanation": "what makes a good response",
          "sampleSolution": "example of a well-written response",
          "difficulty": "easy|medium|hard",
          "category": "situation|opinion|analysis|argument"
        }
      ]
    }`,
    
    'coding': `Each question should test programming skills. Format:
    {
      "questions": [
        {
          "id": number,
          "question": "coding problem description with clear requirements",
          "correctAnswer": null,
          "explanation": "approach explanation and complexity analysis",
          "sampleSolution": "example solution code",
          "difficulty": "easy|medium|hard",
          "category": "algorithms|dataStructures|optimization|implementation"
        }
      ]
    }`,

    'IQ': `Each question should test intelligence and problem-solving. Format:
    {
      "questions": [
        {
          "id": number,
          "question": "IQ question with clear context",
          "options": ["option1", "option2", "option3", "option4"],
          "correctAnswer": "exact option text",
          "explanation": "detailed solution logic",
          "difficulty": "easy|medium|hard",
          "category": "pattern|logic|spatial|numerical"
        }
      ]
    }`,

    'EQ': `Each question should assess emotional intelligence. Format:
    {
      "questions": [
        {
          "id": number,
          "question": "situation-based EQ question",
          "options": ["option1", "option2", "option3", "option4"],
          "correctAnswer": "exact option text",
          "explanation": "why this response shows high EQ",
          "difficulty": "easy|medium|hard",
          "category": "selfAwareness|empathy|socialSkills|motivation"
        }
      ]
    }`
  };

  return `${basePrompt}\n${formatInstructions[type as keyof typeof formatInstructions]}`;
};

const createAnalysisPrompt = (type: string, question: string, answer: string, sampleSolution?: string): string => {
  const basePrompt = `Analyze this ${type} answer comprehensively.\nQuestion: "${question}"\nAnswer: "${answer}"`;
  
  const formatInstructions = {
    'paragraph writing': `Evaluate writing skills, clarity, structure, and content. Format:
    {
      "analysis": {
        "score": number 0-5,
        "feedback": "detailed writing assessment",
        "improvements": "specific writing improvement suggestions",
        "details": {
          "strengths": ["strength1", "strength2"],
          "weaknesses": ["weakness1", "weakness2"],
          "suggestions": ["suggestion1", "suggestion2"]
        }
      }
    }`,
    
    'coding': `Evaluate code correctness, efficiency, and style. ${sampleSolution ? `Compare with sample solution: ${sampleSolution}` : ''} Format:
    {
      "analysis": {
        "score": number 0-5,
        "correctness": number 0-5,
        "efficiency": number 0-5,
        "style": number 0-5,
        "feedback": "detailed code review",
        "improvements": "specific code improvement suggestions",
        "details": {
          "strengths": ["strength1", "strength2"],
          "weaknesses": ["weakness1", "weakness2"],
          "suggestions": ["suggestion1", "suggestion2"]
        }
      }
    }`,
    
    'default': `Evaluate the response comprehensively. Format:
    {
      "analysis": {
        "score": number 0-5,
        "feedback": "detailed feedback",
        "improvements": "specific suggestions",
        "details": {
          "strengths": ["strength1", "strength2"],
          "weaknesses": ["weakness1", "weakness2"],
          "suggestions": ["suggestion1", "suggestion2"]
        }
      }
    }`
  };

  return `${basePrompt}\n${formatInstructions[type as keyof typeof formatInstructions] || formatInstructions.default}`;
};

export const generateQuestions = async (type: string, count: number): Promise<Question[]> => {
  try {
    const result = await model.generateContent(createQuestionPrompt(type, count));
    const response = await result.response;
    const parsed = extractJSONFromText(response.text());

    if (validateQuestions(parsed)) {
      return parsed.questions.slice(0, count);
    }

    throw new Error('Invalid question format in response');
  } catch (error) {
    if (error instanceof JSONExtractionError) {
      console.error('JSON extraction failed:', error.message);
    } else {
      console.error('Error generating questions:', error);
    }
    return defaultQuestions[type as keyof typeof defaultQuestions]?.slice(0, count) || [];
  }
};

export const analyzeAnswer = async (
  type: string,
  question: string,
  answer: string,
  sampleSolution?: string
): Promise<Analysis> => {
  const defaultAnalysis: Analysis = {
    score: 3,
    feedback: "Your answer demonstrates understanding of the core concepts.",
    improvements: "Consider adding more specific examples and technical details.",
    details: {
      strengths: ["Shows basic understanding"],
      weaknesses: ["Lacks detail"],
      suggestions: ["Add more specific examples"]
    }
  };

  try {
    const result = await model.generateContent(
      createAnalysisPrompt(type, question, answer, sampleSolution)
    );
    const response = await result.response;
    const parsed = extractJSONFromText(response.text());
    
    if (validateAnalysis(parsed)) {
      return parsed.analysis;
    }

    throw new Error('Invalid analysis format in response');
  } catch (error) {
    if (error instanceof JSONExtractionError) {
      console.error('JSON extraction failed:', error.message);
    } else {
      console.error('Error analyzing answer:', error);
    }
    return defaultAnalysis;
  }
};