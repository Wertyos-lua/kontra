# KONTRA // ZOMBIE MOD — сайт

Оригинальный одностраничный сайт для сервера KONTRA FPS. Подходит для GitHub Pages и обычного статического хостинга.

## Быстрый запуск

1. Создай новый репозиторий GitHub.
2. Загрузи **содержимое этой папки** в корень репозитория.
3. Открой `Settings → Pages`.
4. Выбери ветку `main`, папку `/root`, затем сохрани.
5. После публикации GitHub покажет адрес сайта.

## Что менять

Все основные параметры находятся в `config.js`:

```js
window.KONTRA_CONFIG = {
  serverName: "KONTRA // ZOMBIE",
  serverAddress: "31.25.244.236:7433",
  maxPlayers: 16,
  statusEndpoint: "",
  statusRefreshMs: 15000,
  staleAfterMs: 60000,
  links: {
    telegram: "",
    discord: "",
    privileges: "https://kontrafps.tilda.ws/"
  }
};
```

Пустые ссылки Telegram и Discord автоматически становятся неактивными.

## Подключение живого онлайна

В `statusEndpoint` нужно указать публичный HTTPS GET-адрес внешнего API:

```js
statusEndpoint: "https://api.example.com/kontra/status"
```

API должен возвращать JSON:

```json
{
  "online": 5,
  "maxPlayers": 16,
  "map": "zm_sector_13",
  "mode": "Zombie Infection",
  "serverOnline": true,
  "updatedAt": 1784840000
}
```

`updatedAt` — Unix timestamp в секундах или миллисекундах. Если данные старше `staleAfterMs`, сайт автоматически покажет сервер офлайн и `0/16`.

Сайт также понимает альтернативные поля:

- `players`, `playerCount`, `currentPlayers`
- `max`, `slots`
- `mapName`
- `gameMode`
- `timestamp`, `updated`, `time`

## Структура

- `index.html` — разметка
- `styles.css` — весь дизайн и мобильная адаптация
- `app.js` — онлайн, анимации, копирование IP
- `config.js` — настройки сервера и ссылки
- `status.example.json` — пример ответа API
- `assets/logo.svg` — логотип
- `assets/favicon.svg` — иконка вкладки

## Важно

GitHub Pages размещает статический сайт. Для приёма обновлений от Lua-сервера нужен отдельный внешний API. Сам сайт уже подготовлен для чтения этого API.
