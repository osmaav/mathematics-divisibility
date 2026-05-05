//@/components/HeroSection.tsx
import type { JSX } from 'react';
import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { divisibilityRules } from '@/lib/utils';
import type { Divisor } from '@/types';

interface HeroSectionProps {
  onStart: (section: 'rules' | 'quiz' | 'checker' | 'home', divisor?: number) => void;
}
const useScreenWidth = () => {
  const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const HeroSection = ({ onStart }: HeroSectionProps): JSX.Element => {
  const previewDivisors: Divisor[] = [3, 4, 5, 6, 7, 8, 9];
  const screenWidth = useScreenWidth();
  const mathSymbols = ['×', '+', '-', '💼', '📚', '🥇', '🔥', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '🤷🏼‍♂️', '🕹️'];
  const SYMBOL_COUNT = useMemo(() => {
    const density = 20; // пикселей на один символ
    const minCount = 7;  // минимум для совсем узких экранов
    const maxCount = 30;  // максимум для больших экранов
    return Math.max(minCount, Math.min(maxCount, Math.floor(screenWidth / density)));
  }, [screenWidth]);


  const backgroundSymbols = useMemo(() => {
    // 🎯 Равномерное распределение по горизонтали (сетка)
    const columnWidth = 100 / SYMBOL_COUNT;

    return [...Array(SYMBOL_COUNT)].map((_, i) => {
      // Позиция в своей "колонке" с небольшим случайным смещением (±30% от ширины колонки)
      const columnStart = i * columnWidth;
      const randomOffset = (Math.random() - 0.5) * columnWidth * 0.6;
      const left = columnStart + randomOffset;
      const size = screenWidth < 400 ? 'text-3xl' : 'text-4xl';


      return {
        id: i,
        symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
        left: Math.max(0, Math.min(100, left)), // защита от выхода за границы
        top: Math.random() * 80,
        size,
        delay: 0,
        duration: 55 + Math.random() * 10,
      };
    });
  }, [SYMBOL_COUNT, screenWidth]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50" />

      {/* Animated background symbols */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {backgroundSymbols.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute select-none ${item.size}`}
            animate={{
              y: ["-10vh", "45vh"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
              delay: item.delay,
            }}
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
            }}
            aria-hidden="true"          >
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
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 + index * 0.08, type: 'tween', ease: 'easeOut', duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl p-2 sm:p-3 shadow-md text-center cursor-pointer border border-gray-100 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 will-change-transform transform-gpu [-webkit-font-smoothing:antialiased] [-webkit-backface-visibility:hidden]"
                onClick={() => onStart('rules', divisor)}
                aria-label={`Правило делимости на ${divisor}`}
              >
                <div className="text-xl sm:text-2xl mb-1 flex items-center justify-center [-webkit-transform:translateZ(0)] [transform:translateZ(0)]" aria-hidden="true">
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
