# Mathematics Delimosty — Интерактивный образовательный сайт о правилах делимости

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Version](https://img.shields.io/badge/version-1.2.0-green.svg)](CHANGELOG.md)
[![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38bdf8.svg?logo=tailwindcss)](https://tailwindcss.com/)
[![Deploy](https://github.com/osmaav/mathematics_delimosty/actions/workflows/deploy.yml/badge.svg)](https://github.com/osmaav/mathematics_delimosty/actions/workflows/deploy.yml)

Интерактивный образовательный веб-сайт, предназначенный для обучения учеников правилам делимости чисел. Сайт включает в себя теоретические материалы, интерактивную визуализацию, проверку чисел на делимость и викторины для закрепления знаний.

## 🔗 Связанные проекты (v1.2.0)

Сайт связан перекрёстными ссылками с проектом «НОД и НОК» (ссылки друг на друга — в шапке обоих сайтов):

| Проект | Сайт | Репозиторий |
|---|---|---|
| Правила делимости (этот сайт) | https://osmaav.github.io/mathematics-divisibility/ | https://github.com/osmaav/mathematics-divisibility |
| НОД и НОК | https://osmaav.github.io/mathematics_nok_nod/ | https://github.com/osmaav/mathematics_nok_nod |

## 📋 Особенности

- **📚 Правила делимости** — подробное описание правил делимости на 3, 4, 5, 6, 7, 8 и 9
- **✅ Проверка чисел** — интерактивный инструмент для проверки чисел на делимость
- **🎨 Визуализация** — наглядное представление процесса деления и разбиения чисел
- **🧠 Викторины** — тесты для проверки и закрепления полученных знаний
- **🎯 Интересные факты** — занимательная информация о числах и делимости
- **📱 Адаптивный дизайн** — сайт корректно отображается на всех устройствах
- **🌙 Современный UI** — использует компоненты shadcn/ui и анимации Framer Motion
- **🔗 Перекрёстная ссылка на «НОД и НОК» (v1.2.0)** — в шапке сайта (десктоп и мобильное меню)
- **📲 Web-иконки для iOS/Android (v1.1.0)** — Apple Touch Icons и PWA-манифест для экранов iPhone 7…iPhone 16 и iPad 6…iPad 10

## 🎨 Иконки веб-приложения (v1.1.0)

Иконки генерируются скриптом `scripts/generate_icons.py` и хранятся в `public/icons/`.
Физическое разрешение — @2x от логического размера экрана (требование iOS):

| Устройство | Логический экран | Иконка |
|---|---|---|
| iPhone 7 / 8 / SE (2/3) | 375×667 @2x | `icon-180x180.png` (Apple Touch), `icon-192x192.png` (PWA/manifest) |
| iPhone X – 16 Pro Max | 390–430 pt @3x | `icon-180x180.png` |
| iPad 6 / 7 / 8 / 9 | 1024×768 @2x | `icon-152x152.png` |
| iPad 10 / Air | 1080×810 @2x | `icon-167x167.png` |
| iPad mini 5/6 | 744×1133 @2x | `icon-152x152.png` |
| iPad Pro 11" / 12.9" | 1194/1366 pt @2x | `icon-167x167.png` / `icon-152x152.png` |
| Android / PWA | — | `icon-48…512.png`, `manifest.webmanifest` |

Регенерация: `python3 scripts/generate_icons.py`

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
│   ├── icons/           # Web-иконки PNG 48–512px (v1.1.0)
│   └── manifest.webmanifest  # PWA-манифест (v1.1.0)
├── scripts/             # Служебные скрипты
│   └── generate_icons.py     # Генерация иконок (v1.1.0)
├── .github/workflows/
│   └── deploy.yml       # CI/CD: деплой в GitHub Pages (v1.1.0)
├── package.json         # Зависимости и скрипты (version: 1.2.0)
├── RELEASE.md         # Описание релизов
├── tsconfig.json        # Конфигурация TypeScript
├── vite.config.ts       # Конфигурация Vite
├── tailwind.config.js   # Конфигурация Tailwind CSS
├── CHANGELOG.md         # Журнал изменений (Keep a Changelog / SemVer)
└── README.md            # Документация
```

## 🚀 Деплой (GitHub Pages, v1.1.0)

CI/CD настроен через [.github/workflows/deploy.yml](.github/workflows/deploy.yml):
при пуше в ветку `main` (или вручную из вкладки *Actions*) выполняется сборка
(`npm run build` → каталог `./docs`) и публикация в GitHub Pages.

Версионирование проекта — по [Semantic Versioning](https://semver.org/lang/ru/),
журнал изменений — по формату [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/)
(см. [CHANGELOG.md](CHANGELOG.md)).

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
