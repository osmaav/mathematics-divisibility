//@/components/HeroSection.tsx
import type { JSX } from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { divisibilityRules } from '@/lib/utils';
import type { Divisor } from '@/types';

interface HeroSectionProps {
  onStart: (section: 'rules' | 'quiz' | 'checker' | 'home') => void;
}

const HeroSection = ({ onStart }: HeroSectionProps): JSX.Element => {
  const previewDivisors: Divisor[] = [3, 4, 5, 6, 7, 8, 9];
  const mathSymbols = ['∞', '×', '+', '-', '💼', '📚', '📖', '🥇'];
  const SYMBOL_COUNT = 30;

  const backgroundSymbols = useMemo(() =>
    [...Array(SYMBOL_COUNT)].map((_, i) => ({
      id: i,
      symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
      left: Math.random() * 80,
      top: Math.random() * 90,
      size: 'text-2xl sm:text-4xl',
      delay: Math.random() * 0.5,
      duration: 4 + Math.random() * 0.4,
    })),
    []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50" />

      {/* Animated background symbols */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {backgroundSymbols.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute select-none ${item.size}`}
            initial={{ y: -30, opacity: 0, scale: 0.2 }}
            animate={{ y: 50, opacity: 1, scale: 1 }}
            transition={{
              delay: item.delay,
              duration: item.duration,
              ease: 'easeOut',
            }}
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
            }}
            aria-hidden="true"
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:py-20 text-center">
        {/* Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight"
        >
          Правила делимости
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed"
        >
          Узнай, как быстро определить, делится ли число на 3, 4, 5, 6, 7, 8 или 9 — без калькулятора! 🚀
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button size="lg" onClick={() => onStart('rules')}>
            📚 Изучить правила
          </Button>
          <Button variant="secondary" size="lg" onClick={() => onStart('quiz')}>
            🎯 Пройти тест
          </Button>
        </motion.div>

        {/* Quick preview cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-14 grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3 max-w-2xl mx-auto"
          role="navigation"
          aria-label="Быстрый переход к правилам"
        >
          {previewDivisors.map((divisor, index) => {
            const rule = divisibilityRules[divisor];
            return (
              <motion.button
                key={divisor}
                type="button"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 + index * 0.08, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-xl p-2 sm:p-3 shadow-md text-center cursor-pointer border border-gray-100 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400"
                onClick={() => onStart('rules')}
                aria-label={`Правило делимости на ${divisor}`}
              >
                <div className="text-xl sm:text-2xl mb-1" aria-hidden="true">
                  {rule.emoji}
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-800">
                  {divisor}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export { HeroSection };
export type { HeroSectionProps };
