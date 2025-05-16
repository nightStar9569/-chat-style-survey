# Chat-Style Survey Application

A modern, interactive survey application that presents questions in a chat-like interface, providing a more engaging user experience. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 💬 Chat-style interface for survey questions
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔒 Type-safe implementation with TypeScript
- ⚡ Built on Next.js for optimal performance

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd chatting-style
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/                   # Next.js app directory
│   ├── page.tsx          # Main survey page
│   ├── thank-you/        # Thank you page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ChatMessage.tsx   # Individual message component
│   └── SurveyChat.tsx   # Main survey chat container
└── types/               # TypeScript type definitions
    └── survey.ts        # Survey-related types
```

## Customizing the Survey

To modify the survey questions, edit the `SURVEY_QUESTIONS` array in `src/components/SurveyChat.tsx`:

```typescript
const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: '1',
    question: 'Your question here',
    options: ['Option 1', 'Option 2'],
    type: 'choice'  // 'choice', 'text', or 'multiple'
  },
  // Add more questions...
];
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React](https://reactjs.org/) - UI library

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 