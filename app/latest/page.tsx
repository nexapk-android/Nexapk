"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const apps = [
  {
    slug: "whatsapp-plus",
    name: "WhatsApp Plus",
    category: "Social",
    version: "v2.25.10",
    size: "78 MB",
    rating: "4.8",
    downloads: "8.7M",
    badge: "Popular",
    description:
      "Advanced messaging experience with privacy and customization options.",
    icon: "W",
  },
  {
    slug: "instagram-pro",
    name: "Instagram Pro",
    category: "Social",
    version: "v385.0.0",
    size: "92 MB",
    rating: "4.7",
    downloads: "5.4M",
    badge: "Trending",
    description:
      "Enhanced social media experience with additional privacy and customization.",
    icon: "I",
  },
  {
    slug: "bgmi",
    name: "BGMI",
    category: "Games",
    version: "v3.9.0",
    size: "1.2 GB",
    rating: "4.9",
    downloads: "12.8M",
    badge: "Popular",
    description:
      "Immersive battle royale experience with multiplayer gameplay.",
    icon: "B",
  },
  {
    slug: "spotify-premium",
    name: "Spotify Premium",
    category: "Music",
    version: "v9.0.48",
    size: "85 MB",
    rating: "4.8",
    downloads: "9.2M",
    badge: "Premium",
    description:
      "Listen to music and podcasts with a smooth audio experience.",
    icon: "S",
  },
  {
    slug: "capcut-pro",
    name: "CapCut Pro",
    category: "Video",
    version: "v14.5.0",
    size: "240 MB",
    rating: "4.7",
    downloads: "6.8M",
    badge: "Editor",
    description:
      "Powerful video editing tools, effects, transitions and templates.",
    icon: "C",
  },
  {
    slug: "youtube-vanced",
    name: "YouTube Vanced",
    category: "Video",
    version: "v19.20.35",
    size: "110 MB",
    rating: "4.6",
    downloads: "4.1M",
    badge: "Featured",
    description:
      "Enhanced YouTube viewing experience with additional controls.",
    icon: "Y",
  },
];

const categories = ["All", "Social", "Games", "Music", "Video"];

