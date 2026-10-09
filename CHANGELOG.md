# Ход изменений (Changelog)

Все значимые изменения в этом проекте документируются в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
а проект придерживается [Semantic Versioning](https://semver.org/lang/ru/).

## [1.2.0] - 2026-10-10

### Добавлено
- 🔗 Перекрёстная ссылка на связанный проект «НОД и НОК»
  (https://osmaav.github.io/mathematics_nok_nod/) в шапке сайта (`src/components/Header.tsx`):
  в десктопной навигации и в мобильном меню. Ответная ссылка на этот сайт добавлена
  в шапку проекта mathematics_nok_nod (v2.2.0).
- `RELEASE.md` — документ описания релизов с версионностью и комментариями.
- Комментарии с версией изменения (`v1.2.0`) в затронутых исходных файлах.

### Изменено
- `package.json`: версия `1.1.0` → `1.2.0` (минор — обратно совместимое добавление функционала).
- `README.md`: бейдж версии 1.2.0, раздел «Связанные проекты», пункт об особенностях.

## [1.1.0] - 2026-10-09

### Добавлено
- Web-иконки приложения (PNG, 48–512 px) в `public/icons/` для экранов iPhone 7…iPhone 16
  (включая SE 2/3, X–16 Pro Max) и iPad 6…iPad 10 (включая Air, mini, Pro 11"/12.9"):
  Apple Touch Icons 180×180 / 167×167 / 152×152, PWA-иконки 192×192 и 512×512 (maskable).
- `public/manifest.webmanifest` — манифест PWA (название, старт, тема, набор иконок).
- `scripts/generate_icons.py` (v1.0.0→1.1.0) — скрипт генерации иконок из SVG
  (рендеринг через CairoSVG, fallback — Pillow).
- Подключение иконок и манифеста в `index.html`: `<link rel="icon">`,
  `<link rel="apple-touch-icon" sizes=...>`, `<link rel="manifest">`,
  meta-теги `apple-mobile-web-app-capable`, `apple-mobile-web-app-title`, обновлён `theme-color`.
- `.github/workflows/deploy.yml` — CI/CD деплой статики в GitHub Pages по эталонному
  примеру (checkout@v4, setup-node@v4 lts/*, configure-pages@v5, upload-pages-artifact@v3,
  deploy-pages@v4; каталог сборки `./docs`).
- `CHANGELOG.md` — журнал изменений в формате Keep a Changelog (SemVer).
- Версионность и комментарии добавлены во все изменённые файлы
  (`package.json`, `index.html`, `vite.config.ts`, `README.md`, `deploy.yml`, скрипт генерации).

### Изменено
- `package.json`: версия `1.0.0` → `1.1.0` (минор — обратно совместимое добавление функционала).
- `index.html`: `theme-color` `#FFFFFF` → `#2563eb` (фирменный цвет), добавлены iOS/PWA meta-теги.
- `README.md`: добавлены бейджи версии и деплоя, разделы «Иконки веб-приложения»,
  «Деплой (GitHub Pages)», обновлена структура проекта.
- `.github/workflows/deploy.yml`: переработан с двух-stage схемы (build+deploy)
  на единый job `deploy` согласно эталонному примеру; `cancel-in-progress: true`.

## [1.0.0]

### Добавлено
- Интерактивный образовательный сайт «Правила делимости» (React 19 + TypeScript + Vite + Tailwind CSS):
  правила делимости на 3, 4, 5, 6, 7, 8, 9; проверка чисел; визуализация; викторины; интересные факты.
- Компоненты shadcn/ui (Button, Card, ProgressBar), анимации Framer Motion.
- Плавные переходы между секциями и автовыбор фильтра делителя при клике на карточки
  быстрого предпросмотра на главном экране.
- Адаптивный дизайн для мобильных устройств и десктопа.
- Базовый workflow деплоя в GitHub Pages и конфигурация Vite (`base`, сборка в `./docs`).

[1.1.0]: https://github.com/osmaav/mathematics_delimosty/releases/tag/v1.1.0
[1.0.0]: https://github.com/osmaav/mathematics_delimosty/releases/tag/v1.0.0
