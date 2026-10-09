//@/src/components/Header.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sections } from '@/types';
import type { Sections } from '@/types';
interface HeaderProps {
  activeSection: Sections;
  setActiveSection: (section: Sections) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('home')}
        >
          <span className="text-2xl">🎓</span>
          <h1 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Математика 5 класс
          </h1>
        </motion.div>

        {/* v1.2.0: перекрёстная ссылка на связанный проект «НОД и НОК» */}
        <a
          href="https://osmaav.github.io/mathematics_nok_nod/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-teal-600 hover:bg-teal-50 transition-all"
          title="Математика 5 класс — НОД и НОК"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          НОД и НОК
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-1">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${activeSection === s.id
                ? 'bg-violet-100 text-violet-700'
                : 'text-gray-500 hover:bg-gray-50'
                }`}
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <nav className="p-3 flex flex-col gap-1">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => { setActiveSection(s.id); setMenuOpen(false); }}
                  className={`px-4 py-3 rounded-xl text-left font-medium transition-all ${activeSection === s.id
                    ? 'bg-violet-100 text-violet-700'
                    : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {s.label}
                </button>
              ))}
              {/* v1.2.0: перекрёстная ссылка на проект «НОД и НОК» (мобильное меню) */}
              <a
                href="https://osmaav.github.io/mathematics_nok_nod/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl text-left font-medium text-teal-600 bg-teal-50 transition-all"
              >
                🔗 НОД и НОК
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export { Header };
