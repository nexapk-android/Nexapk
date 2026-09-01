@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

:root {
  --bg: #f7f9fc;
  --surface: #ffffff;
  --surface-soft: #f9fbff;
  --text: #08152d;
  --muted: #718096;
  --muted-2: #94a3b8;
  --border: #e7edf5;
  --blue: #1473ea;
  --blue-dark: #0b5dcc;
  --blue-soft: #edf6ff;
  --navy: #071426;
  --shadow: 0 10px 35px rgba(20, 55, 100, 0.06);
}

html.dark {
  --bg: #080d16;
  --surface: #101722;
  --surface-soft: #131c29;
  --text: #f4f7fb;
  --muted: #9aa9bd;
  --muted-2: #718096;
  --border: #202b3a;
  --blue: #3185ef;
  --blue-dark: #2275dc;
  --blue-soft: #14263d;
  --navy: #050b14;
  --shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", Arial, sans-serif;
  transition:
    background .25s ease,
    color .25s ease;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}


/* =========================
   HEADER
========================= */

.header {
  height: 74px;
  position: sticky;
  top: 0;
  z-index: 1000;

  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid var(--border);

  transition:
    background .25s ease,
    backdrop-filter .25s ease,
    box-shadow .25s ease;
}

html.dark .header {
  background: rgba(16, 23, 34, .94);
}

.header.scrolled {
  background: rgba(255, 255, 255, .72);
  backdrop-filter: blur(18px);
  box-shadow: 0 8px 30px rgba(10, 35, 70, .06);
}

.header-inner {
  width: min(1180px, calc(100% - 40px));
  height: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  gap: 28px;
}

.menu-btn {
  width: 42px;
  height: 42px;
  padding: 8px;

  border: 0;
  background: transparent;

  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.menu-btn span {
  width: 24px;
  height: 2.5px;
  border-radius: 10px;
  background: var(--text);
}


/* =========================
   ROBOT LOGO
========================= */

.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 29px;
  font-weight: 900;
  letter-spacing: -1.5px;
}

.logo-text span,
.footer-logo > span > span {
  color: var(--blue);
}

.robot-logo {
  width: 43px;
  height: 43px;

  display: grid;
  place-items: center;

  border-radius: 13px;

  background:
    linear-gradient(
      145deg,
      #0b63d9,
      #268cff
    );

  box-shadow:
    0 8px 20px rgba(20, 115, 234, .2);

  position: relative;
  flex-shrink: 0;
}

.robot-head {
  width: 27px;
  height: 23px;

  position: relative;

  background: white;
  border-radius: 8px 8px 9px 9px;
}

.robot-head::before {
  content: "";
  width: 2px;
  height: 7px;

  position: absolute;
  top: -5px;
  left: 50%;

  transform: translateX(-50%);

  background: white;
}

.robot-head::after {
  content: "";
  width: 6px;
  height: 6px;

  position: absolute;
  top: -8px;
  left: 50%;

  transform: translateX(-50%);

  border-radius: 50%;
  background: white;
}

.robot-eye {
  width: 5px;
  height: 5px;

  position: absolute;
  top: 8px;

  border-radius: 50%;
  background: var(--blue);
}

.robot-eye.left {
  left: 6px;
}

.robot-eye.right {
  right: 6px;
}

.robot-mouth {
  width: 11px;
  height: 2px;

  position: absolute;
  left: 50%;
  bottom: 5px;

  transform: translateX(-50%);

  border-radius: 5px;
  background: var(--blue);
}

.robot-small {
  width: 31px;
  height: 31px;
  border-radius: 9px;
}

.robot-small .robot-head {
  transform: scale(.7);
}


/* NAV */

.desktop-nav {
  display: flex;
  gap: 27px;
  margin-left: 24px;
}

.desktop-nav a {
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;

  transition: color .2s;
}

.desktop-nav a:hover {
  color: var(--blue);
}


/* HEADER ACTIONS */

.header-actions {
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 9px;
}

.theme-btn,
.header-search {
  width: 42px;
  height: 42px;

  border: 1px solid var(--border);
  border-radius: 13px;

  background: var(--surface);

  color: var(--text);

  display: grid;
  place-items: center;

  position: relative;

  transition: .2s;
}

.theme-btn:hover,
.header-search:hover {
  border-color: #b8d5f7;
  color: var(--blue);
}

