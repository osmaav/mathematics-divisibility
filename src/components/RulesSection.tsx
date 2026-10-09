//@/src/components/RulesSection.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { RuleCard } from '@/components/RuleCard';
import { divisibilityRules } from '@/lib/utils';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { Divisor } from '@/types';

const RulesSection = () => {
  const [activeRule, setActiveRule] = useLocalStorage<Divisor | null>('activeRule', null);
  const [selectedDivisors, setSelectedDivisors] = useLocalStorage<Divisor[]>('selectedDivisors', []);

  const toggleDivisor = (d: Divisor) => {
    setSelectedDivisors((prev: Divisor[]) =>
      prev.includes(d)
        ? prev.filter((x: Divisor) => x !== d)
        : [...prev, d].sort((a, b) => a - b)
    );
  };

  const rulesMap = divisibilityRules as Record<Divisor, { emoji: string }>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">📚 Правила делимости</h2>
        <p className="text-gray-500 mb-6 text-sm sm:text-base">Нажми на карточку, чтобы подробнее изучить правило</p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {([3, 4, 5, 6, 7, 8, 9] as Divisor[]).map(d => (
            <motion.button
              key={d}
              whileTap={{ scale: 0.9 }}
              onClick={() => toggleDivisor(d)}
              className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all ${selectedDivisors.includes(d)
                ? 'bg-violet-100 text-violet-700 border-2 border-violet-300'
                : 'bg-gray-100 text-gray-400 border-2 border-transparent'
                }`}
            >
              {rulesMap[d].emoji} на {d}
            </motion.button>
          ))}
        </div>

        {/* Rule cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <AnimatePresence>
            {selectedDivisors.map(d => (
              <motion.div
                key={d}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <RuleCard divisor={d} isActive={activeRule === d} onClick={() => setActiveRule(d)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export { RulesSection };
