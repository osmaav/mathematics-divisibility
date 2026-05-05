//@/src/components/CheckerSection.tsx
import { useState, useCallback, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import {
  checkDivisibility,
  sumOfDigits,
  lastTwoDigits,
  lastThreeDigits,
  type DivisibilityRule,
  divisibilityRules,
  type DivisibilityResults
} from '@/lib/utils';
import type { Divisor } from '@/types';

interface CheckResult {
  number: number;
  results: DivisibilityResults;
}

const CheckerSection = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<CheckResult | null>(null);
  // const [animate, setAnimate] = useState<boolean>(false);

  const divisors: Divisor[] = [3, 4, 5, 6, 7, 8, 9];

  const check = useCallback(() => {
    const num = parseInt(input, 10);
    if (isNaN(num) || num <= 0) return;

    const results = checkDivisibility(num, divisors);
    setResult({ number: num, results });
    // setAnimate(true);
    // setTimeout(() => setAnimate(false), 500);
  }, [input]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') check();
  };

  const getExplanation = (num: number, d: Divisor): string => {
    //const rule = divisibilityRules[d];

    switch (d) {
      case 3:
        return `${num} → ${num.toString().split('').join(' + ')} = ${sumOfDigits(num)} → ${sumOfDigits(num)} ÷ 3 = ${(sumOfDigits(num) / 3).toFixed(1)} ✓`;
      case 4:
        return `${num} → последние 2 цифры: ${lastTwoDigits(num)} → ${lastTwoDigits(num)} ÷ 4 = ${(lastTwoDigits(num) / 4).toFixed(1)} ✓`;
      case 5:
        return `${num} → последняя цифра: ${num.toString().slice(-1)} ✓`;
      case 6:
        return `${num} → чётное: ${num % 2 === 0} ✓, сумма цифр ${sumOfDigits(num)} делится на 3: ${sumOfDigits(num) % 3 === 0} ✓`;
      case 7: {
        const withoutLast = Math.floor(num / 10);
        const lastDigit = num % 10;
        const diff = withoutLast - 2 * lastDigit;
        return `${num} → ${withoutLast} − 2×${lastDigit} = ${diff} → ${diff} ÷ 7 = ${(diff / 7).toFixed(1)} ✓`;
      }
      case 8:
        return `${num} → последние 3 цифры: ${lastThreeDigits(num)} → ${lastThreeDigits(num)} ÷ 8 = ${(lastThreeDigits(num) / 8).toFixed(1)} ✓`;
      case 9:
        return `${num} → ${num.toString().split('').join(' + ')} = ${sumOfDigits(num)} → ${sumOfDigits(num)} ÷ 9 = ${(sumOfDigits(num) / 9).toFixed(1)} ✓`;
      default:
        return '';
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">🔍 Проверка делимости</h2>
        <p className="text-gray-500 mb-6 text-sm sm:text-base">Введи число и узнай, на какие числа оно делится</p>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 mb-6">
          <div className="flex gap-3 mb-4">
            <input
              type="number"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Введи число..."
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-400 focus:outline-none text-lg font-semibold text-gray-800 placeholder:text-gray-300"
              min="1"
            />
            <Button onClick={check} size="md">
              Проверить
            </Button>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3"
              >
                <div className="text-center mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    {result.number}
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-3">
                  {divisors.map((d: Divisor) => {
                    const isDiv = result.results[d];
                    const rule = divisibilityRules[d] as DivisibilityRule;
                    return (
                      <motion.div
                        key={d}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: divisors.indexOf(d) * 0.05, type: 'spring' }}
                        className={`rounded-xl p-3 text-center border-2 transition-all ${isDiv
                          ? 'bg-emerald-50 border-emerald-300'
                          : 'bg-gray-50 border-gray-200 opacity-50'
                          }`}
                      >
                        <div className="text-lg mb-1">{rule.emoji}</div>
                        <div className="text-sm font-bold">{d}</div>
                        <div className="text-lg mt-1">
                          {isDiv ? '✅' : '❌'}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="mt-4 bg-gray-50 rounded-xl p-4 space-y-2">
                  <h4 className="font-bold text-gray-700 text-sm">📖 Объяснение:</h4>
                  {divisors
                    .filter((d: Divisor) => result.results[d])
                    .map((d: Divisor) => {
                      const rule = divisibilityRules[d] as DivisibilityRule;
                      return (
                        <div
                          key={d}
                          className="text-xs font-mono bg-white rounded-lg p-2 border border-gray-200 text-gray-700"
                        >
                          {rule.emoji} <strong>на {d}:</strong> {getExplanation(result.number, d)}
                        </div>
                      );
                    })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick check buttons */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-500 self-center mr-2">Быстрая проверка:</span>
          {[12, 24, 35, 49, 56, 72, 100, 123, 144, 252, 364, 512, 729, 999].map((n: number) => (
            <button
              key={n}
              onClick={() => { setInput(n.toString()); }}
              className="px-2.5 py-1 bg-gray-100 hover:bg-violet-100 rounded-lg text-xs font-semibold text-gray-600 hover:text-violet-700 transition-colors"
              type="button"
            >
              {n}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export { CheckerSection };