.theme-btn span {
  position: absolute;
  opacity: 0;
  transform: scale(.7) rotate(-20deg);
  transition: .2s;
}

.theme-btn .active {
  opacity: 1;
  transform: scale(1) rotate(0);
}

.sun {
  font-size: 17px;
}

.moon {
  font-size: 23px;
}


/* =========================
   HERO
========================= */

.hero-section {
  padding: 25px 0 55px;
}

.hero {
  width: min(1180px, calc(100% - 40px));
  min-height: 465px;

  margin: auto;

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  border: 1px solid #dce8f6;
  border-radius: 25px;

  background:
    linear-gradient(
      115deg,
      #f4faff 0%,
      #eef7ff 52%,
      #f8fbff 100%
    );

  box-shadow:
    0 20px 60px rgba(36, 94, 150, .06);
}

html.dark .hero {
  background:
    linear-gradient(
      115deg,
      #101b2a,
      #0d1725,
      #111b29
    );

  border-color: #1e3147;
}

.hero-glow {
  width: 520px;
  height: 520px;

  position: absolute;
  right: 80px;
  top: -220px;

  border-radius: 50%;

  background: rgba(54, 147, 247, .11);
  filter: blur(3px);
}

.hero-content {
  width: 57%;
  padding: 55px 35px 55px 48px;

  position: relative;
  z-index: 3;
}

.platform-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 13px;

  border: 1px solid #d8e7f8;
  border-radius: 999px;

  background: rgba(255,255,255,.8);

  color: #276ab2;

  font-size: 11px;
  font-weight: 800;
}

html.dark .platform-badge {
  background: #17263a;
  border-color: #263d57;
  color: #74b4fa;
}

.badge-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;
  background: var(--blue);

  box-shadow: 0 0 0 5px rgba(20,115,234,.1);
}

.hero h1 {
  margin: 20px 0 14px;

  font-size: clamp(42px, 4.7vw, 61px);
  line-height: 1.02;

  letter-spacing: -3px;
  font-weight: 900;
}

.hero h1 span {
  color: var(--blue);
}

.hero-content > p {
  max-width: 570px;

  margin: 0;

  color: var(--muted);

  font-size: 15px;
  line-height: 1.7;
}


/* SEARCH */

.hero-search {
  width: 100%;
  max-width: 610px;
  height: 59px;

  margin-top: 25px;
  padding: 5px 6px 5px 18px;

  display: flex;
  align-items: center;

  border: 1px solid #dce5f0;
  border-radius: 999px;

  background: var(--surface);

  box-shadow:
    0 12px 30px rgba(23, 73, 125, .08);
}

html.dark .hero-search {
  border-color: #26364a;
}

.search-symbol {
  color: #5c7592;
  font-size: 25px;
}

.hero-search input {
  flex: 1;
  min-width: 0;

  padding: 0 12px;

  border: 0;
  outline: 0;

  background: transparent;
  color: var(--text);

  font-size: 13px;
}

.hero-search input::placeholder {
  color: #9aa8b8;
}

.hero-search button {
  width: 47px;
  height: 47px;

  border: 0;
  border-radius: 50%;

  background: var(--blue);
  color: white;

  font-size: 22px;

  transition: .2s;
}

.hero-search button:hover {
  background: var(--blue-dark);
  transform: translateX(2px);
}


/* POPULAR */

.popular {
  margin-top: 14px;

  display: flex;
  align-items: center;
  gap: 8px;

  flex-wrap: wrap;
}

.popular strong {
  margin-right: 3px;

  color: var(--text);
  font-size: 10px;
}

.popular a {
  padding: 7px 11px;

  border: 1px solid #dce6f1;
  border-radius: 999px;

  background: rgba(255,255,255,.65);

  color: var(--muted);

  font-size: 10px;
  font-weight: 700;

  transition: .2s;
}

html.dark .popular a {
  background: #121e2d;
  border-color: #26374c;
}

.popular a:hover {
  color: var(--blue);
  border-color: #b8d6f7;
}


/* =========================
   HERO PHONE
========================= */

