//@/src/hooks/useQuiz.ts

import { useState, useCallback } from 'react';
import { generateQuestions, type QuizQuestion } from '@/lib/utils';

export interface QuizAnswer {
  question: QuizQuestion;
  userAnswer: boolean;
  isCorrect: boolean;
}

export interface UseQuizReturn {
  current: QuizQuestion | undefined;
  currentIndex: number;
  score: number;
  answers: QuizAnswer[];
  isFinished: boolean;
  answer: (userAnswer: boolean) => void;
  restart: () => void;
  total: number;
}

export const useQuiz = (totalQuestions = 10): UseQuizReturn => {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
    generateQuestions(totalQuestions)
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const current: QuizQuestion | undefined = questions[currentIndex];

  const answer = useCallback(
    (userAnswer: boolean) => {
      if (!current) return;

      const isCorrect: boolean = userAnswer === current.correctAnswer;

      setAnswers((prev: QuizAnswer[]) => [
        ...prev,
        { question: current, userAnswer, isCorrect }
      ]);

      if (isCorrect) {
        setScore((s: number) => s + 1);
      }

      if (currentIndex < totalQuestions - 1) {
        setCurrentIndex((i: number) => i + 1);
      } else {
        setIsFinished(true);
      }
    },
    [current, currentIndex, totalQuestions]
  );

  const restart = useCallback(() => {
    setQuestions(generateQuestions(totalQuestions));
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
    setIsFinished(false);
  }, [totalQuestions]);

  return {
    current,
    currentIndex,
    score,
    answers,
    isFinished,
    answer,
    restart,
    total: totalQuestions,
  };
};
