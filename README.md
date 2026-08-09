# Static Site: Relevanty

Репозиторий содержит одностраничную статическую версию сайта без сборки.

## Структура

- `static/index.html` — весь сайт в одном HTML-файле, включая стили, изображения, SEO-мета и счетчики.
- `static/CNAME` — домен для GitHub Pages.
- `.github/workflows/deploy.yml` — деплой на GitHub Pages, публикует содержимое `static/`.

## Запуск локально

- Открыть `static/index.html` в браузере.
- Или запустить простой сервер в корне репо: `npx serve static` и открыть `http://localhost:3000`.

## Деплой

При пуше в ветку `creamVersion` GitHub Actions загружает папку `static` и публикует ее на Pages.
