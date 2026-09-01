"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type AppData = {
  name: string;
  category: string;
  version: string;
  size: string;
  rating: string;
  reviews: string;
  downloads: string;
  android: string;
  badge: string;
  description: string;
  updated: string;
  developer: string;
  icon: string;
};

const apps: Record<string, AppData> = {
  "whatsapp-plus": {
    name: "WhatsApp Plus",
    category: "Social",
    version: "17.20",
    size: "54 MB",
    rating: "4.6",
    reviews: "125K reviews",
    downloads: "5M+",
    android: "Android 5.0+",
    badge: "MOD",
    description:
      "Extra features, privacy controls and more customization for your messaging experience.",
    updated: "Today",
    developer: "NexAPK",
    icon: "W",
  },

  "instagram-pro": {
    name: "Instagram Pro",
    category: "Social",
    version: "32.0",
    size: "48 MB",
    rating: "4.5",
    reviews: "98K reviews",
    downloads: "10M+",
    android: "Android 6.0+",
    badge: "MOD",
    description:
      "Enjoy a cleaner Instagram experience with extra customization and useful features.",
    updated: "Today",
    developer: "NexAPK",
    icon: "◎",
  },

  bgmi: {
    name: "BGMI",
    category: "Games",
    version: "3.6.0",
    size: "2.6 GB",
    rating: "4.7",
    reviews: "210K reviews",
    downloads: "20M+",
    android: "Android 5.1+",
    badge: "POPULAR",
    description:
      "Experience intense battle royale gameplay with smooth controls and exciting features.",
    updated: "Today",
    developer: "NexAPK",
    icon: "B",
  },

  "spotify-premium": {
    name: "Spotify Premium",
    category: "Music",
    version: "9.9.78",
    size: "86 MB",
    rating: "4.4",
    reviews: "87K reviews",
    downloads: "5M+",
    android: "Android 7.0+",
    badge: "NEW",
    description:
      "Discover music, playlists and podcasts with a smooth listening experience.",
    updated: "Today",
    developer: "NexAPK",
    icon: "S",
  },

  "capcut-pro": {
    name: "CapCut Pro",
    category: "Tools",
    version: "12.5.0",
    size: "138 MB",
    rating: "4.5",
    reviews: "156K reviews",
    downloads: "15M+",
    android: "Android 6.0+",
    badge: "TRENDING",
    description:
      "Create stunning videos with powerful editing tools, effects and creative features.",
    updated: "Today",
    developer: "NexAPK",
    icon: "C",
  },

  "youtube-vanced": {
    name: "YouTube Vanced",
    category: "Entertainment",
    version: "18.23.39",
    size: "95 MB",
    rating: "4.3",
    reviews: "76K reviews",
    downloads: "8M+",
    android: "Android 6.0+",
    badge: "TRENDING",
    description:
      "Enjoy a smooth video experience with useful playback and customization options.",
    updated: "Today",
    developer: "NexAPK",
    icon: "▶",
  },
};

function getApp(slug: string): AppData {
  return (
    apps[slug] || {
      name: "APK Application",
      category: "Apps",
      version: "Latest",
      size: "—",
      rating: "4.5",
      reviews: "Reviews",
      downloads: "1M+",
      android: "Android 6.0+",
      badge: "LATEST",
      description:
        "Discover the latest version with useful features and a smooth experience.",
      updated: "Recently",
      developer: "NexAPK",
      icon: "N",
    }
  );
}

function AppIcon({
  icon,
  category,
}: {
  icon: string;
  category: string;
}) {
  const categoryClass = category.toLowerCase();

  return (
    <div
      className={`app-icon-large ${
        categoryClass === "social"
          ? "icon-social"
          : categoryClass === "games"
            ? "icon-games"
            : categoryClass === "music"
              ? "icon-music"
              : "icon-default"
      }`}
    >
      {icon}
    </div>
  );
}

function MockScreenshot({
  app,
  index,
}: {
  app: AppData;
  index: number;
}) {
  const titles = [
    "Clean Home",
    "Premium Features",
    "App Settings",
  ];

  return (
    <div className="mock-shot">
      <div className="mock-top">
        <span>9:41</span>
        <div className="mock-status">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="mock-content">
        <div className="mock-brand">
          <div className="mock-brand-icon">{app.icon}</div>
          <strong>
            {app.name.length > 16
              ? app.name.slice(0, 16)
              : app.name}
          </strong>
        </div>

        <div className="mock-heading">
          <small>SCREENSHOT {index + 1}</small>
          <h3>{titles[index]}</h3>
        </div>

        <div className="mock-search">
          <span>⌕</span>
          Search anything...
        </div>

        <div className="mock-card">
          <div className="mock-avatar">{app.icon}</div>
          <div className="mock-lines">
            <b>{app.name}</b>
            <span>Latest version</span>
          </div>
        </div>

        <div className="mock-card small-card">
          <div className="mock-circle">✓</div>
          <div className="mock-lines">
            <b>Premium Options</b>
            <span>Enabled features</span>
          </div>
        </div>

        <div className="mock-list">
          <div>
            <span>Privacy</span>
            <b>›</b>
          </div>
          <div>
            <span>Customization</span>
            <b>›</b>
          </div>
          <div>
            <span>Advanced Settings</span>
            <b>›</b>
          </div>
        </div>

        <div className="mock-button">Continue</div>
      </div>
    </div>
  );
}

function StarRating({ rating = "4.6" }: { rating?: string }) {
  return (
    <div className="star-rating">
      <span>★★★★★</span>
      <b>{rating}</b>
    </div>
  );
}

