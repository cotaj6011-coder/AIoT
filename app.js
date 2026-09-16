/**
 * 劉長村's Personal Portal & Real-Time Clock
 * Modern Vanilla JS Engine
 */

// ============================================================================
// Localization Dictionary
// ============================================================================
const i18n = {
  en: {
    status: 'Online',
    role: 'AIoT & Software Developer',
    greetings: {
      morning: 'Good morning,',
      afternoon: 'Good afternoon,',
      evening: 'Good evening,',
      night: 'Good night,'
    },
    formatBtn: (is24h) => (is24h ? '24H' : '12H'),
    langBtn: 'EN',
    github: 'GitHub',
    email: 'Email',
    timezonePrefix: 'GMT'
  },
  zh: {
    status: '在線',
    role: 'AIoT & 軟體開發工程師',
    greetings: {
      morning: '早安，',
      afternoon: '午安，',
      evening: '晚安，',
      night: '夜深了，'
    },
    formatBtn: (is24h) => (is24h ? '24小時制' : '12小時制'),
    langBtn: '中文',
    github: 'GitHub 主頁',
    email: '電子信箱',
    timezonePrefix: 'GMT'
  }
};

// ============================================================================
// State Management
// ============================================================================
const state = {
  is24Hour: localStorage.getItem('justin_clock_format') !== '12h', // Default 24h
  lang: localStorage.getItem('justin_lang') === 'en' ? 'en' : 'zh'  // Default zh (繁體中文)
};

// ============================================================================
// DOM References
// ============================================================================
const elements = {
  timeHours: document.getElementById('timeHours'),
  timeMinutes: document.getElementById('timeMinutes'),
  timeSeconds: document.getElementById('timeSeconds'),
  timePeriod: document.getElementById('timePeriod'),
  secondProgress: document.getElementById('secondProgress'),
  dateText: document.getElementById('dateText'),
  timezoneText: document.getElementById('timezoneText'),
  greetingIcon: document.getElementById('greetingIcon'),
  greetingText: document.getElementById('greetingText'),
  heroSubtitle: document.getElementById('heroSubtitle'),
  statusText: document.getElementById('statusText'),
  formatToggle: document.getElementById('formatToggle'),
  formatLabel: document.getElementById('formatLabel'),
  langToggle: document.getElementById('langToggle'),
  langLabel: document.getElementById('langLabel'),
  githubBtnText: document.getElementById('githubBtnText'),
  emailBtnText: document.getElementById('emailBtnText'),
  glow1: document.getElementById('glow1'),
  glow2: document.getElementById('glow2'),
  mainCard: document.getElementById('mainCard')
};

// ============================================================================
// Helper Functions
// ============================================================================
function padZero(num) {
  return String(num).padStart(2, '0');
}

function getTimezoneInfo() {
  const now = new Date();
  const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local';
  const offsetMinutes = -now.getTimezoneOffset();
  const offsetHours = offsetMinutes / 60;
  const sign = offsetHours >= 0 ? '+' : '-';
  const absHours = Math.floor(Math.abs(offsetHours));
  const city = timeZoneName.includes('/') ? timeZoneName.split('/')[1].replace('_', ' ') : timeZoneName;
  
  return `GMT${sign}${absHours} · ${city}`;
}

function getGreetingData(hours) {
  if (hours >= 5 && hours < 12) {
    return { type: 'morning', icon: '☀️' };
  } else if (hours >= 12 && hours < 18) {
    return { type: 'afternoon', icon: '🌤️' };
  } else if (hours >= 18 && hours < 23) {
    return { type: 'evening', icon: '🌙' };
  } else {
    return { type: 'night', icon: '🌌' };
  }
}

// ============================================================================
// UI Renderers
// ============================================================================
function updateStaticTexts() {
  const texts = i18n[state.lang];
  elements.statusText.textContent = texts.status;
  elements.heroSubtitle.textContent = texts.role;
  elements.formatLabel.textContent = texts.formatBtn(state.is24Hour);
  elements.langLabel.textContent = texts.langBtn;
  elements.githubBtnText.textContent = texts.github;
  elements.emailBtnText.textContent = texts.email;
  elements.timezoneText.textContent = getTimezoneInfo();
}

function updateClock() {
  const now = new Date();
  const rawHours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Greeting & Icon
  const greetingData = getGreetingData(rawHours);
  elements.greetingIcon.textContent = greetingData.icon;
  elements.greetingText.textContent = i18n[state.lang].greetings[greetingData.type];

  // Hours and Period
  let displayHours = rawHours;
  let period = '';

  if (!state.is24Hour) {
    period = rawHours >= 12 ? 'PM' : 'AM';
    displayHours = rawHours % 12;
    if (displayHours === 0) displayHours = 12;
    elements.timePeriod.textContent = period;
    elements.timePeriod.classList.add('active');
  } else {
    elements.timePeriod.classList.remove('active');
  }

  elements.timeHours.textContent = padZero(displayHours);
  elements.timeMinutes.textContent = padZero(minutes);
  elements.timeSeconds.textContent = padZero(seconds);

  // Second progress meter (0% to 100%)
  const progressPercent = (seconds / 59) * 100;
  elements.secondProgress.style.width = `${progressPercent}%`;

  // Localized Date
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const locale = state.lang === 'zh' ? 'zh-TW' : 'en-US';
  elements.dateText.textContent = now.toLocaleDateString(locale, dateOptions);
}

// ============================================================================
// Event Listeners & Interactions
// ============================================================================
function setupEventListeners() {
  // Format Toggle
  elements.formatToggle.addEventListener('click', () => {
    state.is24Hour = !state.is24Hour;
    localStorage.setItem('justin_clock_format', state.is24Hour ? '24h' : '12h');
    elements.formatLabel.textContent = i18n[state.lang].formatBtn(state.is24Hour);
    updateClock();
  });

  // Language Toggle
  elements.langToggle.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'zh' : 'en';
    localStorage.setItem('justin_lang', state.lang);
    updateStaticTexts();
    updateClock();
  });

  // Mouse Parallax for Ambient Glow
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;

    if (elements.glow1) {
      elements.glow1.style.transform = `translate(${x * 1.2}px, ${y * 1.2}px)`;
    }
    if (elements.glow2) {
      elements.glow2.style.transform = `translate(${-x * 0.8}px, ${-y * 0.8}px)`;
    }
  });
}

// ============================================================================
// Clock Sync & Initialization
// ============================================================================
function init() {
  updateStaticTexts();
  updateClock();
  setupEventListeners();

  // Synchronize precise interval to exact second tick
  const now = new Date();
  const msToNextSecond = 1000 - now.getMilliseconds();

  setTimeout(() => {
    updateClock();
    setInterval(updateClock, 1000);
  }, msToNextSecond);
}

// Start application
document.addEventListener('DOMContentLoaded', init);
