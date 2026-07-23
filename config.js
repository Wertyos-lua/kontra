window.KONTRA_CONFIG = {
  // Основные данные сервера
  serverName: "KONTRA // ZOMBIE",
  serverAddress: "31.25.243.157:49494",
  maxPlayers: 16,

  // После создания внешнего API вставь сюда публичный GET-адрес.
  // Ожидаемый JSON описан в status.example.json и README_RU.md.
  statusEndpoint: "https://kontra-status-api.moscow-kuro-street.workers.dev/status",
  statusRefreshMs: 15000,
  staleAfterMs: 60000,

  // Ссылки. Пустая строка отключает кнопку.
  links: {
    telegram: "https://t.me/kontra_fps_ru",
    discord: "https://discord.gg/bj2xedeZ7K",
    privileges: "https://kontrafps.tilda.ws/"
  }
};
