"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type App = {
  slug: string;
  name: string;
  category: string;
  version: string;
  size: string;
  rating: string;
  downloads: string;
  badge?: string;
  description: string;
  icon: string;
  updated: string;
};

const apps: App[] = [
  {
    slug: "whatsapp-plus",
    name: "WhatsApp Plus",
    category: "Social",
    version: "v2.26.12",
    size: "78 MB",
    rating: "4.8",
    downloads: "2.4M",
    badge: "MOD",
    description: "Enhanced messaging experience with extra customization options.",
    icon: "W",
    updated: "Today",
  },
  {
    slug: "instagram-pro",
    name: "Instagram Pro",
    category: "Social",
    version: "v401.0",
    size: "92 MB",
    rating: "4.7",
    downloads: "1.8M",
    badge: "PRO",
    description: "A feature-rich Instagram experience with additional options.",
    icon: "I",
    updated: "Today",
  },
  {
    slug: "bgmi",
    name: "BGMI",
    category: "Games",
    version: "v3.9.0",
    size: "1.1 GB",
    rating: "4.9",
    downloads: "8.7M",
    badge: "HOT",
    description: "Battle royale gaming with intense multiplayer action.",
    icon: "B",
    updated: "Yesterday",
  },
  {
    slug: "spotify-premium",
    name: "Spotify Premium",
    category: "Music",
    version: "v9.0.48",
    size: "86 MB",
    rating: "4.8",
    downloads: "3.2M",
    badge: "PREMIUM",
    description: "Discover music, podcasts and personalized playlists.",
    icon: "S",
    updated: "Yesterday",
  },
  {
    slug: "capcut-pro",
    name: "CapCut Pro",
    category: "Video",
    version: "v14.8",
    size: "280 MB",
    rating: "4.8",
    downloads: "4.5M",
    badge: "PRO",
    description: "Powerful video editing tools for creating professional content.",
    icon: "C",
    updated: "2 days ago",
  },
  {
    slug: "youtube-vanced",
    name: "YouTube Vanced",
    category: "Video",
    version: "v19.46",
    size: "128 MB",
    rating: "4.6",
    downloads: "5.1M",
    badge: "MOD",
    description: "A customized video watching experience with additional controls.",
    icon: "Y",
    updated: "2 days ago",
  },
];

const categories = ["All", "Social", "Games", "Music", "Video"];

export default function LatestPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Latest");

  const filteredApps = useMemo(() => {
    let result = apps.filter((app) => {
      const matchesSearch =
        app.name.toLowerCase().includes(search.toLowerCase()) ||
        app.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || app.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "Rating") {
      result = [...result].sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
    }

    if (sort === "Downloads") {
      result = [...result].sort(
        (a, b) =>
          parseFloat(b.downloads) - parseFloat(a.downloads)
      );
    }

    return result;
  }, [search, category, sort]);

  return (
    <main className="latest-page">
      {/* HEADER */}
      <header className="latest-header">
        <div className="latest-container header-inner">
          <Link href="/" className="brand">
            <img
              src="/nexapk-header.png"
              alt="NexAPK"
            />
          </Link>

          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/latest" className="active">
              Latest
            </Link>
          </nav>

          <div className="header-actions">
            <Link href="/" className="mobile-home">
              Home
            </Link>

            <button
              className="theme-button"
              type="button"
              aria-label="Toggle theme"
              onClick={() => {
                document.documentElement.classList.toggle("dark");
              }}
            >
              ◐
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="latest-hero">
        <div className="latest-container">
          <div className="hero-content">
            <span className="eyebrow">NEXAPK LIBRARY</span>

            <h1>
              Discover the
              <span> latest APKs.</span>
            </h1>

            <p>
              Find the latest apps, games and tools in one clean
              place.
            </p>

            <div className="search-box">
              <span className="search-icon">⌕</span>

              <input
                type="text"
                placeholder="Search apps, games or tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                  type="button"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="latest-content">
        <div className="latest-container">
          {/* TOP BAR */}
          <div className="results-top">
            <div>
              <span className="small-label">
                EXPLORE LIBRARY
              </span>

              <h2>
                {search
                  ? `Results for "${search}"`
                  : "Latest APKs"}
              </h2>
            </div>

            <div className="sort-box">
              <span>Sort:</span>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="Latest">Latest</option>
                <option value="Rating">Top Rated</option>
                <option value="Downloads">Most Downloaded</option>
              </select>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="categories">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={
                  category === item ? "category active" : "category"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* GRID */}
          {filteredApps.length > 0 ? (
            <div className="apk-grid">
              {filteredApps.map((app) => (
                <Link
                  href={`/apk/${app.slug}`}
                  className="apk-card"
                  key={app.slug}
                >
                  <div className="card-top">
                    <div className="app-icon">
                      {app.icon}
                    </div>

                    {app.badge && (
                      <span className="app-badge">
                        {app.badge}
                      </span>
                    )}
                  </div>

                  <div className="card-info">
                    <span className="app-category">
                      {app.category}
                    </span>

                    <h3>{app.name}</h3>

                    <p>{app.description}</p>
                  </div>

                  <div className="app-meta">
                    <span>★ {app.rating}</span>
                    <span>{app.size}</span>
                    <span>{app.downloads} downloads</span>
                  </div>

                  <div className="card-bottom">
                    <span>
                      {app.version}
                    </span>

                    <span className="view-button">
                      View APK →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">⌕</div>

              <h3>No APKs found</h3>

              <p>
                We couldn't find anything matching
                <strong> "{search}"</strong>.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Clear Search
              </button>
            </div>
          )}

          {/* BOTTOM CTA */}
          <div className="latest-cta">
            <div>
              <span className="cta-label">NEXAPK</span>

              <h2>
                Looking for something specific?
              </h2>

              <p>
                Search our growing APK library and discover
                something new.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Search APKs ↑
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="latest-footer">
        <div className="latest-container footer-inner">
          <div className="footer-brand">
            <img
              src="/nexapk-footer.png"
              alt="NexAPK Apps Games Tools"
            />

            <p>
              Discover apps, games and tools with NexAPK.
            </p>
          </div>

          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/latest">Latest</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>

        <div className="copyright">
          © 2026 NexAPK. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
