//@/src/App.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FunFacts } from './components/FunFacts';
import { RulesSection } from './components/RulesSection';
import { CheckerSection } from './components/CheckerSection';
import { InteractiveVisualizer } from './components/InteractiveVisualizer';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';
import type { Sections } from '@/types';

function App() {
  const [activeSection, setActiveSection] = useState<Sections>('home');

  const handleStart = (section: Sections, divisor?: number) => {
    setActiveSection(section);
    // Если передан делитель, сохраняем его в localStorage для RulesSection
    if (divisor && section === 'rules') {
      window.localStorage.setItem('selectedDivisors', JSON.stringify([divisor]));
      window.localStorage.setItem('activeRule', JSON.stringify(divisor));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HeroSection onStart={handleStart} />
              <FunFacts />
            </motion.div>
          )}

          {activeSection === 'rules' && (
            <motion.div key="rules" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <RulesSection />
            </motion.div>
          )}

          {activeSection === 'checker' && (
            <motion.div key="checker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CheckerSection />
              <InteractiveVisualizer />
            </motion.div>
          )}

          {activeSection === 'quiz' && (
            <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <QuizSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
