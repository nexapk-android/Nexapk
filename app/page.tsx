"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type AppItem = {
  name: string;
  category: string;
  version: string;
  size: string;
  rating: string;
  downloads: string;
  badge: string;
  icon: string;
  iconClass: string;
};

const apps: AppItem[] = [
  {
    name: "WhatsApp Plus",
    category: "Social",
    version: "17.20",
    size: "54 MB",
    rating: "4.6",
    downloads: "5M+",
    badge: "MOD",
    icon: "W",
    iconClass: "whatsapp",
  },
  {
    name: "Instagram Pro",
    category: "Social",
    version: "32.0",
    size: "48 MB",
    rating: "4.5",
    downloads: "10M+",
    badge: "MOD",
    icon: "◎",
    iconClass: "instagram",
  },
  {
    name: "BGMI",
    category: "Games",
    version: "3.6.0",
    size: "2.6 GB",
    rating: "4.7",
    downloads: "20M+",
    badge: "POPULAR",
    icon: "B",
    iconClass: "bgmi",
  },
  {
    name: "Spotify Premium",
    category: "Music",
    version: "9.9.78",
    size: "86 MB",
    rating: "4.4",
    downloads: "5M+",
    badge: "NEW",
    icon: "S",
    iconClass: "spotify",
  },
  {
    name: "CapCut Pro",
    category: "Tools",
    version: "12.5.0",
    size: "138 MB",
    rating: "4.5",
    downloads: "15M+",
    badge: "TRENDING",
    icon: "C",
    iconClass: "capcut",
  },
  {
    name: "YouTube Vanced",
    category: "Entertainment",
    version: "18.23.39",
    size: "95 MB",
    rating: "4.3",
    downloads: "8M+",
    badge: "TRENDING",
    icon: "▶",
    iconClass: "youtube",
  },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("nexapk-theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("nexapk-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("nexapk-theme", "light");
    }
  }

  function handleSearch() {
    const value = search.trim();

    if (!value) {
      window.location.href = "/latest";
      return;
    }

    window.location.href = `/latest?search=${encodeURIComponent(value)}`;
  }

  return (
    <main className="site">

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">

          <button
            className="menu-btn"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="logo" aria-label="NexAPK Home">
            <img
              src="/nexapk-header.png"
              alt="NexAPK"
              className="header-logo"
            />
          </Link>

          <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/latest" onClick={() => setMenuOpen(false)}>
              Latest APKs
            </Link>

            <Link href="/categories" onClick={() => setMenuOpen(false)}>
              Categories
            </Link>
          </nav>

          <div className="header-actions">

            <button
              className="icon-btn theme-btn"
              aria-label="Toggle dark and light mode"
              onClick={toggleTheme}
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              className="icon-btn"
              aria-label="Search"
              onClick={handleSearch}
            >
              ⌕
            </button>

          </div>

        </div>
      </header>


      {/* HERO */}
      <section className="hero-section">
        <div className="hero">

          <div className="hero-content">

            <div className="platform-badge">
              <span className="badge-dot" />
              NexAPK • APK Platform
            </div>

            <h1>
              Download Your Favorite
              <br />
              APKs from <span>NexAPK</span>
            </h1>

            <p>
              Discover apps, games and useful tools in one simple place.
              Browse the latest APKs with a clean and fast experience.
            </p>

            <div className="hero-search">

              <span className="search-symbol">⌕</span>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Search apps, games or categories..."
                aria-label="Search APKs"
              />

              <button
                aria-label="Search APKs"
                onClick={handleSearch}
              >
                ⌕
              </button>

            </div>

            <div className="popular">
              <strong>Popular:</strong>

              <Link href="/latest?search=whatsapp">
                WhatsApp
              </Link>

              <Link href="/latest?search=instagram">
                Instagram
              </Link>

              <Link href="/latest?search=spotify">
                Spotify
              </Link>

              <Link href="/latest?search=telegram">
                Telegram
              </Link>
            </div>

          </div>


          {/* HERO VISUAL */}
          <div className="hero-visual">

            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />

            <div className="floating-app floating-one">
              W
            </div>

            <div className="floating-app floating-two">
              ◎
            </div>

            <div className="floating-app floating-three">
              ➤
            </div>

            <div className="floating-app floating-four">
              S
            </div>

            <div className="phone">

              <div className="phone-notch" />

              <div className="phone-screen">

                <div className="phone-brand">
                  <img
                    src="/icon.png"
                    alt=""
                  />

                  <strong>
                    Nex<span>APK</span>
                  </strong>
                </div>

                <div className="phone-search-line">
                  <span>⌕</span>
                  Search APKs
                </div>

                <div className="phone-card">

                  <div className="phone-mini-icon">
                    W
                  </div>

                  <div>
                    <b>WhatsApp Plus</b>
                    <small>Latest version</small>
                  </div>

                </div>

                <div className="phone-card">

                  <div className="phone-mini-icon">
                    S
                  </div>

                  <div>
                    <b>Spotify Premium</b>
                    <small>Updated today</small>
                  </div>

                </div>

                <div className="phone-download">
                  ↓ &nbsp; Download APK
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* LATEST / FEATURED */}
      <section className="featured-section">

        <div className="section-heading">

          <div className="section-title">

            <div className="section-icon">
              ✦
            </div>

            <div>
              <h2>Latest APKs</h2>
              <p>Fresh apps and updates for you</p>
            </div>

          </div>

          <Link href="/latest" className="view-all">
            View All
            <span>→</span>
          </Link>

        </div>


        <div className="apk-grid">

          {apps.map((app) => {
            const appSlug = slugify(app.name);

            return (
              <article
                className="apk-card"
                key={app.name}
              >

                <Link
                  href={`/apk/${appSlug}`}
                  className="apk-card-link"
                >

                  <div className="apk-main">

                    <div className={`app-icon ${app.iconClass}`}>
                      {app.icon}
                    </div>

                    <div className="apk-info">

                      <div className="apk-name-row">

                        <h3>
                          {app.name}
                        </h3>

                        <span
                          className={`apk-badge badge-${slugify(
                            app.badge
                          )}`}
                        >
                          {app.badge}
                        </span>

                      </div>

                      <div className="apk-version">
                        v{app.version}
                        <span>•</span>
                        {app.category}
                      </div>

                      <p>
                        Latest version with useful features
                        and a smooth experience.
                      </p>

                    </div>

                    <span className="card-arrow">
                      →
                    </span>

                  </div>

                  <div className="apk-bottom">

                    <div className="apk-stats">

                      <span>
                        <b className="star">★</b>
                        {app.rating}
                      </span>

                      <span>
                        <b>⇩</b>
                        {app.downloads}
                      </span>

                      <span>
                        <b>◷</b>
                        {app.size}
                      </span>

                    </div>

                    <span className="download-btn">
                      <span>↓</span>
                      Download APK
                    </span>

                  </div>

                </Link>

              </article>
            );
          })}

        </div>


        <div className="load-more-wrap">

          <Link
            href="/latest"
            className="load-more"
          >
            <span>＋</span>
            Load More APKs
            <b>→</b>
          </Link>

        </div>

      </section>


      {/* TRUST BAR */}
      <section className="benefits">

        <div className="benefit">

          <div className="benefit-icon">
            ✓
          </div>

          <div>
            <b>Verified Apps</b>
            <small>Carefully reviewed</small>
          </div>

        </div>

        <div className="benefit">

          <div className="benefit-icon">
            ϟ
          </div>

          <div>
            <b>Fast Download</b>
            <small>High speed delivery</small>
          </div>

        </div>

        <div className="benefit">

          <div className="benefit-icon">
            ↻
          </div>

          <div>
            <b>Regular Updates</b>
            <small>Latest versions</small>
          </div>

        </div>

        <div className="benefit">

          <div className="benefit-icon">
            ✓
          </div>

          <div>
            <b>Easy Access</b>
            <small>Simple browsing</small>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <Link
              href="/"
              className="footer-logo"
            >
              <img
                src="/nexapk-footer.png"
                alt="NexAPK — Apps, Games, Tools"
                className="footer-logo-image"
              />
            </Link>

            <p>
              A clean and simple place to discover
              apps, games and useful Android tools.
            </p>

          </div>


          <div className="footer-column">

            <h4>Explore</h4>

            <Link href="/">
              Home
            </Link>

            <Link href="/latest">
              Latest APKs
            </Link>

            <Link href="/categories">
              Categories
            </Link>

            <Link href="/contact">
              Contact Us
            </Link>

          </div>


          <div className="footer-column">

            <h4>Legal</h4>

            <Link href="/terms">
              Terms of Service
            </Link>

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/dmca">
              DMCA
            </Link>

          </div>


          <div className="footer-column social-column">

            <h4>Follow NexAPK</h4>

            <div className="socials">

              <a
                href="#"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="Telegram"
              >
                ➤
              </a>

              <a
                href="#"
                aria-label="YouTube"
              >
                ▶
              </a>

              <a
                href="#"
                aria-label="X"
              >
                X
              </a>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 NexAPK. All rights reserved.
          </span>

          <span>
            Built for Android users
          </span>

        </div>

      </footer>

    </main>
  );
}
