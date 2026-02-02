# Static Site: Relevanty

Этот репозиторий теперь содержит чисто статическую версию сайта, без React/Vite и сборки.

## Структура
- `static/` — готовые страницы (`index.html`, `community.html`, `strategy.html`, `faq.html`, `apply.html`, `contact.html`), общие стили/скрипты (`assets/css/main.css`, `assets/js/main.js`), ассеты (`images/`, `fonts/`), `CNAME`.
- `.github/workflows/deploy.yml` — деплой на GitHub Pages, берёт содержимое `static/`.
- `.gitignore` — базовые игноры логов/IDE.

## Запуск локально
- Открыть `static/index.html` в браузере (работает по `file://`).
- Или запустить простой сервер в корне репо: `npx serve static` и открыть `http://localhost:3000`.

## Деплой
- При пуше в `main` GitHub Actions загружает папку `static` и публикует на Pages.
- Для любого другого хостинга можно просто раздать содержимое `static/` как корень сайта.
