# KONTRA SITE v7 — PLAYER SETTINGS

Статический сайт для Cloudflare Pages.

Новые разделы:

- CONTROL → LVL MOD: постоянные настройки аккаунта;
- CONTROL → CLASSES: выбор класса выжившего и зомби;
- изменения сохраняются даже когда игрок офлайн.

API задаётся в `config.js`:

- `controlBaseEndpoint` — live-команды;
- `settingsBaseEndpoint` — постоянные настройки;
- `authBaseEndpoint` — авторизация;
- `statusEndpoint` — статус сервера.

Сборщик не нужен. Framework preset: `None`, build command: `exit 0`, output directory: `/`.
