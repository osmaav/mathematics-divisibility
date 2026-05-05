//@/src/hooks/useLocalStorage.ts

import { useState, useEffect } from 'react';

/**
 * Хук для синхронизации состояния с localStorage
 * @template T — тип хранимого значения
 * @param key — ключ в localStorage
 * @param initialValue — значение по умолчанию, если ключ не найден
 * @returns кортеж [значение, функция-сеттер]
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  // Инициализация состояния с чтением из localStorage
  const [value, setValue] = useState<T>(() => {
    // Предотвращаем ошибку при серверном рендеринге (SSR)
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      // Парсим только если значение найдено
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      // Логируем ошибку в консоль для отладки
      console.warn(`useLocalStorage: ошибка чтения ключа "${key}"`, error);
      return initialValue;
    }
  });

  // Синхронизация с localStorage при изменении значения
  useEffect(() => {
    // Защита от SSR
    if (typeof window === 'undefined') return;

    try {
      // Разрешаем сохранять null/undefined через JSON.stringify
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Обработка ошибок квоты или приватного режима
      console.warn(`useLocalStorage: ошибка записи ключа "${key}"`, error);
    }
  }, [key, value]);

  return [value, setValue];
};
