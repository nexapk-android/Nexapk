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
    description: "More customization and extra features for your messaging experience.",
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
    description: "A cleaner social experience with additional customization options.",
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
    description: "Experience intense battle royale action with your squad.",
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
    description: "Music, podcasts and personalized playlists in one place.",
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
    description: "Create polished videos with powerful editing tools.",
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
    description: "A customized video viewing experience with extra controls.",
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
      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        app.name.toLowerCase().includes(query) ||
        app.category.toLowerCase().includes(query);

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
    <main className="nex-latest">
      {/* HEADER */}
      <header className="nl-header">
        <div className="nl-container nl-header-inner">
          <Link href="/" className="nl-logo">
            <img
              src="/nexapk-header.png"
              alt="NexAPK"
            />
          </Link>

          <nav className="nl-nav">
            <Link href="/">Home</Link>
            <Link href="/latest" className="current">
              Latest
            </Link>
          </nav>

          <div className="nl-header-right">
            <button
              type="button"
              className="nl-theme"
              aria-label="Toggle theme"
              onClick={() => {
                document.documentElement.classList.toggle("dark");
              }}
            >
              <span>◐</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="nl-hero">
        <div className="nl-container">
          <div className="nl-hero-inner">
            <div className="nl-kicker">
              <span className="nl-kicker-dot" />
              UPDATED REGULARLY
            </div>

            <h1>
              Latest apps.
              <br />
              <span>Freshly discovered.</span>
            </h1>

            <p>
              Explore the newest apps, games and tools
              available on NexAPK.
            </p>

            <div className="nl-search">
              <span className="nl-search-icon">⌕</span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search apps, games and tools..."
              />

              {search && (
                <button
                  type="button"
                  className="nl-search-clear"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}

              <span className="nl-search-key">/</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="nl-main">
        <div className="nl-container">
          {/* SECTION TOP */}
          <div className="nl-section-head">
            <div>
              <span className="nl-section-label">
                EXPLORE
              </span>

              <h2>
                {search
                  ? `Search results`
                  : "Latest releases"}
              </h2>
            </div>

            <div className="nl-sort">
              <span>Sort by</span>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="Latest">Latest</option>
                <option value="Rating">Top Rated</option>
                <option value="Downloads">
                  Most Downloaded
                </option>
              </select>
            </div>
          </div>

          {/* FILTERS */}
          <div className="nl-filter-row">
            <div className="nl-filters">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={
                    category === item
                      ? "nl-filter active"
                      : "nl-filter"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <span className="nl-count">
              {filteredApps.length} apps
            </span>
          </div>

          {/* CARDS */}
          {filteredApps.length > 0 ? (
            <div className="nl-grid">
              {filteredApps.map((app) => (
                <Link
                  key={app.slug}
                  href={`/apk/${app.slug}`}
                  className="nl-card"
                >
                  <div className="nl-card-main">
                    <div className="nl-icon">
                      {app.icon}
                    </div>

                    <div className="nl-card-content">
                      <div className="nl-card-title-row">
                        <h3>{app.name}</h3>

                        {app.badge && (
                          <span className="nl-badge">
                            {app.badge}
                          </span>
                        )}
                      </div>

                      <span className="nl-card-category">
                        {app.category}
                      </span>

                      <p>{app.description}</p>
                    </div>
                  </div>

                  <div className="nl-card-data">
                    <span>
                      <b>★</b> {app.rating}
                    </span>

                    <span>{app.size}</span>

                    <span>{app.version}</span>

                    <span className="nl-updated">
                      {app.updated}
                    </span>
                  </div>

                  <div className="nl-card-footer">
                    <span>
                      {app.downloads} downloads
                    </span>

                    <span className="nl-open">
                      View details
                      <b>→</b>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="nl-empty">
              <div className="nl-empty-icon">⌕</div>

              <h3>No results found</h3>

              <p>
                Nothing matched your search. Try another
                app or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Reset search
              </button>
            </div>
          )}

          {/* BOTTOM FEATURE */}
          <div className="nl-discover">
            <div className="nl-discover-copy">
              <span>THE NEXAPK LIBRARY</span>

              <h2>
                One place for
                <br />
                everything you need.
              </h2>

              <p>
                Discover apps and games without the clutter.
                Simple, fast and built for discovery.
              </p>
            </div>

            <div className="nl-discover-stats">
              <div>
                <strong>06</strong>
                <span>Apps listed</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Discovery</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Simple place</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nl-footer">
        <div className="nl-container">
          <div className="nl-footer-top">
            <div>
              <img
                src="/nexapk-footer.png"
                alt="NexAPK"
                className="nl-footer-logo"
              />

              <p>
                Apps, games and tools. All in one place.
              </p>
            </div>

            <div className="nl-footer-links">
              <Link href="/">Home</Link>
              <Link href="/latest">Latest</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>

          <div className="nl-footer-bottom">
            <span>© 2026 NexAPK</span>
            <span>Built for discovery.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
