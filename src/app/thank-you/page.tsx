'use client';

import { motion } from 'framer-motion';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600">
          We appreciate your time and feedback.
        </p>
      </motion.div>
    </main>
  );
} 