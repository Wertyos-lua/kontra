(() => {
  "use strict";

  const config = window.KONTRA_CONFIG || {};
  const state = {
    timer: null,
    toastTimer: null,
    lastStatus: null
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const safeText = (value, fallback = "—") => {
    const text = String(value ?? "").trim();
    return text || fallback;
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const formatAge = (timestamp) => {
    if (!timestamp) return "НЕТ ДАННЫХ";

    const raw = Number(timestamp);
    const date = Number.isFinite(raw)
      ? new Date(raw < 1e12 ? raw * 1000 : raw)
      : new Date(timestamp);

    if (Number.isNaN(date.getTime())) return "НЕТ ДАННЫХ";

    const seconds = Math.max(0, Math.floor((Date.now() - date.getTime()) / 1000));
    if (seconds < 5) return "ТОЛЬКО ЧТО";
    if (seconds < 60) return `${seconds} СЕК. НАЗАД`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} МИН. НАЗАД`;
    return date.toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const parseTimestamp = (value) => {
    if (!value) return 0;
    const number = Number(value);
    if (Number.isFinite(number)) return number < 1e12 ? number * 1000 : number;
    const parsed = new Date(value).getTime();
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  const setAll = (selector, value) => {
    $$(selector).forEach((node) => {
      node.textContent = value;
    });
  };

  const showToast = (message) => {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("is-visible");

    window.clearTimeout(state.toastTimer);
    state.toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2600);
  };

  const applyStaticConfig = () => {
    const serverName = safeText(config.serverName, "KONTRA // ZOMBIE");
    const address = safeText(config.serverAddress, "АДРЕС НЕ ЗАДАН");
    const maxPlayers = Math.max(1, Number(config.maxPlayers) || 16);

    setAll("[data-server-name]", serverName);
    setAll("[data-server-address]", address);
    setAll("[data-max]", maxPlayers);

    $$("[data-link]").forEach((link) => {
      const key = link.dataset.link;
      const target = config.links?.[key];

      if (!target) {
        link.href = "#";
        link.classList.add("is-disabled");
        link.setAttribute("aria-disabled", "true");
        link.addEventListener("click", (event) => {
          event.preventDefault();
          showToast(`Ссылка ${key.toUpperCase()} ещё не настроена`);
        });
      } else {
        link.href = target;
      }
    });
  };

  const normalizeStatus = (payload = {}) => {
    const online = Number(
      payload.online ??
      payload.players ??
      payload.playerCount ??
      payload.currentPlayers
    );

    const maxPlayers = Number(
      payload.maxPlayers ??
      payload.max ??
      payload.slots ??
      config.maxPlayers ??
      16
    );

    const updatedAt =
      payload.updatedAt ??
      payload.timestamp ??
      payload.updated ??
      payload.time;

    const explicitOnline =
      payload.serverOnline ??
      payload.onlineStatus ??
      payload.status;

    const staleAfter = Number(config.staleAfterMs) || 60000;
    const timestampMs = parseTimestamp(updatedAt);
    const isStale = timestampMs > 0 && Date.now() - timestampMs > staleAfter;

    let serverOnline;
    if (typeof explicitOnline === "boolean") {
      serverOnline = explicitOnline;
    } else if (typeof explicitOnline === "string") {
      serverOnline = !["offline", "down", "false", "0"].includes(explicitOnline.toLowerCase());
    } else {
      serverOnline = Number.isFinite(online);
    }

    if (isStale) serverOnline = false;

    return {
      online: Number.isFinite(online) ? Math.max(0, Math.floor(online)) : 0,
      maxPlayers: Number.isFinite(maxPlayers) ? Math.max(1, Math.floor(maxPlayers)) : 16,
      map: safeText(payload.map ?? payload.mapName, "НЕИЗВЕСТНО"),
      mode: safeText(payload.mode ?? payload.gameMode, "ZOMBIE MOD"),
      updatedAt,
      timestampMs,
      serverOnline,
      isStale
    };
  };

  const renderStatus = (status, source = "live") => {
    state.lastStatus = status;

    const displayOnline = status.serverOnline ? status.online : 0;
    const ratio = clamp(displayOnline / status.maxPlayers, 0, 1);

    setAll("[data-online]", displayOnline);
    setAll("[data-max]", status.maxPlayers);
    setAll("[data-map]", status.map.toUpperCase());
    setAll("[data-mode]", status.mode.toUpperCase());
    setAll("[data-updated]", formatAge(status.updatedAt));

    const label = status.serverOnline
      ? "СЕРВЕР ОНЛАЙН"
      : status.isStale
        ? "ДАННЫЕ УСТАРЕЛИ"
        : "СЕРВЕР ОФЛАЙН";

    setAll("[data-status-label]", label);

    const meter = $("#onlineMeter");
    if (meter) meter.style.width = `${ratio * 100}%`;

    const header = $("#headerStatus");
    const consoleNode = $(".server-console");
    [header, consoleNode].forEach((node) => {
      if (!node) return;
      node.classList.toggle("is-online", status.serverOnline);
      node.classList.toggle("is-offline", !status.serverOnline);
    });

    const terminal = $("#terminalText");
    if (terminal) {
      terminal.textContent = status.serverOnline
        ? `NODE ACTIVE // ${displayOnline}/${status.maxPlayers} // ${status.map.toUpperCase()}_`
        : source === "cached"
          ? "LIVE API UNAVAILABLE // SHOWING CACHED STATUS_"
          : "NODE OFFLINE OR STATUS STALE_";
    }

    document.title = status.serverOnline
      ? `[${displayOnline}/${status.maxPlayers}] KONTRA // ZOMBIE MOD`
      : `KONTRA // ZOMBIE MOD`;
  };

  const renderNoApi = () => {
    const maxPlayers = Math.max(1, Number(config.maxPlayers) || 16);
    setAll("[data-online]", "—");
    setAll("[data-max]", maxPlayers);
    setAll("[data-status-label]", "ОЖИДАНИЕ API");
    setAll("[data-updated]", "НЕТ ДАННЫХ");

    const terminal = $("#terminalText");
    if (terminal) terminal.textContent = "STATUS_ENDPOINT NOT CONFIGURED_";

    const meter = $("#onlineMeter");
    if (meter) meter.style.width = "0%";
  };

  const readCache = () => {
    try {
      const raw = localStorage.getItem("kontra:last-status");
      if (!raw) return null;
      return normalizeStatus(JSON.parse(raw));
    } catch {
      return null;
    }
  };

  const writeCache = (payload) => {
    try {
      localStorage.setItem("kontra:last-status", JSON.stringify(payload));
    } catch {
      // LocalStorage может быть отключён — сайт продолжит работать без кэша.
    }
  };

  const fetchStatus = async () => {
    const endpoint = String(config.statusEndpoint || "").trim();
    if (!endpoint) {
      renderNoApi();
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(`${endpoint}${endpoint.includes("?") ? "&" : "?"}_=${Date.now()}`, {
        cache: "no-store",
        signal: controller.signal,
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const payload = await response.json();
      const status = normalizeStatus(payload);

      writeCache(payload);
      renderStatus(status, "live");
    } catch (error) {
      const cached = readCache();

      if (cached) {
        cached.serverOnline = false;
        cached.isStale = true;
        renderStatus(cached, "cached");
      } else {
        renderStatus({
          online: 0,
          maxPlayers: Math.max(1, Number(config.maxPlayers) || 16),
          map: "НЕИЗВЕСТНО",
          mode: "ZOMBIE MOD",
          updatedAt: 0,
          serverOnline: false,
          isStale: false
        }, "error");
      }

      console.warn("KONTRA status request failed:", error);
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const setupStatusLoop = () => {
    fetchStatus();
    const refresh = clamp(Number(config.statusRefreshMs) || 15000, 5000, 300000);
    state.timer = window.setInterval(fetchStatus, refresh);
  };

  const setupCopyButtons = () => {
    $$(".js-copy-ip").forEach((button) => {
      button.addEventListener("click", async () => {
        const address = safeText(config.serverAddress, "");

        if (!address) {
          showToast("Адрес сервера не настроен");
          return;
        }

        try {
          await navigator.clipboard.writeText(address);
          showToast(`IP скопирован: ${address}`);
        } catch {
          const input = document.createElement("textarea");
          input.value = address;
          input.style.position = "fixed";
          input.style.opacity = "0";
          document.body.appendChild(input);
          input.select();
          document.execCommand("copy");
          input.remove();
          showToast(`IP скопирован: ${address}`);
        }
      });
    });
  };

  const setupMenu = () => {
    const button = $("#menuButton");
    const menu = $("#mobileMenu");
    if (!button || !menu) return;

    const close = () => {
      button.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      menu.classList.remove("is-open");
    };

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      menu.setAttribute("aria-hidden", String(isOpen));
      menu.classList.toggle("is-open", !isOpen);
    });

    $$("a", menu).forEach((link) => link.addEventListener("click", close));
  };

  const setupReveal = () => {
    const nodes = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    nodes.forEach((node) => observer.observe(node));
  };

  const setupParticles = () => {
    const root = $("#particles");
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const count = window.innerWidth < 700 ? 14 : 26;
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < count; index += 1) {
      const particle = document.createElement("i");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.setProperty("--duration", `${10 + Math.random() * 18}s`);
      particle.style.setProperty("--delay", `${-Math.random() * 24}s`);
      particle.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
      fragment.appendChild(particle);
    }

    root.appendChild(fragment);
  };

  const setupCursor = () => {
    const glow = $(".cursor-glow");
    if (!glow || window.matchMedia("(pointer: coarse)").matches) return;

    window.addEventListener("pointermove", (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }, { passive: true });
  };

  const init = () => {
    applyStaticConfig();
    setupCopyButtons();
    setupMenu();
    setupReveal();
    setupParticles();
    setupCursor();
    setupStatusLoop();

    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    window.setTimeout(() => {
      document.body.classList.add("is-ready");
      $$(".hero .reveal").forEach((node) => node.classList.add("is-visible"));
    }, 650);
  };

  document.addEventListener("DOMContentLoaded", init);
})();
