//@/src/components/RuleCard.tsx
import { motion } from 'framer-motion';
import { divisibilityRules } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import type { Divisor } from '@/types';

export interface DivisibilityRule {
  title: string;
  emoji: string;
  color: 'blue' | 'emerald' | 'amber' | 'orange' | 'rose' | 'violet';
  rule: string;
  example: string;
  steps: string[];
  tip: string;
}

interface RuleCardProps {
  divisor: Divisor;
  isActive: boolean;
  onClick: () => void;
}

type ColorKey = 'blue' | 'emerald' | 'amber' | 'orange' | 'rose' | 'violet';

const RuleCard = ({ divisor, isActive, onClick }: RuleCardProps) => {
  const rule = divisibilityRules[divisor] as DivisibilityRule;

  const colorMap: Record<ColorKey, string> = {
    blue: 'from-blue-500 to-blue-600',
    emerald: 'from-emerald-500 to-emerald-600',
    amber: 'from-amber-500 to-amber-600',
    orange: 'from-orange-500 to-orange-600',
    rose: 'from-rose-500 to-rose-600',
    violet: 'from-violet-500 to-violet-600',
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card
        className={`h-full border-2 transition-all ${isActive
          ? 'border-violet-400 shadow-xl shadow-violet-100'
          : 'border-transparent hover:border-gray-200'
          }`}
        onClick={onClick}
      >
        <div className={`h-2 bg-gradient-to-r ${colorMap[rule.color]}`} />
        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{rule.emoji}</span>
            <h3 className="text-lg font-bold text-gray-800">{rule.title}</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">{rule.rule}</p>
          <div className="bg-gray-50 rounded-xl p-3 mb-3">
            <p className="text-xs font-mono font-semibold text-gray-700">📝 {rule.example}</p>
          </div>
          <div className="space-y-1.5">
            {rule.steps.map((step: string, i: number) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                <span className="bg-gray-200 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="text-xs text-amber-800 font-medium">💡 {rule.tip}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export { RuleCard };
