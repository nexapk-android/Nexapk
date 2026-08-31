"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const apps = [
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
    name: "Telegram",
    category: "Social",
    version: "11.8.0",
    size: "72 MB",
    rating: "4.6",
    downloads: "8M+",
    badge: "NEW",
    icon: "➤",
    iconClass: "telegram",
  },
  {
    name: "YouTube Pro",
    category: "Video",
    version: "19.5.2",
    size: "92 MB",
    rating: "4.5",
    downloads: "12M+",
    badge: "MOD",
    icon: "▶",
    iconClass: "youtube",
  },
  {
    name: "Netflix",
    category: "Entertainment",
    version: "8.120.0",
    size: "80 MB",
    rating: "4.3",
    downloads: "6M+",
    badge: "NEW",
    icon: "N",
    iconClass: "netflix",
  },
];

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [visibleApps, setVisibleApps] = useState(6);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredApps = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return apps;

    return apps.filter((app) =>
      `${app.name} ${app.category} ${app.version}`
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  const displayedApps = filteredApps.slice(0, visibleApps);

  return (
    <main className="site">

      {/* ================= HEADER ================= */}

      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-inner">

          <button className="menu-btn" aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="logo">
            <span className="logo-symbol">N</span>

            <span className="logo-text">
              Nex<span>APK</span>
            </span>
          </Link>

          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/latest">Latest APKs</Link>
          </nav>

          <div className="header-actions">
            <button
              className="icon-btn"
              aria-label="Search"
              onClick={() => {
                document
                  .getElementById("search")
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              <SearchIcon />
            </button>
          </div>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <section className="hero-section">
        <div className="hero">

          <div className="hero-content">

            <div className="platform-badge">
              <span className="status-dot" />
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

            <div className="hero-search" id="search">

              <span className="search-symbol">
                <SearchIcon />
              </span>

              <input
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleApps(6);
                }}
                placeholder="Search apps, games or categories..."
                aria-label="Search APKs"
              />

              <button aria-label="Search">
                <SearchIcon />
              </button>

            </div>

            <div className="popular">
              <strong>Popular:</strong>

              <button onClick={() => setSearch("WhatsApp")}>
                WhatsApp
              </button>

              <button onClick={() => setSearch("Instagram")}>
                Instagram
              </button>

              <button onClick={() => setSearch("Spotify")}>
                Spotify
              </button>

              <button onClick={() => setSearch("Telegram")}>
                Telegram
              </button>
            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="floating-app floating-one">W</div>
            <div className="floating-app floating-two">◎</div>
            <div className="floating-app floating-three">➤</div>

            <div className="phone">

              <div className="phone-notch" />

              <div className="phone-screen">

                <div className="phone-logo">
                  <span className="mini-n">N</span>

                  <b>
                    Nex<span>APK</span>
                  </b>
                </div>

                <div className="phone-search">
                  <span />
                </div>

                <div className="phone-card">
                  <div className="mini-icon">W</div>

                  <div>
                    <b>WhatsApp Plus</b>
                    <small>Latest version</small>
                  </div>
                </div>

                <div className="phone-card">
                  <div className="mini-icon">S</div>

                  <div>
                    <b>Spotify Premium</b>
                    <small>Updated today</small>
                  </div>
                </div>

                <div className="phone-download">
                  <DownloadIcon />
                  Download APK
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= APK SECTION ================= */}

      <section className="featured-section" id="latest">

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


        {displayedApps.length > 0 ? (

          <div className="apk-grid">

            {displayedApps.map((app) => {

              const slug = slugify(app.name);

              return (
                <article className="apk-card" key={app.name}>

                  <Link
                    href={`/apk/${slug}`}
                    className="apk-main"
                  >

                    <div className={`app-icon ${app.iconClass}`}>
                      {app.icon}
                    </div>

                    <div className="apk-info">

                      <div className="apk-name-row">

                        <h3>{app.name}</h3>

                        <span
                          className={`apk-badge badge-${app.badge.toLowerCase()}`}
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
                      <ArrowIcon />
                    </span>

                  </Link>


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

                    <Link
                      href={`/apk/${slug}`}
                      className="download-btn"
                    >
                      <DownloadIcon />
                      <span>Download</span>
                    </Link>

                  </div>

                </article>
              );
            })}

          </div>

        ) : (

          <div className="no-results">
            <div>⌕</div>
            <h3>No APK found</h3>
            <p>Try searching with another app name.</p>

            <button onClick={() => setSearch("")}>
              Clear Search
            </button>
          </div>

        )}


        {/* LOAD MORE */}

        {visibleApps < filteredApps.length && (

          <div className="load-more-wrap">

            <button
              className="load-more"
              onClick={() =>
                setVisibleApps((current) => current + 4)
              }
            >
              Load More APKs

              <ArrowIcon />
            </button>

          </div>

        )}

      </section>


      {/* ================= SIMPLE TRUST BAR ================= */}

      <section className="trust-bar">

        <div className="trust-item">
          <span>✓</span>
          <div>
            <b>Updated</b>
            <small>Latest versions</small>
          </div>
        </div>

        <div className="trust-item">
          <span>ϟ</span>
          <div>
            <b>Fast</b>
            <small>Quick browsing</small>
          </div>
        </div>

        <div className="trust-item">
          <span>↻</span>
          <div>
            <b>Regular</b>
            <small>New APK updates</small>
          </div>
        </div>

        <div className="trust-item">
          <span>✓</span>
          <div>
            <b>Simple</b>
            <small>Easy access</small>
          </div>
        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <Link href="/" className="footer-logo">

              <span className="logo-symbol">N</span>

              <span>
                Nex<span>APK</span>
              </span>

            </Link>

            <p>
              A simple and modern APK discovery platform.
            </p>

          </div>


          <div className="footer-column">

            <h4>Legal</h4>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/dmca">
              DMCA
            </Link>

            <Link href="/contact">
              Contact
            </Link>

          </div>


          <div className="footer-column">

            <h4>Follow NexAPK</h4>

            <div className="socials">

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="Telegram">
                ➤
              </a>

              <a href="#" aria-label="YouTube">
                ▶
              </a>

              <a href="#" aria-label="X">
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
            Made for Android users
          </span>

        </div>

      </footer>

    </main>
  );
}
