/* KONTRA SITE v7 — PERSISTENT PLAYER SETTINGS */
(() => {
  "use strict";
  // KONTRA site app v9 — animated day/night lamp theme.

  const config = window.KONTRA_CONFIG || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const i18n = {
    en: {
      serverOnline: "SERVER ONLINE",
      serverOffline: "SERVER OFFLINE",
      playersOnline: "PLAYERS ONLINE",
      map: "MAP",
      mode: "MODE",
      updated: "UPDATED",
      zombies: "ZOMBIES",
      survivors: "SURVIVORS",
      localTime: "LOCAL TIME",
      capacity: "CAPACITY",
      playersOnServer: "PLAYERS ON SERVER",
      playersBridgeTitle: "PLAYER DATA IS UNAVAILABLE",
      playersBridgeText: "The server is online, but the live player list has not been received.",
      serverEmpty: "SERVER IS EMPTY",
      serverEmptyText: "No players are connected right now.",
      serverOfflinePlayers: "SERVER IS OFFLINE",
      serverOfflinePlayersText: "The live player list will return when the server sender reconnects.",
      fullScoreboard: "FULL SCOREBOARD",
      yourStats: "YOUR STATISTICS",
      profileLocked: "PROFILE IS LOCKED",
      profileLockedText: "Sign in through the game or with your username and password.",
      signIn: "SIGN IN",
      home: "HOME",
      server: "SERVER",
      control: "CONTROL",
      top: "TOP",
      profile: "PROFILE",
      liveScoreboard: "LIVE SCOREBOARD",
      controlCenter: "CONTROL CENTER",
      retroPinball: "RETRO PINBALL",
      retroPinballText: "Launch the KONTRA neon arcade mini-game",
      pinballScore: "SCORE",
      pinballBalls: "BALLS",
      pinballReady: "READY?",
      pinballReadyText: "Start the game, launch the ball and use both flippers.",
      pinballStart: "START GAME",
      pinballLaunch: "LAUNCH",
      pinballLeft: "LEFT",
      pinballRight: "RIGHT",
      pinballTip: "Keyboard: A / D or ← / →. Space launches the ball.",
      pinballLaunchPrompt: "PRESS LAUNCH",
      pinballLaunchPromptText: "The ball is ready in the launch lane.",
      pinballGameOver: "GAME OVER",
      pinballGameOverText: "Final score: {score}",
      pinballResume: "CONTINUE",
      webControl: "WEB CONTROL",
      webControlReady: "WEB CONTROL READY",
      webControlHint: "Persistent settings are saved while offline. Live server actions require an active connection.",
      controlWaiting: "Select an action.",
      controlLoginRequired: "Sign in before using web control.",
      controlSending: "SENDING COMMAND...",
      controlDelivered: "COMMAND DELIVERED TO THE GAME",
      controlPlayerOffline: "Your player is not connected to the server.",
      controlFailed: "The command could not be executed.",
      controlTimeout: "The server did not confirm the command in time.",
      controlLvlLead: "Open the LVL MOD menu directly in your active game session.",
      controlClassesLead: "Choose which class menu to open in the game.",
      controlMenuLead: "Open the main server menu in the game.",
      controlAdminLead: "Administrator-only server controls.",
      openLvl: "OPEN LVL MOD",
      openLvlText: "Stats, shop, inventory and LVL MOD functions",
      openCtClasses: "SURVIVOR CLASSES",
      openCtClassesText: "Open the CT / survivor class menu",
      openTClasses: "ZOMBIE CLASSES",
      openTClassesText: "Open the T / zombie class menu",
      openGameMenu: "OPEN GAME MENU",
      openGameMenuText: "Votes, teleports, news and server functions",
      openAdminMenu: "OPEN ADMIN CONTROL",
      openAdminMenuText: "Administrator menu in the active game session",
      gameMenuWebLead: "Choose a live server action. Your player must be connected to the server.",
      openTeleport: "OPEN TELEPORT",
      openTeleportText: "Open the player teleport menu",
      openTurret: "OPEN TURRET MENU",
      openTurretText: "Available while using the Turret class",
      soundOn: "ENABLE SOUNDS",
      soundOnText: "Enable server and weapon sounds",
      soundOff: "DISABLE SOUNDS",
      soundOffText: "Disable optional server sounds",
      openAdminMessage: "MESSAGE ADMIN",
      openAdminMessageText: "Open the private administrator message form",
      adminPanelLead: "Select an action, a live player and an optional value.",
      adminActionLabel: "ADMIN ACTION",
      adminTargetLabel: "TARGET PLAYER",
      adminValueLabel: "VALUE",
      chooseAction: "SELECT ACTION",
      choosePlayer: "SELECT PLAYER",
      noLivePlayers: "NO LIVE PLAYERS",
      executeAction: "EXECUTE ACTION",
      adminOpenInGame: "OPEN IN-GAME ADMIN MENU",
      adminKick: "KICK PLAYER",
      adminBan: "BAN PLAYER",
      adminMute: "MUTE CHAT",
      adminUnmute: "UNMUTE CHAT",
      adminVoiceMute: "MUTE VOICE",
      adminVoiceUnmute: "UNMUTE VOICE",
      adminKill: "KILL PLAYER",
      adminRevive: "REVIVE PLAYER",
      adminTeam: "CHANGE TEAM",
      adminHp: "SET HP",
      adminArmor: "SET ARMOR",
      adminMoney: "GIVE MONEY",
      adminTeleport: "TELEPORT TO ADMIN",
      adminImmortal: "TOGGLE IMMORTAL",
      adminInvisible: "TOGGLE INVISIBLE",
      adminResetScore: "RESET SCORE",
      adminEndMap: "END MAP",
      adminRoundMode: "START ROUND MODE",
      confirmAdminDanger: "Confirm this administrator action?",
      targetOffline: "The selected player is no longer connected.",
      targetChanged: "The player list changed. Reopen the panel and select the player again.",
      selfProtected: "This action cannot target your own player.",
      adminProtected: "Another administrator is protected from this action.",
      controlInvalidValue: "Invalid action value.",
      adminRequired: "Administrator access is required.",
      whereLoginPassword: "Where do I find the username and password?",
      authHelpTitle: "WHERE TO FIND LOGIN DETAILS",
      authHelpText: "Enter the same username and password that are set in the game profile window where you change your nickname.",
      statsShopInventory: "Stats, shop, inventory",
      classes: "CLASSES",
      survivorZombieClasses: "Survivor and zombie classes",
      votesTeleportsNews: "Votes, teleports, news",
      adminOnly: "Available to administrators",
      ranking: "RANKING",
      topPlayers: "TOP PLAYERS",
      rankingPending: "The global LVL MOD leaderboard will appear here.",
      globalRanking: "GLOBAL LVL MOD RANKING",
      leaderboardLoading: "LOADING RANKING...",
      leaderboardEmpty: "NO PLAYERS IN RANKING YET",
      leaderboardError: "RANKING IS TEMPORARILY UNAVAILABLE",
      rankUpdated: "UPDATED",
      onlineNow: "ONLINE",
      offlineNow: "OFFLINE",
      playerCard: "PLAYER CARD",
      liveStatus: "LIVE STATUS",
      lvlProfile: "LVL MOD PROFILE",
      profileNotFound: "LVL MOD PROFILE NOT FOUND",
      profileNotFoundText: "Live server data is available, but this player has not synchronized a web profile yet.",
      botProfileText: "Bots only have live server data.",
      loadingPlayer: "LOADING PLAYER...",
      playerLookupError: "Could not load the LVL MOD profile.",
      team: "TEAM",
      status: "STATUS",
      account: "ACCOUNT",
      playerProfile: "PLAYER PROFILE",
      profilePending: "Sign in to view your LVL MOD profile.",
      usernamePassword: "Username and password",
      shareSite: "SHARE SITE",
      publicLinkOnly: "Public link only",
      community: "Community",
      voiceNews: "Voice and news",
      privileges: "PRIVILEGES",
      serverSupport: "Server support",
      copyIp: "COPY IP",
      signInAccount: "SIGN IN TO ACCOUNT",
      username: "USERNAME",
      password: "PASSWORD",
      authPending: "Use your in-game username and password.",
      justNow: "JUST NOW",
      secondsAgo: "SEC. AGO",
      minutesAgo: "MIN. AGO",
      copied: "Copied",
      shareCopied: "Public site link copied",
      authNotReady: "Authorization service is unavailable",
      unknown: "UNKNOWN",
      zombiesTeam: "ZOMBIES",
      survivorsTeam: "SURVIVORS",
      unknownTeam: "NO TEAM",
      alive: "ALIVE",
      dead: "DEAD",
      bot: "BOT",
      hp: "HP",
      armor: "ARMOR",
      score: "SCORE",
      deaths: "DEATHS",
      morePlayers: "MORE",
      noPlayersInTeam: "NO PLAYERS",
      liveData: "LIVE DATA",
      realPlayer: "PLAYER",
      authReady: "Use your in-game username and password.",
      signingIn: "SIGNING IN...",
      ticketSigningIn: "AUTHORIZING THROUGH THE GAME...",
      invalidCredentials: "Incorrect username or password.",
      ticketInvalid: "The personal link has expired or was already used.",
      networkError: "Connection error. Try again.",
      loginSuccess: "Signed in successfully",
      signedInAs: "SIGNED IN AS",
      signOut: "SIGN OUT",
      level: "LEVEL",
      kills: "KILLS",
      kd: "K/D",
      gameTime: "GAME TIME",
      matches: "MATCHES",
      wins: "WINS",
      tokens: "TOKENS",
      role: "ROLE",
      winRate: "WIN RATE",
      firstJoin: "FIRST JOIN",
      profileUpdated: "PROFILE UPDATED",
      openProfile: "OPEN PROFILE",
      accountActive: "ACCOUNT ACTIVE",
      authUnavailable: "Authorization is temporarily unavailable.",
      settingsLoading: "LOADING PLAYER SETTINGS...",
      settingsNotSynced: "SETTINGS HAVE NOT BEEN SYNCHRONIZED YET",
      settingsNotSyncedText: "Install the new server bridge and join the server once. The settings will then be available even while you are offline.",
      settingsSavedOnline: "SAVED — APPLYING IN THE GAME",
      settingsSavedOffline: "SAVED — WILL APPLY ON YOUR NEXT JOIN",
      settingsApplied: "SETTINGS APPLIED",
      settingsPending: "SAVED SETTINGS ARE WAITING TO BE APPLIED",
      settingsFailed: "THE GAME COULD NOT APPLY THE SETTINGS",
      saveSettings: "SAVE SETTINGS",
      notSelected: "NOT SELECTED",
      languageSetting: "MENU LANGUAGE",
      prefixSetting: "PREFIX",
      prefixColorSetting: "PREFIX COLOR",
      ctSkinSetting: "SURVIVOR SKIN",
      skinColorSetting: "SKIN GLOW",
      critBulletSetting: "CRITICAL SHOT",
      minimapSetting: "MINIMAP",
      weaponSoundsSetting: "WEAPON SOUNDS",
      ctClassSetting: "SURVIVOR CLASS",
      tClassSetting: "ZOMBIE CLASS",
      persistentSettingsLead: "Configure your account now. The selection is saved while offline and is applied when you join the server.",
      liveActionRequired: "This action requires an active server connection.",
      hoursShort: "h",
      minutesShort: "m"
    },
    ru: {
      serverOnline: "СЕРВЕР ОНЛАЙН",
      serverOffline: "СЕРВЕР ОФЛАЙН",
      playersOnline: "ИГРОКОВ ОНЛАЙН",
      map: "КАРТА",
      mode: "РЕЖИМ",
      updated: "ОБНОВЛЕНО",
      zombies: "ЗОМБИ",
      survivors: "ВЫЖИВШИЕ",
      localTime: "МЕСТНОЕ ВРЕМЯ",
      capacity: "ЗАПОЛНЕНИЕ",
      playersOnServer: "ИГРОКИ НА СЕРВЕРЕ",
      playersBridgeTitle: "ДАННЫЕ ИГРОКОВ НЕДОСТУПНЫ",
      playersBridgeText: "Сервер работает, но живой список игроков ещё не получен.",
      serverEmpty: "СЕРВЕР ПУСТ",
      serverEmptyText: "Сейчас на сервере нет подключённых игроков.",
      serverOfflinePlayers: "СЕРВЕР ОФЛАЙН",
      serverOfflinePlayersText: "Живой список появится после подключения серверного sender.",
      fullScoreboard: "ПОЛНАЯ ТАБЛИЦА",
      yourStats: "ВАША СТАТИСТИКА",
      profileLocked: "ПРОФИЛЬ ЗАКРЫТ",
      profileLockedText: "Войдите через игру или по логину и паролю.",
      signIn: "ВОЙТИ",
      home: "ГЛАВНАЯ",
      server: "СЕРВЕР",
      control: "УПРАВЛЕНИЕ",
      top: "ТОП",
      profile: "ПРОФИЛЬ",
      liveScoreboard: "ТАБЛИЦА ИГРОКОВ",
      controlCenter: "ЦЕНТР УПРАВЛЕНИЯ",
      retroPinball: "РЕТРО ПИНБОЛ",
      retroPinballText: "Запустить неоновую мини-игру KONTRA",
      pinballScore: "СЧЁТ",
      pinballBalls: "ШАРЫ",
      pinballReady: "ГОТОВЫ?",
      pinballReadyText: "Запустите игру, подайте шар и управляйте двумя лапками.",
      pinballStart: "НАЧАТЬ ИГРУ",
      pinballLaunch: "ЗАПУСК",
      pinballLeft: "ЛЕВАЯ",
      pinballRight: "ПРАВАЯ",
      pinballTip: "Клавиатура: A / D или ← / →. Пробел запускает шар.",
      pinballLaunchPrompt: "НАЖМИТЕ ЗАПУСК",
      pinballLaunchPromptText: "Шар готов в пусковом канале.",
      pinballGameOver: "ИГРА ОКОНЧЕНА",
      pinballGameOverText: "Итоговый счёт: {score}",
      pinballResume: "ПРОДОЛЖИТЬ",
      webControl: "WEB УПРАВЛЕНИЕ",
      webControlReady: "УПРАВЛЕНИЕ ПОДКЛЮЧЕНО",
      webControlHint: "Постоянные настройки сохраняются офлайн. Для живых команд требуется подключение к серверу.",
      controlWaiting: "Выберите действие.",
      controlLoginRequired: "Сначала войдите в аккаунт.",
      controlSending: "ОТПРАВЛЯЮ КОМАНДУ...",
      controlDelivered: "КОМАНДА ДОСТАВЛЕНА В ИГРУ",
      controlPlayerOffline: "Ваш игрок сейчас не подключён к серверу.",
      controlFailed: "Не удалось выполнить команду.",
      controlTimeout: "Сервер не подтвердил команду вовремя.",
      controlLvlLead: "Открыть меню LVL MOD прямо в вашей активной игровой сессии.",
      controlClassesLead: "Выберите меню классов, которое нужно открыть в игре.",
      controlMenuLead: "Открыть главное серверное меню в игре.",
      controlAdminLead: "Управление, доступное только администраторам.",
      openLvl: "ОТКРЫТЬ LVL MOD",
      openLvlText: "Статистика, магазин, рюкзак и функции LVL MOD",
      openCtClasses: "КЛАССЫ ВЫЖИВШИХ",
      openCtClassesText: "Открыть меню CT-классов выживших",
      openTClasses: "КЛАССЫ ЗОМБИ",
      openTClassesText: "Открыть меню T-классов зомби",
      openGameMenu: "ОТКРЫТЬ GAME MENU",
      openGameMenuText: "Голосования, телепорты, новости и функции сервера",
      openAdminMenu: "ОТКРЫТЬ ADMIN CONTROL",
      openAdminMenuText: "Админ-меню в активной игровой сессии",
      gameMenuWebLead: "Выберите живое действие сервера. Ваш игрок должен находиться на сервере.",
      openTeleport: "ОТКРЫТЬ ТЕЛЕПОРТ",
      openTeleportText: "Открыть меню телепорта к игрокам",
      openTurret: "ОТКРЫТЬ МЕНЮ ТУРЕЛИ",
      openTurretText: "Доступно при выбранном классе Turret",
      soundOn: "ВКЛЮЧИТЬ ЗВУКИ",
      soundOnText: "Включить серверные и оружейные звуки",
      soundOff: "ВЫКЛЮЧИТЬ ЗВУКИ",
      soundOffText: "Отключить дополнительные звуки сервера",
      openAdminMessage: "НАПИСАТЬ АДМИНУ",
      openAdminMessageText: "Открыть форму личного сообщения администратору",
      adminPanelLead: "Выберите действие, игрока онлайн и дополнительное значение.",
      adminActionLabel: "ДЕЙСТВИЕ АДМИНА",
      adminTargetLabel: "ЦЕЛЕВОЙ ИГРОК",
      adminValueLabel: "ЗНАЧЕНИЕ",
      chooseAction: "ВЫБЕРИТЕ ДЕЙСТВИЕ",
      choosePlayer: "ВЫБЕРИТЕ ИГРОКА",
      noLivePlayers: "НЕТ ИГРОКОВ ОНЛАЙН",
      executeAction: "ВЫПОЛНИТЬ ДЕЙСТВИЕ",
      adminOpenInGame: "ОТКРЫТЬ АДМИН-МЕНЮ В ИГРЕ",
      adminKick: "КИКНУТЬ ИГРОКА",
      adminBan: "ЗАБАНИТЬ ИГРОКА",
      adminMute: "ВЫДАТЬ МУТ ЧАТА",
      adminUnmute: "СНЯТЬ МУТ ЧАТА",
      adminVoiceMute: "ВЫДАТЬ ГОЛОСОВОЙ МУТ",
      adminVoiceUnmute: "СНЯТЬ ГОЛОСОВОЙ МУТ",
      adminKill: "УБИТЬ ИГРОКА",
      adminRevive: "ВОСКРЕСИТЬ ИГРОКА",
      adminTeam: "СМЕНИТЬ КОМАНДУ",
      adminHp: "УСТАНОВИТЬ HP",
      adminArmor: "УСТАНОВИТЬ БРОНЮ",
      adminMoney: "ВЫДАТЬ ДЕНЬГИ",
      adminTeleport: "ТЕЛЕПОРТИРОВАТЬ К АДМИНУ",
      adminImmortal: "ПЕРЕКЛЮЧИТЬ БЕССМЕРТИЕ",
      adminInvisible: "ПЕРЕКЛЮЧИТЬ НЕВИДИМОСТЬ",
      adminResetScore: "СБРОСИТЬ СЧЁТ",
      adminEndMap: "ЗАВЕРШИТЬ КАРТУ",
      adminRoundMode: "ЗАПУСТИТЬ РЕЖИМ РАУНДА",
      confirmAdminDanger: "Подтвердить это административное действие?",
      targetOffline: "Выбранный игрок уже вышел с сервера.",
      targetChanged: "Список игроков изменился. Откройте панель заново и выберите игрока ещё раз.",
      selfProtected: "Это действие нельзя применить к самому себе.",
      adminProtected: "Другой администратор защищён от этого действия.",
      controlInvalidValue: "Недопустимое значение действия.",
      adminRequired: "Требуются права администратора.",
      whereLoginPassword: "Где взять логин и пароль?",
      authHelpTitle: "ГДЕ ВЗЯТЬ ДАННЫЕ ДЛЯ ВХОДА",
      authHelpText: "Введите логин и пароль как у вас в настройках игры, где вы меняете свой ник.",
      statsShopInventory: "Статистика, магазин, рюкзак",
      classes: "КЛАССЫ",
      survivorZombieClasses: "Классы людей и зомби",
      votesTeleportsNews: "Голосования, телепорт, новости",
      adminOnly: "Доступно администраторам",
      ranking: "РЕЙТИНГ",
      topPlayers: "ТОП ИГРОКОВ",
      rankingPending: "Здесь появится глобальный рейтинг LVL MOD.",
      globalRanking: "ГЛОБАЛЬНЫЙ РЕЙТИНГ LVL MOD",
      leaderboardLoading: "ЗАГРУЗКА РЕЙТИНГА...",
      leaderboardEmpty: "В РЕЙТИНГЕ ПОКА НЕТ ИГРОКОВ",
      leaderboardError: "РЕЙТИНГ ВРЕМЕННО НЕДОСТУПЕН",
      rankUpdated: "ОБНОВЛЕНО",
      onlineNow: "ОНЛАЙН",
      offlineNow: "ОФЛАЙН",
      playerCard: "КАРТОЧКА ИГРОКА",
      liveStatus: "ЖИВОЙ СТАТУС",
      lvlProfile: "ПРОФИЛЬ LVL MOD",
      profileNotFound: "ПРОФИЛЬ LVL MOD НЕ НАЙДЕН",
      profileNotFoundText: "Живые данные сервера доступны, но веб-профиль этого игрока ещё не синхронизирован.",
      botProfileText: "Для ботов доступны только живые данные сервера.",
      loadingPlayer: "ЗАГРУЗКА ИГРОКА...",
      playerLookupError: "Не удалось загрузить профиль LVL MOD.",
      team: "КОМАНДА",
      status: "СТАТУС",
      account: "АККАУНТ",
      playerProfile: "ПРОФИЛЬ ИГРОКА",
      profilePending: "Войдите, чтобы открыть профиль LVL MOD.",
      usernamePassword: "Логин и пароль",
      shareSite: "ПОДЕЛИТЬСЯ САЙТОМ",
      publicLinkOnly: "Только публичная ссылка",
      community: "Сообщество",
      voiceNews: "Голос и новости",
      privileges: "ПРИВИЛЕГИИ",
      serverSupport: "Поддержка сервера",
      copyIp: "КОПИРОВАТЬ IP",
      signInAccount: "ВОЙТИ В АККАУНТ",
      username: "ЛОГИН",
      password: "ПАРОЛЬ",
      authPending: "Введите игровой логин и пароль.",
      justNow: "ТОЛЬКО ЧТО",
      secondsAgo: "СЕК. НАЗАД",
      minutesAgo: "МИН. НАЗАД",
      copied: "Скопировано",
      shareCopied: "Публичная ссылка скопирована",
      authNotReady: "Сервис авторизации временно недоступен",
      unknown: "НЕИЗВЕСТНО",
      zombiesTeam: "ЗОМБИ",
      survivorsTeam: "ВЫЖИВШИЕ",
      unknownTeam: "БЕЗ КОМАНДЫ",
      alive: "ЖИВ",
      dead: "МЁРТВ",
      bot: "БОТ",
      hp: "HP",
      armor: "БРОНЯ",
      score: "СЧЁТ",
      deaths: "СМЕРТИ",
      morePlayers: "ЕЩЁ",
      noPlayersInTeam: "НЕТ ИГРОКОВ",
      liveData: "ЖИВЫЕ ДАННЫЕ",
      realPlayer: "ИГРОК",
      authReady: "Введите игровой логин и пароль.",
      signingIn: "ВХОД...",
      ticketSigningIn: "АВТОРИЗАЦИЯ ЧЕРЕЗ ИГРУ...",
      invalidCredentials: "Неверный логин или пароль.",
      ticketInvalid: "Персональная ссылка истекла или уже использована.",
      networkError: "Ошибка соединения. Повторите попытку.",
      loginSuccess: "Вход выполнен",
      signedInAs: "ВЫ ВОШЛИ КАК",
      signOut: "ВЫЙТИ",
      level: "УРОВЕНЬ",
      kills: "УБИЙСТВА",
      kd: "K/D",
      gameTime: "ВРЕМЯ В ИГРЕ",
      matches: "МАТЧИ",
      wins: "ПОБЕДЫ",
      tokens: "ТОКЕНЫ",
      role: "РОЛЬ",
      winRate: "ПРОЦЕНТ ПОБЕД",
      firstJoin: "ПЕРВЫЙ ВХОД",
      profileUpdated: "ПРОФИЛЬ ОБНОВЛЁН",
      openProfile: "ОТКРЫТЬ ПРОФИЛЬ",
      accountActive: "АККАУНТ АКТИВЕН",
      authUnavailable: "Авторизация временно недоступна.",
      settingsLoading: "ЗАГРУЗКА НАСТРОЕК ИГРОКА...",
      settingsNotSynced: "НАСТРОЙКИ ЕЩЁ НЕ СИНХРОНИЗИРОВАНЫ",
      settingsNotSyncedText: "Установите новый серверный мост и один раз зайдите на сервер. После этого настройки будут доступны даже офлайн.",
      settingsSavedOnline: "СОХРАНЕНО — ПРИМЕНЯЮ В ИГРЕ",
      settingsSavedOffline: "СОХРАНЕНО — ПРИМЕНИТСЯ ПРИ СЛЕДУЮЩЕМ ВХОДЕ",
      settingsApplied: "НАСТРОЙКИ ПРИМЕНЕНЫ",
      settingsPending: "СОХРАНЁННЫЕ НАСТРОЙКИ ОЖИДАЮТ ПРИМЕНЕНИЯ",
      settingsFailed: "ИГРА НЕ СМОГЛА ПРИМЕНИТЬ НАСТРОЙКИ",
      saveSettings: "СОХРАНИТЬ НАСТРОЙКИ",
      notSelected: "НЕ ВЫБРАНО",
      languageSetting: "ЯЗЫК МЕНЮ",
      prefixSetting: "ПРЕФИКС",
      prefixColorSetting: "ЦВЕТ ПРЕФИКСА",
      ctSkinSetting: "СКИН ВЫЖИВШЕГО",
      skinColorSetting: "СВЕЧЕНИЕ СКИНА",
      critBulletSetting: "КРИТИЧЕСКИЙ ВЫСТРЕЛ",
      minimapSetting: "МИНИ-КАРТА",
      weaponSoundsSetting: "ЗВУКИ ОРУЖИЯ",
      ctClassSetting: "КЛАСС ВЫЖИВШЕГО",
      tClassSetting: "КЛАСС ЗОМБИ",
      persistentSettingsLead: "Настройте аккаунт сейчас. Выбор сохраняется офлайн и применяется после входа на сервер.",
      liveActionRequired: "Для этого действия игрок должен находиться на сервере.",
      hoursShort: "ч",
      minutesShort: "м"
    }
  };

  let language = localStorage.getItem("kontra:lang") || "en";
  const THEME_KEY = "kontra:theme";
  let colorTheme = localStorage.getItem(THEME_KEY) === "day" ? "day" : "night";
  let toastTimer = null;
  let statusTimer = null;
  const SESSION_KEY = "kontra:session";
  let authState = {
    loading: false,
    account: null,
    profile: null,
    sessionToken: localStorage.getItem(SESSION_KEY) || ""
  };
  let leaderboardState = {
    sort: "level",
    loading: false,
    loadedAt: 0,
    players: []
  };
  let playerModalState = {
    requestId: 0,
    loading: false,
    live: null,
    profile: null,
    error: ""
  };
  let controlState = {
    panel: "",
    busy: false,
    commandId: ""
  };
  let settingsState = {
    data: null,
    loading: false,
    requestId: 0
  };

  const t = (key) => i18n[language]?.[key] ?? i18n.en[key] ?? key;
  const setTextAll = (selector, value) => $$(selector).forEach((node) => { node.textContent = value; });
  const clamp = (number, min, max) => Math.min(max, Math.max(min, number));
  const integer = (value, fallback = 0, min = 0, max = 1000000) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? clamp(Math.floor(parsed), min, max) : fallback;
  };

  function toast(message) {
    const node = $("#toast");
    node.textContent = message;
    node.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove("is-visible"), 2400);
  }

  function authBase() {
    return String(config.authBaseEndpoint || "").trim().replace(/\/+$/, "");
  }

  function leaderboardEndpoint() {
    return String(config.leaderboardEndpoint || "").trim();
  }

  function playerEndpoint() {
    return String(config.playerEndpoint || "").trim();
  }

  function controlBase() {
    return String(config.controlBaseEndpoint || "").trim().replace(/\/+$/, "");
  }

  function settingsBase() {
    return String(config.settingsBaseEndpoint || "").trim().replace(/\/+$/, "");
  }

  function normalizeAuthProfile(profile = {}, username = "Player", role = "PLAYER") {
    const kills = integer(profile.kills, 0, 0, 2147483647);
    const deaths = integer(profile.deaths, 0, 0, 2147483647);
    const kdValue = Number(profile.kd);
    return {
      name: String(profile.name || username || "Player").slice(0, 40),
      level: integer(profile.level, 1, 1, 2147483647),
      kills,
      deaths,
      kd: Number.isFinite(kdValue) ? Math.max(0, Math.round(kdValue * 100) / 100) : (deaths > 0 ? Math.round((kills / deaths) * 100) / 100 : kills),
      timeSec: integer(profile.timeSec, 0, 0, 2147483647),
      matches: integer(profile.matches, 0, 0, 2147483647),
      wins: integer(profile.wins, 0, 0, 2147483647),
      winRate: integer(profile.winRate, 0, 0, 100),
      tokens: integer(profile.tokens, 0, 0, 2147483647),
      firstJoin: String(profile.firstJoin || "").slice(0, 24),
      role: String(profile.role || role || "PLAYER").toUpperCase(),
      updatedAt: Number(profile.updatedAt || 0)
    };
  }

  async function authRequest(path, options = {}) {
    const base = authBase();
    if (!config.authEnabled || !base) throw new Error("auth_unavailable");

    const headers = { Accept: "application/json", ...(options.headers || {}) };
    if (options.body !== undefined) headers["Content-Type"] = "application/json";
    if (options.session !== false && authState.sessionToken) {
      headers.Authorization = `Bearer ${authState.sessionToken}`;
    }

    const response = await fetch(`${base}${path}`, {
      method: options.method || "GET",
      cache: "no-store",
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body)
    });

    let data = {};
    try { data = await response.json(); } catch {}
    if (!response.ok || data.ok === false) {
      const error = new Error(String(data.error || `HTTP_${response.status}`));
      error.status = response.status;
      error.payload = data;
      throw error;
    }
    return data;
  }

  function storeAuth(data) {
    const token = String(data.sessionToken || authState.sessionToken || "");
    if (token) localStorage.setItem(SESSION_KEY, token);
    authState.sessionToken = token;
    authState.account = {
      username: String(data.username || data.profile?.name || "Player"),
      role: String(data.role || data.profile?.role || "PLAYER").toUpperCase()
    };
    authState.profile = normalizeAuthProfile(data.profile, authState.account.username, authState.account.role);
    renderAuth();
  }

  function clearAuth() {
    localStorage.removeItem(SESSION_KEY);
    authState.sessionToken = "";
    authState.account = null;
    authState.profile = null;
    renderAuth();
  }

  function setLoginStatus(message, isError = false) {
    const node = $("#loginStatus");
    if (!node) return;
    node.textContent = message || t("authReady");
    node.classList.toggle("is-error", isError);
  }

  function setLoginBusy(busy, message) {
    authState.loading = Boolean(busy);
    const form = $("#loginForm");
    if (form) $$('input, button', form).forEach((node) => { node.disabled = Boolean(busy); });
    const submit = $("#loginSubmit");
    if (submit) submit.textContent = busy ? t("signingIn") : t("signIn");
    if (message) setLoginStatus(message, false);
  }

  function formatGameTime(totalSeconds) {
    const seconds = integer(totalSeconds, 0, 0, 2147483647);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}${t("hoursShort")} ${minutes}${t("minutesShort")}`;
  }


  function formatCompactNumber(value) {
    const number = Number(value || 0);
    return new Intl.NumberFormat(language === "ru" ? "ru-RU" : "en-US", {
      notation: Math.abs(number) >= 10000 ? "compact" : "standard",
      maximumFractionDigits: 1
    }).format(number);
  }

  function normalizePublicProfile(profile = {}) {
    const kills = integer(profile.kills, 0, 0, 2147483647);
    const deaths = integer(profile.deaths, 0, 0, 2147483647);
    const kdRaw = Number(profile.kd);
    return {
      rank: integer(profile.rank, 0, 0, 1000000),
      username: String(profile.username || profile.name || "Player").slice(0, 40),
      name: String(profile.name || profile.username || "Player").slice(0, 40),
      role: String(profile.role || "PLAYER").toUpperCase(),
      level: integer(profile.level, 1, 1, 2147483647),
      kills,
      deaths,
      kd: Number.isFinite(kdRaw) ? Math.max(0, Math.round(kdRaw * 100) / 100) : (deaths > 0 ? Math.round((kills / deaths) * 100) / 100 : kills),
      timeSec: integer(profile.timeSec, 0, 0, 2147483647),
      matches: integer(profile.matches, 0, 0, 2147483647),
      wins: integer(profile.wins, 0, 0, 2147483647),
      winRate: integer(profile.winRate, 0, 0, 100),
      online: profile.online === true,
      updatedAt: Number(profile.updatedAt || 0)
    };
  }

  function leaderboardMetric(profile, sort = leaderboardState.sort) {
    if (sort === "kills") return { label: t("kills"), value: formatCompactNumber(profile.kills) };
    if (sort === "wins") return { label: t("wins"), value: formatCompactNumber(profile.wins) };
    if (sort === "time") return { label: t("gameTime"), value: formatGameTime(profile.timeSec) };
    return { label: t("level"), value: `LVL ${profile.level}` };
  }

  function renderLeaderboardState(title, text = "", tone = "") {
    const body = $("#leaderboardBody");
    if (!body) return;
    const state = document.createElement("div");
    state.className = `leaderboard-state${tone ? ` is-${tone}` : ""}`;
    const strong = document.createElement("strong");
    strong.textContent = title;
    state.append(strong);
    if (text) {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      state.append(paragraph);
    }
    body.replaceChildren(state);
  }

  function bindPlayerActivation(node, live, profile = null) {
    node.classList.add("is-player-open");
    node.setAttribute("role", "button");
    node.tabIndex = 0;
    const open = () => openPlayerDetails(live, profile);
    node.addEventListener("click", open);
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  }

  function createLeaderboardPlayer(profile) {
    const row = document.createElement("article");
    row.className = `leaderboard-player rank-${Math.min(profile.rank || 99, 4)}`;

    const rank = document.createElement("strong");
    rank.className = "leaderboard-player__rank";
    rank.textContent = String(profile.rank || "—").padStart(2, "0");

    const identity = document.createElement("div");
    identity.className = "leaderboard-player__identity";
    const name = document.createElement("strong");
    name.textContent = profile.name;
    name.title = profile.name;
    const meta = document.createElement("div");
    meta.className = "leaderboard-player__meta";
    meta.append(createRoleBadge(profile.role));
    const online = document.createElement("span");
    online.className = `leaderboard-online${profile.online ? " is-online" : ""}`;
    online.textContent = profile.online ? t("onlineNow") : t("offlineNow");
    meta.append(online);
    identity.append(name, meta);

    const metricData = leaderboardMetric(profile);
    const metric = document.createElement("div");
    metric.className = "leaderboard-player__metric";
    const metricValue = document.createElement("strong");
    metricValue.textContent = metricData.value;
    const metricLabel = document.createElement("small");
    metricLabel.textContent = metricData.label;
    metric.append(metricValue, metricLabel);

    const summary = document.createElement("div");
    summary.className = "leaderboard-player__summary";
    summary.innerHTML = `<span>LVL <b>${profile.level}</b></span><span>${t("kills")} <b>${formatCompactNumber(profile.kills)}</b></span><span>K/D <b>${profile.kd.toFixed(2)}</b></span>`;

    row.append(rank, identity, metric, summary);
    bindPlayerActivation(row, { name: profile.name, team: "UNKNOWN", alive: profile.online, hp: 0, armor: 0, score: 0, deaths: 0, bot: false }, profile);
    return row;
  }

  function renderLeaderboard() {
    const body = $("#leaderboardBody");
    if (!body) return;
    $$('[data-rank-sort]').forEach((button) => button.classList.toggle("is-active", button.dataset.rankSort === leaderboardState.sort));
    const updated = $("#leaderboardUpdated");
    if (updated) updated.textContent = leaderboardState.loadedAt ? `${t("rankUpdated")}: ${formatAge(leaderboardState.loadedAt)}` : "—";

    if (leaderboardState.loading && !leaderboardState.players.length) {
      renderLeaderboardState(t("leaderboardLoading"));
      return;
    }
    if (!leaderboardState.players.length) {
      renderLeaderboardState(t("leaderboardEmpty"));
      return;
    }
    const list = document.createElement("div");
    list.className = "leaderboard-list";
    leaderboardState.players.forEach((profile) => list.append(createLeaderboardPlayer(profile)));
    body.replaceChildren(list);
  }

  async function fetchLeaderboard(sort = leaderboardState.sort, force = false) {
    const endpoint = leaderboardEndpoint();
    if (!endpoint || leaderboardState.loading) return;
    const now = Date.now();
    if (!force && sort === leaderboardState.sort && leaderboardState.players.length && now - leaderboardState.loadedAt < (Number(config.leaderboardRefreshMs) || 60000)) {
      renderLeaderboard();
      return;
    }

    leaderboardState.sort = ["level", "kills", "wins", "time"].includes(sort) ? sort : "level";
    leaderboardState.loading = true;
    renderLeaderboard();
    try {
      const separator = endpoint.includes("?") ? "&" : "?";
      const response = await fetch(`${endpoint}${separator}sort=${encodeURIComponent(leaderboardState.sort)}&limit=50&_=${Date.now()}`, {
        cache: "no-store",
        headers: { Accept: "application/json" }
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.ok === false) throw new Error(String(data.error || `HTTP_${response.status}`));
      leaderboardState.players = Array.isArray(data.players) ? data.players.map(normalizePublicProfile) : [];
      leaderboardState.loadedAt = Number(data.updatedAt || Date.now());
    } catch (error) {
      leaderboardState.players = [];
      leaderboardState.loadedAt = 0;
      renderLeaderboardState(t("leaderboardError"), "", "error");
      console.warn("KONTRA leaderboard fetch failed", error);
      leaderboardState.loading = false;
      return;
    }
    leaderboardState.loading = false;
    renderLeaderboard();
  }

  function playerTeamLabel(team) {
    const normalized = normalizeTeam(team);
    return normalized === "T" ? t("zombiesTeam") : normalized === "CT" ? t("survivorsTeam") : t("unknownTeam");
  }

  function playerDetailStat(label, value, className = "") {
    const item = document.createElement("div");
    item.className = `player-detail-stat${className ? ` ${className}` : ""}`;
    const small = document.createElement("small");
    small.textContent = label;
    const strong = document.createElement("strong");
    strong.textContent = value;
    item.append(small, strong);
    return item;
  }

  function renderPlayerModal() {
    const body = $("#playerModalBody");
    if (!body) return;
    const live = playerModalState.live;
    const profile = playerModalState.profile;
    const name = profile?.name || live?.name || "Player";

    const wrapper = document.createElement("div");
    wrapper.className = "player-detail";
    const head = document.createElement("header");
    const eyebrow = document.createElement("small");
    eyebrow.textContent = t("playerCard");
    const title = document.createElement("h2");
    title.id = "playerModalTitle";
    title.textContent = name;
    const badges = document.createElement("div");
    badges.className = "profile-badges";
    if (profile) badges.append(createRoleBadge(profile.role));
    if (live?.bot) badges.append(createBadge(t("bot"), "is-bot"));
    const onlineBadge = document.createElement("span");
    const currentlyOnline = profile?.online || Boolean(live);
    onlineBadge.className = `leaderboard-online${currentlyOnline ? " is-online" : ""}`;
    onlineBadge.textContent = currentlyOnline ? t("onlineNow") : t("offlineNow");
    badges.append(onlineBadge);
    head.append(eyebrow, title, badges);
    wrapper.append(head);

    if (live) {
      const liveSection = document.createElement("section");
      liveSection.className = "player-detail__section";
      const label = document.createElement("h3");
      label.textContent = t("liveStatus");
      const stats = document.createElement("div");
      stats.className = "player-detail-grid";
      stats.append(
        playerDetailStat(t("team"), playerTeamLabel(live.team)),
        playerDetailStat(t("status"), live.alive ? t("alive") : t("dead")),
        playerDetailStat(t("hp"), String(integer(live.hp))),
        playerDetailStat(t("armor"), String(integer(live.armor))),
        playerDetailStat(t("score"), String(integer(live.score, 0, 0, 65535))),
        playerDetailStat(t("deaths"), String(integer(live.deaths, 0, 0, 65535)))
      );
      liveSection.append(label, stats);
      wrapper.append(liveSection);
    }

    const profileSection = document.createElement("section");
    profileSection.className = "player-detail__section";
    const profileLabel = document.createElement("h3");
    profileLabel.textContent = t("lvlProfile");
    profileSection.append(profileLabel);

    if (profile) {
      const stats = document.createElement("div");
      stats.className = "player-detail-grid";
      stats.append(
        playerDetailStat(t("level"), String(profile.level), "is-green"),
        playerDetailStat(t("kills"), formatCompactNumber(profile.kills)),
        playerDetailStat(t("deaths"), formatCompactNumber(profile.deaths), "is-red"),
        playerDetailStat(t("kd"), profile.kd.toFixed(2)),
        playerDetailStat(t("gameTime"), formatGameTime(profile.timeSec)),
        playerDetailStat(t("matches"), formatCompactNumber(profile.matches)),
        playerDetailStat(t("wins"), formatCompactNumber(profile.wins)),
        playerDetailStat(t("winRate"), `${profile.winRate}%`)
      );
      profileSection.append(stats);
    } else if (playerModalState.loading) {
      const state = document.createElement("p");
      state.className = "player-detail__message";
      state.textContent = t("loadingPlayer");
      profileSection.append(state);
    } else {
      const titleMissing = document.createElement("strong");
      titleMissing.className = "player-detail__missing";
      titleMissing.textContent = t("profileNotFound");
      const text = document.createElement("p");
      text.className = "player-detail__message";
      text.textContent = live?.bot ? t("botProfileText") : (playerModalState.error ? t("playerLookupError") : t("profileNotFoundText"));
      profileSection.append(titleMissing, text);
    }
    wrapper.append(profileSection);
    body.replaceChildren(wrapper);
  }

  function setPlayerModal(open) {
    const modal = $("#playerModal");
    if (!modal) return;
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
    if (!open) playerModalState.requestId += 1;
  }

  async function openPlayerDetails(live, initialProfile = null) {
    const requestId = ++playerModalState.requestId;
    playerModalState.live = live || null;
    playerModalState.profile = initialProfile ? normalizePublicProfile(initialProfile) : null;
    playerModalState.loading = !initialProfile && !live?.bot;
    playerModalState.error = "";
    renderPlayerModal();
    setPlayerModal(true);

    const endpoint = playerEndpoint();
    const name = String(initialProfile?.username || initialProfile?.name || live?.name || "").trim();
    if (!endpoint || !name || live?.bot) {
      playerModalState.loading = false;
      renderPlayerModal();
      return;
    }

    try {
      const separator = endpoint.includes("?") ? "&" : "?";
      const response = await fetch(`${endpoint}${separator}name=${encodeURIComponent(name)}&_=${Date.now()}`, {
        cache: "no-store",
        headers: { Accept: "application/json" }
      });
      const data = await response.json().catch(() => ({}));
      if (requestId !== playerModalState.requestId) return;
      if (response.status === 404 || data.error === "player_not_found") {
        playerModalState.loading = false;
        playerModalState.error = "";
        renderPlayerModal();
        return;
      }
      if (!response.ok || data.ok === false) throw new Error(String(data.error || `HTTP_${response.status}`));
      playerModalState.profile = data.player ? normalizePublicProfile(data.player) : playerModalState.profile;
      if (data.live) playerModalState.live = normalizePlayer(data.live);
      playerModalState.loading = false;
      renderPlayerModal();
    } catch (error) {
      if (requestId !== playerModalState.requestId) return;
      playerModalState.loading = false;
      playerModalState.error = String(error?.message || error);
      renderPlayerModal();
    }
  }

  function createRoleBadge(role) {
    const normalized = String(role || "PLAYER").toUpperCase();
    const badge = document.createElement("span");
    badge.className = `account-role account-role--${normalized.toLowerCase()}`;
    badge.textContent = normalized;
    return badge;
  }

  function createProfileStat(label, value, className = "") {
    const item = document.createElement("div");
    item.className = `profile-stat${className ? ` ${className}` : ""}`;
    const small = document.createElement("small");
    small.textContent = label;
    const strong = document.createElement("strong");
    strong.textContent = String(value);
    item.append(small, strong);
    return item;
  }

  function createLockedProfile(compact) {
    const wrap = document.createElement(compact ? "div" : "article");
    wrap.className = compact ? "locked-profile" : "panel profile-login-card";

    const image = document.createElement("img");
    image.src = "assets/logo.svg";
    image.alt = "";
    image.width = compact ? 74 : 88;
    image.height = compact ? 74 : 88;

    const text = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = t("profileLocked");
    const description = document.createElement("p");
    description.textContent = t("profileLockedText");
    text.append(title, description);

    const button = document.createElement("button");
    button.className = "primary-button";
    button.type = "button";
    button.textContent = t("signIn");
    button.addEventListener("click", () => setLogin(true));

    wrap.append(image, text, button);
    return wrap;
  }

  function createCompactProfile() {
    const profile = authState.profile;
    const account = authState.account;
    const wrap = document.createElement("div");
    wrap.className = "profile-compact";

    const identity = document.createElement("div");
    identity.className = "profile-identity";
    const image = document.createElement("img");
    image.src = "assets/logo.svg";
    image.alt = "";
    image.width = 72;
    image.height = 72;
    const identityText = document.createElement("div");
    const eyebrow = document.createElement("small");
    eyebrow.textContent = t("signedInAs");
    const name = document.createElement("strong");
    name.textContent = profile.name || account.username;
    const badges = document.createElement("div");
    badges.className = "profile-badges";
    badges.append(createRoleBadge(account.role));
    const level = document.createElement("span");
    level.className = "account-level";
    level.textContent = `LVL ${profile.level}`;
    badges.append(level);
    identityText.append(eyebrow, name, badges);
    identity.append(image, identityText);

    const stats = document.createElement("div");
    stats.className = "profile-stats profile-stats--compact";
    stats.append(
      createProfileStat(t("kills"), profile.kills),
      createProfileStat(t("deaths"), profile.deaths),
      createProfileStat(t("kd"), profile.kd.toFixed(2)),
      createProfileStat(t("tokens"), profile.tokens)
    );

    const button = document.createElement("button");
    button.className = "primary-button profile-open-button";
    button.type = "button";
    button.textContent = t("openProfile");
    button.addEventListener("click", () => showView("profile"));

    wrap.append(identity, stats, button);
    return wrap;
  }

  function createFullProfile() {
    const profile = authState.profile;
    const account = authState.account;
    const card = document.createElement("article");
    card.className = "panel web-profile-card";

    const hero = document.createElement("header");
    hero.className = "web-profile-card__hero";
    const image = document.createElement("img");
    image.src = "assets/logo.svg";
    image.alt = "";
    image.width = 90;
    image.height = 90;
    const identity = document.createElement("div");
    const status = document.createElement("small");
    status.textContent = t("accountActive");
    const name = document.createElement("h2");
    name.textContent = profile.name || account.username;
    const badges = document.createElement("div");
    badges.className = "profile-badges";
    badges.append(createRoleBadge(account.role));
    const level = document.createElement("span");
    level.className = "account-level";
    level.textContent = `LVL ${profile.level}`;
    badges.append(level);
    identity.append(status, name, badges);
    hero.append(image, identity);

    const stats = document.createElement("div");
    stats.className = "profile-stats profile-stats--full";
    stats.append(
      createProfileStat(t("kills"), profile.kills, "is-green"),
      createProfileStat(t("deaths"), profile.deaths, "is-red"),
      createProfileStat(t("kd"), profile.kd.toFixed(2), "is-cyan"),
      createProfileStat(t("gameTime"), formatGameTime(profile.timeSec), "is-yellow"),
      createProfileStat(t("matches"), profile.matches),
      createProfileStat(t("wins"), profile.wins),
      createProfileStat(t("winRate"), `${profile.winRate}%`),
      createProfileStat(t("tokens"), profile.tokens, "is-gold")
    );

    const footer = document.createElement("footer");
    footer.className = "web-profile-card__footer";
    const meta = document.createElement("div");
    const firstLabel = document.createElement("small");
    firstLabel.textContent = t("firstJoin");
    const firstValue = document.createElement("strong");
    firstValue.textContent = profile.firstJoin || "—";
    meta.append(firstLabel, firstValue);

    const logout = document.createElement("button");
    logout.type = "button";
    logout.className = "secondary-button danger-button";
    logout.textContent = t("signOut");
    logout.addEventListener("click", logoutAccount);
    footer.append(meta, logout);

    card.append(hero, stats, footer);
    return card;
  }

  function renderAuth() {
    const home = $("#homeProfileBody");
    const page = $("#profilePageBody");
    if (home) home.replaceChildren(authState.account && authState.profile ? createCompactProfile() : createLockedProfile(true));
    if (page) page.replaceChildren(authState.account && authState.profile ? createFullProfile() : createLockedProfile(false));

    const drawerTitle = $("#drawerAccountTitle");
    const drawerSubtitle = $("#drawerAccountSubtitle");
    if (drawerTitle && drawerSubtitle) {
      if (authState.account && authState.profile) {
        drawerTitle.textContent = authState.profile.name || authState.account.username;
        drawerSubtitle.textContent = `${authState.account.role} · LVL ${authState.profile.level}`;
      } else {
        drawerTitle.textContent = t("signIn");
        drawerSubtitle.textContent = t("usernamePassword");
      }
    }
  }

  function removeTicketFromAddress() {
    const url = new URL(location.href);
    if (!url.searchParams.has("ticket")) return;
    url.searchParams.delete("ticket");
    history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }

  async function redeemTicket(ticket) {
    setLogin(true);
    setLoginBusy(true, t("ticketSigningIn"));
    try {
      const data = await authRequest("/redeem", {
        method: "POST",
        session: false,
        body: { ticket }
      });
      storeAuth(data);
      removeTicketFromAddress();
      setLogin(false);
      toast(t("loginSuccess"));
      showView("profile");
    } catch (error) {
      removeTicketFromAddress();
      clearAuth();
      setLoginBusy(false);
      setLoginStatus(error.message === "ticket_expired_or_used" ? t("ticketInvalid") : t("networkError"), true);
    } finally {
      setLoginBusy(false);
    }
  }

  async function restoreSession() {
    if (!authState.sessionToken) return;
    try {
      const data = await authRequest("/me", { method: "GET" });
      storeAuth(data);
    } catch {
      clearAuth();
    }
  }

  async function loginAccount(username, password) {
    setLoginBusy(true, t("signingIn"));
    try {
      const data = await authRequest("/login", {
        method: "POST",
        session: false,
        body: { username, password }
      });
      storeAuth(data);
      $("#loginForm").reset();
      setLogin(false);
      toast(t("loginSuccess"));
      showView("profile");
    } catch (error) {
      const invalid = error.status === 401 || error.message === "invalid_credentials";
      setLoginStatus(invalid ? t("invalidCredentials") : t("networkError"), true);
    } finally {
      setLoginBusy(false);
    }
  }

  async function logoutAccount() {
    const token = authState.sessionToken;
    clearAuth();
    setDrawer(false);
    if (token && config.authEnabled) {
      try {
        authState.sessionToken = token;
        await authRequest("/logout", { method: "POST" });
      } catch {}
      authState.sessionToken = "";
    }
    showView("home");
  }

  async function initializeAuth() {
    renderAuth();
    if (!config.authEnabled || !authBase()) return;
    const ticket = new URL(location.href).searchParams.get("ticket");
    if (ticket) {
      await redeemTicket(ticket);
      return;
    }
    await restoreSession();
  }

  function updateThemeControl() {
    const toggle = $("#themeToggle");
    if (!toggle) return;
    const day = colorTheme === "day";
    toggle.setAttribute("aria-pressed", String(day));
    toggle.setAttribute("aria-label", language === "ru"
      ? (day ? "Выключить лампу и включить ночную тему" : "Включить лампу и включить дневную тему")
      : (day ? "Turn the lamp off and use night mode" : "Turn the lamp on and use day mode"));
    toggle.title = language === "ru" ? (day ? "Ночная тема" : "Дневная тема") : (day ? "Night mode" : "Day mode");
  }

  function applyColorTheme(next, animate = false) {
    colorTheme = next === "day" ? "day" : "night";
    localStorage.setItem(THEME_KEY, colorTheme);
    document.body.classList.toggle("theme-day", colorTheme === "day");
    document.documentElement.style.colorScheme = colorTheme === "day" ? "light" : "dark";
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", colorTheme === "day" ? "#f6f8f2" : "#050706");
    updateThemeControl();

    if (animate) {
      const toggle = $("#themeToggle");
      document.body.classList.remove("theme-switching");
      toggle?.classList.remove("is-switching");
      void document.body.offsetWidth;
      document.body.classList.add("theme-switching");
      toggle?.classList.add("is-switching");
      window.setTimeout(() => {
        document.body.classList.remove("theme-switching");
        toggle?.classList.remove("is-switching");
      }, 760);
    }
  }

  function toggleColorTheme() {
    applyColorTheme(colorTheme === "day" ? "night" : "day", true);
  }

  function applyLanguage(next) {
    language = next === "ru" ? "ru" : "en";
    localStorage.setItem("kontra:lang", language);
    document.documentElement.lang = language;
    $$('[data-lang]').forEach((button) => button.classList.toggle("is-active", button.dataset.lang === language));
    $$('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
    $$('[data-i18n-aria]').forEach((node) => { node.setAttribute('aria-label', t(node.dataset.i18nAria)); });
    if (window.__kontraLastStatus) renderStatus(window.__kontraLastStatus);
    renderAuth();
    renderLeaderboard();
    if ($("#playerModal")?.classList.contains("is-open")) renderPlayerModal();
    if ($("#controlModal")?.classList.contains("is-open") && settingsState.data && ["lvl", "classes"].includes(controlState.panel)) {
      $("#controlModalLead").textContent = t("persistentSettingsLead");
      renderPersistentPanel(controlState.panel, settingsState.data);
    }
    updateThemeControl();
  }

  function formatAge(value) {
    const raw = Number(value);
    if (!raw) return "—";
    const ms = raw < 1e12 ? raw * 1000 : raw;
    const seconds = Math.max(0, Math.floor((Date.now() - ms) / 1000));
    if (seconds < 5) return t("justNow");
    if (seconds < 60) return `${seconds} ${t("secondsAgo")}`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} ${t("minutesAgo")}`;
    return new Date(ms).toLocaleString(language === "ru" ? "ru-RU" : "en-GB", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function displayMap(value) {
    const map = String(value || "").trim();
    if (!map || map.toUpperCase() === "UNKNOWN" || map.toUpperCase() === "НЕИЗВЕСТНО") return t("unknown");
    return map;
  }

  function normalizeTeam(value) {
    const team = String(value || "").trim().toUpperCase();
    if (team === "T" || team === "ZOMBIE") return "T";
    if (team === "CT" || team === "SURVIVOR") return "CT";
    return "UNKNOWN";
  }

  function normalizePlayer(player = {}, index = 0) {
    return {
      slot: integer(player.slot, index + 1, 1, 16),
      name: String(player.name || `Player ${index + 1}`).replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 40) || `Player ${index + 1}`,
      team: normalizeTeam(player.team),
      alive: player.alive === true,
      hp: integer(player.hp),
      armor: integer(player.armor),
      score: integer(player.score, 0, 0, 65535),
      deaths: integer(player.deaths, 0, 0, 65535),
      bot: player.bot === true
    };
  }

  function normalize(payload = {}) {
    const playerDataAvailable = Array.isArray(payload.players);
    const players = playerDataAvailable ? payload.players.slice(0, 16).map(normalizePlayer) : [];
    const rawOnline = payload.online ?? (playerDataAvailable ? players.length : 0);
    const maxPlayers = Number(payload.maxPlayers ?? payload.max ?? config.maxPlayers ?? 16);
    const updatedAt = payload.updatedAt ?? payload.timestamp ?? 0;
    const ms = Number(updatedAt) < 1e12 ? Number(updatedAt) * 1000 : Number(updatedAt);
    const stale = ms > 0 && Date.now() - ms > (Number(config.staleAfterMs) || 60000);
    const serverOnline = Boolean(payload.serverOnline ?? payload.onlineStatus ?? true) && !stale;
    const derivedZombies = players.filter((player) => player.team === "T").length;
    const derivedSurvivors = players.filter((player) => player.team === "CT").length;

    return {
      online: Number.isFinite(Number(rawOnline)) ? clamp(Math.floor(Number(rawOnline)), 0, 64) : 0,
      maxPlayers: Number.isFinite(maxPlayers) ? clamp(Math.floor(maxPlayers), 1, 64) : 16,
      map: String(payload.map ?? payload.mapName ?? ""),
      mode: String(payload.mode ?? payload.gameMode ?? "Zombie Mod"),
      updatedAt,
      serverOnline,
      zombies: Number.isFinite(Number(payload.zombies)) ? Number(payload.zombies) : derivedZombies,
      survivors: Number.isFinite(Number(payload.survivors)) ? Number(payload.survivors) : derivedSurvivors,
      players,
      playerDataAvailable,
      storageSource: String(payload.storageSource || "")
    };
  }

  function teamDescriptor(team) {
    if (team === "T") return { key: "zombiesTeam", className: "zombies", symbol: "☠" };
    if (team === "CT") return { key: "survivorsTeam", className: "survivors", symbol: "♙" };
    return { key: "unknownTeam", className: "unknown", symbol: "?" };
  }

  function sortedPlayers(players) {
    return [...players].sort((left, right) => {
      const teamOrder = { T: 0, CT: 1, UNKNOWN: 2 };
      return (teamOrder[left.team] - teamOrder[right.team]) || (right.score - left.score) || (left.deaths - right.deaths) || (left.slot - right.slot);
    });
  }

  function createBadge(text, className) {
    const badge = document.createElement("span");
    badge.className = `player-badge ${className}`;
    badge.textContent = text;
    return badge;
  }

  function createMiniPlayer(player) {
    const row = document.createElement("div");
    row.className = `mini-player${player.alive ? " is-alive" : " is-dead"}`;

    const dot = document.createElement("span");
    dot.className = "player-state-dot";
    dot.setAttribute("aria-label", player.alive ? t("alive") : t("dead"));

    const identity = document.createElement("div");
    identity.className = "mini-player__identity";
    const name = document.createElement("strong");
    name.textContent = player.name;
    name.title = player.name;
    identity.append(name);
    if (player.bot) identity.append(createBadge(t("bot"), "is-bot"));

    const score = document.createElement("span");
    score.className = "mini-player__score";
    score.textContent = String(player.score);
    score.title = t("score");

    row.append(dot, identity, score);
    bindPlayerActivation(row, player);
    return row;
  }

  function createPreviewTeam(team, players) {
    const descriptor = teamDescriptor(team);
    const section = document.createElement("section");
    section.className = `team-preview team-preview--${descriptor.className}`;

    const header = document.createElement("header");
    const title = document.createElement("strong");
    title.textContent = `${descriptor.symbol} ${t(descriptor.key)}`;
    const count = document.createElement("span");
    count.textContent = String(players.length);
    header.append(title, count);
    section.append(header);

    const list = document.createElement("div");
    list.className = "team-preview__list";
    const visiblePlayers = players.slice(0, 5);

    if (!visiblePlayers.length) {
      const empty = document.createElement("p");
      empty.className = "team-preview__empty";
      empty.textContent = t("noPlayersInTeam");
      list.append(empty);
    } else {
      visiblePlayers.forEach((player) => list.append(createMiniPlayer(player)));
    }

    if (players.length > visiblePlayers.length) {
      const more = document.createElement("p");
      more.className = "team-preview__more";
      more.textContent = `+${players.length - visiblePlayers.length} ${t("morePlayers")}`;
      list.append(more);
    }

    section.append(list);
    return section;
  }

  function renderPlayerState(container, title, text, tone = "") {
    container.replaceChildren();
    const state = document.createElement("div");
    state.className = `player-list-state${tone ? ` is-${tone}` : ""}`;
    const strong = document.createElement("strong");
    strong.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    state.append(strong, paragraph);
    container.append(state);
  }

  function renderPlayersPreview(status) {
    const body = $("#playersPreviewBody");

    if (!status.serverOnline) {
      renderPlayerState(body, t("serverOfflinePlayers"), t("serverOfflinePlayersText"), "offline");
      return;
    }

    if (!status.playerDataAvailable) {
      renderPlayerState(body, t("playersBridgeTitle"), t("playersBridgeText"));
      return;
    }

    if (!status.players.length) {
      renderPlayerState(body, t("serverEmpty"), t("serverEmptyText"));
      return;
    }

    const sorted = sortedPlayers(status.players);
    const grid = document.createElement("div");
    grid.className = "team-preview-grid";
    grid.append(
      createPreviewTeam("T", sorted.filter((player) => player.team === "T")),
      createPreviewTeam("CT", sorted.filter((player) => player.team === "CT"))
    );

    const unknown = sorted.filter((player) => player.team === "UNKNOWN");
    if (unknown.length) grid.append(createPreviewTeam("UNKNOWN", unknown));
    body.replaceChildren(grid);
  }

  function createVital(label, value, max, className) {
    const vital = document.createElement("div");
    vital.className = `player-vital ${className}`;
    const top = document.createElement("div");
    const name = document.createElement("span");
    name.textContent = label;
    const number = document.createElement("strong");
    number.textContent = String(value);
    top.append(name, number);
    const bar = document.createElement("span");
    bar.className = "player-vital__bar";
    const fill = document.createElement("i");
    fill.style.width = `${clamp(value / Math.max(1, max), 0, 1) * 100}%`;
    bar.append(fill);
    vital.append(top, bar);
    return vital;
  }

  function createResult(label, value) {
    const item = document.createElement("div");
    const small = document.createElement("small");
    small.textContent = label;
    const strong = document.createElement("strong");
    strong.textContent = String(value);
    item.append(small, strong);
    return item;
  }

  function createScoreboardPlayer(player) {
    const row = document.createElement("article");
    row.className = `scoreboard-player${player.alive ? " is-alive" : " is-dead"}`;

    const identity = document.createElement("div");
    identity.className = "scoreboard-player__identity";
    const dot = document.createElement("span");
    dot.className = "player-state-dot";
    const identityText = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = player.name;
    name.title = player.name;
    const badges = document.createElement("div");
    badges.className = "player-badges";
    badges.append(createBadge(player.alive ? t("alive") : t("dead"), player.alive ? "is-alive" : "is-dead"));
    badges.append(createBadge(player.bot ? t("bot") : t("realPlayer"), player.bot ? "is-bot" : "is-player"));
    identityText.append(name, badges);
    identity.append(dot, identityText);

    const vitals = document.createElement("div");
    vitals.className = "scoreboard-player__vitals";
    vitals.append(
      createVital(t("hp"), player.hp, Math.max(100, player.hp), "is-hp"),
      createVital(t("armor"), player.armor, Math.max(100, player.armor), "is-armor")
    );

    const result = document.createElement("div");
    result.className = "scoreboard-player__result";
    result.append(createResult(t("score"), player.score), createResult(t("deaths"), player.deaths));

    row.append(identity, vitals, result);
    bindPlayerActivation(row, player);
    return row;
  }

  function createScoreboardTeam(team, players) {
    const descriptor = teamDescriptor(team);
    const section = document.createElement("section");
    section.className = `scoreboard-team scoreboard-team--${descriptor.className}`;

    const header = document.createElement("header");
    const heading = document.createElement("div");
    const symbol = document.createElement("span");
    symbol.textContent = descriptor.symbol;
    const title = document.createElement("strong");
    title.textContent = t(descriptor.key);
    heading.append(symbol, title);
    const count = document.createElement("b");
    count.textContent = String(players.length);
    header.append(heading, count);
    section.append(header);

    const list = document.createElement("div");
    list.className = "scoreboard-team__list";
    if (!players.length) {
      const empty = document.createElement("p");
      empty.className = "scoreboard-team__empty";
      empty.textContent = t("noPlayersInTeam");
      list.append(empty);
    } else {
      players.forEach((player) => list.append(createScoreboardPlayer(player)));
    }
    section.append(list);
    return section;
  }

  function renderScoreboard(status) {
    const body = $("#scoreboardBody");
    const statusLabel = $("#scoreboardStatus");
    statusLabel.textContent = status.serverOnline ? t("serverOnline") : t("serverOffline");
    $("#scoreboardLiveState").classList.toggle("is-online", status.serverOnline);

    if (!status.serverOnline) {
      renderPlayerState(body, t("serverOfflinePlayers"), t("serverOfflinePlayersText"), "offline");
      return;
    }

    if (!status.playerDataAvailable) {
      renderPlayerState(body, t("playersBridgeTitle"), t("playersBridgeText"));
      return;
    }

    if (!status.players.length) {
      renderPlayerState(body, t("serverEmpty"), t("serverEmptyText"));
      return;
    }

    const players = sortedPlayers(status.players);
    const fragment = document.createDocumentFragment();
    fragment.append(
      createScoreboardTeam("T", players.filter((player) => player.team === "T")),
      createScoreboardTeam("CT", players.filter((player) => player.team === "CT"))
    );
    const unknown = players.filter((player) => player.team === "UNKNOWN");
    if (unknown.length) fragment.append(createScoreboardTeam("UNKNOWN", unknown));
    body.replaceChildren(fragment);
  }

  function renderStatus(status) {
    window.__kontraLastStatus = status;
    const online = status.serverOnline ? status.online : 0;
    const ratio = clamp(online / status.maxPlayers, 0, 1);
    setTextAll("[data-online]", online);
    setTextAll("[data-max]", status.maxPlayers);
    setTextAll("[data-map]", displayMap(status.map));
    setTextAll("[data-mode]", status.mode || "Zombie Mod");
    setTextAll("[data-updated]", formatAge(status.updatedAt));
    setTextAll("[data-zombies]", status.zombies ?? "—");
    setTextAll("[data-survivors]", status.survivors ?? "—");
    setTextAll("[data-fill]", `${Math.round(ratio * 100)}%`);
    $("#onlineProgress").style.width = `${ratio * 100}%`;
    $("#serverCard").classList.toggle("is-online", status.serverOnline);
    const label = $("#serverCard [data-i18n='serverOnline']");
    label.textContent = status.serverOnline ? t("serverOnline") : t("serverOffline");
    document.title = status.serverOnline ? `[${online}/${status.maxPlayers}] KONTRA // ZOMBIE` : "KONTRA // ZOMBIE";
    renderPlayersPreview(status);
    renderScoreboard(status);
  }

  async function fetchStatus() {
    const endpoint = String(config.statusEndpoint || "").trim();
    if (!endpoint) return;
    try {
      const response = await fetch(`${endpoint}${endpoint.includes("?") ? "&" : "?"}_=${Date.now()}`, {
        cache: "no-store",
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      renderStatus(normalize(await response.json()));
    } catch (error) {
      renderStatus(normalize({
        online: 0,
        maxPlayers: config.maxPlayers || 16,
        map: "",
        mode: "Zombie Mod",
        serverOnline: false,
        updatedAt: 0,
        players: []
      }));
      console.warn("KONTRA status fetch failed", error);
    }
  }

  function showView(name) {
    $$('[data-view]').forEach((view) => view.classList.toggle("is-active", view.dataset.view === name));
    $$('.bottom-nav [data-nav]').forEach((button) => button.classList.toggle("is-active", button.dataset.nav === name));
    if (name === "top") fetchLeaderboard(leaderboardState.sort);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setDrawer(open) {
    $("#drawer").classList.toggle("is-open", open);
    $("#drawer").setAttribute("aria-hidden", String(!open));
    $("#menuButton").setAttribute("aria-expanded", String(open));
    $("#scrim").hidden = !open;
  }


  function setControlStatus(message, state = "") {
    const node = $("#controlCommandStatus");
    if (!node) return;
    node.textContent = message || t("controlWaiting");
    node.classList.toggle("is-error", state === "error");
    node.classList.toggle("is-success", state === "success");
  }

  function setControlModal(open) {
    const modal = $("#controlModal");
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
    if (!open) {
      controlState.busy = false;
      controlState.commandId = "";
      settingsState.requestId += 1;
    }
  }

  function setAuthHelp(open) {
    const modal = $("#authHelpModal");
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", String(!open));
  }

  const CONTROL_PANELS = {
    lvl: { title: "LVL MOD", persistent: true, module: "lvl" },
    classes: { title: "CLASSES", persistent: true, module: "classes" },
    menu: { title: "GAME MENU", custom: "game", lead: "gameMenuWebLead" },
    admin: { title: "ADMIN CONTROL", custom: "admin", lead: "adminPanelLead", admin: true }
  };

  const GAME_MENU_ACTIONS = [
    { action: "open_game_menu", icon: "⌘", title: "openGameMenu", text: "openGameMenuText" },
    { action: "open_lvl", icon: "◉", title: "openLvl", text: "openLvlText" },
    { action: "open_teleport", icon: "↗", title: "openTeleport", text: "openTeleportText" },
    { action: "open_ct_classes", icon: "◇", title: "openCtClasses", text: "openCtClassesText" },
    { action: "open_t_classes", icon: "◆", title: "openTClasses", text: "openTClassesText" },
    { action: "open_turret", icon: "▣", title: "openTurret", text: "openTurretText" },
    { action: "sound_on", icon: "♪", title: "soundOn", text: "soundOnText" },
    { action: "sound_off", icon: "×", title: "soundOff", text: "soundOffText" },
    { action: "open_admin_message", icon: "✉", title: "openAdminMessage", text: "openAdminMessageText" }
  ];

  const ADMIN_WEB_ACTIONS = [
    { action: "admin_kick", title: "adminKick", target: true, danger: true },
    { action: "admin_ban", title: "adminBan", target: true, danger: true, value: [
      ["30m", "30 min"], ["60m", "60 min"], ["90m", "90 min"], ["24h", "1 day"],
      ["168h", "7 days"], ["360h", "15 days"], ["720h", "30 days"], ["01.01.99", "Forever"]
    ] },
    { action: "admin_mute", title: "adminMute", target: true },
    { action: "admin_unmute", title: "adminUnmute", target: true },
    { action: "admin_voice_mute", title: "adminVoiceMute", target: true },
    { action: "admin_voice_unmute", title: "adminVoiceUnmute", target: true },
    { action: "admin_kill", title: "adminKill", target: true, danger: true },
    { action: "admin_revive", title: "adminRevive", target: true },
    { action: "admin_team", title: "adminTeam", target: true, value: [["ct", "CT"], ["t", "T"]] },
    { action: "admin_hp", title: "adminHp", target: true, amount: [50, 100, 150, 200, 250, 500, 1000, 65535] },
    { action: "admin_armor", title: "adminArmor", target: true, amount: [0, 50, 100, 150, 200, 250, 500, 65535] },
    { action: "admin_money", title: "adminMoney", target: true, amount: [5000, 10000, 15000, 25000, 35000, 50000, 65300] },
    { action: "admin_teleport", title: "adminTeleport", target: true },
    { action: "admin_immortal", title: "adminImmortal", target: true },
    { action: "admin_invisible", title: "adminInvisible", target: true },
    { action: "admin_reset_score", title: "adminResetScore", target: true },
    { action: "admin_round_mode", title: "adminRoundMode", danger: true, value: [
      ["infection", "Infection"], ["nemesis", "Nemesis"], ["survivor", "Survivor"],
      ["assassin", "Assassin"], ["multi_infection", "Multi Infection"]
    ] },
    { action: "admin_end_map", title: "adminEndMap", danger: true }
  ];

  function setControlBusy(busy) {
    controlState.busy = Boolean(busy);
    $$("#controlActions button, #controlActions select, #controlActions input").forEach((node) => { node.disabled = controlState.busy; });
  }

  async function controlRequest(path, options = {}) {
    const base = controlBase();
    if (!base || !authState.sessionToken) throw new Error("control_unavailable");
    const headers = { Accept: "application/json", Authorization: `Bearer ${authState.sessionToken}` };
    if (options.body !== undefined) headers["Content-Type"] = "application/json";
    const response = await fetch(`${base}${path}`, {
      method: options.method || "GET",
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
      cache: "no-store"
    });
    let data = null;
    try { data = await response.json(); } catch {}
    if (!response.ok || !data?.ok) {
      const error = new Error(data?.error || `http_${response.status}`);
      error.data = data;
      throw error;
    }
    return data;
  }

  async function settingsRequest(path, options = {}) {
    const base = settingsBase();
    if (!base || !authState.sessionToken) throw new Error("settings_unavailable");
    const headers = { Accept: "application/json", Authorization: `Bearer ${authState.sessionToken}` };
    if (options.body !== undefined) headers["Content-Type"] = "application/json";
    const response = await fetch(`${base}${path}`, {
      method: options.method || "GET",
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
      cache: "no-store"
    });
    let data = null;
    try { data = await response.json(); } catch {}
    if (!response.ok || !data?.ok) {
      const error = new Error(data?.error || `http_${response.status}`);
      error.data = data;
      throw error;
    }
    return data;
  }

  function settingsOptionLabel(option) {
    if (!option || typeof option !== "object") return "";
    return String(language === "ru" ? (option.ru || option.en || option.id) : (option.en || option.ru || option.id));
  }

  function appendSettingsState(container, title, text) {
    const state = document.createElement("div");
    state.className = "settings-empty";
    const strong = document.createElement("strong");
    strong.textContent = title;
    state.appendChild(strong);
    if (text) {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      state.appendChild(paragraph);
    }
    container.appendChild(state);
  }

  function appendSelectField(container, labelKey, field, options, value) {
    const label = document.createElement("label");
    label.className = "settings-field";
    const title = document.createElement("span");
    title.textContent = t(labelKey);
    const select = document.createElement("select");
    select.dataset.settingsField = field;
    const none = document.createElement("option");
    none.value = "";
    none.textContent = t("notSelected");
    select.appendChild(none);
    (Array.isArray(options) ? options : []).forEach((option) => {
      const item = document.createElement("option");
      item.value = String(option.id || "");
      item.textContent = settingsOptionLabel(option);
      select.appendChild(item);
    });
    select.value = String(value || "");
    label.append(title, select);
    container.appendChild(label);
  }

  function appendWeaponSounds(container, options, selected) {
    const section = document.createElement("fieldset");
    section.className = "settings-checks";
    const legend = document.createElement("legend");
    legend.textContent = t("weaponSoundsSetting");
    section.appendChild(legend);
    const enabled = new Set(Array.isArray(selected) ? selected.map(String) : []);
    if (!Array.isArray(options) || options.length === 0) {
      const empty = document.createElement("small");
      empty.textContent = t("notSelected");
      section.appendChild(empty);
    } else {
      options.forEach((option) => {
        const row = document.createElement("label");
        row.className = "settings-check";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = String(option.id || "");
        input.dataset.settingsSound = "1";
        input.checked = enabled.has(input.value);
        const text = document.createElement("span");
        text.textContent = settingsOptionLabel(option);
        row.append(input, text);
        section.appendChild(row);
      });
    }
    container.appendChild(section);
  }

  function appendSaveButton(container, panelName) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "primary-button settings-save";
    button.textContent = t("saveSettings");
    button.addEventListener("click", () => savePersistentSettings(panelName));
    container.appendChild(button);
  }

  function renderPersistentPanel(panelName, data) {
    const actions = $("#controlActions");
    actions.replaceChildren();
    if (!data?.ready || !data?.snapshot?.modules) {
      appendSettingsState(actions, t("settingsNotSynced"), t("settingsNotSyncedText"));
      setControlStatus(t("settingsNotSynced"), "error");
      return;
    }

    const moduleData = data.snapshot.modules[panelName === "lvl" ? "lvl" : "classes"];
    const desired = data.desired?.modules?.[panelName === "lvl" ? "lvl" : "classes"] || moduleData?.values || {};
    if (!moduleData) {
      appendSettingsState(actions, t("settingsNotSynced"), t("settingsNotSyncedText"));
      setControlStatus(t("settingsNotSynced"), "error");
      return;
    }

    const form = document.createElement("div");
    form.className = "settings-form";
    if (panelName === "lvl") {
      appendSelectField(form, "languageSetting", "language", [
        { id: "en", en: "English", ru: "English" },
        { id: "ru", en: "Русский", ru: "Русский" }
      ], desired.language);
      appendSelectField(form, "prefixSetting", "prefix", moduleData.options?.prefix, desired.prefix);
      appendSelectField(form, "prefixColorSetting", "prefixColor", moduleData.options?.prefixColor, desired.prefixColor);
      appendSelectField(form, "ctSkinSetting", "ctSkin", moduleData.options?.ctSkin, desired.ctSkin);
      appendSelectField(form, "skinColorSetting", "skinColor", moduleData.options?.skinColor, desired.skinColor);
      appendSelectField(form, "critBulletSetting", "critBullet", moduleData.options?.critBullet, desired.critBullet);
      appendSelectField(form, "minimapSetting", "minimap", moduleData.options?.minimap, desired.minimap);
      appendWeaponSounds(form, moduleData.options?.weaponSounds, desired.weaponSounds);
    } else {
      appendSelectField(form, "ctClassSetting", "ct", moduleData.options?.ct, desired.ct);
      appendSelectField(form, "tClassSetting", "t", moduleData.options?.t, desired.t);
    }
    appendSaveButton(form, panelName);
    actions.appendChild(form);

    if (data.pending) setControlStatus(t("settingsPending"));
    else if (data.status === "failed") setControlStatus(t("settingsFailed"), "error");
    else setControlStatus(data.online ? t("onlineNow") : t("offlineNow"), data.online ? "success" : "");
  }

  function collectSettingsValues(panelName) {
    const values = {};
    $$("#controlActions [data-settings-field]").forEach((field) => { values[field.dataset.settingsField] = field.value; });
    if (panelName === "lvl") {
      values.weaponSounds = $$("#controlActions [data-settings-sound]:checked").map((input) => input.value);
    }
    return values;
  }

  async function waitSettingsApplied(revision, requestId) {
    const started = Date.now();
    while (Date.now() - started < 18000 && requestId === settingsState.requestId) {
      await new Promise((resolve) => setTimeout(resolve, 900));
      const data = await settingsRequest("/me");
      settingsState.data = data;
      if (Number(data.appliedRevision || 0) >= Number(revision || 0)) {
        setControlStatus(t("settingsApplied"), "success");
        toast(t("settingsApplied"));
        return;
      }
      if (data.status === "failed") {
        setControlStatus(t("settingsFailed"), "error");
        return;
      }
    }
  }

  async function savePersistentSettings(panelName) {
    if (controlState.busy || !settingsState.data) return;
    setControlBusy(true);
    try {
      const desired = JSON.parse(JSON.stringify(settingsState.data.desired || { modules: {} }));
      desired.modules = desired.modules || {};
      desired.modules[panelName === "lvl" ? "lvl" : "classes"] = collectSettingsValues(panelName);
      const saved = await settingsRequest("/me", { method: "POST", body: { desired } });
      settingsState.data.desired = saved.desired;
      settingsState.data.pending = true;
      const requestId = settingsState.requestId;
      if (saved.online) {
        setControlStatus(t("settingsSavedOnline"), "success");
        toast(t("settingsSavedOnline"));
        await waitSettingsApplied(saved.revision, requestId);
      } else {
        setControlStatus(t("settingsSavedOffline"), "success");
        toast(t("settingsSavedOffline"));
      }
    } catch (error) {
      if (["invalid_session", "unauthorized"].includes(error.message)) {
        clearAuth();
        setControlModal(false);
        setLogin(true);
        toast(t("controlLoginRequired"));
      } else {
        setControlStatus(t("settingsFailed"), "error");
      }
    } finally {
      setControlBusy(false);
    }
  }


  function appendControlAction(container, item, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `control-action${item.admin || item.danger ? " admin-action" : ""}`;
    button.innerHTML = `<span>${item.icon || "›"}</span><div><strong>${t(item.title)}</strong><small>${t(item.text || item.title)}</small></div><b>›</b>`;
    button.addEventListener("click", onClick);
    container.appendChild(button);
    return button;
  }

  function liveControlPlayers() {
    const status = window.__kontraLastStatus;
    if (!status?.serverOnline || !Array.isArray(status.players)) return [];
    return status.players
      .filter((player) => Number(player.slot) >= 1 && Number(player.slot) <= 16)
      .slice()
      .sort((a, b) => Number(a.slot) - Number(b.slot));
  }

  function appendFormSelect(container, labelText, options, value = "") {
    const label = document.createElement("label");
    label.className = "settings-field";
    const title = document.createElement("span");
    title.textContent = labelText;
    const select = document.createElement("select");
    options.forEach(([optionValue, optionText]) => {
      const option = document.createElement("option");
      option.value = String(optionValue);
      option.textContent = String(optionText);
      select.appendChild(option);
    });
    if (value !== "") select.value = String(value);
    label.append(title, select);
    container.appendChild(label);
    return { label, select };
  }

  function renderGameMenuPanel() {
    const actions = $("#controlActions");
    actions.replaceChildren();
    GAME_MENU_ACTIONS.forEach((item) => appendControlAction(actions, item, () => sendControlCommand(item.action)));
    setControlStatus(t("liveActionRequired"));
  }

  function renderAdminPanel() {
    const actions = $("#controlActions");
    actions.replaceChildren();

    appendControlAction(actions, {
      action: "admin_open_menu", icon: "⚠", title: "adminOpenInGame", text: "openAdminMenuText", admin: true
    }, () => sendControlCommand("admin_open_menu"));

    const form = document.createElement("div");
    form.className = "settings-form";

    const actionField = appendFormSelect(form, t("adminActionLabel"), [
      ["", t("chooseAction")],
      ...ADMIN_WEB_ACTIONS.map((item) => [item.action, t(item.title)])
    ]);

    const players = liveControlPlayers();
    const targetField = appendFormSelect(form, t("adminTargetLabel"), [
      ["", players.length ? t("choosePlayer") : t("noLivePlayers")],
      ...players.map((player) => [player.slot, `#${player.slot} · ${player.name}`])
    ]);

    const valueHost = document.createElement("div");
    valueHost.style.display = "contents";
    form.appendChild(valueHost);

    const execute = document.createElement("button");
    execute.type = "button";
    execute.className = "primary-button settings-save";
    execute.textContent = t("executeAction");
    execute.disabled = true;
    form.appendChild(execute);
    actions.appendChild(form);

    let valueSelect = null;
    const updateForm = () => {
      const definition = ADMIN_WEB_ACTIONS.find((item) => item.action === actionField.select.value);
      valueHost.replaceChildren();
      valueSelect = null;
      targetField.label.hidden = !definition?.target;
      targetField.select.disabled = !definition?.target || players.length === 0;
      execute.disabled = !definition || (definition.target && (!players.length || !targetField.select.value));
      execute.className = `${definition?.danger ? "danger-button" : "primary-button"} settings-save`;

      if (definition?.value) {
        const field = appendFormSelect(valueHost, t("adminValueLabel"), definition.value);
        valueSelect = field.select;
      } else if (definition?.amount) {
        const field = appendFormSelect(valueHost, t("adminValueLabel"), definition.amount.map((amount) => [amount, String(amount)]));
        valueSelect = field.select;
      }
    };

    actionField.select.addEventListener("change", updateForm);
    targetField.select.addEventListener("change", updateForm);
    updateForm();

    execute.addEventListener("click", async () => {
      const definition = ADMIN_WEB_ACTIONS.find((item) => item.action === actionField.select.value);
      if (!definition) return;
      const payload = {};
      if (definition.target) {
        const targetSlot = Number(targetField.select.value);
        if (!Number.isInteger(targetSlot) || targetSlot < 1 || targetSlot > 16) {
          setControlStatus(t("targetOffline"), "error");
          return;
        }
        payload.targetSlot = targetSlot;
        const selectedPlayer = players.find((player) => Number(player.slot) === targetSlot);
        payload.targetName = selectedPlayer?.name || "";
      }
      if (definition.value) payload.value = valueSelect?.value || "";
      if (definition.amount) payload.amount = Number(valueSelect?.value || 0);
      if (definition.danger) {
        if (!window.confirm(t("confirmAdminDanger"))) return;
        payload.confirm = true;
      }
      await sendControlCommand(definition.action, payload);
    });

    setControlStatus(players.length ? t("liveActionRequired") : t("noLivePlayers"), players.length ? "" : "error");
  }

  function controlFailureText(result) {
    const code = String(result?.data?.result || result?.message || "");
    if (code === "player_offline") return t("controlPlayerOffline");
    if (code === "target_offline") return t("targetOffline");
    if (code === "target_changed") return t("targetChanged");
    if (code === "self_protected") return t("selfProtected");
    if (code === "admin_protected") return t("adminProtected");
    if (code === "admin_required") return t("adminRequired");
    if (code.startsWith("invalid_")) return t("controlInvalidValue");
    return t("controlFailed");
  }

  async function openControlPanel(panelName) {
    const panel = CONTROL_PANELS[panelName];
    if (!panel) return;
    if (!authState.account || !authState.sessionToken) {
      toast(t("controlLoginRequired"));
      setLogin(true);
      return;
    }
    if (panel.admin && String(authState.account.role || "").toUpperCase() !== "ADMIN") {
      toast(t("adminRequired"));
      return;
    }

    controlState.panel = panelName;
    $("#controlModalTitle").textContent = panel.title;
    $("#controlModalLead").textContent = panel.persistent ? t("persistentSettingsLead") : t(panel.lead);
    const actions = $("#controlActions");
    actions.replaceChildren();
    setControlModal(true);

    if (panel.persistent) {
      const requestId = ++settingsState.requestId;
      appendSettingsState(actions, t("settingsLoading"), "");
      setControlStatus(t("settingsLoading"));
      try {
        const data = await settingsRequest("/me");
        if (requestId !== settingsState.requestId) return;
        settingsState.data = data;
        renderPersistentPanel(panelName, data);
      } catch (error) {
        if (["invalid_session", "unauthorized"].includes(error.message)) {
          clearAuth();
          setControlModal(false);
          setLogin(true);
          toast(t("controlLoginRequired"));
        } else {
          actions.replaceChildren();
          appendSettingsState(actions, t("settingsFailed"), error.message);
          setControlStatus(t("settingsFailed"), "error");
        }
      }
      return;
    }

    if (panel.custom === "game") {
      renderGameMenuPanel();
      return;
    }
    if (panel.custom === "admin") {
      renderAdminPanel();
      return;
    }
    setControlStatus(t("controlWaiting"));
  }

  async function waitControlResult(commandId) {
    const startedAt = Date.now();
    while (Date.now() - startedAt < 20000) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const data = await controlRequest(`/status?id=${encodeURIComponent(commandId)}`);
      if (data.status === "done") return { ok: true, data };
      if (["failed", "expired"].includes(data.status)) return { ok: false, data };
    }
    return { ok: false, timeout: true };
  }

  async function sendControlCommand(action, payload = {}) {
    if (controlState.busy) return;
    setControlBusy(true);
    setControlStatus(t("controlSending"));
    try {
      const created = await controlRequest("/command", { method: "POST", body: { action, ...payload } });
      controlState.commandId = created.commandId || "";
      const result = await waitControlResult(controlState.commandId);
      if (result.ok) {
        setControlStatus(t("controlDelivered"), "success");
        toast(t("controlDelivered"));
      } else if (result.timeout) {
        setControlStatus(t("controlTimeout"), "error");
      } else {
        setControlStatus(controlFailureText(result), "error");
      }
    } catch (error) {
      if (error.message === "unauthorized" || error.message === "invalid_session") {
        clearAuth();
        setControlModal(false);
        setLogin(true);
        toast(t("controlLoginRequired"));
      } else if (error.message === "admin_required") {
        setControlStatus(t("adminRequired"), "error");
      } else if (error.message === "invalid_target") {
        setControlStatus(t("targetOffline"), "error");
      } else if (["invalid_value", "invalid_amount", "confirmation_required"].includes(error.message)) {
        setControlStatus(t("controlInvalidValue"), "error");
      } else {
        setControlStatus(t("controlFailed"), "error");
      }
    } finally {
      setControlBusy(false);
    }
  }

  function setLogin(open) {
    $("#loginModal").classList.toggle("is-open", open);
    $("#loginModal").setAttribute("aria-hidden", String(!open));
    if (open) {
      setDrawer(false);
      if (!authState.loading) {
        setLoginBusy(false);
        setLoginStatus(t("authReady"), false);
      }
    }
  }

  async function shareSite() {
    const url = config.publicUrl || location.href.split("#")[0].split("?")[0];
    const data = { title: "KONTRA // ZOMBIE", text: "KONTRA // ZOMBIE", url };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(url);
        toast(t("shareCopied"));
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        try {
          await navigator.clipboard.writeText(url);
          toast(t("shareCopied"));
        } catch {}
      }
    }
  }

  function applyConfig() {
    setTextAll("[data-server-address]", config.serverAddress || "—");
    setTextAll("[data-max]", config.maxPlayers || 16);
    $$('[data-link]').forEach((anchor) => {
      const value = config.links?.[anchor.dataset.link];
      if (value) anchor.href = value;
      else {
        anchor.href = "#";
        anchor.addEventListener("click", (event) => event.preventDefault());
      }
    });
  }

  let ambientAudio = null;

  function getAmbientAudio() {
    if (ambientAudio) return ambientAudio;

    ambientAudio = document.getElementById("ambientAudio");
    if (!ambientAudio) {
      ambientAudio = document.createElement("audio");
      ambientAudio.id = "ambientAudio";
      ambientAudio.src = "assets/s_autoplay.mp3";
      ambientAudio.preload = "metadata";
      ambientAudio.loop = true;
      ambientAudio.autoplay = false;
      ambientAudio.hidden = true;
      document.body.appendChild(ambientAudio);
    }

    return ambientAudio;
  }

  async function toggleAmbientAudio() {
    const audio = getAmbientAudio();
    const core = $(".bio-core");

    try {
      if (audio.paused) {
        await audio.play();
        core?.setAttribute("aria-pressed", "true");
      } else {
        audio.pause();
        core?.setAttribute("aria-pressed", "false");
      }
    } catch {
      core?.setAttribute("aria-pressed", "false");
    }
  }

  function setupAmbientAudioToggle() {
    const core = $(".bio-core");
    if (!core) return;

    const audio = getAmbientAudio();
    audio.pause();
    core.removeAttribute("aria-hidden");
    core.setAttribute("role", "button");
    core.setAttribute("tabindex", "0");
    core.setAttribute("aria-label", "Музыка: включить или поставить на паузу");
    core.setAttribute("aria-pressed", "false");
    core.style.cursor = "pointer";
    core.style.touchAction = "manipulation";

    core.addEventListener("click", toggleAmbientAudio);
    core.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleAmbientAudio();
      }
    });
  }

  const pinball = {
    open: false,
    running: false,
    launched: false,
    score: 0,
    balls: 3,
    frame: 0,
    lastTime: 0,
    accumulator: 0,
    leftPressed: false,
    rightPressed: false,
    leftAngle: 0.28,
    rightAngle: Math.PI - 0.28,
    flash: 0,
    shake: 0,
    audioContext: null,
    ball: { x: 318, y: 535, vx: 0, vy: 0, r: 7 },
    bumpers: [
      { x: 112, y: 170, r: 27, value: 250, phase: 0 },
      { x: 248, y: 170, r: 27, value: 250, phase: 1.7 },
      { x: 180, y: 275, r: 31, value: 500, phase: 3.1 }
    ],
    pegs: [
      { x: 70, y: 240, r: 7 }, { x: 290, y: 240, r: 7 },
      { x: 95, y: 335, r: 8 }, { x: 265, y: 335, r: 8 },
      { x: 145, y: 390, r: 7 }, { x: 215, y: 390, r: 7 }
    ]
  };

  function pinballText(key, values = {}) {
    let result = t(key);
    Object.entries(values).forEach(([name, value]) => {
      result = result.replace(`{${name}}`, String(value));
    });
    return result;
  }

  function setPinballOverlay(visible, titleKey = '', textKey = '', buttonKey = '') {
    const overlay = $('#pinballOverlay');
    if (!overlay) return;
    overlay.classList.toggle('is-visible', Boolean(visible));
    if (titleKey) $('#pinballOverlayTitle').textContent = pinballText(titleKey, { score: pinball.score });
    if (textKey) $('#pinballOverlayText').textContent = pinballText(textKey, { score: pinball.score });
    if (buttonKey) $('#pinballStart').textContent = pinballText(buttonKey, { score: pinball.score });
  }

  function updatePinballHud() {
    const score = $('#pinballScore');
    const balls = $('#pinballBalls');
    if (score) score.textContent = Math.max(0, Math.floor(pinball.score)).toLocaleString(language === 'ru' ? 'ru-RU' : 'en-US');
    if (balls) balls.textContent = String(Math.max(0, pinball.balls));
  }

  function pinballTone(frequency = 220, duration = 0.05, gain = 0.035, type = 'square') {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!pinball.audioContext) pinball.audioContext = new AudioContextClass();
      const context = pinball.audioContext;
      if (context.state === 'suspended') context.resume();
      const oscillator = context.createOscillator();
      const volume = context.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, context.currentTime);
      volume.gain.setValueAtTime(gain, context.currentTime);
      volume.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
      oscillator.connect(volume);
      volume.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + duration);
    } catch {}
  }

  function resetPinballBall() {
    Object.assign(pinball.ball, { x: 318, y: 535, vx: 0, vy: 0, r: 7 });
    pinball.launched = false;
  }

  function startPinballGame() {
    pinball.score = 0;
    pinball.balls = 3;
    pinball.running = true;
    pinball.leftPressed = false;
    pinball.rightPressed = false;
    resetPinballBall();
    updatePinballHud();
    setPinballOverlay(true, 'pinballLaunchPrompt', 'pinballLaunchPromptText', 'pinballLaunch');
    pinballTone(330, 0.08, 0.035, 'square');
  }

  function launchPinballBall() {
    if (!pinball.open) return;
    if (!pinball.running) {
      startPinballGame();
      return;
    }
    if (pinball.launched) return;
    pinball.launched = true;
    pinball.ball.vx = -1.4;
    pinball.ball.vy = -15.5;
    setPinballOverlay(false);
    pinballTone(520, 0.08, 0.04, 'sawtooth');
  }

  function losePinballBall() {
    pinball.balls -= 1;
    updatePinballHud();
    pinballTone(90, 0.22, 0.05, 'sawtooth');
    if (pinball.balls <= 0) {
      pinball.running = false;
      pinball.launched = false;
      setPinballOverlay(true, 'pinballGameOver', 'pinballGameOverText', 'pinballStart');
      return;
    }
    resetPinballBall();
    setPinballOverlay(true, 'pinballLaunchPrompt', 'pinballLaunchPromptText', 'pinballLaunch');
  }

  function setPinballOpen(open) {
    const modal = $('#pinballModal');
    if (!modal) return;
    pinball.open = Boolean(open);
    modal.classList.toggle('is-open', pinball.open);
    modal.setAttribute('aria-hidden', String(!pinball.open));
    document.body.classList.toggle('pinball-open', pinball.open);
    if (pinball.open) {
      if (!pinball.running) setPinballOverlay(true, 'pinballReady', 'pinballReadyText', 'pinballStart');
      pinball.lastTime = performance.now();
      if (!pinball.frame) pinball.frame = requestAnimationFrame(pinballFrame);
    } else {
      pinball.leftPressed = false;
      pinball.rightPressed = false;
    }
  }

  function pinballClosestPoint(px, py, ax, ay, bx, by) {
    const abx = bx - ax;
    const aby = by - ay;
    const lengthSquared = abx * abx + aby * aby || 1;
    const ratio = Math.max(0, Math.min(1, ((px - ax) * abx + (py - ay) * aby) / lengthSquared));
    return { x: ax + abx * ratio, y: ay + aby * ratio };
  }

  function pinballCollideCircle(circle, boost = 1.05, score = 0) {
    const ball = pinball.ball;
    const dx = ball.x - circle.x;
    const dy = ball.y - circle.y;
    const minDistance = ball.r + circle.r;
    const distanceSquared = dx * dx + dy * dy;
    if (distanceSquared >= minDistance * minDistance || distanceSquared <= 0.0001) return false;
    const distance = Math.sqrt(distanceSquared);
    const nx = dx / distance;
    const ny = dy / distance;
    const overlap = minDistance - distance;
    ball.x += nx * overlap;
    ball.y += ny * overlap;
    const velocityAlongNormal = ball.vx * nx + ball.vy * ny;
    if (velocityAlongNormal < 0) {
      ball.vx -= (1 + boost) * velocityAlongNormal * nx;
      ball.vy -= (1 + boost) * velocityAlongNormal * ny;
    }
    ball.vx += nx * 1.15;
    ball.vy += ny * 1.15;
    if (score) {
      pinball.score += score;
      updatePinballHud();
      pinball.flash = 1;
      pinball.shake = 1;
      pinballTone(260 + Math.min(720, score), 0.055, 0.028, 'square');
    }
    return true;
  }

  function pinballFlipperGeometry(left) {
    const pivot = left ? { x: 105, y: 555 } : { x: 255, y: 555 };
    const angle = left ? pinball.leftAngle : pinball.rightAngle;
    const length = 76;
    return {
      pivot,
      end: { x: pivot.x + Math.cos(angle) * length, y: pivot.y + Math.sin(angle) * length },
      angle
    };
  }

  function collidePinballFlipper(left) {
    const ball = pinball.ball;
    const flipper = pinballFlipperGeometry(left);
    const closest = pinballClosestPoint(ball.x, ball.y, flipper.pivot.x, flipper.pivot.y, flipper.end.x, flipper.end.y);
    const dx = ball.x - closest.x;
    const dy = ball.y - closest.y;
    const radius = ball.r + 8;
    const distanceSquared = dx * dx + dy * dy;
    if (distanceSquared >= radius * radius || distanceSquared <= 0.0001) return;
    const distance = Math.sqrt(distanceSquared);
    const nx = dx / distance;
    const ny = dy / distance;
    ball.x += nx * (radius - distance);
    ball.y += ny * (radius - distance);
    const velocityAlongNormal = ball.vx * nx + ball.vy * ny;
    if (velocityAlongNormal < 1) {
      ball.vx -= 1.85 * velocityAlongNormal * nx;
      ball.vy -= 1.85 * velocityAlongNormal * ny;
    }
    const active = left ? pinball.leftPressed : pinball.rightPressed;
    if (active) {
      const centerBias = left ? 1 : -1;
      ball.vx += centerBias * 2.3;
      ball.vy -= 5.4;
      pinball.score += 15;
      updatePinballHud();
      pinballTone(145, 0.035, 0.02, 'square');
    }
  }

  function updatePinballFlippers(step) {
    const leftTarget = pinball.leftPressed ? -0.52 : 0.28;
    const rightTarget = pinball.rightPressed ? Math.PI + 0.52 : Math.PI - 0.28;
    const speed = Math.min(1, step * 0.028);
    pinball.leftAngle += (leftTarget - pinball.leftAngle) * speed;
    pinball.rightAngle += (rightTarget - pinball.rightAngle) * speed;
  }

  function updatePinballPhysics(step) {
    updatePinballFlippers(step);
    if (!pinball.running || !pinball.launched) return;
    const ball = pinball.ball;
    const dt = step / 16.6667;
    ball.vy += 0.19 * dt;
    ball.vx *= Math.pow(0.998, dt);
    ball.vy *= Math.pow(0.999, dt);
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;

    const leftWall = 24;
    const rightWall = 336;
    const topWall = 28;
    if (ball.x - ball.r < leftWall) {
      ball.x = leftWall + ball.r;
      ball.vx = Math.abs(ball.vx) * 0.88;
      pinballTone(105, 0.025, 0.012, 'triangle');
    }
    if (ball.x + ball.r > rightWall) {
      ball.x = rightWall - ball.r;
      ball.vx = -Math.abs(ball.vx) * 0.88;
      pinballTone(105, 0.025, 0.012, 'triangle');
    }
    if (ball.y - ball.r < topWall) {
      ball.y = topWall + ball.r;
      ball.vy = Math.abs(ball.vy) * 0.9;
      pinball.score += 50;
      updatePinballHud();
    }

    // Keep the launch lane separated until the ball reaches the upper gate.
    if (ball.x > 298 && ball.y > 96 && ball.y < 525 && ball.vx < 0) {
      ball.x = 298 + ball.r;
      ball.vx = Math.abs(ball.vx) * 0.72;
    }
    if (ball.x > 298 && ball.y <= 96) {
      ball.vx -= 0.7 * dt;
    }

    pinball.bumpers.forEach((bumper) => pinballCollideCircle(bumper, 1.22, bumper.value));
    pinball.pegs.forEach((peg) => pinballCollideCircle(peg, 0.92, 25));

    // Lower guide posts.
    pinballCollideCircle({ x: 72, y: 500, r: 13 }, 0.95, 20);
    pinballCollideCircle({ x: 288, y: 500, r: 13 }, 0.95, 20);
    collidePinballFlipper(true);
    collidePinballFlipper(false);

    // Soft sloped guides toward the flippers.
    if (ball.y > 430 && ball.y < 540) {
      if (ball.x < 78) ball.vx += 0.12 * dt;
      if (ball.x > 282) ball.vx -= 0.12 * dt;
    }

    const speed = Math.hypot(ball.vx, ball.vy);
    if (speed > 16) {
      ball.vx *= 16 / speed;
      ball.vy *= 16 / speed;
    }
    if (ball.y - ball.r > 640) losePinballBall();
    pinball.flash = Math.max(0, pinball.flash - 0.055 * dt);
    pinball.shake = Math.max(0, pinball.shake - 0.11 * dt);
  }

  function roundedRectPath(context, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + width, y, x + width, y + height, r);
    context.arcTo(x + width, y + height, x, y + height, r);
    context.arcTo(x, y + height, x, y, r);
    context.arcTo(x, y, x + width, y, r);
    context.closePath();
  }

  function drawPinballFlipper(context, left) {
    const flipper = pinballFlipperGeometry(left);
    context.save();
    context.translate(flipper.pivot.x, flipper.pivot.y);
    context.rotate(flipper.angle);
    const gradient = context.createLinearGradient(0, -10, 76, 10);
    gradient.addColorStop(0, left ? '#ff3f44' : '#58b9ff');
    gradient.addColorStop(1, '#f7f8f5');
    context.fillStyle = gradient;
    context.shadowColor = left ? '#ff3f44' : '#58b9ff';
    context.shadowBlur = 16;
    roundedRectPath(context, -10, -9, 88, 18, 9);
    context.fill();
    context.fillStyle = '#10181c';
    context.beginPath();
    context.arc(0, 0, 5, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  function drawPinball() {
    const canvas = $('#pinballCanvas');
    if (!canvas) return;
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    context.clearRect(0, 0, width, height);
    context.save();
    if (pinball.shake > 0) context.translate((Math.random() - 0.5) * pinball.shake * 5, (Math.random() - 0.5) * pinball.shake * 5);

    const background = context.createLinearGradient(0, 0, width, height);
    background.addColorStop(0, '#07131e');
    background.addColorStop(0.48, '#170b27');
    background.addColorStop(1, '#07090d');
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    // Retro grid.
    context.strokeStyle = 'rgba(78, 205, 255, .08)';
    context.lineWidth = 1;
    for (let y = 30; y < height; y += 28) {
      context.beginPath();
      context.moveTo(24, y);
      context.lineTo(336, y);
      context.stroke();
    }
    for (let x = 24; x <= 336; x += 26) {
      context.beginPath();
      context.moveTo(x, 28);
      context.lineTo(x, 618);
      context.stroke();
    }

    // Outer board.
    context.strokeStyle = '#5cc9ff';
    context.lineWidth = 3;
    context.shadowColor = '#2cbaff';
    context.shadowBlur = 15;
    roundedRectPath(context, 22, 20, 316, 600, 24);
    context.stroke();
    context.shadowBlur = 0;
    context.strokeStyle = 'rgba(255, 66, 83, .55)';
    context.lineWidth = 2;
    roundedRectPath(context, 30, 28, 300, 584, 20);
    context.stroke();

    // Header art.
    context.textAlign = 'center';
    context.fillStyle = '#ecf9ff';
    context.font = '900 25px ui-monospace, monospace';
    context.shadowColor = '#5cc9ff';
    context.shadowBlur = 12;
    context.fillText('KONTRA', 180, 67);
    context.font = '700 12px ui-monospace, monospace';
    context.fillStyle = '#ff4a55';
    context.fillText('RETRO  //  PINBALL', 180, 87);
    context.shadowBlur = 0;

    // Launch lane.
    context.strokeStyle = 'rgba(255, 235, 87, .7)';
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(298, 95);
    context.lineTo(298, 535);
    context.stroke();
    context.fillStyle = 'rgba(255, 235, 87, .14)';
    context.fillRect(300, 96, 27, 438);
    context.fillStyle = '#ffe65d';
    context.font = '700 9px ui-monospace, monospace';
    context.save();
    context.translate(319, 320);
    context.rotate(-Math.PI / 2);
    context.fillText('LAUNCH LANE', 0, 0);
    context.restore();

    // Neon arrows and center badge.
    context.strokeStyle = '#ff3f44';
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(55, 390); context.lineTo(92, 420); context.lineTo(54, 452);
    context.moveTo(305, 390); context.lineTo(268, 420); context.lineTo(306, 452);
    context.stroke();
    const badge = context.createRadialGradient(180, 370, 5, 180, 370, 58);
    badge.addColorStop(0, 'rgba(171, 255, 50, .4)');
    badge.addColorStop(1, 'rgba(171, 255, 50, 0)');
    context.fillStyle = badge;
    context.beginPath();
    context.arc(180, 370, 58, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#b8ef4b';
    context.font = '900 34px system-ui, sans-serif';
    context.shadowColor = '#b8ef4b';
    context.shadowBlur = 18;
    context.fillText('K', 180, 382);
    context.shadowBlur = 0;

    // Bumpers.
    pinball.bumpers.forEach((bumper, index) => {
      const pulse = 1 + Math.sin(performance.now() / 230 + bumper.phase) * 0.07;
      const radius = bumper.r * pulse;
      const colors = index === 2 ? ['#b8ef4b', '#ffcf44'] : (index === 0 ? ['#ff4654', '#ffb54a'] : ['#50caff', '#a25cff']);
      const glow = context.createRadialGradient(bumper.x, bumper.y, 3, bumper.x, bumper.y, radius + 12);
      glow.addColorStop(0, colors[0]);
      glow.addColorStop(0.45, colors[1]);
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      context.fillStyle = glow;
      context.beginPath();
      context.arc(bumper.x, bumper.y, radius + 12, 0, Math.PI * 2);
      context.fill();
      context.fillStyle = '#10141a';
      context.strokeStyle = colors[0];
      context.lineWidth = 4;
      context.beginPath();
      context.arc(bumper.x, bumper.y, radius, 0, Math.PI * 2);
      context.fill();
      context.stroke();
      context.fillStyle = '#f7fbff';
      context.font = '900 13px ui-monospace, monospace';
      context.fillText(index === 2 ? '500' : '250', bumper.x, bumper.y + 5);
    });

    // Pegs.
    pinball.pegs.forEach((peg, index) => {
      context.fillStyle = index % 2 ? '#55c9ff' : '#ff4a55';
      context.shadowColor = context.fillStyle;
      context.shadowBlur = 10;
      context.beginPath();
      context.arc(peg.x, peg.y, peg.r, 0, Math.PI * 2);
      context.fill();
    });
    context.shadowBlur = 0;

    // Lower posts and drain guide.
    [{ x: 72, y: 500 }, { x: 288, y: 500 }].forEach((post, index) => {
      context.fillStyle = index ? '#55c9ff' : '#ff4a55';
      context.beginPath();
      context.arc(post.x, post.y, 13, 0, Math.PI * 2);
      context.fill();
    });
    context.strokeStyle = 'rgba(184,239,75,.72)';
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(38, 468); context.lineTo(105, 535);
    context.moveTo(322, 468); context.lineTo(255, 535);
    context.stroke();

    drawPinballFlipper(context, true);
    drawPinballFlipper(context, false);

    // Ball.
    const ball = pinball.ball;
    const ballGradient = context.createRadialGradient(ball.x - 3, ball.y - 4, 1, ball.x, ball.y, ball.r + 3);
    ballGradient.addColorStop(0, '#ffffff');
    ballGradient.addColorStop(0.35, '#cfeaff');
    ballGradient.addColorStop(1, '#566675');
    context.fillStyle = ballGradient;
    context.shadowColor = '#ffffff';
    context.shadowBlur = 14;
    context.beginPath();
    context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    context.fill();
    context.shadowBlur = 0;

    if (pinball.flash > 0) {
      context.fillStyle = `rgba(255,255,255,${pinball.flash * 0.13})`;
      context.fillRect(0, 0, width, height);
    }
    context.restore();
  }

  function pinballFrame(time) {
    pinball.frame = 0;
    if (!pinball.open) return;
    const elapsed = Math.min(40, Math.max(0, time - (pinball.lastTime || time)));
    pinball.lastTime = time;
    pinball.accumulator += elapsed;
    while (pinball.accumulator >= 8.3333) {
      updatePinballPhysics(8.3333);
      pinball.accumulator -= 8.3333;
    }
    drawPinball();
    pinball.frame = requestAnimationFrame(pinballFrame);
  }

  function bindPinballHold(button, key) {
    if (!button) return;
    const press = (event) => {
      event.preventDefault();
      button.setPointerCapture?.(event.pointerId);
      pinball[key] = true;
      pinballTone(125, 0.025, 0.012, 'square');
    };
    const release = (event) => {
      event.preventDefault();
      pinball[key] = false;
    };
    button.addEventListener('pointerdown', press);
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
    button.addEventListener('lostpointercapture', release);
  }

  function setupPinball() {
    const launchTile = $('#pinballLaunch');
    const modal = $('#pinballModal');
    if (!launchTile || !modal) return;

    // Always start with the full-screen game closed. This prevents a stale
    // body lock or an invisible modal from blocking mobile page scrolling.
    pinball.open = false;
    document.body.classList.remove('pinball-open');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');

    launchTile.addEventListener('click', () => setPinballOpen(true));
    $('#pinballClose')?.addEventListener('click', () => setPinballOpen(false));
    modal.addEventListener('click', (event) => { if (event.target === modal) setPinballOpen(false); });
    $('#pinballStart')?.addEventListener('click', () => {
      if (!pinball.running || pinball.balls <= 0) startPinballGame();
      else launchPinballBall();
    });
    $('#pinballBallLaunch')?.addEventListener('click', launchPinballBall);
    bindPinballHold($('#pinballLeft'), 'leftPressed');
    bindPinballHold($('#pinballRight'), 'rightPressed');
    window.addEventListener('keydown', (event) => {
      if (!pinball.open) return;
      if (['ArrowLeft', 'a', 'A'].includes(event.key)) { event.preventDefault(); pinball.leftPressed = true; }
      if (['ArrowRight', 'd', 'D'].includes(event.key)) { event.preventDefault(); pinball.rightPressed = true; }
      if (event.key === ' ') { event.preventDefault(); launchPinballBall(); }
      if (event.key === 'Escape') { event.preventDefault(); setPinballOpen(false); }
    });
    window.addEventListener('keyup', (event) => {
      if (['ArrowLeft', 'a', 'A'].includes(event.key)) pinball.leftPressed = false;
      if (['ArrowRight', 'd', 'D'].includes(event.key)) pinball.rightPressed = false;
    });
    drawPinball();
  }

  function tickClock() {
    const now = new Date();
    setTextAll("[data-clock]", now.toLocaleTimeString(language === "ru" ? "ru-RU" : "en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    }));
  }

  function bind() {
    $$('[data-lang]').forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
    $$('[data-nav]').forEach((button) => button.addEventListener("click", (event) => {
      event.preventDefault();
      showView(button.dataset.nav);
    }));
    $("#menuButton").addEventListener("click", () => setDrawer(!$("#drawer").classList.contains("is-open")));
    $("#scrim").addEventListener("click", () => setDrawer(false));
    $$('[data-close-drawer]').forEach((button) => button.addEventListener("click", () => setDrawer(false)));
    $$('[data-open-login]').forEach((button) => button.addEventListener("click", () => {
      if (authState.account && authState.profile) {
        setDrawer(false);
        showView("profile");
      } else {
        setLogin(true);
      }
    }));
    $$('[data-control-panel]').forEach((button) => button.addEventListener("click", () => openControlPanel(button.dataset.controlPanel)));
    $$('[data-close-control]').forEach((button) => button.addEventListener("click", () => setControlModal(false)));
    $("#controlModal")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) setControlModal(false); });
    $$('[data-open-auth-help]').forEach((button) => button.addEventListener("click", () => { setLogin(false); setAuthHelp(true); }));
    $$('[data-close-auth-help]').forEach((button) => button.addEventListener("click", () => setAuthHelp(false)));
    $("#authHelpModal")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) setAuthHelp(false); });
    $$('[data-close-login]').forEach((button) => button.addEventListener("click", () => setLogin(false)));
    $("#loginModal").addEventListener("click", (event) => { if (event.target === event.currentTarget) setLogin(false); });
    $$('[data-close-player]').forEach((button) => button.addEventListener("click", () => setPlayerModal(false)));
    $("#playerModal")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) setPlayerModal(false); });
    $$('[data-rank-sort]').forEach((button) => button.addEventListener("click", () => fetchLeaderboard(button.dataset.rankSort, true)));
    $("#loginForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      if (authState.loading) return;
      const form = new FormData(event.currentTarget);
      const username = String(form.get("username") || "").trim();
      const password = String(form.get("password") || "");
      if (!username || !password) {
        setLoginStatus(t("invalidCredentials"), true);
        return;
      }
      await loginAccount(username, password);
    });
    $("#themeToggle")?.addEventListener("click", toggleColorTheme);
    $("#shareButton").addEventListener("click", shareSite);
    $("#drawerShare").addEventListener("click", shareSite);
    $("#copyIp").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(config.serverAddress || "");
        toast(`${t("copied")}: ${config.serverAddress}`);
      } catch {}
    });
  }

  applyConfig();
  applyColorTheme(colorTheme, false);
  bind();
  setupAmbientAudioToggle();
  setupPinball();
  applyLanguage(language);
  tickClock();
  setInterval(tickClock, 1000);
  fetchStatus();
  renderLeaderboard();
  statusTimer = setInterval(fetchStatus, Math.max(5000, Number(config.statusRefreshMs) || 15000));
  initializeAuth();
})();
