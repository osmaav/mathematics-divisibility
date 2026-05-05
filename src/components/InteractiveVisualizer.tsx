//@/src/components/InteractiveVisualizer.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card'
const InteractiveVisualizer = () => {
  const [num, setNum] = useState(36);

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">🎨 Визуализация</h2>
        <p className="text-gray-500 mb-6 text-sm sm:text-base">Увидь деление числа на группы</p>

        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <input
              type="range"
              min="1"
              max="100"
              value={num}
              onChange={e => setNum(parseInt(e.target.value))}
              className="flex-1 accent-violet-500"
            />
            <span className="text-2xl font-extrabold text-violet-600 w-12 text-center">{num}</span>
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center">
            {[...Array(num)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.01, type: 'spring', stiffness: 400 }}
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-gradient-to-br from-violet-400 to-purple-500"
              />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[3, 4, 5, 6].map(d => {
              const remainder = num % d;
              const groups = Math.floor(num / d);
              return (
                <div key={d} className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="font-bold text-gray-700">÷ {d}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {groups} гр. × {d}
                    {remainder > 0 && ` + ${remainder} ост.`}
                  </div>
                  <div className={`text-sm font-bold mt-1 ${remainder === 0 ? 'text-emerald-600' : 'text-rose-500'}`}>
                    {remainder === 0 ? '✅ Делится' : `❌ Остаток ${remainder}`}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </motion.div>
    </section>
  );
};
export { InteractiveVisualizer };
