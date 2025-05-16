import { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { Message, SurveyQuestion, SurveyResponse } from '@/types/survey';

const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: '1',
    question: 'Welcome to our survey! Are you ready to begin?',
    options: ['Yes, let\'s start!'],
    type: 'choice'
  },
  {
    id: '2',
    question: 'How did you hear about us?',
    options: ['Social Media', 'Friend', 'Advertisement', 'Other'],
    type: 'choice'
  },
  {
    id: '3',
    question: 'What features are you most interested in?',
    options: ['Design', 'Functionality', 'Performance', 'User Experience'],
    type: 'multiple'
  }
];

export const SurveyChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentQuestionIndex === 0) {
      addBotMessage(SURVEY_QUESTIONS[0]);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addBotMessage = (question: SurveyQuestion) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      type: 'bot',
      content: question.question,
      options: question.options
    }]);
  };

  const handleOptionSelect = (option: string) => {
    // Add user response
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      type: 'user',
      content: option
    }]);

    // Save response
    const currentQuestion = SURVEY_QUESTIONS[currentQuestionIndex];
    setResponses(prev => [...prev, {
      questionId: currentQuestion.id,
      answer: option,
      timestamp: Date.now()
    }]);

    // Move to next question
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < SURVEY_QUESTIONS.length) {
      setCurrentQuestionIndex(nextIndex);
      setTimeout(() => {
        addBotMessage(SURVEY_QUESTIONS[nextIndex]);
      }, 1000);
    } else {
      // Survey complete
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onOptionSelect={handleOptionSelect}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
}; 