export default function AppDetailsPage() {
  const params = useParams<{ slug: string }>();
  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug || "whatsapp-plus";

  const app = getApp(slug);

  const [darkMode, setDarkMode] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeShot, setActiveShot] = useState(0);

  const storageKey = `nexapk-favorite-${slug}`;

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("nexapk-theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }

    const savedFavorite =
      window.localStorage.getItem(storageKey);

    if (savedFavorite === "true") {
      setFavorite(true);
    }
  }, [storageKey]);

  useEffect(() => {
    document.documentElement.style.colorScheme = darkMode
      ? "dark"
      : "light";

    window.localStorage.setItem(
      "nexapk-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    window.localStorage.setItem(
      storageKey,
      favorite ? "true" : "false"
    );
  }, [favorite, storageKey]);

  const relatedApps = useMemo(() => {
    return Object.entries(apps)
      .filter(([key]) => key !== slug)
      .slice(0, 4);
  }, [slug]);

  const toggleFavorite = () => {
    setFavorite((current) => !current);
  };

  return (
    <main className={`nexapk-page ${darkMode ? "dark-theme" : ""}`}>

      {/* ================= HEADER ================= */}

      <header className="site-header">
        <div className="header-inner">

          <button
            type="button"
            className={`mobile-menu-button ${
              menuOpen ? "menu-active" : ""
            }`}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link
            href="/"
            className="header-logo"
            aria-label="NexAPK Home"
          >
            <img
              src="/nexapk-header.png"
              alt="NexAPK"
            />
          </Link>

          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/latest">Latest APKs</Link>
            <Link href="/latest?category=games">
              Games
            </Link>
            <Link href="/latest?category=tools">
              Tools
            </Link>
          </nav>

          <div className="header-actions">

            <button
              type="button"
              className="header-icon-button"
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              onClick={() => setDarkMode((v) => !v)}
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <Link
              href="/latest"
              className="header-icon-button search-button"
              aria-label="Search APKs"
            >
              ⌕
            </Link>

          </div>
        </div>

        {menuOpen && (
          <div className="mobile-navigation">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/latest"
              onClick={() => setMenuOpen(false)}
            >
              Latest APKs
            </Link>

            <Link
              href="/latest?category=games"
              onClick={() => setMenuOpen(false)}
            >
              Games
            </Link>

            <Link
              href="/latest?category=tools"
              onClick={() => setMenuOpen(false)}
            >
              Tools
            </Link>
          </div>
        )}
      </header>

      {/* ================= PAGE ================= */}

      <div className="page-container">

        {/* Breadcrumb */}

        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>

          <Link
            href={`/latest?category=${encodeURIComponent(
              app.category
            )}`}
          >
            {app.category}
          </Link>

          <span>›</span>

          <strong>{app.name}</strong>
        </div>

        {/* ================= HERO ================= */}

        <section className="hero-card">

          <div className="hero-top">

            <AppIcon
              icon={app.icon}
              category={app.category}
            />

            <div className="hero-info">

              <div className="hero-tags">
                <span className="tag-blue">
                  {app.badge}
                </span>

                <span className="tag-gray">
                  {app.category}
                </span>

                <span className="tag-green">
                  VERIFIED
                </span>
              </div>

              <h1>{app.name}</h1>

              <p>{app.description}</p>

              <div className="developer-line">
                <span className="verified-dot">✓</span>
                <span>
                  Published by <b>{app.developer}</b>
                </span>
                <span className="dot-separator">•</span>
                <span>Updated {app.updated}</span>
              </div>
            </div>
          </div>

          {/* Rating */}

          <div className="hero-rating">

            <div className="rating-main">
              <span className="stars-big">★★★★★</span>
              <strong>{app.rating}</strong>
              <span className="reviews-count">
                {app.reviews}
              </span>
            </div>

            <div className="rating-badge">
              <span>★</span>
              Top Rated
            </div>

          </div>

          {/* Stats */}

          <div className="stats-grid">

            <div className="stat-box">
              <span className="stat-icon">↓</span>
              <div>
                <strong>{app.downloads}</strong>
                <small>Downloads</small>
              </div>
            </div>

            <div className="stat-box">
              <span className="stat-icon">◫</span>
              <div>
                <strong>{app.size}</strong>
                <small>App Size</small>
              </div>
            </div>

            <div className="stat-box">
              <span className="stat-icon">⌁</span>
              <div>
                <strong>{app.android}</strong>
                <small>Android Required</small>
              </div>
            </div>

            <div className="stat-box">
              <span className="stat-icon">↻</span>
              <div>
                <strong>{app.version}</strong>
                <small>Latest Version</small>
              </div>
            </div>

          </div>

          {/* Buttons */}

          <div className="hero-actions">

            <a
              href="#download"
              className="download-button"
            >
              <span className="download-arrow">↓</span>
              <span>
                <b>Download APK</b>
                <small>Fast &amp; secure download</small>
              </span>
              <span className="button-arrow">→</span>
            </a>

            <button
              type="button"
              className={`favorite-button ${
                favorite ? "favorite-active" : ""
              }`}
              onClick={toggleFavorite}
              aria-pressed={favorite}
            >
              <span>
                {favorite ? "♥" : "♡"}
              </span>

              <b>
                {favorite ? "Saved" : "Favorite"}
              </b>
            </button>

          </div>

          <div className="trust-strip">
            <span>✓ Safe to download</span>
            <i />
            <span>Fast servers</span>
            <i />
            <span>No registration</span>
          </div>

        </section>

        {/* ================= QUICK NAV ================= */}

        <div className="quick-nav">
          <a href="#screenshots">Screenshots</a>
          <a href="#features">Features</a>
          <a href="#information">Information</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>

        {/* ================= SCREENSHOTS ================= */}

        <section
          id="screenshots"
          className="content-section"
        >
          <div className="section-heading">
            <div>
              <span className="section-label">
                SCREENSHOTS
              </span>

              <h2>See {app.name} in action</h2>

              <p>
                Take a quick look before you download.
              </p>
            </div>

            <div className="gallery-counter">
              {activeShot + 1} / 3
            </div>
          </div>

          <div className="screenshot-card">

            <div className="screenshot-viewer">
              <MockScreenshot
                app={app}
                index={activeShot}
              />
            </div>

            <div className="screenshot-controls">

              <button
                type="button"
                className="gallery-arrow"
                onClick={() =>
                  setActiveShot(
                    activeShot === 0
                      ? 2
                      : activeShot - 1
                  )
                }
                aria-label="Previous screenshot"
              >
                ←
              </button>

              <div className="gallery-dots">
                {[0, 1, 2].map((index) => (
                  <button
                    type="button"
                    key={index}
                    className={
                      activeShot === index
                        ? "gallery-dot active"
                        : "gallery-dot"
                    }
                    onClick={() =>
                      setActiveShot(index)
                    }
                    aria-label={`Screenshot ${
                      index + 1
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="gallery-arrow"
                onClick={() =>
                  setActiveShot(
                    activeShot === 2
                      ? 0
                      : activeShot + 1
                  )
                }
                aria-label="Next screenshot"
              >
                →
              </button>

            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section className="content-section about-section">

          <div className="section-heading">
            <div>
              <span className="section-label">
                ABOUT THIS APP
              </span>

              <h2>Everything you need to know</h2>
            </div>
          </div>

          <div className="about-card">

            <p>
              <strong>{app.name}</strong> is a
              popular {app.category.toLowerCase()} application
              available through NexAPK. The latest available
              version is <b>{app.version}</b> with a download
              size of <b>{app.size}</b>.
            </p>

            <p>
              The page includes the latest app information,
              supported Android version, screenshots,
              feature highlights and user ratings so you can
              make an informed decision before downloading.
            </p>

            <div className="about-highlights">

              <div>
                <span>✓</span>
                <p>
                  Latest available version
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Detailed app information
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Clean download experience
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= FEATURES ================= */}

        <section
          id="features"
          className="content-section"
        >

          <div className="section-heading">
            <div>
              <span className="section-label">
                HIGHLIGHTS
              </span>

              <h2>Why people choose it</h2>

              <p>
                Useful highlights at a glance.
              </p>
            </div>
          </div>

          <div className="feature-grid">

            <article className="feature-card">
              <div className="feature-number">
                01
              </div>

              <div>
                <h3>Premium Features</h3>
                <p>
                  Explore additional options and
                  customization features.
                </p>
              </div>
            </article>

            <article className="feature-card">
              <div className="feature-number">
                02
              </div>

              <div>
                <h3>Clean Experience</h3>
                <p>
                  Simple interface designed to keep
                  navigation easy.
                </p>
              </div>
            </article>

            <article className="feature-card">
              <div className="feature-number">
                03
              </div>

              <div>
                <h3>Regular Updates</h3>
                <p>
                  Keep up with the latest available
                  application version.
                </p>
              </div>
            </article>

            <article className="feature-card">
              <div className="feature-number">
                04
              </div>

              <div>
                <h3>Easy Access</h3>
                <p>
                  Find important information without
                  unnecessary clutter.
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* ================= MOD FEATURES ================= */}

        <section className="content-section">

          <div className="section-heading">
            <div>
              <span className="section-label">
                FEATURE LIST
              </span>

              <h2>What you get</h2>

              <p>
                A quick overview of the key areas.
              </p>
            </div>
          </div>

          <div className="mod-feature-card">

            <div className="mod-feature-header">
              <div className="mini-app-icon">
                {app.icon}
              </div>

              <div>
                <h3>{app.name}</h3>
                <span>
                  Version {app.version}
                </span>
              </div>

              <span className="feature-status">
                AVAILABLE
              </span>
            </div>

            <div className="feature-list">

              <div>
                <span className="check">✓</span>
                <span>Enhanced customization</span>
              </div>

              <div>
                <span className="check">✓</span>
                <span>Additional privacy controls</span>
              </div>

              <div>
                <span className="check">✓</span>
                <span>Clean and simple interface</span>
              </div>

              <div>
                <span className="check">✓</span>
                <span>Latest available build</span>
              </div>

              <div>
                <span className="check">✓</span>
                <span>Optimized user experience</span>
              </div>

              <div>
                <span className="check">✓</span>
                <span>Easy navigation</span>
              </div>

            </div>
          </div>
        </section>

        {/* ================= INFORMATION ================= */}

        <section
          id="information"
          className="content-section"
        >

          <div className="section-heading">
            <div>
              <span className="section-label">
                APP DETAILS
              </span>

              <h2>Application Information</h2>

              <p>
                Important technical details.
              </p>
            </div>
          </div>

          <div className="information-card">

            <div className="info-row">
              <span>Application Name</span>
              <strong>{app.name}</strong>
            </div>

            <div className="info-row">
              <span>Latest Version</span>
              <strong>{app.version}</strong>
            </div>

            <div className="info-row">
              <span>Category</span>
              <strong>{app.category}</strong>
            </div>

            <div className="info-row">
              <span>Application Size</span>
              <strong>{app.size}</strong>
            </div>

            <div className="info-row">
              <span>Android Support</span>
              <strong>{app.android}</strong>
            </div>

            <div className="info-row">
              <span>Downloads</span>
              <strong>{app.downloads}</strong>
            </div>

            <div className="info-row">
              <span>Rating</span>
              <strong>★ {app.rating}</strong>
            </div>

            <div className="info-row">
              <span>Last Updated</span>
              <strong>{app.updated}</strong>
            </div>

            <div className="info-row">
              <span>Developer</span>
              <strong>{app.developer}</strong>
            </div>

          </div>
        </section>

        {/* ================= REVIEWS ================= */}

        <section
          id="reviews"
          className="content-section"
        >

          <div className="section-heading">
            <div>
              <span className="section-label">
                USER REVIEWS
              </span>

              <h2>What users are saying</h2>

              <p>
                Ratings from the NexAPK community.
              </p>
            </div>
          </div>

          <div className="review-summary">

            <div className="overall-rating">
              <strong>{app.rating}</strong>
              <span className="overall-stars">
                ★★★★★
              </span>
              <small>{app.reviews}</small>
            </div>

            <div className="rating-bars">

              {[
                ["5", "84%"],
                ["4", "10%"],
                ["3", "4%"],
                ["2", "1%"],
                ["1", "1%"],
              ].map(([star, width]) => (
                <div
                  className="rating-bar-row"
                  key={star}
                >
                  <span>{star} ★</span>
                  <div className="rating-track">
                    <i style={{ width }} />
                  </div>
                  <small>{width}</small>
                </div>
              ))}

            </div>
          </div>

          <div className="review-list">

            <article className="review-card">
              <div className="review-user">
                <div className="user-avatar">
                  A
                </div>

                <div>
                  <strong>Arjun</strong>
                  <small>Verified user</small>
                </div>

                <span>5.0</span>
              </div>

              <div className="review-stars">
                ★★★★★
              </div>

              <p>
                Really clean experience. The page has
                all the information I need before
                downloading.
              </p>
            </article>

            <article className="review-card">
              <div className="review-user">
                <div className="user-avatar">
                  R
                </div>

                <div>
                  <strong>Rahul</strong>
                  <small>Verified user</small>
                </div>

                <span>4.8</span>
              </div>

              <div className="review-stars">
                ★★★★★
              </div>

              <p>
                Screenshots and app details make it much
                easier to understand what I am getting.
              </p>
            </article>

            <article className="review-card">
              <div className="review-user">
                <div className="user-avatar">
                  S
                </div>

                <div>
                  <strong>Sameer</strong>
                  <small>Verified user</small>
                </div>

                <span>4.6</span>
              </div>

              <div className="review-stars">
                ★★★★★
              </div>

              <p>
                Nice UI and very easy to navigate on
                mobile. Everything is nicely organized.
              </p>
            </article>

          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section
          id="faq"
          className="content-section"
        >

          <div className="section-heading">
            <div>
              <span className="section-label">
                FAQ
              </span>

              <h2>Frequently asked questions</h2>

              <p>
                Quick answers about this application.
              </p>
            </div>
          </div>

          <div className="faq-list">

            {[
              [
                `What is ${app.name}?`,
                `${app.name} is listed under the ${app.category} category. You can check its version, size, Android requirement and other information above.`,
              ],
              [
                "Which Android version is supported?",
                `${app.name} currently lists ${app.android} as the required Android version.`,
              ],
              [
                "What is the latest version?",
                `The currently listed version is ${app.version}.`,
              ],
              [
                "How large is the application?",
                `The listed application size is ${app.size}.`,
              ],
              [
                "Where can I find screenshots?",
                "The screenshots section above provides a visual preview of the application experience.",
              ],
            ].map(([question, answer], index) => (
              <div
                className={`faq-item ${
                  openFaq === index
                    ? "faq-open"
                    : ""
                }`}
                key={question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index
                        ? null
                        : index
                    )
                  }
                  aria-expanded={openFaq === index}
                >
                  <span>{question}</span>
                  <b>
                    {openFaq === index ? "−" : "+"}
                  </b>
                </button>

                {openFaq === index && (
                  <div className="faq-answer">
                    {answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= DOWNLOAD CTA ================= */}

        <section
          id="download"
          className="download-cta"
        >

          <div className="cta-left">
            <div className="cta-icon">
              {app.icon}
            </div>

            <div>
              <span className="section-label">
                READY?
              </span>

              <h2>
                Download {app.name}
              </h2>

              <p>
                Get the latest available version from
                NexAPK.
              </p>
            </div>
          </div>

          <a
            href="#"
            className="cta-download"
            onClick={(event) =>
              event.preventDefault()
            }
          >
            <span>↓</span>
            Download APK
          </a>

        </section>

        {/* ================= RELATED ================= */}

        <section className="content-section">

          <div className="section-heading related-heading">

            <div>
              <span className="section-label">
                DISCOVER MORE
              </span>

              <h2>You may also like</h2>
            </div>

            <Link href="/latest">
              View all →
            </Link>

          </div>

          <div className="related-grid">

            {relatedApps.map(([key, item]) => (
              <Link
                href={`/apk/${key}`}
                className="related-card"
                key={key}
              >
                <div className="related-app-icon">
                  {item.icon}
                </div>

                <div className="related-info">
                  <h3>{item.name}</h3>

                  <span>
                    {item.category} • v{item.version}
                  </span>

                  <div>
                    <b>★ {item.rating}</b>
                    <small>{item.downloads}</small>
                  </div>
                </div>

                <span className="related-arrow">
                  →
                </span>
              </Link>
            ))}

          </div>
        </section>

      </div>

      {/* ================= FOOTER ================= */}

      <footer className="site-footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <Link
              href="/"
              className="footer-logo"
            >
              <img
                src="/nexapk-footer.png"
                alt="NexAPK"
              />
            </Link>

            <p>
              Discover apps, games and useful Android
              tools in one simple place.
            </p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <Link href="/">Home</Link>
            <Link href="/latest">Latest APKs</Link>
            <Link href="/latest?category=games">
              Games
            </Link>
            <Link href="/latest?category=tools">
              Tools
            </Link>
          </div>

          <div className="footer-column">
            <h4>Company</h4>

            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/dmca">DMCA</Link>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms of Service
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © 2026 NexAPK. All rights reserved.
          </span>

          <span>
            Made for Android lovers
          </span>
        </div>

      </footer>

      {/* ================= CSS ================= */}

      <style jsx global>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #f6f8fb;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        button:focus:not(:focus-visible),
        a:focus:not(:focus-visible) {
          outline: none;
        }

        .nexapk-page {
          --bg: #f6f8fb;
          --surface: #ffffff;
          --surface-soft: #f8fafc;
          --border: #e4e9f0;
          --text: #101c31;
          --muted: #718095;
          --muted-2: #99a5b4;
          --blue: #176fe8;
          --blue-dark: #075ccf;
          --blue-soft: #edf5ff;
          --green: #219866;
          --green-soft: #eaf8f1;
          --yellow: #e6a817;
          --header: rgba(255,255,255,.96);

          min-height: 100vh;
          color: var(--text);
          background: var(--bg);
          transition:
            background .2s ease,
            color .2s ease;
        }

        .dark-theme {
          --bg: #09111f;
          --surface: #101a2a;
          --surface-soft: #131f31;
          --border: #223047;
          --text: #f2f6fb;
          --muted: #9aa9bc;
          --muted-2: #718198;
          --blue: #3186ef;
          --blue-dark: #2375dc;
          --blue-soft: #132a48;
          --green: #48c486;
          --green-soft: #102d23;
          --yellow: #f1bd3c;
          --header: rgba(9,17,31,.96);
        }

        /* ================= HEADER ================= */

        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          height: 74px;
          background: var(--header);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(18px);
        }

        .header-inner {
          width: min(1180px, calc(100% - 36px));
          height: 100%;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .header-logo {
          width: 185px;
          height: 56px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .header-logo img {
          display: block;
          width: 185px;
          max-height: 53px;
          object-fit: contain;
          object-position: left center;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .desktop-nav a {
          color: var(--muted);
          text-decoration: none;
          font-size: 13px;
          font-weight: 750;
          transition: color .15s ease;
        }

        .desktop-nav a:hover {
          color: var(--blue);
        }

        .header-actions {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .header-icon-button {
          width: 43px;
          height: 43px;
          padding: 0;
          display: grid;
          place-items: center;
          border: 1px solid var(--border);
          border-radius: 13px;
          background: var(--surface);
          color: var(--text);
          text-decoration: none;
          font-size: 22px;
          cursor: pointer;
          transition:
            border-color .15s ease,
            color .15s ease,
            background .15s ease;
        }

        .header-icon-button:hover {
          color: var(--blue);
          border-color: #a9c9ef;
        }

        .mobile-menu-button {
          display: none;
          width: 43px;
          height: 43px;
          border: 0;
          background: transparent;
          padding: 7px;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
        }

        .mobile-menu-button span {
          display: block;
          width: 27px;
          height: 2.5px;
          border-radius: 10px;
          background: var(--text);
        }

        .mobile-navigation {
          display: none;
        }

        /* ================= CONTAINER ================= */

        .page-container {
          width: min(1080px, calc(100% - 36px));
          margin: auto;
          padding: 24px 0 75px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 3px 18px;
          color: var(--muted-2);
          font-size: 12px;
          white-space: nowrap;
          overflow: hidden;
        }

        .breadcrumb a {
          color: var(--muted);
          text-decoration: none;
        }

        .breadcrumb strong {
          color: var(--text);
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ================= HERO ================= */

        .hero-card {
          padding: 31px;
          border: 1px solid var(--border);
          border-radius: 26px;
          background: var(--surface);
          box-shadow:
            0 12px 35px rgba(19,40,70,.045);
        }

        .hero-top {
          display: flex;
          align-items: flex-start;
          gap: 23px;
        }

        .app-icon-large {
          width: 116px;
          height: 116px;
          flex: 0 0 116px;
          border-radius: 28px;
          display: grid;
          place-items: center;
          font-size: 48px;
          font-weight: 900;
          color: #fff;
          box-shadow:
            0 9px 24px rgba(20,60,110,.13);
        }

        .icon-social {
          background:
            linear-gradient(145deg,#0873df,#30a3ff);
        }

        .icon-games {
          background:
            linear-gradient(145deg,#151c28,#465365);
        }

        .icon-music {
          background:
            linear-gradient(145deg,#111,#292929);
          color: #1ed760;
        }

        .icon-default {
          background:
            linear-gradient(145deg,#176fe8,#56adff);
        }

        .hero-info {
          flex: 1;
          min-width: 0;
        }

        .hero-tags {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .hero-tags span {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 9px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: .45px;
        }

        .tag-blue {
          color: var(--blue);
          background: var(--blue-soft);
        }

        .tag-gray {
          color: var(--muted);
          background: var(--surface-soft);
          border: 1px solid var(--border);
        }

        .tag-green {
          color: var(--green);
          background: var(--green-soft);
        }

        .hero-info h1 {
          margin: 0;
          color: var(--text);
          font-size: clamp(34px,4vw,49px);
          line-height: 1.04;
          letter-spacing: -2.1px;
        }

        .hero-info > p {
          max-width: 700px;
          margin: 11px 0 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.65;
        }

        .developer-line {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 14px;
          color: var(--muted-2);
          font-size: 11px;
        }

        .developer-line b {
          color: var(--text);
        }

        .verified-dot {
          width: 18px;
          height: 18px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--green-soft);
          color: var(--green);
          font-size: 10px;
          font-weight: 900;
        }

        .dot-separator {
          color: var(--border);
        }

        .hero-rating {
          min-height: 58px;
          margin-top: 27px;
          padding-top: 21px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border);
        }

        .rating-main {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .stars-big {
          color: var(--yellow);
          font-size: 19px;
          letter-spacing: 1px;
        }

        .rating-main strong {
          color: var(--text);
          font-size: 21px;
        }

        .reviews-count {
          color: var(--muted-2);
          font-size: 12px;
        }

        .rating-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 11px;
          border: 1px solid var(--border);
          border-radius: 999px;
          color: var(--muted);
          background: var(--surface-soft);
          font-size: 10px;
          font-weight: 800;
        }

        .rating-badge span {
          color: var(--yellow);
        }

        /* ================= STATS ================= */

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          margin-top: 21px;
          border: 1px solid var(--border);
          border-radius: 17px;
          overflow: hidden;
        }

        .stat-box {
          min-height: 78px;
          padding: 15px 16px;
          display: flex;
          align-items: center;
          gap: 11px;
          background: var(--surface-soft);
          border-right: 1px solid var(--border);
        }

        .stat-box:last-child {
          border-right: 0;
        }

        .stat-icon {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: var(--blue-soft);
          color: var(--blue);
          font-size: 15px;
          font-weight: 900;
        }

        .stat-box strong {
          display: block;
          color: var(--text);
          font-size: 13px;
        }

        .stat-box small {
          display: block;
          margin-top: 3px;
          color: var(--muted-2);
          font-size: 9px;
        }

        /* ================= HERO ACTION ================= */

        .hero-actions {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .download-button {
          min-height: 61px;
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 18px;
          border-radius: 16px;
          color: #fff;
          background: var(--blue);
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(23,111,232,.16);
          transition:
            background .15s ease,
            box-shadow .15s ease;
        }

        .download-button:hover {
          background: var(--blue-dark);
          box-shadow: 0 12px 26px rgba(23,111,232,.21);
        }

        .download-arrow {
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: rgba(255,255,255,.13);
          font-size: 20px;
        }

        .download-button b {
          display: block;
          font-size: 14px;
        }

        .download-button small {
          display: block;
          margin-top: 3px;
          color: rgba(255,255,255,.72);
          font-size: 9px;
        }

        .button-arrow {
          margin-left: auto;
          font-size: 19px;
        }

        .favorite-button {
          min-width: 158px;
          min-height: 61px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 1px solid var(--border);
          border-radius: 16px;
          color: var(--muted);
          background: var(--surface);
          cursor: pointer;
          font-size: 13px;
        }

        .favorite-button > span {
          font-size: 25px;
          line-height: 1;
        }

        .favorite-button:hover {
          color: var(--blue);
          border-color: #a8c8ed;
        }

        .favorite-active {
          color: #e44e6a;
          border-color: #f0b8c4;
          background: #fff7f8;
        }

        .dark-theme .favorite-active {
          background: #28151b;
          border-color: #54303a;
        }

        .trust-strip {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 12px;
          color: var(--muted-2);
          font-size: 10px;
        }

        .trust-strip span:first-child {
          color: var(--green);
          font-weight: 800;
        }

        .trust-strip i {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--border);
        }

        /* ================= QUICK NAV ================= */

        .quick-nav {
          margin-top: 16px;
          padding: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border: 1px solid var(--border);
          border-radius: 15px;
          background: var(--surface);
          overflow-x: auto;
          scrollbar-width: none;
        }

        .quick-nav::-webkit-scrollbar {
          display: none;
        }

        .quick-nav a {
          flex: 0 0 auto;
          padding: 9px 13px;
          border-radius: 9px;
          color: var(--muted);
          text-decoration: none;
          font-size: 10px;
          font-weight: 750;
        }

        .quick-nav a:hover {
          color: var(--blue);
          background: var(--blue-soft);
        }

        /* ================= SECTION ================= */

        .content-section {
          margin-top: 45px;
          scroll-margin-top: 95px;
        }

        .section-heading {
          margin-bottom: 16px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
        }

        .section-label {
          color: var(--blue);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .section-heading h2 {
          margin: 5px 0 0;
          color: var(--text);
          font-size: 24px;
          letter-spacing: -.9px;
        }

        .section-heading p {
          margin: 5px 0 0;
          color: var(--muted);
          font-size: 11px;
        }

        /* ================= SCREENSHOTS ================= */

        .screenshot-card {
          border: 1px solid var(--border);
          border-radius: 23px;
          overflow: hidden;
          background: var(--surface);
        }

        .screenshot-viewer {
          min-height: 600px;
          padding: 45px 20px 0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background: var(--surface-soft);
        }

        .mock-shot {
          width: 290px;
          aspect-ratio: 9 / 16;
          position: relative;
          overflow: hidden;
          border: 7px solid #07172d;
          border-radius: 39px 39px 44px 44px;
          background: #f4f8fc;
          box-shadow: 0 20px 45px rgba(10,30,55,.19);
        }

        .mock-top {
          height: 27px;
          padding: 9px 17px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #0c1a2f;
          font-size: 7px;
          font-weight: 900;
        }

        .mock-status {
          display: flex;
          gap: 3px;
          align-items: flex-end;
        }

        .mock-status i {
          display: block;
          width: 4px;
          height: 7px;
          border-radius: 2px;
          background: #0c1a2f;
        }

        .mock-status i:nth-child(2) {
          height: 9px;
        }

        .mock-status i:nth-child(3) {
          height: 11px;
        }

        .mock-content {
          height: calc(100% - 27px);
          padding: 25px 17px 16px;
          background:
            linear-gradient(
              180deg,
              #f1f7ff 0%,
              #ffffff 70%
            );
        }

        .mock-brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          color: #101e34;
          font-size: 13px;
        }

        .mock-brand-icon {
          width: 26px;
          height: 26px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          color: #fff;
          background: #1676e9;
          font-size: 11px;
          font-weight: 900;
        }

        .mock-heading {
          margin-top: 31px;
        }

        .mock-heading small {
          color: #237be7;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .mock-heading h3 {
          margin: 5px 0 0;
          color: #101e34;
          font-size: 21px;
          letter-spacing: -.7px;
        }

        .mock-search {
          height: 35px;
          margin-top: 16px;
          padding: 0 11px;
          display: flex;
          align-items: center;
          gap: 6px;
          border: 1px solid #dce5ef;
          border-radius: 999px;
          color: #94a2b2;
          background: #fff;
          font-size: 7px;
        }

        .mock-search span {
          font-size: 13px;
        }

        .mock-card {
          margin-top: 13px;
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 9px;
          border: 1px solid #dce6f1;
          border-radius: 13px;
          background: #fff;
        }

        .mock-avatar {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          flex: 0 0 36px;
          border-radius: 10px;
          background: #1875e8;
          color: #fff;
          font-size: 14px;
          font-weight: 900;
        }

        .mock-lines b {
          display: block;
          color: #17243a;
          font-size: 8px;
        }

        .mock-lines span {
          display: block;
          margin-top: 4px;
          color: #96a3b2;
          font-size: 6px;
        }

        .small-card {
          margin-top: 8px;
        }

        .mock-circle {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #eaf8f1;
          color: #239666;
          font-size: 13px;
          font-weight: 900;
        }

        .mock-list {
          margin-top: 19px;
          border-top: 1px solid #e5ebf2;
        }

        .mock-list div {
          min-height: 35px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e5ebf2;
          color: #526174;
          font-size: 7px;
        }

        .mock-list b {
          color: #9aa8b7;
          font-size: 12px;
        }

        .mock-button {
          height: 38px;
          margin-top: 17px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          color: #fff;
          background: #1675e8;
          font-size: 8px;
          font-weight: 900;
        }

        .gallery-counter {
          padding: 7px 10px;
          border: 1px solid var(--border);
          border-radius: 999px;
          color: var(--muted);
          background: var(--surface);
          font-size: 9px;
          font-weight: 800;
        }

        .screenshot-controls {
          min-height: 65px;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          border-top: 1px solid var(--border);
        }

        .gallery-arrow {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text);
          background: var(--surface);
          cursor: pointer;
          font-size: 15px;
        }

        .gallery-arrow:hover {
          color: var(--blue);
          border-color: #a9c9ef;
        }

        .gallery-dots {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .gallery-dot {
          width: 7px;
          height: 7px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: var(--border);
          cursor: pointer;
        }

        .gallery-dot.active {
          width: 22px;
          border-radius: 999px;
          background: var(--blue);
        }

        /* ================= ABOUT ================= */

        .about-card {
          padding: 25px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: var(--surface);
        }

        .about-card p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .about-card p + p {
          margin-top: 13px;
        }

        .about-card strong,
        .about-card b {
          color: var(--text);
        }

        .about-highlights {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 10px;
          margin-top: 22px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .about-highlights div {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .about-highlights span {
          width: 26px;
          height: 26px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          color: var(--green);
          background: var(--green-soft);
          font-size: 11px;
          font-weight: 900;
        }

        .about-highlights p {
          font-size: 9px;
          line-height: 1.3;
        }

        /* ================= FEATURES ================= */

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 11px;
        }

        .feature-card {
          min-height: 115px;
          padding: 20px;
          display: flex;
          gap: 15px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: var(--surface);
          transition:
            border-color .15s ease,
            transform .15s ease;
        }

        .feature-card:hover {
          transform: translateY(-2px);
          border-color: #cbd9e9;
        }

        .feature-number {
          width: 39px;
          height: 39px;
          flex: 0 0 39px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          color: var(--blue);
          background: var(--blue-soft);
          font-size: 9px;
          font-weight: 900;
        }

        .feature-card h3 {
          margin: 1px 0 6px;
          color: var(--text);
          font-size: 14px;
        }

        .feature-card p {
          margin: 0;
          color: var(--muted);
          font-size: 10px;
          line-height: 1.55;
        }

        /* ================= MOD FEATURE ================= */

        .mod-feature-card {
          padding: 23px;
          border: 1px solid var(--border);
          border-radius: 21px;
          background: var(--surface);
        }

        .mod-feature-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }

        .mini-app-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #fff;
          background: linear-gradient(145deg,#1471e7,#4ca8ff);
          font-size: 21px;
          font-weight: 900;
        }

        .mod-feature-header h3 {
          margin: 0;
          color: var(--text);
          font-size: 14px;
        }

        .mod-feature-header span:not(.feature-status) {
          display: block;
          margin-top: 4px;
          color: var(--muted-2);
          font-size: 9px;
        }

        .feature-status {
          margin-left: auto;
          padding: 6px 9px;
          border-radius: 999px;
          color: var(--green);
          background: var(--green-soft);
          font-size: 8px;
          font-weight: 900;
        }

        .feature-list {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 0 35px;
        }

        .feature-list > div {
          min-height: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid var(--border);
          color: var(--muted);
          font-size: 10px;
        }

        .feature-list > div:nth-last-child(-n+2) {
          border-bottom: 0;
        }

        .check {
          width: 21px;
          height: 21px;
          display: grid;
          place-items: center;
          flex: 0 0 21px;
          border-radius: 50%;
          color: var(--green);
          background: var(--green-soft);
          font-size: 9px;
          font-weight: 900;
        }

        /* ================= INFORMATION ================= */

        .information-card {
          padding: 4px 21px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: var(--surface);
        }

        .info-row {
          min-height: 53px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid var(--border);
          font-size: 11px;
        }

        .info-row:last-child {
          border-bottom: 0;
        }

        .info-row span {
          color: var(--muted);
        }

        .info-row strong {
          color: var(--text);
          text-align: right;
        }

        /* ================= REVIEWS ================= */

        .review-summary {
          padding: 24px;
          display: grid;
          grid-template-columns: 210px 1fr;
          gap: 40px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: var(--surface);
        }

        .overall-rating {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-right: 1px solid var(--border);
        }

        .overall-rating strong {
          color: var(--text);
          font-size: 48px;
          line-height: 1;
          letter-spacing: -2px;
        }

        .overall-stars {
          margin-top: 8px;
          color: var(--yellow);
          font-size: 16px;
          letter-spacing: 1px;
        }

        .overall-rating small {
          margin-top: 6px;
          color: var(--muted-2);
          font-size: 9px;
        }

        .rating-bars {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 9px;
        }

        .rating-bar-row {
          display: grid;
          grid-template-columns: 35px 1fr 32px;
          align-items: center;
          gap: 9px;
          color: var(--muted);
          font-size: 9px;
        }

        .rating-track {
          height: 7px;
          overflow: hidden;
          border-radius: 999px;
          background: var(--border);
        }

        .rating-track i {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: var(--yellow);
        }

        .rating-bar-row small {
          color: var(--muted-2);
          text-align: right;
        }

        .review-list {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 11px;
          margin-top: 12px;
        }

        .review-card {
          padding: 19px;
          border: 1px solid var(--border);
          border-radius: 17px;
          background: var(--surface);
        }

        .review-user {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .user-avatar {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          background: var(--blue);
          font-size: 11px;
          font-weight: 900;
        }

        .review-user div:nth-child(2) {
          min-width: 0;
        }

        .review-user strong {
          display: block;
          color: var(--text);
          font-size: 10px;
        }

        .review-user small {
          display: block;
          margin-top: 3px;
          color: var(--muted-2);
          font-size: 7px;
        }

        .review-user > span {
          margin-left: auto;
          color: var(--yellow);
          font-size: 9px;
          font-weight: 900;
        }

        .review-stars {
          margin-top: 14px;
          color: var(--yellow);
          font-size: 11px;
          letter-spacing: .5px;
        }

        .review-card p {
          margin: 9px 0 0;
          color: var(--muted);
          font-size: 9px;
          line-height: 1.6;
        }

        /* ================= FAQ ================= */

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          border: 1px solid var(--border);
          border-radius: 15px;
          overflow: hidden;
          background: var(--surface);
        }

        .faq-question {
          width: 100%;
          min-height: 57px;
          padding: 0 17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          border: 0;
          color: var(--text);
          background: transparent;
          text-align: left;
          cursor: pointer;
          font-size: 11px;
          font-weight: 800;
        }

        .faq-question b {
          width: 25px;
          height: 25px;
          display: grid;
          place-items: center;
          flex: 0 0 25px;
          border-radius: 8px;
          color: var(--blue);
          background: var(--blue-soft);
          font-size: 15px;
        }

        .faq-answer {
          padding: 0 17px 17px;
          color: var(--muted);
          font-size: 10px;
          line-height: 1.7;
        }

        /* ================= CTA ================= */

        .download-cta {
          margin-top: 48px;
          padding: 27px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-radius: 22px;
          color: #fff;
          background: #0d1d34;
        }

        .cta-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .cta-icon {
          width: 57px;
          height: 57px;
          display: grid;
          place-items: center;
          flex: 0 0 57px;
          border-radius: 16px;
          background: #1b75e7;
          font-size: 23px;
          font-weight: 900;
        }

        .download-cta .section-label {
          color: #71b6ff;
        }

        .download-cta h2 {
          margin: 4px 0 4px;
          font-size: 23px;
          letter-spacing: -.7px;
        }

        .download-cta p {
          margin: 0;
          color: #9eafc4;
          font-size: 10px;
        }

        .cta-download {
          min-height: 50px;
          padding: 0 21px;
          display: flex;
          align-items: center;
          gap: 9px;
          border-radius: 13px;
          color: #fff;
          background: #1877ea;
          text-decoration: none;
          font-size: 11px;
          font-weight: 900;
        }

        .cta-download span {
          font-size: 18px;
        }

        /* ================= RELATED ================= */

        .related-heading > a {
          color: var(--blue);
          text-decoration: none;
          font-size: 10px;
          font-weight: 850;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 10px;
        }

        .related-card {
          min-width: 0;
          position: relative;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid var(--border);
          border-radius: 17px;
          background: var(--surface);
          color: var(--text);
          text-decoration: none;
          transition:
            transform .15s ease,
            border-color .15s ease;
        }

        .related-card:hover {
          transform: translateY(-2px);
          border-color: #b8d0eb;
        }

        .related-app-icon {
          width: 50px;
          height: 50px;
          flex: 0 0 50px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #fff;
          background: linear-gradient(145deg,#176fe8,#4ca8ff);
          font-size: 19px;
          font-weight: 900;
        }

        .related-info {
          min-width: 0;
          padding-right: 15px;
        }

        .related-info h3 {
          margin: 0;
          overflow: hidden;
          color: var(--text);
          font-size: 11px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .related-info > span {
          display: block;
          margin-top: 4px;
          overflow: hidden;
          color: var(--muted-2);
          font-size: 8px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .related-info > div {
          display: flex;
          gap: 8px;
          margin-top: 6px;
          font-size: 8px;
        }

        .related-info b {
          color: var(--yellow);
        }

        .related-info small {
          color: var(--muted-2);
        }

        .related-arrow {
          position: absolute;
          top: 12px;
          right: 11px;
          color: var(--blue);
          font-size: 13px;
        }

        /* ================= FOOTER ================= */

        .site-footer {
          border-top: 1px solid #17273e;
          color: #fff;
          background: #071326;
        }

        .footer-inner {
          width: min(1080px, calc(100% - 36px));
          margin: auto;
          padding: 48px 0 37px;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 35px;
        }

        .footer-logo {
          width: 205px;
          display: block;
        }

        .footer-logo img {
          display: block;
          width: 100%;
          max-height: 76px;
          object-fit: contain;
          object-position: left center;
        }

        .footer-brand p {
          max-width: 285px;
          margin: 13px 0 0;
          color: #8193ab;
          font-size: 10px;
          line-height: 1.7;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-column h4 {
          margin: 0 0 5px;
          font-size: 11px;
        }

        .footer-column a {
          color: #8497b0;
          text-decoration: none;
          font-size: 9px;
        }

        .footer-column a:hover {
          color: #fff;
        }

        .footer-bottom {
          width: min(1080px, calc(100% - 36px));
          margin: auto;
          padding: 16px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,.07);
          color: #657991;
          font-size: 8px;
        }

        /* ================= DARK OVERRIDES ================= */

        .dark-theme .site-footer {
          background: #050c16;
        }

        .dark-theme .mock-shot {
          border-color: #020814;
        }

        /* ================= MOBILE ================= */

        @media (max-width: 760px) {

          .site-header {
            height: 68px;
          }

          .header-inner {
            width: calc(100% - 18px);
            gap: 3px;
          }

          .mobile-menu-button {
            display: flex;
          }

          .header-logo {
            width: 174px;
            height: 52px;
          }

          .header-logo img {
            width: 174px;
            max-height: 49px;
          }

          .desktop-nav {
            display: none;
          }

          .header-actions {
            gap: 5px;
          }

          .header-icon-button {
            width: 39px;
            height: 39px;
            border-radius: 12px;
            font-size: 20px;
          }

          .mobile-navigation {
            position: absolute;
            left: 9px;
            right: 9px;
            top: 73px;
            padding: 8px;
            display: flex;
            flex-direction: column;
            gap: 3px;
            border: 1px solid var(--border);
            border-radius: 16px;
            background: var(--surface);
            box-shadow: 0 15px 35px rgba(10,30,60,.12);
          }

          .mobile-navigation a {
            padding: 13px 14px;
            border-radius: 10px;
            color: var(--text);
            text-decoration: none;
            font-size: 12px;
            font-weight: 750;
          }

          .mobile-navigation a:hover {
            background: var(--blue-soft);
            color: var(--blue);
          }

          .page-container {
            width: calc(100% - 18px);
            padding: 17px 0 48px;
          }

          .breadcrumb {
            margin: 0 3px 13px;
            gap: 7px;
            font-size: 10px;
          }

          .hero-card {
            padding: 18px;
            border-radius: 21px;
          }

          .hero-top {
            gap: 14px;
          }

          .app-icon-large {
            width: 78px;
            height: 78px;
            flex-basis: 78px;
            border-radius: 20px;
            font-size: 31px;
          }

          .hero-tags {
            gap: 4px;
            margin-bottom: 7px;
          }

          .hero-tags span {
            padding: 5px 7px;
            font-size: 6px;
          }

          .hero-info h1 {
            font-size: 27px;
            letter-spacing: -1.2px;
          }

          .hero-info > p {
            margin-top: 7px;
            font-size: 10px;
            line-height: 1.5;
          }

          .developer-line {
            margin-top: 9px;
            gap: 5px;
            font-size: 7px;
          }

          .verified-dot {
            width: 14px;
            height: 14px;
            font-size: 8px;
          }

          .hero-rating {
            margin-top: 17px;
            padding-top: 15px;
          }

          .rating-main {
            gap: 7px;
          }

          .stars-big {
            font-size: 13px;
            letter-spacing: 0;
          }

          .rating-main strong {
            font-size: 16px;
          }

          .reviews-count {
            font-size: 8px;
          }

          .rating-badge {
            padding: 6px 8px;
            font-size: 7px;
          }

          .stats-grid {
            margin-top: 14px;
            grid-template-columns: repeat(2,1fr);
          }

          .stat-box {
            min-height: 62px;
            padding: 10px;
            gap: 8px;
            border-right: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
          }

          .stat-box:nth-child(2n) {
            border-right: 0;
          }

          .stat-box:nth-last-child(-n+2) {
            border-bottom: 0;
          }

          .stat-icon {
            width: 28px;
            height: 28px;
            flex-basis: 28px;
            border-radius: 8px;
            font-size: 12px;
          }

          .stat-box strong {
            font-size: 10px;
          }

          .stat-box small {
            font-size: 7px;
          }

          .hero-actions {
            gap: 7px;
            margin-top: 14px;
          }

          .download-button {
            min-height: 51px;
            padding: 0 11px;
            gap: 8px;
            border-radius: 13px;
          }

          .download-arrow {
            width: 29px;
            height: 29px;
            flex-basis: 29px;
            border-radius: 8px;
            font-size: 16px;
          }

          .download-button b {
            font-size: 10px;
          }

          .download-button small {
            font-size: 6px;
          }

          .button-arrow {
            font-size: 14px;
          }

          .favorite-button {
            min-width: 88px;
            min-height: 51px;
            padding: 0 9px;
            gap: 5px;
            border-radius: 13px;
            font-size: 9px;
          }

          .favorite-button > span {
            font-size: 19px;
          }

          .trust-strip {
            margin-top: 9px;
            gap: 5px;
            font-size: 7px;
          }

          .quick-nav {
            justify-content: flex-start;
            margin-top: 10px;
          }

          .quick-nav a {
            padding: 8px 9px;
            font-size: 8px;
          }

          .content-section {
            margin-top: 32px;
            scroll-margin-top: 80px;
          }

          .section-heading {
            margin-bottom: 11px;
          }

          .section-label {
            font-size: 7px;
            letter-spacing: 1.1px;
          }

          .section-heading h2 {
            margin-top: 4px;
            font-size: 19px;
            letter-spacing: -.6px;
          }

          .section-heading p {
            font-size: 8px;
          }

          .gallery-counter {
            padding: 6px 8px;
            font-size: 7px;
          }

          .screenshot-viewer {
            min-height: 480px;
            padding-top: 29px;
          }

          .mock-shot {
            width: 220px;
            border-width: 6px;
            border-radius: 31px;
          }

          .mock-top {
            height: 22px;
            padding: 7px 13px 0;
            font-size: 6px;
          }

          .mock-content {
            height: calc(100% - 22px);
            padding: 20px 13px 12px;
          }

          .mock-brand {
            font-size: 10px;
          }

          .mock-brand-icon {
            width: 22px;
            height: 22px;
            font-size: 9px;
          }

          .mock-heading {
            margin-top: 22px;
          }

          .mock-heading h3 {
            font-size: 16px;
          }

          .mock-search {
            height: 29px;
            margin-top: 11px;
            font-size: 6px;
          }

          .mock-card {
            margin-top: 9px;
            padding: 7px;
          }

          .mock-avatar,
          .mock-circle {
            width: 29px;
            height: 29px;
            flex-basis: 29px;
          }

          .mock-lines b {
            font-size: 6px;
          }

          .mock-lines span {
            font-size: 5px;
          }

          .mock-list {
            margin-top: 13px;
          }

          .mock-list div {
            min-height: 28px;
            font-size: 6px;
          }

          .mock-button {
            height: 30px;
            margin-top: 11px;
            font-size: 6px;
          }

          .screenshot-controls {
            min-height: 54px;
            gap: 18px;
          }

          .gallery-arrow {
            width: 30px;
            height: 30px;
            border-radius: 8px;
            font-size: 12px;
          }

          .about-card {
            padding: 17px;
            border-radius: 17px;
          }

          .about-card p {
            font-size: 9px;
            line-height: 1.7;
          }

          .about-highlights {
            grid-template-columns: 1fr;
            gap: 9px;
            margin-top: 16px;
            padding-top: 15px;
          }

          .about-highlights span {
            width: 23px;
            height: 23px;
            border-radius: 7px;
            font-size: 9px;
          }

          .about-highlights p {
            font-size: 8px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .feature-card {
            min-height: 86px;
            padding: 14px;
            border-radius: 14px;
          }

          .feature-number {
            width: 32px;
            height: 32px;
            flex-basis: 32px;
            border-radius: 9px;
            font-size: 7px;
          }

          .feature-card h3 {
            font-size: 11px;
          }

          .feature-card p {
            font-size: 8px;
          }

          .mod-feature-card {
            padding: 15px;
            border-radius: 17px;
          }

          .mod-feature-header {
            padding-bottom: 14px;
          }

          .mini-app-icon {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
            border-radius: 11px;
            font-size: 16px;
          }

          .mod-feature-header h3 {
            font-size: 11px;
          }

          .mod-feature-header span:not(.feature-status) {
            font-size: 7px;
          }

          .feature-status {
            padding: 5px 7px;
            font-size: 6px;
          }

          .feature-list {
            grid-template-columns: 1fr;
          }

          .feature-list > div,
          .feature-list > div:nth-last-child(-n+2) {
            min-height: 42px;
            border-bottom: 1px solid var(--border);
            font-size: 8px;
          }

          .feature-list > div:last-child {
            border-bottom: 0;
          }

          .check {
            width: 19px;
            height: 19px;
            flex-basis: 19px;
            font-size: 8px;
          }

          .information-card {
            padding: 2px 14px;
            border-radius: 16px;
          }

          .info-row {
            min-height: 43px;
            font-size: 9px;
          }

          .review-summary {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 17px;
            border-radius: 17px;
          }

          .overall-rating {
            padding-bottom: 18px;
            border-right: 0;
            border-bottom: 1px solid var(--border);
          }

          .overall-rating strong {
            font-size: 39px;
          }

          .overall-stars {
            font-size: 13px;
          }

          .rating-bars {
            gap: 7px;
          }

          .rating-bar-row {
            grid-template-columns: 30px 1fr 27px;
            font-size: 8px;
          }

          .rating-track {
            height: 6px;
          }

          .review-list {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .review-card {
            padding: 14px;
            border-radius: 14px;
          }

          .review-user strong {
            font-size: 9px;
          }

          .review-card p {
            font-size: 8px;
          }

          .faq-question {
            min-height: 50px;
            padding: 0 13px;
            font-size: 9px;
          }

          .faq-question b {
            width: 22px;
            height: 22px;
            flex-basis: 22px;
            font-size: 13px;
          }

          .faq-answer {
            padding: 0 13px 13px;
            font-size: 8px;
          }

          .download-cta {
            margin-top: 34px;
            padding: 19px;
            display: block;
            border-radius: 17px;
          }

          .cta-left {
            gap: 11px;
          }

          .cta-icon {
            width: 43px;
            height: 43px;
            flex-basis: 43px;
            border-radius: 12px;
            font-size: 17px;
          }

          .download-cta h2 {
            font-size: 18px;
          }

          .download-cta p {
            font-size: 8px;
          }

          .cta-download {
            min-height: 45px;
            margin-top: 15px;
            justify-content: center;
            border-radius: 11px;
            font-size: 10px;
          }

          .related-grid {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .related-card {
            padding: 11px;
            border-radius: 14px;
          }

          .related-app-icon {
            width: 44px;
            height: 44px;
            flex-basis: 44px;
            border-radius: 12px;
            font-size: 17px;
          }

          .related-info h3 {
            font-size: 10px;
          }

          .related-info > span {
            font-size: 7px;
          }

          .related-info > div {
            font-size: 7px;
          }

          .footer-inner {
            width: calc(100% - 30px);
            padding: 34px 0 28px;
            grid-template-columns: 1fr 1fr;
            gap: 26px 20px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-logo {
            width: 190px;
          }

          .footer-brand p {
            max-width: 270px;
            font-size: 8px;
          }

          .footer-column {
            gap: 8px;
          }

          .footer-column h4 {
            font-size: 9px;
          }

          .footer-column a {
            font-size: 8px;
          }

          .footer-bottom {
            width: calc(100% - 30px);
            padding: 13px 0;
            display: block;
            line-height: 2;
            font-size: 7px;
          }

        }

        @media (max-width: 380px) {

          .header-logo {
            width: 150px;
          }

          .header-logo img {
            width: 150px;
          }

          .hero-top {
            gap: 11px;
          }

          .app-icon-large {
            width: 69px;
            height: 69px;
            flex-basis: 69px;
          }

          .hero-info h1 {
            font-size: 24px;
          }

          .hero-info > p {
            font-size: 9px;
          }

          .favorite-button {
            min-width: 78px;
          }

          .favorite-button b {
            font-size: 8px;
          }

          .mock-shot {
            width: 205px;
          }
        }

      `}</style>
    </main>
  );
}
