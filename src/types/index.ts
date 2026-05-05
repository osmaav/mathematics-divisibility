// @/types/index.ts

import type { ReactNode, MouseEventHandler } from 'react';

/**
 * Union type для ID секций — используется в state и сравнениях
 */
export type Sections = 'home' | 'rules' | 'checker' | 'quiz';

/**
 * Тип объекта секции для навигации
 */
export type SectionItem = {
  id: Sections;
  label: string;
};

/**
 * Тип для делителей 
 */
export type Divisor = 3 | 4 | 5 | 6 | 7 | 8 | 9;


/**
 * Массив данных для меню навигации
 */
export const sections: SectionItem[] = [
  { id: 'home', label: '🏠 Главная' },
  { id: 'rules', label: '📚 Правила' },
  { id: 'checker', label: '🔍 Проверка' },
  { id: 'quiz', label: '🎯 Тест' },
];

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
