(() => {
  "use strict";

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
      statsShopInventory: "Stats, shop, inventory",
      classes: "CLASSES",
      survivorZombieClasses: "Survivor and zombie classes",
      votesTeleportsNews: "Votes, teleports, news",
      adminOnly: "Available to administrators",
      ranking: "RANKING",
      topPlayers: "TOP PLAYERS",
      rankingPending: "The global LVL MOD leaderboard will appear here.",
      account: "ACCOUNT",
      playerProfile: "PLAYER PROFILE",
      profilePending: "Authorization is not connected yet.",
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
      authPending: "Secure authorization will be connected in a later stage.",
      justNow: "JUST NOW",
      secondsAgo: "SEC. AGO",
      minutesAgo: "MIN. AGO",
      copied: "Copied",
      shareCopied: "Public site link copied",
      authNotReady: "Authorization backend is not connected yet",
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
      realPlayer: "PLAYER"
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
      statsShopInventory: "Статистика, магазин, рюкзак",
      classes: "КЛАССЫ",
      survivorZombieClasses: "Классы людей и зомби",
      votesTeleportsNews: "Голосования, телепорт, новости",
      adminOnly: "Доступно администраторам",
      ranking: "РЕЙТИНГ",
      topPlayers: "ТОП ИГРОКОВ",
      rankingPending: "Здесь появится глобальный рейтинг LVL MOD.",
      account: "АККАУНТ",
      playerProfile: "ПРОФИЛЬ ИГРОКА",
      profilePending: "Авторизация пока не подключена.",
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
      authPending: "Безопасную авторизацию подключим следующим этапом.",
      justNow: "ТОЛЬКО ЧТО",
      secondsAgo: "СЕК. НАЗАД",
      minutesAgo: "МИН. НАЗАД",
      copied: "Скопировано",
      shareCopied: "Публичная ссылка скопирована",
      authNotReady: "Сервер авторизации пока не подключён",
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
      realPlayer: "ИГРОК"
    }
  };

  let language = localStorage.getItem("kontra:lang") || "en";
  let toastTimer = null;
  let statusTimer = null;

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

  function applyLanguage(next) {
    language = next === "ru" ? "ru" : "en";
    localStorage.setItem("kontra:lang", language);
    document.documentElement.lang = language;
    $$('[data-lang]').forEach((button) => button.classList.toggle("is-active", button.dataset.lang === language));
    $$('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
    if (window.__kontraLastStatus) renderStatus(window.__kontraLastStatus);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setDrawer(open) {
    $("#drawer").classList.toggle("is-open", open);
    $("#drawer").setAttribute("aria-hidden", String(!open));
    $("#menuButton").setAttribute("aria-expanded", String(open));
    $("#scrim").hidden = !open;
  }

  function setLogin(open) {
    $("#loginModal").classList.toggle("is-open", open);
    $("#loginModal").setAttribute("aria-hidden", String(!open));
    if (open) setDrawer(false);
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
    $$('[data-open-login]').forEach((button) => button.addEventListener("click", () => setLogin(true)));
    $$('[data-close-login]').forEach((button) => button.addEventListener("click", () => setLogin(false)));
    $("#loginModal").addEventListener("click", (event) => { if (event.target === event.currentTarget) setLogin(false); });
    $("#loginForm").addEventListener("submit", (event) => {
      event.preventDefault();
      toast(t("authNotReady"));
    });
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
  bind();
  applyLanguage(language);
  tickClock();
  setInterval(tickClock, 1000);
  fetchStatus();
  statusTimer = setInterval(fetchStatus, Math.max(5000, Number(config.statusRefreshMs) || 15000));
})();
