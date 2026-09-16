# Justin — Personal Portal & Real-Time Clock

<div align="center">

[![Deploy to GitHub Pages](https://github.com/cotaj6011-coder/AIoT/actions/workflows/deploy.yml/badge.svg)](https://github.com/cotaj6011-coder/AIoT/actions/workflows/deploy.yml)
[![Live Demo Page](https://img.shields.io/badge/Live%20Demo%20Page-GitHub%20Pages-38bdf8?style=for-the-badge&logo=github&logoColor=white)](https://cotaj6011-coder.github.io/AIoT/)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JS%20%7C%20HTML5%20%7C%20CSS3-f59e0b?style=for-the-badge&logo=javascript&logoColor=white)](https://cotaj6011-coder.github.io/AIoT/)

<br />

**A sleek, high-aesthetic personal dashboard and live digital timeboard featuring glassmorphic visuals, dynamic time-of-day context, and bilingual localization.**

[🌐 Explore the Live Website](https://cotaj6011-coder.github.io/AIoT/) · [Report Bug](https://github.com/cotaj6011-coder/AIoT/issues) · [Request Feature](https://github.com/cotaj6011-coder/AIoT/issues)

</div>

---

## 🚀 Live Demo Page

The website is continuously deployed and accessible globally at:

👉 **[https://cotaj6011-coder.github.io/AIoT/](https://cotaj6011-coder.github.io/AIoT/)**

---

## ✨ Features

- ⏱️ **Precision Digital Clock**: Real-time hours, minutes, and live ticking seconds with millisecond-aligned interval synchronization.
- 🔄 **12H / 24H Toggle**: Interactive switch between 24-hour military format (`20:15:30`) and 12-hour format with active `AM/PM` badge (`08:15:30 PM`).
- 🌐 **Bilingual Localization (i18n)**: Seamless one-click switch between **English** and **繁體中文 (Traditional Chinese)**, dynamically updating greetings, date formats, and UI labels.
- 🌅 **Time-of-Day Greeting**: Automatically detects your local time to present contextual greetings (e.g. *Good morning*, *Good afternoon*, *Good evening*, *Good night* / *早安*, *午安*, *晚安*, *夜深了*).
- 🎨 **Modern Glassmorphic Dark UI**: Frosted glass containers (`backdrop-filter: blur(28px)`), ambient animated floating radial gradients, subtle mouse parallax effects, and tabular monospace typography (`JetBrains Mono`) to eliminate horizontal ticking jitter.
- 📊 **Second Progress Meter**: Real-time illuminated gradient progress bar that smoothly tracks 0 to 59 seconds.
- 🔗 **Direct Profile Actions**: Quick-action links to GitHub Profile and Email contact.
- 💾 **State Persistence**: Remembers your preferred clock format (12h/24h) and language selection across browser sessions via `localStorage`.

---

## 🛠️ Tech Stack & Architecture

Built with pure web standards for zero-latency loading and zero build-step overhead:

- **HTML5**: Semantic markup, responsive metadata, Open Graph readiness, and Google Fonts integration (`Outfit`, `JetBrains Mono`).
- **Vanilla CSS3**: Design token system, glassmorphism filters, keyframe animations, and full mobile-first responsive layout.
- **Modern JavaScript (ES6+)**: Pure client-side reactivity, timezone detection via native `Intl` API, and precision timer scheduling.

### File Structure
```text
AIoT/
├── .agents/                    # Workspace agent skills (grill-me, grilling)
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── index.html                  # Semantic application markup
├── style.css                   # Glassmorphic design system & animations
├── app.js                      # Real-time clock engine & localization logic
└── README.md                   # Project documentation & live demo page guide
```

---

## 🚢 Deployment & CI/CD

This project uses **GitHub Actions** for automated continuous deployment to **GitHub Pages**:

- **Workflow Configuration**: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- **Deployment Trigger**: Automatically builds and deploys on every `push` to the primary branches (`main` or `Justin_20260916`).
- **Zero Configuration Needed**: Any modifications pushed to the repository are immediately validated, bundled into an artifact, and served via GitHub's global CDN.

---

## 💻 Local Development

No package manager or build dependencies required!

### Option 1: Direct File Open
Simply double-click `index.html` in your file explorer to open it in any modern browser.

### Option 2: Local HTTP Server
Run with Python:
```bash
python -m http.server 8000
```
Or with Node.js `npx`:
```bash
npx serve .
```
Then visit `http://localhost:8000` in your browser.

---

## 👤 Author

**Justin**
- GitHub: [@cotaj6011-coder](https://github.com/cotaj6011-coder)
- Email: [cotaj6011@gmail.com](mailto:cotaj6011@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
