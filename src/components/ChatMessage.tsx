import { motion } from 'framer-motion';
import { Message } from '@/types/survey';

interface ChatMessageProps {
  message: Message;
  onOptionSelect?: (option: string) => void;
}

export const ChatMessage = ({ message, onOptionSelect }: ChatMessageProps) => {
  const isBot = message.type === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          isBot
            ? 'bg-gray-100 text-gray-800'
            : 'bg-primary text-white'
        }`}
      >
        <p className="text-sm md:text-base">{message.content}</p>
        {message.options && (
          <div className="mt-3 space-y-2">
            {message.options.map((option) => (
              <button
                key={option}
                onClick={() => onOptionSelect?.(option)}
                className="w-full rounded-md bg-white px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}; 