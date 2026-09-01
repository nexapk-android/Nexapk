"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const app = {
  name: "WhatsApp Plus",
  category: "Social",
  version: "17.20",
  size: "54 MB",
  rating: "4.6",
  reviews: "125K",
  downloads: "5M+",
  android: "5.0+",
  packageName: "com.whatsappplus",
  updated: "2 days ago",
  description:
    "WhatsApp Plus is a modified messaging experience with extra customization, privacy controls and useful features.",
  icon: "/robot-icon.png",
  screenshots: [
    "/screenshot-1.png",
    "/screenshot-2.png",
    "/screenshot-3.png",
  ],
  features: [
    "Hide online status",
    "Custom themes",
    "More privacy options",
    "Send larger files",
    "Dual WhatsApp support",
    "Extra customization options",
  ],
};

const relatedApps = [
  {
    name: "Instagram Pro",
    version: "32.0",
    size: "48 MB",
    rating: "4.5",
    badge: "MOD",
    icon: "◎",
    className: "related-instagram",
  },
  {
    name: "Spotify Premium",
    version: "9.9.78",
    size: "86 MB",
    rating: "4.4",
    badge: "NEW",
    icon: "S",
    className: "related-spotify",
  },
  {
    name: "CapCut Pro",
    version: "12.5.0",
    size: "138 MB",
    rating: "4.5",
    badge: "PRO",
    icon: "C",
    className: "related-capcut",
  },
  {
    name: "YouTube Vanced",
    version: "18.23.39",
    size: "95 MB",
    rating: "4.3",
    badge: "MOD",
    icon: "▶",
    className: "related-youtube",
  },
];

