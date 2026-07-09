# Премиальное портфолио веб-разработчика

Темный премиальный сайт-портфолио для независимого full-stack веб-разработчика, который делает лендинги, MVP для стартапов, дашборды и бизнес-сайты.

## Стек

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Motion для контролируемых reveal-анимаций и CTA-взаимодействий
- Phosphor Icons
- Telegram deep link для отправки готового брифа

## Структура

```txt
src/app
  layout.tsx
  page.tsx
public/cases
  auren-studio/
  pulseops/
  voltwear/
  briefforge/
  nova-advisory/
src/components
  sections/
  ui/
  contact-form.tsx
  site-header.tsx
src/data
  content.ts
src/lib
  paths.ts
  utils.ts
```

## Запуск

Установите зависимости и запустите локальный сервер:

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Скрипты

```bash
npm run dev
npm run build
npm start
npm run preview
npm run lint
```

`npm run dev` удобен для разработки главной страницы. Для проверки статических сайтов кейсов используйте `npm run build && npm start`, потому что GitHub Pages будет раздавать уже собранную папку `out/`.

## Контактная форма

Форма валидирует поля на клиенте, собирает готовый текст брифа и открывает Telegram-чат `@ekyousuk` через deep link. Поля остаются на сайте, но сообщение пользователь отправляет вручную уже в Telegram.

## Статические сайты кейсов

Карточки в блоке "Избранные работы" ведут напрямую на статические сайты:

```txt
/cases/auren-studio/
/cases/pulseops/
/cases/voltwear/
/cases/briefforge/
/cases/nova-advisory/
```

Каждая папка внутри `public/cases/` содержит `index.html`, `styles.css`, `script.js` и `assets/`. Чтобы заменить заглушку на реальный проект, достаточно положить финальные HTML/CSS/JS файлы в нужную папку.

## Контент

Кейсы, услуги, этапы процесса, группы стека и варианты формы находятся в `src/data/content.ts`. Их можно заменить реальными работами или позже расширить до отдельных страниц проектов.

## Деплой

Проект настроен на статический экспорт Next.js и подходит для GitHub Pages. Команда `npm run build` создает папку `out/`.

Для пользовательского сайта `https://coreformdev.github.io/` дополнительный base path не нужен:

```bash
npm run build
```

Если репозиторий будет опубликован как project page, например `https://username.github.io/portfolio-sites/`, собирайте с переменной:

```bash
GITHUB_PAGES_BASE_PATH=/portfolio-sites npm run build
```
