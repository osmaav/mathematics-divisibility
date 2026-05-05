//@/src/components/FunFacts.tsx
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
const FunFacts = () => {
  const facts = [
    { emoji: '🌟', title: 'Число 0', text: '0 делится на любое число, кроме самого себя!' },
    { emoji: '🔢', title: 'Число 1', text: '1 делится только на 1 — это самое маленькое натуральное число.' },
    { emoji: '🏗️', title: 'Простые числа', text: 'Простые числа делятся только на 1 и на себя. Например: 2, 3, 5, 7, 11...' },
    { emoji: '🎲', title: 'Число 12', text: '12 делится на 2, 3, 4 и 6 — одно из самых «делимых» маленьких чисел!' },
    { emoji: '🔬', title: 'Число 42', text: '42 делится на 2, 3, 6, 7 — это «ответ на главный вопрос жизни»!' },
    { emoji: '💎', title: 'Число 100', text: '100 делится на 4 и 5, но не делится на 3, 6, 7, 8 и 9.' },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">🤩 Интересные факты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-4 h-full">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{fact.emoji}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">{fact.title}</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{fact.text}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export { FunFacts }
