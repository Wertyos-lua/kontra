(() => {
  "use strict";

  const config = window.KONTRA_CONFIG || {};
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const i18n = {
    en: {
      serverOnline: "SERVER ONLINE", serverOffline: "SERVER OFFLINE", playersOnline: "PLAYERS ONLINE",
      map: "MAP", mode: "MODE", updated: "UPDATED", zombies: "ZOMBIES", survivors: "SURVIVORS",
      localTime: "LOCAL TIME", capacity: "CAPACITY", playersOnServer: "PLAYERS ON SERVER",
      playersBridgeTitle: "PLAYER LIST IS NOT CONNECTED YET", playersBridgeText: "It will appear after the server sender is upgraded to v2.",
      fullScoreboard: "FULL SCOREBOARD", yourStats: "YOUR STATISTICS", profileLocked: "PROFILE IS LOCKED",
      profileLockedText: "Sign in through the game or with your username and password.", signIn: "SIGN IN",
      home: "HOME", server: "SERVER", control: "CONTROL", top: "TOP", profile: "PROFILE",
      liveScoreboard: "LIVE SCOREBOARD", serverModulePending: "Server player data will be connected here.",
      serverModulePendingText: "Teams, score, deaths, ping, HP and live player state.", controlCenter: "CONTROL CENTER",
      statsShopInventory: "Stats, shop, inventory", classes: "CLASSES", survivorZombieClasses: "Survivor and zombie classes",
      votesTeleportsNews: "Votes, teleports, news", adminOnly: "Available to administrators", ranking: "RANKING",
      topPlayers: "TOP PLAYERS", rankingPending: "The global LVL MOD leaderboard will appear here.", account: "ACCOUNT",
      playerProfile: "PLAYER PROFILE", profilePending: "Authorization is not connected yet.", usernamePassword: "Username and password",
      shareSite: "SHARE SITE", publicLinkOnly: "Public link only", community: "Community", voiceNews: "Voice and news",
      privileges: "PRIVILEGES", serverSupport: "Server support", copyIp: "COPY IP", signInAccount: "SIGN IN TO ACCOUNT",
      username: "USERNAME", password: "PASSWORD", authPending: "Secure authorization will be connected in a later stage.",
      justNow: "JUST NOW", secondsAgo: "SEC. AGO", minutesAgo: "MIN. AGO", copied: "Copied", shareCopied: "Public site link copied",
      authNotReady: "Authorization backend is not connected yet", unknown: "UNKNOWN"
    },
    ru: {
      serverOnline: "СЕРВЕР ОНЛАЙН", serverOffline: "СЕРВЕР ОФЛАЙН", playersOnline: "ИГРОКОВ ОНЛАЙН",
      map: "КАРТА", mode: "РЕЖИМ", updated: "ОБНОВЛЕНО", zombies: "ЗОМБИ", survivors: "ВЫЖИВШИЕ",
      localTime: "МЕСТНОЕ ВРЕМЯ", capacity: "ЗАПОЛНЕНИЕ", playersOnServer: "ИГРОКИ НА СЕРВЕРЕ",
      playersBridgeTitle: "СПИСОК ИГРОКОВ ПОКА НЕ ПОДКЛЮЧЁН", playersBridgeText: "Он появится после обновления серверного sender до v2.",
      fullScoreboard: "ПОЛНАЯ ТАБЛИЦА", yourStats: "ВАША СТАТИСТИКА", profileLocked: "ПРОФИЛЬ ЗАКРЫТ",
      profileLockedText: "Войдите через игру или по логину и паролю.", signIn: "ВОЙТИ",
      home: "ГЛАВНАЯ", server: "СЕРВЕР", control: "УПРАВЛЕНИЕ", top: "ТОП", profile: "ПРОФИЛЬ",
      liveScoreboard: "ТАБЛИЦА ИГРОКОВ", serverModulePending: "Здесь появятся живые данные игроков.",
      serverModulePendingText: "Команды, счёт, смерти, пинг, HP и состояние игрока.", controlCenter: "ЦЕНТР УПРАВЛЕНИЯ",
      statsShopInventory: "Статистика, магазин, рюкзак", classes: "КЛАССЫ", survivorZombieClasses: "Классы людей и зомби",
      votesTeleportsNews: "Голосования, телепорт, новости", adminOnly: "Доступно администраторам", ranking: "РЕЙТИНГ",
      topPlayers: "ТОП ИГРОКОВ", rankingPending: "Здесь появится глобальный рейтинг LVL MOD.", account: "АККАУНТ",
      playerProfile: "ПРОФИЛЬ ИГРОКА", profilePending: "Авторизация пока не подключена.", usernamePassword: "Логин и пароль",
      shareSite: "ПОДЕЛИТЬСЯ САЙТОМ", publicLinkOnly: "Только публичная ссылка", community: "Сообщество", voiceNews: "Голос и новости",
      privileges: "ПРИВИЛЕГИИ", serverSupport: "Поддержка сервера", copyIp: "КОПИРОВАТЬ IP", signInAccount: "ВОЙТИ В АККАУНТ",
      username: "ЛОГИН", password: "ПАРОЛЬ", authPending: "Безопасную авторизацию подключим следующим этапом.",
      justNow: "ТОЛЬКО ЧТО", secondsAgo: "СЕК. НАЗАД", minutesAgo: "МИН. НАЗАД", copied: "Скопировано",
      shareCopied: "Публичная ссылка скопирована", authNotReady: "Сервер авторизации пока не подключён", unknown: "НЕИЗВЕСТНО"
    }
  };

  let language = localStorage.getItem("kontra:lang") || "en";
  let toastTimer = null;
  let statusTimer = null;

  const t = (key) => i18n[language]?.[key] ?? i18n.en[key] ?? key;
  const setTextAll = (selector, value) => $$(selector).forEach((n) => { n.textContent = value; });
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

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
    $$('[data-lang]').forEach((b) => b.classList.toggle('is-active', b.dataset.lang === language));
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
    return new Date(ms).toLocaleString(language === "ru" ? "ru-RU" : "en-GB", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
  }

  function normalize(payload = {}) {
    const online = Number(payload.online ?? payload.players ?? 0);
    const maxPlayers = Number(payload.maxPlayers ?? payload.max ?? config.maxPlayers ?? 16);
    const updatedAt = payload.updatedAt ?? payload.timestamp ?? 0;
    const ms = Number(updatedAt) < 1e12 ? Number(updatedAt) * 1000 : Number(updatedAt);
    const stale = ms > 0 && Date.now() - ms > (Number(config.staleAfterMs) || 60000);
    return {
      online: Number.isFinite(online) ? clamp(Math.floor(online), 0, 64) : 0,
      maxPlayers: Number.isFinite(maxPlayers) ? clamp(Math.floor(maxPlayers), 1, 64) : 16,
      map: String(payload.map ?? payload.mapName ?? t("unknown")),
      mode: String(payload.mode ?? payload.gameMode ?? "Zombie Mod"),
      updatedAt,
      serverOnline: Boolean(payload.serverOnline ?? payload.onlineStatus ?? true) && !stale,
      zombies: Number.isFinite(Number(payload.zombies)) ? Number(payload.zombies) : null,
      survivors: Number.isFinite(Number(payload.survivors)) ? Number(payload.survivors) : null
    };
  }

  function renderStatus(status) {
    window.__kontraLastStatus = status;
    const online = status.serverOnline ? status.online : 0;
    const ratio = clamp(online / status.maxPlayers, 0, 1);
    setTextAll("[data-online]", online);
    setTextAll("[data-max]", status.maxPlayers);
    setTextAll("[data-map]", status.map || t("unknown"));
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
  }

  async function fetchStatus() {
    const endpoint = String(config.statusEndpoint || "").trim();
    if (!endpoint) return;
    try {
      const response = await fetch(`${endpoint}${endpoint.includes("?") ? "&" : "?"}_=${Date.now()}`, { cache: "no-store", headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      renderStatus(normalize(await response.json()));
    } catch (error) {
      renderStatus(normalize({ online: 0, maxPlayers: config.maxPlayers || 16, map: t("unknown"), mode: "Zombie Mod", serverOnline: false, updatedAt: 0 }));
      console.warn("KONTRA status fetch failed", error);
    }
  }

  function showView(name) {
    $$('[data-view]').forEach((v) => v.classList.toggle('is-active', v.dataset.view === name));
    $$('.bottom-nav [data-nav]').forEach((b) => b.classList.toggle('is-active', b.dataset.nav === name));
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
      else { await navigator.clipboard.writeText(url); toast(t("shareCopied")); }
    } catch (error) {
      if (error?.name !== "AbortError") {
        try { await navigator.clipboard.writeText(url); toast(t("shareCopied")); } catch {}
      }
    }
  }

  function applyConfig() {
    setTextAll("[data-server-address]", config.serverAddress || "—");
    setTextAll("[data-max]", config.maxPlayers || 16);
    $$('[data-link]').forEach((a) => {
      const value = config.links?.[a.dataset.link];
      if (value) a.href = value;
      else { a.href = "#"; a.addEventListener("click", (e) => e.preventDefault()); }
    });
  }

  function tickClock() {
    const now = new Date();
    setTextAll("[data-clock]", now.toLocaleTimeString(language === "ru" ? "ru-RU" : "en-GB", { hour: "2-digit", minute: "2-digit" }));
  }

  function bind() {
    $$('[data-lang]').forEach((b) => b.addEventListener('click', () => applyLanguage(b.dataset.lang)));
    $$('[data-nav]').forEach((b) => b.addEventListener('click', (e) => { e.preventDefault(); showView(b.dataset.nav); }));
    $("#menuButton").addEventListener("click", () => setDrawer(!$("#drawer").classList.contains("is-open")));
    $("#scrim").addEventListener("click", () => setDrawer(false));
    $$('[data-close-drawer]').forEach((b) => b.addEventListener('click', () => setDrawer(false)));
    $$('[data-open-login]').forEach((b) => b.addEventListener('click', () => setLogin(true)));
    $$('[data-close-login]').forEach((b) => b.addEventListener('click', () => setLogin(false)));
    $("#loginModal").addEventListener("click", (e) => { if (e.target === e.currentTarget) setLogin(false); });
    $("#loginForm").addEventListener("submit", (e) => { e.preventDefault(); toast(t("authNotReady")); });
    $("#shareButton").addEventListener("click", shareSite);
    $("#drawerShare").addEventListener("click", shareSite);
    $("#copyIp").addEventListener("click", async () => { try { await navigator.clipboard.writeText(config.serverAddress || ""); toast(`${t("copied")}: ${config.serverAddress}`); } catch {} });
  }

  applyConfig();
  bind();
  applyLanguage(language);
  tickClock();
  setInterval(tickClock, 1000);
  fetchStatus();
  statusTimer = setInterval(fetchStatus, Math.max(5000, Number(config.statusRefreshMs) || 15000));
})();