.hero-visual {
  width: 43%;
  height: 100%;

  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-orb {
  position: absolute;

  border-radius: 50%;

  background: rgba(56, 149, 245, .08);
}

.orb-one {
  width: 340px;
  height: 340px;
}

.orb-two {
  width: 220px;
  height: 220px;

  right: 25px;
  bottom: 30px;
}

.phone {
  width: 220px;
  height: 400px;

  position: relative;
  z-index: 5;

  padding: 7px;

  border: 5px solid #07162d;
  border-radius: 34px;

  background: #07162d;

  transform: rotate(5deg);

  box-shadow:
    0 30px 60px rgba(5, 30, 65, .25);
}

.phone-top {
  width: 82px;
  height: 21px;

  position: absolute;
  z-index: 5;

  top: 0;
  left: 50%;

  transform: translateX(-50%);

  border-radius: 0 0 15px 15px;

  background: #07162d;
}

.phone-screen {
  height: 100%;

  padding: 42px 13px 14px;

  overflow: hidden;

  border-radius: 25px;

  background: #f7fbff;
}

html.dark .phone-screen {
  background: #111b29;
}

.phone-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  font-size: 14px;
}

.phone-brand b span {
  color: var(--blue);
}

.phone-search {
  height: 31px;

  margin-top: 18px;
  padding: 0 10px;

  display: flex;
  align-items: center;
  gap: 6px;

  border: 1px solid #e0e9f2;
  border-radius: 9px;

  background: white;

  color: #9aa9ba;

  font-size: 7px;
}

.phone-label {
  margin: 17px 2px 9px;

  color: var(--text);

  font-size: 9px;
  font-weight: 800;
}

.phone-app {
  height: 57px;

  margin-bottom: 8px;
  padding: 7px;

  display: flex;
  align-items: center;
  gap: 7px;

  border: 1px solid #e0e8f1;
  border-radius: 11px;

  background: white;
}

.phone-app > div:nth-child(2) {
  min-width: 0;
  flex: 1;
}

.phone-app b {
  display: block;

  overflow: hidden;

  color: #132039;

  font-size: 7px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.phone-app small {
  display: block;

  margin-top: 3px;

  color: #8a9aac;
  font-size: 5px;
}

.phone-app > span {
  color: #3475b8;
  font-size: 16px;
}

.mini-app {
  width: 35px;
  height: 35px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 9px;

  color: white;

  font-size: 14px;
  font-weight: 900;
}

.mini-app.whatsapp {
  background: linear-gradient(135deg,#08bd64,#17dc79);
}

.mini-app.spotify {
  background: #111;
  color: #1ed760;
}

.phone-download {
  height: 36px;

  margin-top: 13px;

  display: grid;
  place-items: center;

  border-radius: 999px;

  background: var(--blue);
  color: white;

  font-size: 8px;
  font-weight: 800;
}

.floating-app {
  width: 57px;
  height: 57px;

  position: absolute;
  z-index: 6;

  display: grid;
  place-items: center;

  border: 1px solid rgba(220,231,243,.9);
  border-radius: 17px;

  background: rgba(255,255,255,.92);

  box-shadow:
    0 16px 35px rgba(18, 65, 110, .13);

  font-size: 24px;
  font-weight: 900;
}

.float-whatsapp {
  left: 40px;
  top: 105px;
  color: #10bd61;
}

.float-spotify {
  right: 32px;
  bottom: 88px;

  background: #101010;
  color: #1ed760;
}


/* =========================
   LATEST SECTION
========================= */

.featured-section {
  width: min(1180px, calc(100% - 40px));

  margin: auto;
  padding: 0 0 55px;
}

.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: 20px;
}

.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 6px;

  margin-bottom: 5px;

  color: var(--blue);

  font-size: 9px;
  font-weight: 900;
  letter-spacing: .7px;
}

.section-heading h2 {
  margin: 0;

  font-size: 29px;
  line-height: 1.1;

  letter-spacing: -1.2px;
}

.section-heading p {
  margin: 6px 0 0;

  color: var(--muted);

  font-size: 12px;
}

.view-all {
  color: var(--muted);

  font-size: 12px;
  font-weight: 800;
}

.view-all span {
  margin-left: 5px;

  color: var(--blue);

  font-size: 19px;
}


/* =========================
   APK CARDS
========================= */

.apk-grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 14px;
}

.apk-card {
  padding: 15px;

  border: 1px solid var(--border);
  border-radius: 17px;

  background: var(--surface);

  box-shadow: var(--shadow);

  transition:
    transform .22s ease,
    border-color .22s ease,
    box-shadow .22s ease;
}

