"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
    color: "whatsapp",
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
    color: "instagram",
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
    color: "bgmi",
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
    color: "spotify",
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
    color: "capcut",
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
    color: "youtube",
  },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function BrandLogo({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "brand small-brand" : "brand"}>
      <span className="brand-mark">
        <span>N</span>
      </span>

      <span className="brand-name">
        Nex<span>APK</span>
      </span>
    </span>
  );
}

function AppIcon({
  icon,
  color,
}: {
  icon: string;
  color: string;
}) {
  return (
    <div className={`app-icon app-${color}`}>
      <span>{icon}</span>
    </div>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("nexapk-theme");

    if (savedTheme === "dark") {
      setDark(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", dark);
    localStorage.setItem("nexapk-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main className={`site ${dark ? "dark-site" : ""}`}>

      {/* ================= HEADER ================= */}

      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-inner">

          <button className="menu-btn" aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="logo">
            <BrandLogo />
          </Link>

          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/latest">Latest APKs</Link>
          </nav>

          <div className="header-actions">

            <button
              className="theme-btn"
              aria-label="Toggle dark mode"
              onClick={() => setDark((value) => !value)}
            >
              <span className="theme-icon">
                {dark ? "☀" : "☾"}
              </span>
            </button>

            <Link
              href="/latest"
              className="header-search"
              aria-label="Search APKs"
            >
              <span>⌕</span>
            </Link>

          </div>
        </div>
      </header>


      {/* ================= HERO ================= */}

      <section className="hero-section">
        <div className="hero">

          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">

            <div className="platform-badge">
              <span className="badge-dot" />
              NexAPK <i>•</i> APK Platform
            </div>

            <h1>
              Discover the apps
              <br />
              you actually need.
            </h1>

            <p>
              Explore the latest apps, games and useful tools
              with a clean and simple downloading experience.
            </p>

            <Link href="/latest" className="hero-search">
              <span className="search-left">⌕</span>

              <span className="search-placeholder">
                Search apps, games or categories...
              </span>

              <span className="search-submit">→</span>
            </Link>

            <div className="popular">
              <span className="popular-label">Popular</span>

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

            <div className="visual-glow" />

            <div className="hero-card hero-card-left">
              <AppIcon icon="W" color="whatsapp" />
              <div>
                <strong>WhatsApp Plus</strong>
                <small>Latest version</small>
              </div>
            </div>

            <div className="hero-card hero-card-right">
              <AppIcon icon="S" color="spotify" />
              <div>
                <strong>Spotify Premium</strong>
                <small>Updated today</small>
              </div>
            </div>

            <div className="phone">

              <div className="phone-top">
                <span />
              </div>

              <div className="phone-screen">

                <div className="phone-header">
                  <BrandLogo small />
                </div>

                <div className="phone-search">
                  <span>⌕</span>
                  Search APKs
                </div>

                <div className="phone-title">
                  Latest APKs
                </div>

                <div className="mini-app">
                  <AppIcon icon="W" color="whatsapp" />
                  <div>
                    <b>WhatsApp Plus</b>
                    <small>v17.20 • 54 MB</small>
                  </div>
                  <span>→</span>
                </div>

                <div className="mini-app">
                  <AppIcon icon="S" color="spotify" />
                  <div>
                    <b>Spotify Premium</b>
                    <small>v9.9.78 • 86 MB</small>
                  </div>
                  <span>→</span>
                </div>

                <div className="phone-download">
                  ↓ &nbsp; Download APK
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= LATEST APKs ================= */}

      <section className="featured-section">

        <div className="section-heading">

          <div>
            <div className="section-eyebrow">
              <span />
              UPDATED REGULARLY
            </div>

            <h2>Latest APKs</h2>

            <p>
              Fresh apps and updates for you
            </p>
          </div>

          <Link href="/latest" className="view-all">
            View All
            <span>→</span>
          </Link>

        </div>


        <div className="apk-grid">

          {apps.map((app) => (
            <article className="apk-card" key={app.name}>

              <Link
                href={`/apk/${slugify(app.name)}`}
                className="apk-card-link"
              >

                <div className="apk-top">

                  <AppIcon
                    icon={app.icon}
                    color={app.color}
                  />

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

                  </div>

                  <span className="card-arrow">
                    →
                  </span>

                </div>


                <p className="apk-description">
                  Latest version with updated features
                  and improvements.
                </p>


                <div className="apk-footer">

                  <div className="apk-stats">

                    <span>
                      <b className="star">★</b>
                      {app.rating}
                    </span>

                    <span>
                      <b>↓</b>
                      {app.downloads}
                    </span>

                    <span>
                      <b>◷</b>
                      {app.size}
                    </span>

                  </div>

                  <span className="download-btn">
                    Download
                    <b>↓</b>
                  </span>

                </div>

              </Link>

            </article>
          ))}

        </div>


        <div className="load-more-wrap">
          <Link href="/latest" className="load-more">
            Explore all APKs
            <span>→</span>
          </Link>
        </div>

      </section>


      {/* ================= TRUST STRIP ================= */}

      <section className="trust-section">

        <div className="trust-item">
          <span className="trust-icon">✓</span>
          <div>
            <strong>Verified Listings</strong>
            <small>Carefully reviewed</small>
          </div>
        </div>

        <div className="trust-item">
          <span className="trust-icon">ϟ</span>
          <div>
            <strong>Fast Downloads</strong>
            <small>Simple access</small>
          </div>
        </div>

        <div className="trust-item">
          <span className="trust-icon">↻</span>
          <div>
            <strong>Regular Updates</strong>
            <small>Latest versions</small>
          </div>
        </div>

        <div className="trust-item">
          <span className="trust-icon">⌁</span>
          <div>
            <strong>Easy to Explore</strong>
            <small>Clean experience</small>
          </div>
        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <BrandLogo />
            </Link>

            <p>
              A clean and simple place to discover
              apps, games and useful Android tools.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="Telegram">➤</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="X">𝕏</a>
            </div>
          </div>


          <div className="footer-links">
            <h4>Explore</h4>
            <Link href="/">Home</Link>
            <Link href="/latest">Latest APKs</Link>
            <Link href="/latest?category=games">Games</Link>
            <Link href="/latest?category=tools">Tools</Link>
          </div>


          <div className="footer-links">
            <h4>Information</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/dmca">DMCA</Link>
            <Link href="/contact">Contact Us</Link>
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