export default function ApkDetailsPage() {
  const [dark, setDark] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const savedTheme = localStorage.getItem("nexapk-theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    const next = !dark;

    setDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("nexapk-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("nexapk-theme", "light");
    }
  }

  return (
    <main className="details-page">

      {/* HEADER */}
      <header className="details-header">
        <div className="details-header-inner">

          <Link href="/" className="mobile-menu" aria-label="Menu">
            <span />
            <span />
            <span />
          </Link>

          <Link href="/" className="header-logo">
            <img
              src="/public/nexapk-header.png"
              alt="NexAPK"
            />
          </Link>

          <nav className="details-nav">
            <Link href="/">Home</Link>
            <Link href="/latest">Latest</Link>
          </nav>

          <div className="details-actions">

            <button
              className="theme-button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {dark ? "☀" : "☾"}
            </button>

            <Link
              href="/latest"
              className="header-search"
              aria-label="Search"
            >
              ⌕
            </Link>

          </div>

        </div>
      </header>


      {/* MAIN */}
      <div className="details-container">

        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/latest">Social</Link>
          <span>›</span>
          <b>{app.name}</b>
        </div>


        {/* APP HERO */}
        <section className="app-detail-hero">

          <div className="app-detail-main">

            <div className="detail-icon-wrap">
              <img
                src={app.icon}
                alt={app.name}
                className="detail-app-icon"
              />
            </div>

            <div className="detail-info">

              <div className="detail-badges">
                <span className="detail-badge mod">MOD</span>
                <span className="detail-badge category">
                  {app.category}
                </span>
                <span className="detail-badge latest">
                  LATEST
                </span>
              </div>

              <h1>{app.name}</h1>

              <p className="detail-subtitle">
                Extra features, privacy controls and more
                customization for your messaging experience.
              </p>

              <div className="detail-rating">

                <span className="stars">★★★★★</span>

                <strong>{app.rating}</strong>

                <span>
                  {app.reviews} reviews
                </span>

              </div>

              <div className="detail-stats">

                <div>
                  <b>{app.downloads}</b>
                  <span>Downloads</span>
                </div>

                <div>
                  <b>{app.size}</b>
                  <span>Size</span>
                </div>

                <div>
                  <b>Android {app.android}</b>
                  <span>Required</span>
                </div>

              </div>

              <div className="detail-buttons">

                <a
                  href="#download"
                  className="primary-download"
                >
                  <span>↓</span>
                  Download APK
                </a>

                <button
                  className={`favorite-button ${
                    favorite ? "active" : ""
                  }`}
                  onClick={() => setFavorite(!favorite)}
                >
                  <span>{favorite ? "♥" : "♡"}</span>
                  {favorite ? "Saved" : "Favorite"}
                </button>

              </div>

              <div className="secure-note">
                <span>✓</span>
                Safe &nbsp;•&nbsp; Fast Download &nbsp;•&nbsp; No Registration
              </div>

            </div>

          </div>


          {/* PREVIEW */}
          <div className="app-preview">

            <div className="preview-top">
              <span>App Preview</span>

              <span className="preview-dots">
                ● ● ●
              </span>
            </div>

            <div className="preview-screen">

              <div className="preview-phone">

                <div className="preview-notch" />

                <div className="preview-content">

                  <div className="preview-brand">
                    <img
                      src="/robot-icon.png"
                      alt=""
                    />
                    <b>Nex<span>APK</span></b>
                  </div>

                  <div className="preview-search">
                    ⌕ &nbsp; Search APKs
                  </div>

                  <div className="preview-card">
                    <div className="preview-mini-icon">W</div>
                    <div>
                      <b>WhatsApp Plus</b>
                      <small>Latest version</small>
                    </div>
                  </div>

                  <div className="preview-card">
                    <div className="preview-mini-icon">✓</div>
                    <div>
                      <b>Premium Features</b>
                      <small>More control</small>
                    </div>
                  </div>

                  <div className="preview-download">
                    ↓ &nbsp; Download APK
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* TRUST BAR */}
        <section className="detail-trust">

          <div>
            <span>✓</span>
            <div>
              <b>Verified APK</b>
              <small>Checked & reviewed</small>
            </div>
          </div>

          <div>
            <span>ϟ</span>
            <div>
              <b>Fast Download</b>
              <small>High speed servers</small>
            </div>
          </div>

          <div>
            <span>↻</span>
            <div>
              <b>Regular Updates</b>
              <small>Latest versions</small>
            </div>
          </div>

          <div>
            <span>♙</span>
            <div>
              <b>No Registration</b>
              <small>Direct access</small>
            </div>
          </div>

        </section>


        {/* CONTENT GRID */}
        <div className="detail-content-grid">

          <div className="detail-left">

            {/* TABS */}
            <div className="detail-tabs">

              <button
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>

              <button
                className={activeTab === "screenshots" ? "active" : ""}
                onClick={() => setActiveTab("screenshots")}
              >
                Screenshots
              </button>

              <button
                className={activeTab === "changelog" ? "active" : ""}
                onClick={() => setActiveTab("changelog")}
              >
                Changelog
              </button>

            </div>


            {/* ABOUT */}
            {activeTab === "about" && (
              <section className="detail-section">

                <div className="section-label">
                  <span>01</span>
                  <div>
                    <h2>About {app.name}</h2>
                    <p>Everything you need to know</p>
                  </div>
                </div>

                <p className="long-description">
                  {app.description} It is designed for users
                  who want a cleaner and more customizable
                  experience while keeping the interface
                  familiar and easy to use.
                </p>


                <h3 className="sub-heading">
                  Features
                </h3>

                <div className="feature-grid">

                  {app.features.map((feature) => (
                    <div
                      className="feature-item"
                      key={feature}
                    >
                      <span>✓</span>
                      {feature}
                    </div>
                  ))}

                </div>

              </section>
            )}


            {/* SCREENSHOTS */}
            {activeTab === "screenshots" && (
              <section className="detail-section">

                <div className="section-label">
                  <span>02</span>
                  <div>
                    <h2>Screenshots</h2>
                    <p>Preview the application</p>
                  </div>
                </div>

                <div className="screenshots-grid">

                  {app.screenshots.map((image, index) => (
                    <div
                      className="screenshot-card"
                      key={image}
                    >
                      <img
                        src={image}
                        alt={`${app.name} screenshot ${index + 1}`}
                      />
                    </div>
                  ))}

                </div>

              </section>
            )}


            {/* CHANGELOG */}
            {activeTab === "changelog" && (
              <section className="detail-section">

                <div className="section-label">
                  <span>03</span>
                  <div>
                    <h2>Changelog</h2>
                    <p>What&apos;s new in this version</p>
                  </div>
                </div>

                <div className="changelog-card">

                  <div className="change-version">
                    <div>
                      <span>Latest</span>
                      <b>Version {app.version}</b>
                    </div>

                    <small>
                      Updated {app.updated}
                    </small>
                  </div>

                  <ul>
                    <li>Improved overall performance</li>
                    <li>New interface improvements</li>
                    <li>Fixed minor bugs</li>
                    <li>Improved stability</li>
                    <li>Better customization options</li>
                  </ul>

                </div>

              </section>
            )}


            {/* APP INFORMATION */}
            <section className="detail-section app-information">

              <div className="section-label">
                <span>04</span>
                <div>
                  <h2>App Information</h2>
                  <p>Technical details</p>
                </div>
              </div>

              <div className="info-table">

                <div>
                  <span>App Name</span>
                  <b>{app.name}</b>
                </div>

                <div>
                  <span>Version</span>
                  <b>{app.version}</b>
                </div>

                <div>
                  <span>Size</span>
                  <b>{app.size}</b>
                </div>

                <div>
                  <span>Category</span>
                  <b>{app.category}</b>
                </div>

                <div>
                  <span>Package Name</span>
                  <b>{app.packageName}</b>
                </div>

                <div>
                  <span>Android Required</span>
                  <b>{app.android}+</b>
                </div>

                <div>
                  <span>Downloads</span>
                  <b>{app.downloads}</b>
                </div>

                <div>
                  <span>Last Updated</span>
                  <b>{app.updated}</b>
                </div>

              </div>

            </section>

          </div>


          {/* SIDEBAR */}
          <aside className="detail-sidebar">

            <div
              className="sidebar-download"
              id="download"
            >

              <div className="sidebar-icon">
                <img
                  src={app.icon}
                  alt=""
                />
              </div>

              <h3>Ready to Download?</h3>

              <p>
                Get the latest version of {app.name}
                and enjoy the newest features.
              </p>

              <a
                href="#"
                className="sidebar-download-btn"
              >
                ↓ &nbsp; Download APK
              </a>

              <div className="download-meta">
                <span>Version {app.version}</span>
                <span>{app.size}</span>
              </div>

            </div>


            <div className="sidebar-card">

              <h3>APK Details</h3>

              <div>
                <span>Rating</span>
                <b>★ {app.rating}</b>
              </div>

              <div>
                <span>Downloads</span>
                <b>{app.downloads}</b>
              </div>

              <div>
                <span>Android</span>
                <b>{app.android}+</b>
              </div>

              <div>
                <span>Updated</span>
                <b>{app.updated}</b>
              </div>

            </div>

          </aside>

        </div>


        {/* RELATED */}
        <section className="related-section">

          <div className="related-heading">
            <div>
              <span>EXPLORE MORE</span>
              <h2>Related APKs</h2>
            </div>

            <Link href="/latest">
              View All →
            </Link>
          </div>

          <div className="related-grid">

            {relatedApps.map((item) => (
              <Link
                href={`/apk/${item.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="related-card"
                key={item.name}
              >

                <div
                  className={`related-icon ${item.className}`}
                >
                  {item.icon}
                </div>

                <div className="related-info">

                  <div className="related-title">
                    <h3>{item.name}</h3>
                    <span>{item.badge}</span>
                  </div>

                  <p>
                    v{item.version} · {item.size}
                  </p>

                  <div className="related-bottom">
                    <span>
                      ★ {item.rating}
                    </span>

                    <span>→</span>
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </section>

      </div>


      {/* FOOTER */}
      <footer className="details-footer">

        <div className="footer-main">

          <div className="footer-brand">

            <Link href="/" className="footer-logo">
              <img
                src="/logo-footer.png"
                alt="NexAPK"
              />
            </Link>

            <p>
              Your trusted place to discover the
              latest apps, games and useful tools.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Telegram">➤</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="X">𝕏</a>
            </div>

          </div>


          <div className="footer-links">

            <div>
              <h4>Explore</h4>
              <Link href="/">Home</Link>
              <Link href="/latest">Latest APKs</Link>
              <Link href="/latest">Popular Apps</Link>
              <Link href="/latest">Games</Link>
            </div>

            <div>
              <h4>Support</h4>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/dmca">DMCA</Link>
            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 NexAPK. All rights reserved.
          </span>

          <span>
            Made with <b>♥</b> for Android Lovers
          </span>

        </div>

      </footer>

    </main>
  );
}
