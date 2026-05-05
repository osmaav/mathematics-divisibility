# Mathematics Delimosty — Интерактивный образовательный сайт о правилах делимости

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38bdf8.svg?logo=tailwindcss)](https://tailwindcss.com/)

Интерактивный образовательный веб-сайт, предназначенный для обучения учеников правилам делимости чисел. Сайт включает в себя теоретические материалы, интерактивную визуализацию, проверку чисел на делимость и викторины для закрепления знаний.

## 📋 Особенности

- **📚 Правила делимости** — подробное описание правил делимости на 2, 3, 5, 9, 10 и другие числа
- **✅ Проверка чисел** — интерактивный инструмент для проверки чисел на делимость
- **🎨 Визуализация** — наглядное представление процесса деления и разбиения чисел
- **🧠 Викторины** — тесты для проверки и закрепления полученных знаний
- **🎯 Интересные факты** — занимательная информация о числах и делимости
- **📱 Адаптивный дизайн** — сайт корректно отображается на всех устройствах
- **🌙 Современный UI** — использует компоненты shadcn/ui и анимации Framer Motion

## 🛠 Технологии

- **Frontend:** React 19.2.0, TypeScript 5.9.3
- **Сборка:** Vite 7.2.4
- **Стилизация:** Tailwind CSS 3.4.19
- **Компоненты:** shadcn/ui
- **Анимации:** Framer Motion 12.34.2
- **Формы:** React Hook Form 7.70.0, Zod 4.3.5
- **Утилиты:** clsx, tailwind-merge, class-variance-authority

## 📦 Установка

### Требования

- Node.js 20 или выше
- npm или другой пакетный менеджер

### Шаги установки

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/osmaav/mathematics_delimosty.git
   cd mathematics_delimosty
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   ```

4. Откройте браузер и перейдите по адресу `http://localhost:5173`

## 🚀 Доступные команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск сервера разработки с горячей перезагрузкой |
| `npm run build` | Сборка проекта для продакшена |
| `npm run preview` | Предварительный просмотр собранной версии |
| `npm run lint` | Проверка кода с помощью ESLint |

## 📁 Структура проекта

```
mathematics_delimosty/
├── src/
│   ├── components/       # React компоненты
│   │   ├── ui/          # Базовые UI компоненты (shadcn/ui)
│   │   ├── Header.tsx   # Шапка сайта
│   │   ├── HeroSection.tsx
│   │   ├── RulesSection.tsx
│   │   ├── CheckerSection.tsx
│   │   ├── QuizSection.tsx
│   │   └── ...
│   ├── hooks/           # Кастомные React хуки
│   │   ├── useQuiz.ts
│   │   └── useLocalStorage.ts
│   ├── types/           # TypeScript типы
│   │   └── index.ts
│   ├── lib/             # Вспомогательные функции
│   ├── App.tsx          # Главный компонент приложения
│   ├── main.tsx         # Точка входа
│   └── index.css        # Глобальные стили
├── public/              # Статические файлы
├── package.json         # Зависимости и скрипты
├── tsconfig.json        # Конфигурация TypeScript
├── vite.config.ts       # Конфигурация Vite
├── tailwind.config.js   # Конфигурация Tailwind CSS
└── README.md            # Документация
```

## 🎨 Компоненты

Проект использует более компоненты из библиотеки shadcn/ui:

- Button, Card, 
- Progress
- И многие другие

Пример использования:
```tsx
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
```

## 📄 Лицензия

Этот проект распространяется под лицензией ISC.

## 👤 Автор

- **@osmaav**

## 🔗 Ссылки

- [Репозиторий на GitHub](https://github.com/osmaav/mathematics_delimosty)
- [Сообщить об ошибке](https://github.com/osmaav/mathematics_delimosty/issues)

---

Создано с ❤️ для обучения сына
