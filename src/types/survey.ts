export interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  options?: string[];
}

export interface SurveyQuestion {
  id: string;
  question: string;
  options?: string[];
  type: 'text' | 'choice' | 'multiple';
}

export interface SurveyResponse {
  questionId: string;
  answer: string | string[];
  timestamp: number;
} 