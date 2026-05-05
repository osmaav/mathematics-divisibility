//@/src/lib/utils.ts

import type { Divisor } from '@/types';

export type DivisibilityResults = Record<Divisor, boolean>;

export interface DivisibilityRule {
  title: string;
  emoji: string;
  color: 'blue' | 'emerald' | 'amber' | 'orange' | 'rose' | 'violet';
  rule: string;
  example: string;
  steps: string[];
  tip: string;
}

export const divisibilityRules: Record<Divisor, DivisibilityRule> = {
  3: {
    title: 'Делимость на 3',
    emoji: '🔵',
    color: 'blue',
    rule: 'Число делится на 3, если сумма его цифр делится на 3.',
    example: '123 → 1 + 2 + 3 = 6 → 6 ÷ 3 = 2 ✓',
    steps: ['Сложи все цифры числа', 'Проверь, делится ли сумма на 3', 'Если да — число делится на 3'],
    tip: '123: 1+2+3=6, 6÷3=2 → делится!',
  },
  4: {
    title: 'Делимость на 4',
    emoji: '🟢',
    color: 'emerald',
    rule: 'Число делится на 4, если число из двух последних цифр делится на 4.',
    example: '324 → 24 ÷ 4 = 6 ✓',
    steps: ['Возьми две последние цифры', 'Проверь, делится ли это число на 4', 'Если да — всё число делится на 4'],
    tip: '324: последние цифры 24, 24÷4=6 → делится!',
  },
  5: {
    title: 'Делимость на 5',
    emoji: '🟡',
    color: 'amber',
    rule: 'Число делится на 5, если его последняя цифра — 0 или 5.',
    example: '235 → последняя цифра 5 ✓',
    steps: ['Посмотри на последнюю цифру', 'Если это 0 или 5 — число делится на 5'],
    tip: '235: последняя цифра 5 → делится! 230: последняя цифра 0 → тоже делится!',
  },
  6: {
    title: 'Делимость на 6',
    emoji: '🟠',
    color: 'orange',
    rule: 'Число делится на 6, если оно делится и на 2, и на 3 одновременно.',
    example: '132 → чётное (÷2) и 1+3+2=6 (÷3) ✓',
    steps: ['Проверь, чётное ли число (делится на 2)', 'Сложи цифры и проверь делимость на 3', 'Если оба условия верны — делится на 6'],
    tip: '132: чётное ✓, сумма цифр 6 делится на 3 ✓ → делится на 6!',
  },
  7: {
    title: 'Делимость на 7',
    emoji: '🔴',
    color: 'rose',
    rule: 'Отними от числа без последней цифры удвоенную последнюю цифру. Если результат делится на 7 — исходное число тоже.',
    example: '364 → 36 − 2×4 = 28 → 28 ÷ 7 = 4 ✓',
    steps: ['Отдели последнюю цифру', 'Умножь её на 2', 'Вычти из оставшегося числа', 'Проверь делимость на 7'],
    tip: '364: 36 − 8 = 28, 28÷7=4 → делится!',
  },
  8: {
    title: 'Делимость на 8',
    emoji: '🟣',
    color: 'violet',
    rule: 'Число делится на 8, если число из трёх последних цифр делится на 8.',
    example: '1512 → 512 ÷ 8 = 64 ✓',
    steps: ['Возьми три последние цифры', 'Проверь, делится ли это число на 8'],
    tip: '1512: последние три цифры 512, 512÷8=64 → делится!',
  },
  9: {
    title: 'Делимость на 9',
    emoji: '🟤',
    color: 'violet',
    rule: 'Число делится на 9, если сумма его цифр делится на 9.',
    example: '729 → 7 + 2 + 9 = 18 → 18 ÷ 9 = 2 ✓',
    steps: ['Сложи все цифры числа', 'Проверь, делится ли сумма на 9', 'Если да — число делится на 9'],
    tip: '729: 7+2+9=18, 18÷9=2 → делится!',
  },
};

export const checkDivisibility = (num: number, divisors: Divisor[]): DivisibilityResults => {
  const results: Partial<DivisibilityResults> = {};
  divisors.forEach((d: Divisor) => {
    results[d] = num % d === 0;
  });
  return results as DivisibilityResults;
};

export const sumOfDigits = (num: number): number =>
  num
    .toString()
    .split('')
    .reduce((acc: number, digit: string) => acc + parseInt(digit, 10), 0);

export const lastTwoDigits = (num: number): number =>
  parseInt(num.toString().slice(-2), 10);

export const lastThreeDigits = (num: number): number =>
  parseInt(num.toString().slice(-3), 10);

export interface QuizQuestion {
  id: number;
  number: number;
  divisor: Divisor;
  correctAnswer: boolean;
  text: string;
}

export const generateQuestions = (count = 10): QuizQuestion[] => {
  const divisors: Divisor[] = [3, 4, 5, 6, 7, 8, 9];
  const questions: QuizQuestion[] = [];

  for (let i = 0; i < count; i++) {
    const divisor = divisors[Math.floor(Math.random() * divisors.length)];
    const isDivisible = Math.random() > 0.5;
    let number: number;

    if (isDivisible) {
      number = divisor * (Math.floor(Math.random() * 30) + 2);
    } else {
      do {
        number = Math.floor(Math.random() * 300) + 10;
      } while (number % divisor === 0);
    }

    questions.push({
      id: i,
      number,
      divisor,
      correctAnswer: isDivisible,
      text: `Число ${number} делится на ${divisor}?`,
    });
  }

  return questions;
};
