//@/components/ui/ProgressBar.tsx
import { motion } from 'framer-motion';

export type ProgressBarColor = 'violet' | 'emerald' | 'amber';

export interface ProgressBarProps {
  current: number;
  total: number;
  color?: ProgressBarColor;
}

const ProgressBar = ({ current, total, color = 'violet' }: ProgressBarProps) => {
  // Защита от деления на ноль
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;

  const colors: Record<ProgressBarColor, string> = {
    violet: 'bg-violet-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${colors[color]}`}
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
};

export { ProgressBar };
