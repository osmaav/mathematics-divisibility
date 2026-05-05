//@/src/components/QuizSection.tsx
import type { JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useQuiz, type QuizAnswer } from '@/hooks/useQuiz';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const QuizSection = (): JSX.Element => {
  const { current, currentIndex, score, answers, isFinished, answer, restart, total } = useQuiz(10);

  // Результат теста
  if (isFinished) {
    const pct = Math.round((score / total) * 100);

    const getResultData = (percentage: number): { message: string; emoji: string } => {
      if (percentage >= 90) return { message: 'Отлично! Ты мастер делимости!', emoji: '🏆' };
      if (percentage >= 70) return { message: 'Хороший результат!', emoji: '🌟' };
      if (percentage >= 50) return { message: 'Неплохо, но стоит повторить правила', emoji: '📚' };
      return { message: 'Повтори правила и попробуй снова!', emoji: '💪' };
    };

    const { message, emoji } = getResultData(pct);

    return (
      <section className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="text-6xl sm:text-8xl mb-4" aria-hidden="true">{emoji}</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">Тест завершён!</h2>
          <p className="text-gray-500 mb-6">{message}</p>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 max-w-sm mx-auto mb-6">
            <div className="text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {score}/{total}
            </div>
            <ProgressBar current={score} total={total} color="violet" />
            <p className="text-sm text-gray-500 mt-2">{pct}% правильных ответов</p>
          </div>

          {/* Review answers */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 mb-6 text-left">
            <h3 className="font-bold text-gray-800 mb-3">📋 Разбор ответов:</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto" role="list">
              {answers.map((a: QuizAnswer, i: number) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 p-2 rounded-lg text-sm ${a.isCorrect ? 'bg-emerald-50' : 'bg-rose-50'
                    }`}
                  role="listitem"
                >
                  <span aria-hidden="true">{a.isCorrect ? '✅' : '❌'}</span>
                  <span className="flex-1 font-medium text-gray-700">{a.question.text}</span>
                  <span className="font-bold text-gray-500">
                    {a.question.correctAnswer ? 'Да' : 'Нет'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Button size="lg" onClick={restart} aria-label="Пройти тест ещё раз">
            🔄 Пройти ещё раз
          </Button>
        </motion.div>
      </section>
    );
  }

  // Экран вопроса — защита от undefined
  if (!current) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-8 sm:py-12 text-center">
        <p className="text-gray-500">Загрузка вопроса...</p>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">🎯 Тест на делимость</h2>
        <p className="text-gray-500 mb-4 text-sm sm:text-base">
          Ответь на {total} вопросов. Определи, делится ли число на заданный делитель.
        </p>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Вопрос {currentIndex + 1} из {total}</span>
            <span>Счёт: {score}</span>
          </div>
          <ProgressBar current={currentIndex + 1} total={total} color="amber" />
        </div>

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 sm:p-8 text-center">
              <div
                className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-4"
                aria-label={`Число ${current.number}`}
              >
                {current.number}
              </div>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 font-medium">
                Делится на{' '}
                <span
                  className="inline-flex items-center justify-center bg-violet-100 text-violet-700 rounded-full w-10 h-10 text-lg font-bold"
                  aria-label={`делитель ${current.divisor}`}
                >
                  {current.divisor}
                </span>{' '}
                ?
              </p>

              <div className="flex gap-4 justify-center" role="group" aria-label="Варианты ответа">
                <Button
                  variant="success"
                  size="lg"
                  onClick={() => answer(true)}
                  className="min-w-28"
                  aria-label="Да, делится"
                >
                  ✅ Да
                </Button>
                <Button
                  variant="danger"
                  size="lg"
                  onClick={() => answer(false)}
                  className="min-w-28"
                  aria-label="Нет, не делится"
                >
                  ❌ Нет
                </Button>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export { QuizSection };