.apk-card:hover {
  transform: translateY(-3px);

  border-color: #c8def6;

  box-shadow:
    0 18px 45px rgba(18, 71, 120, .1);
}

.apk-main {
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 13px;

  position: relative;
}

.app-icon-wrap {
  flex-shrink: 0;
}

.app-icon {
  width: 70px;
  height: 70px;

  display: grid;
  place-items: center;

  border-radius: 17px;

  color: white;

  font-size: 27px;
  font-weight: 900;

  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,.18);
}

.app-icon.whatsapp {
  background: linear-gradient(145deg,#05bb61,#20df7d);
}

.app-icon.instagram {
  background:
    linear-gradient(
      145deg,
      #7b25f5,
      #f22672 55%,
      #ffb326
    );
}

.app-icon.bgmi {
  background:
    linear-gradient(
      145deg,
      #141414,
      #5e6874
    );
}

.app-icon.spotify {
  background: #101010;
  color: #1ed760;
}

.app-icon.capcut {
  background: #f2f5f8;
  color: #111;
}

.app-icon.youtube {
  background: #111;
  color: #ff1744;
}

.apk-info {
  min-width: 0;
  padding-right: 35px;
}

.apk-name-row {
  display: flex;
  align-items: center;
  gap: 7px;

  flex-wrap: wrap;
}

.apk-name-row h3 {
  margin: 0;

  font-size: 14px;
  line-height: 1.3;
}

.apk-badge {
  padding: 4px 7px;

  border-radius: 999px;

  color: white;

  font-size: 7px;
  font-weight: 900;
  letter-spacing: .3px;
}

.badge-mod {
  background: #1473ea;
}

.badge-popular {
  background: #ed781d;
}

.badge-new {
  background: #1686e9;
}

.badge-trending {
  background: #8124d9;
}

.apk-version {
  margin-top: 7px;

  color: var(--muted);

  font-size: 10px;
}

.apk-version span {
  margin: 0 5px;

  color: #aab7c6;
}

.card-arrow {
  width: 31px;
  height: 31px;

  position: absolute;
  top: 0;
  right: 0;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: var(--blue-soft);
  color: var(--blue);

  font-size: 17px;

  transition: .2s;
}

.apk-card:hover .card-arrow {
  background: var(--blue);
  color: white;
}


/* CARD BOTTOM */

.apk-bottom {
  margin-top: 15px;
  padding-top: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid var(--border);

  gap: 10px;
}

.apk-stats {
  display: flex;
  align-items: center;
  gap: 13px;

  color: var(--muted);

  font-size: 9px;
}

.apk-stats span {
  white-space: nowrap;
}

.apk-stats b {
  margin-right: 3px;

  color: var(--blue);

  font-size: 13px;
}

.apk-stats span:first-child b {
  color: #f2aa00;
}

.download-btn {
  min-height: 35px;

  padding: 0 13px;

  display: flex;
  align-items: center;
  gap: 7px;

  border-radius: 9px;

  background: var(--navy);
  color: white;

  font-size: 9px;
  font-weight: 800;

  transition: .2s;
}

.download-btn span {
  font-size: 14px;
}

.download-btn:hover {
  background: var(--blue);
}


/* LOAD MORE */

.load-more-wrap {
  display: flex;
  justify-content: center;

  margin-top: 24px;
}

.load-more {
  min-width: 185px;
  height: 45px;

  padding: 0 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: 1px solid var(--border);
  border-radius: 999px;

  background: var(--surface);

  color: var(--text);

  font-size: 11px;
  font-weight: 800;

  transition: .2s;
}

.load-more span {
  color: var(--blue);
  font-size: 17px;
}

.load-more:hover {
  border-color: #b9d5f4;
  color: var(--blue);
}


/* =========================
   TRUST
========================= */

.trust-section {
  width: min(1180px, calc(100% - 40px));

  min-height: 78px;

  margin: 0 auto 40px;
  padding: 9px 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  align-items: center;

  border: 1px solid var(--border);
  border-radius: 17px;

  background: var(--surface);

  box-shadow: var(--shadow);
}

.trust-item {
  min-height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  border-right: 1px solid var(--border);
}

.trust-item:last-child {
  border-right: 0;
}

.trust-icon {
  width: 32px;
  height: 32px;

  display: grid;
  place-items: center;

  border-radius: 9px;

  background: var(--blue-soft);
  color: var(--blue);

  font-size: 17px;
  font-weight: 900;
}

.trust-item b {
  display: block;

  font-size: 10px;
}

.trust-item small {
  display: block;

  margin-top: 3px;

  color: var(--muted);

  font-size: 8px;
}


/* =========================
   FOOTER
========================= */

.footer {
  background: var(--navy);
  color: white;
}

.footer-inner {
  width: min(1180px, calc(100% - 40px));

  margin: auto;
  padding: 48px 0 42px;

  display: grid;

  grid-template-columns: 1.7fr 1fr 1fr 1.1fr;

  gap: 45px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 9px;

  font-size: 25px;
  font-weight: 900;
  letter-spacing: -1px;
}

.footer-logo > span > span {
  color: #2b8aff;
}

.footer-brand p {
  max-width: 300px;

  margin: 13px 0 0;

  color: #8293a9;

  font-size: 11px;
  line-height: 1.7;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.footer-column h4 {
  margin: 0 0 6px;

  color: white;

  font-size: 11px;
}

.footer-column a {
  color: #8495aa;

  font-size: 10px;

  transition: color .2s;
}

.footer-column a:hover {
  color: white;
}

.socials {
  display: flex;
  gap: 8px;
}

.socials a {
  width: 35px;
  height: 35px;

  display: grid;
  place-items: center;

  border: 1px solid #203249;
  border-radius: 10px;

  background: #0c1b2d;

  color: white;

  font-size: 14px;
  font-weight: 800;

  transition: .2s;
}

.socials a:hover {
  background: var(--blue);
  border-color: var(--blue);
}

.footer-bottom {
  width: min(1180px, calc(100% - 40px));

  margin: auto;
  padding: 17px 0;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid rgba(255,255,255,.08);

  color: #687b92;

  font-size: 9px;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 760px) {

  .header {
    height: 67px;
  }

  .header-inner {
    width: calc(100% - 20px);
    gap: 6px;
  }

  .menu-btn {
    display: flex;
  }

  .logo {
    gap: 7px;
    font-size: 23px;
  }

  .robot-logo {
    width: 37px;
    height: 37px;
    border-radius: 11px;
  }

  .robot-head {
    transform: scale(.83);
  }

  .desktop-nav {
    display: none;
  }

  .header-actions {
    gap: 4px;
  }

  .theme-btn,
  .header-search {
    width: 37px;
    height: 37px;

    border-radius: 11px;
  }

  .theme-btn {
    display: grid;
  }


  /* HERO */

  .hero-section {
    padding: 12px 0 32px;
  }

  .hero {
    width: calc(100% - 16px);

    min-height: auto;

    display: block;

    border-radius: 19px;
  }

  .hero-content {
    width: 100%;

    padding: 25px 18px 0;
  }

  .platform-badge {
    padding: 7px 10px;
    font-size: 9px;
  }

  .hero h1 {
    margin: 16px 0 11px;

    font-size: 35px;
    line-height: 1.04;

    letter-spacing: -1.8px;
  }

  .hero-content > p {
    font-size: 11px;
    line-height: 1.6;
  }

  .hero-search {
    height: 51px;

    margin-top: 17px;

    padding-left: 13px;
  }

  .search-symbol {
    font-size: 22px;
  }

  .hero-search input {
    padding: 0 8px;
    font-size: 10px;
  }

  .hero-search button {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .popular {
    margin-top: 12px;
    gap: 5px;
  }

  .popular strong {
    font-size: 8px;
  }

  .popular a {
    padding: 6px 8px;
    font-size: 8px;
  }


  /* PHONE */

  .hero-visual {
    width: 100%;
    height: 295px;

    position: relative;

    right: auto;
    top: auto;

    margin-top: 5px;
  }

  .phone {
    width: 160px;
    height: 275px;

    border-width: 4px;
    border-radius: 27px;
  }

  .phone-top {
    width: 62px;
    height: 15px;
  }

  .phone-screen {
    padding: 31px 9px 10px;
    border-radius: 20px;
  }

  .phone-brand {
    font-size: 10px;
  }

  .robot-small {
    width: 23px;
    height: 23px;
    border-radius: 7px;
  }

  .phone-search {
    height: 23px;
    margin-top: 13px;
    font-size: 5px;
  }

  .phone-label {
    margin: 12px 2px 6px;
    font-size: 7px;
  }

  .phone-app {
    height: 42px;
    margin-bottom: 6px;
    padding: 5px;
    border-radius: 8px;
  }

  .mini-app {
    width: 27px;
    height: 27px;
    border-radius: 7px;
    font-size: 10px;
  }

  .phone-app b {
    font-size: 5px;
  }

  .phone-app small {
    font-size: 4px;
  }

  .phone-app > span {
    font-size: 11px;
  }

  .phone-download {
    height: 27px;
    margin-top: 8px;
    font-size: 5px;
  }

  .floating-app {
    width: 44px;
    height: 44px;
    border-radius: 13px;
    font-size: 18px;
  }

  .float-whatsapp {
    left: 10%;
    top: 68px;
  }

  .float-spotify {
    right: 9%;
    bottom: 42px;
  }


  /* LATEST */

  .featured-section {
    width: calc(100% - 16px);
    padding-bottom: 35px;
  }

  .section-heading {
    margin-bottom: 14px;
  }

  .section-eyebrow {
    font-size: 7px;
  }

  .section-heading h2 {
    font-size: 23px;
  }

  .section-heading p {
    font-size: 9px;
  }

  .view-all {
    font-size: 9px;
  }

  .view-all span {
    font-size: 15px;
  }


  /* APK GRID */

  .apk-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .apk-card {
    padding: 10px;
    border-radius: 14px;
  }

  .apk-main {
    display: block;
  }

  .app-icon {
    width: 53px;
    height: 53px;

    margin-bottom: 8px;

    border-radius: 14px;

    font-size: 21px;
  }

  .apk-info {
    padding-right: 0;
  }

  .apk-name-row {
    display: block;
  }

  .apk-name-row h3 {
    margin-bottom: 4px;

    font-size: 10px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .apk-badge {
    padding: 3px 5px;
    font-size: 6px;
  }

  .apk-version {
    margin-top: 5px;
    font-size: 7px;
  }

  .apk-version span {
    margin: 0 3px;
  }

  .card-arrow {
    width: 23px;
    height: 23px;

    font-size: 12px;
  }

  .apk-bottom {
    display: block;
    margin-top: 9px;
    padding-top: 9px;
  }

  .apk-stats {
    justify-content: space-between;
    gap: 2px;

    font-size: 6px;
  }

  .apk-stats b {
    margin-right: 2px;
    font-size: 9px;
  }

  .download-btn {
    width: 100%;

    min-height: 31px;

    margin-top: 7px;

    justify-content: center;

    border-radius: 8px;

    font-size: 7px;
  }

  .download-btn span {
    font-size: 11px;
  }


  /* LOAD MORE */

  .load-more {
    min-width: 170px;
    height: 42px;
    font-size: 9px;
  }


  /* TRUST */

  .trust-section {
    width: calc(100% - 16px);

    grid-template-columns: repeat(2, 1fr);

    padding: 7px;

    gap: 3px;

    border-radius: 14px;
  }

  .trust-item {
    min-height: 51px;

    justify-content: flex-start;

    padding-left: 7px;

    border-right: 0;
  }

  .trust-item:nth-child(-n + 2) {
    border-bottom: 1px solid var(--border);
  }

  .trust-icon {
    width: 27px;
    height: 27px;

    font-size: 14px;
  }

  .trust-item b {
    font-size: 8px;
  }

  .trust-item small {
    font-size: 6px;
  }


  /* FOOTER */

  .footer-inner {
    width: calc(100% - 28px);

    padding: 35px 0 30px;

    grid-template-columns: 1fr 1fr;

    gap: 30px 22px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-logo {
    font-size: 21px;
  }

  .footer-brand p {
    max-width: 280px;
    font-size: 9px;
  }

  .footer-column {
    gap: 9px;
  }

  .footer-column h4 {
    font-size: 9px;
  }

  .footer-column a {
    font-size: 8px;
  }

  .social-column {
    grid-column: 1 / -1;
  }

  .socials a {
    width: 32px;
    height: 32px;
  }

  .footer-bottom {
    width: calc(100% - 28px);

    display: block;

    padding: 14px 0;

    line-height: 2;

    font-size: 7px;
  }

  .footer-bottom span {
    display: block;
  }
}