export default function LatestPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Latest");

  const filteredApps = useMemo(() => {
    let result = [...apps];

    if (category !== "All") {
      result = result.filter(
        (app) => app.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter(
        (app) =>
          app.name.toLowerCase().includes(query) ||
          app.category.toLowerCase().includes(query) ||
          app.description.toLowerCase().includes(query)
      );
    }

    if (sort === "Top Rated") {
      result.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    if (sort === "Most Downloaded") {
      result.sort(
        (a, b) =>
          parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    }

    return result;
  }, [search, category, sort]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("Latest");
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <main className="nl-page">
      {/* HEADER */}
      <header className="nl-header">
        <div className="nl-header-inner">
          <Link href="/" className="nl-brand">
            <img
              src="/nexapk-header.png"
              alt="NexAPK"
              className="nl-header-logo"
            />
          </Link>

          <nav className="nl-nav">
            <Link href="/" className="nl-nav-link">
              Home
            </Link>

            <Link href="/latest" className="nl-nav-link active">
              Latest
            </Link>
          </nav>

          <div className="nl-header-actions">
            <button
              type="button"
              className="nl-icon-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <span className="nl-theme-sun">☀</span>
              <span className="nl-theme-moon">☾</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="nl-hero">
        <div className="nl-container">
          <div className="nl-hero-content">
            <span className="nl-eyebrow">NEXAPK LIBRARY</span>

            <h1>
              Discover the
              <br />
              <span>Latest APKs</span>
            </h1>

            <p>
              Explore the newest apps, games and tools available on NexAPK.
              Fast, clean and easy to discover.
            </p>

            <div className="nl-search">
              <span className="nl-search-icon">⌕</span>

              <input
                type="search"
                placeholder="Search apps, games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  type="button"
                  className="nl-search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="nl-content">
        <div className="nl-container">
          <div className="nl-toolbar">
            <div className="nl-categories">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`nl-category ${
                    category === item ? "selected" : ""
                  }`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="nl-sort">
              <label htmlFor="app-sort">Sort</label>

              <select
                id="app-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="Latest">Latest</option>
                <option value="Top Rated">Top Rated</option>
                <option value="Most Downloaded">
                  Most Downloaded
                </option>
              </select>
            </div>
          </div>

          <div className="nl-result-row">
            <div>
              <h2>Latest Apps</h2>

              <p>
                {filteredApps.length}{" "}
                {filteredApps.length === 1 ? "app" : "apps"} found
              </p>
            </div>

            {(search || category !== "All" || sort !== "Latest") && (
              <button
                type="button"
                className="nl-reset"
                onClick={resetFilters}
              >
                Reset filters
              </button>
            )}
          </div>

          {/* APP GRID */}
          {filteredApps.length > 0 ? (
            <div className="nl-grid">
              {filteredApps.map((app) => (
                <Link
                  key={app.slug}
                  href={`/apk/${app.slug}`}
                  className="nl-card"
                >
                  <div className="nl-card-top">
                    <div className="nl-app-icon">{app.icon}</div>

                    {app.badge && (
                      <span className="nl-badge">
                        {app.badge}
                      </span>
                    )}
                  </div>

                  <div className="nl-card-body">
                    <div className="nl-app-category">
                      {app.category}
                    </div>

                    <h3>{app.name}</h3>

                    <p>{app.description}</p>

                    <div className="nl-card-meta">
                      <span>★ {app.rating}</span>
                      <span>{app.size}</span>
                      <span>{app.version}</span>
                    </div>
                  </div>

                  <div className="nl-card-bottom">
                    <span>{app.downloads} downloads</span>

                    <span className="nl-arrow">→</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="nl-empty">
              <div className="nl-empty-icon">⌕</div>

              <h3>No apps found</h3>

              <p>
                We couldn&apos;t find anything matching your search.
                Try another keyword or category.
              </p>

              <button type="button" onClick={resetFilters}>
                Clear filters
              </button>
            </div>
          )}

          {/* DISCOVER */}
          <section className="nl-discover">
            <div>
              <span className="nl-eyebrow">DISCOVER MORE</span>

              <h2>
                Find something
                <br />
                <span>you&apos;ll love.</span>
              </h2>

              <p>
                New apps and updates are added regularly to the NexAPK
                library.
              </p>
            </div>

            <Link href="/" className="nl-discover-btn">
              Explore NexAPK
              <span>→</span>
            </Link>
          </section>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nl-footer">
        <div className="nl-container">
          <div className="nl-footer-main">
            <div className="nl-footer-brand">
              <img
                src="/nexapk-footer.png"
                alt="NexAPK"
                className="nl-footer-logo"
              />

              <p>
                Your destination for discovering apps, games and
                digital tools.
              </p>
            </div>

            <div className="nl-footer-links">
              <div>
                <h4>Explore</h4>
                <Link href="/">Home</Link>
                <Link href="/latest">Latest</Link>
              </div>

              <div>
                <h4>Legal</h4>
                <Link href="/terms">Terms</Link>
                <Link href="/privacy">Privacy</Link>
              </div>

              <div>
                <h4>Social</h4>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>

                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="nl-footer-bottom">
            <span>© {new Date().getFullYear()} NexAPK</span>
            <span>Made for Android users</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function parseDownloads(value: string): number {
  const number = Number.parseFloat(value);

  if (Number.isNaN(number)) {
    return 0;
  }

  const text = value.toLowerCase();

  if (text.includes("b")) {
    return number * 1000;
  }

  if (text.includes("m")) {
    return number;
  }

  if (text.includes("k")) {
    return number / 1000;
  }

  return number;
}
