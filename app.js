/* KONTRA SITE v4 — AUTH CONNECTED / CLOUDFLARE PAGES */
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
      hoursShort: "ч",
      minutesShort: "м"
    }
  };

  let language = localStorage.getItem("kontra:lang") || "en";
  let toastTimer = null;
  let statusTimer = null;
  const SESSION_KEY = "kontra:session";
  let authState = {
    loading: false,
    account: null,
    profile: null,
    sessionToken: localStorage.getItem(SESSION_KEY) || ""
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

  function applyLanguage(next) {
    language = next === "ru" ? "ru" : "en";
    localStorage.setItem("kontra:lang", language);
    document.documentElement.lang = language;
    $$('[data-lang]').forEach((button) => button.classList.toggle("is-active", button.dataset.lang === language));
    $$('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
    if (window.__kontraLastStatus) renderStatus(window.__kontraLastStatus);
    renderAuth();
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
    $$('[data-close-login]').forEach((button) => button.addEventListener("click", () => setLogin(false)));
    $("#loginModal").addEventListener("click", (event) => { if (event.target === event.currentTarget) setLogin(false); });
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
  initializeAuth();
})();
