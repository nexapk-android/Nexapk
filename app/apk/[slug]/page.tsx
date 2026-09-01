import Link from "next/link";

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
      className={`detail-icon ${
        categoryClass === "social"
          ? "social-icon"
          : categoryClass === "games"
            ? "games-icon"
            : categoryClass === "music"
              ? "music-icon"
              : ""
      }`}
    >
      {icon}
    </div>
  );
}

function PreviewPhone({ app }: { app: AppData }) {
  return (
    <div className="preview-phone">
      <div className="preview-notch" />

      <div className="preview-screen">
        <div className="preview-brand">
          <div className="preview-mini-icon">N</div>

          <b>
            Nex<span>APK</span>
          </b>
        </div>

        <div className="preview-search">
          <span>⌕</span>
          Search APKs
        </div>

        <div className="preview-app-card">
          <div className="preview-app-icon">{app.icon}</div>

          <div>
            <strong>{app.name}</strong>
            <small>Latest version</small>
          </div>
        </div>

        <div className="preview-app-card">
          <div className="preview-app-icon">N</div>

          <div>
            <strong>Premium Features</strong>
            <small>Updated today</small>
          </div>
        </div>

        <div className="preview-download">
          ↓ &nbsp; Download APK
        </div>
      </div>
    </div>
  );
}

export default async function AppDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  const appSlug = slug || "whatsapp-plus";

  return (
    <main className="details-page">
      <header className="details-header">
        <div className="details-header-inner">
          <button
            className="details-menu"
            type="button"
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="details-header-logo">
            <img
              src="/nexapk-header.png"
              alt="NexAPK"
            />
          </Link>

          <nav className="details-nav">
            <Link href="/">Home</Link>
            <Link href="/latest">Latest</Link>
          </nav>

          <div className="details-actions">
            <button
              className="details-theme"
              type="button"
              aria-label="Toggle theme"
            >
              ☼
            </button>

            <button
              className="details-search"
              type="button"
              aria-label="Search"
            >
              ⌕
            </button>
          </div>
        </div>
      </header>

      <div className="details-container">
        <div className="details-breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>

          <Link href={`/latest?category=${app.category}`}>
            {app.category}
          </Link>

          <span>›</span>

          <strong>{app.name}</strong>
        </div>

        <section className="app-hero-card">
          <div className="app-main-info">
            <AppIcon
              icon={app.icon}
              category={app.category}
            />

            <div className="app-title-area">
              <div className="app-tags">
                <span className="tag-mod">{app.badge}</span>

                <span className="tag-category">
                  {app.category}
                </span>

                <span className="tag-latest">
                  LATEST
                </span>
              </div>

              <h1>{app.name}</h1>

              <p>{app.description}</p>
            </div>
          </div>

          <div className="rating-row">
            <div className="stars">★★★★★</div>

            <strong>{app.rating}</strong>

            <span>{app.reviews}</span>
          </div>

          <div className="app-stats">
            <div className="stat-item">
              <strong>{app.downloads}</strong>
              <span>Downloads</span>
            </div>

            <div className="stat-item">
              <strong>{app.size}</strong>
              <span>Size</span>
            </div>

            <div className="stat-item">
              <strong>{app.android}</strong>
              <span>Required</span>
            </div>
          </div>

          <div className="app-actions">
            <button
              className="primary-download"
              type="button"
            >
              <span>↓</span>
              Download APK
            </button>

            <button
              className="favorite-button"
              type="button"
              aria-label="Add to favorites"
            >
              <span className="heart">♡</span>
              <span>Favorite</span>
            </button>
          </div>

          <div className="trust-line">
            <span>✓ Safe</span>
            <i>•</i>
            <span>Fast Download</span>
            <i>•</i>
            <span>No Registration</span>
          </div>
        </section>

        <section className="preview-section">
          <div className="preview-header">
            <div>
              <span className="section-kicker">
                PREVIEW
              </span>

              <h2>See it in action</h2>

              <p>
                A quick look at the {app.name} experience.
              </p>
            </div>

            <div className="preview-dots">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="preview-body">
            <PreviewPhone app={app} />
          </div>
        </section>

        <section className="features-section">
          <div className="section-heading-modern">
            <div>
              <span className="section-kicker">
                HIGHLIGHTS
              </span>

              <h2>Why you&apos;ll love it</h2>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">✦</div>

              <div>
                <h3>Premium Features</h3>

                <p>
                  Explore useful features and extra
                  customization options.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⌁</div>

              <div>
                <h3>Smooth Experience</h3>

                <p>
                  Clean interface designed for a fast
                  and simple experience.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">↻</div>

              <div>
                <h3>Regular Updates</h3>

                <p>
                  Stay updated with the latest available
                  version.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✓</div>

              <div>
                <h3>Easy Access</h3>

                <p>
                  Simple download process without
                  unnecessary steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="information-section">
          <div className="section-heading-modern">
            <div>
              <span className="section-kicker">
                DETAILS
              </span>

              <h2>App Information</h2>
            </div>
          </div>

          <div className="information-card">
            <div className="info-row">
              <span>App Name</span>
              <strong>{app.name}</strong>
            </div>

            <div className="info-row">
              <span>Version</span>
              <strong>{app.version}</strong>
            </div>

            <div className="info-row">
              <span>Category</span>
              <strong>{app.category}</strong>
            </div>

            <div className="info-row">
              <span>Size</span>
              <strong>{app.size}</strong>
            </div>

            <div className="info-row">
              <span>Android</span>
              <strong>{app.android}</strong>
            </div>

            <div className="info-row">
              <span>Updated</span>
              <strong>{app.updated}</strong>
            </div>

            <div className="info-row">
              <span>Developer</span>
              <strong>{app.developer}</strong>
            </div>
          </div>
        </section>

        <section className="bottom-download">
          <div>
            <span className="section-kicker">
              READY TO DOWNLOAD?
            </span>

            <h2>Get {app.name}</h2>

            <p>
              Download the latest version and explore
              the experience.
            </p>
          </div>

          <button
            className="bottom-download-button"
            type="button"
          >
            ↓ &nbsp; Download APK
          </button>
        </section>

        <section className="related-section">
          <div className="section-heading-modern related-heading">
            <div>
              <span className="section-kicker">
                DISCOVER MORE
              </span>

              <h2>You May Also Like</h2>
            </div>

            <Link href="/latest">
              View All →
            </Link>
          </div>

          <div className="related-grid">
            {Object.entries(apps)
              .filter(([key]) => key !== appSlug)
              .slice(0, 3)
              .map(([key, item]) => (
                <Link
                  href={`/apk/${key}`}
                  className="related-card"
                  key={key}
                >
                  <div className="related-icon">
                    {item.icon}
                  </div>

                  <div className="related-content">
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

      <footer className="details-footer">
        <div className="footer-top">
          <div className="footer-brand-area">
            <Link
              href="/"
              className="footer-image-link"
            >
              <img
                src="/nexapk-footer.png"
                alt="NexAPK Apps Games Tools"
              />
            </Link>

            <p>
              Your trusted place to discover apps,
              games and useful Android tools.
            </p>
          </div>

          <div className="footer-links">
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

          <div className="footer-links">
            <h4>Legal</h4>

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms of Service
            </Link>

            <Link href="/dmca">
              DMCA
            </Link>

            <Link href="/contact">
              Contact Us
            </Link>
          </div>

          <div className="footer-links">
            <h4>Follow NexAPK</h4>

            <div className="footer-socials">
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
            Made with <b>♥</b> for Android Lovers
          </span>
        </div>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .details-page {
          min-height: 100vh;
          background: #f5f8fc;
          color: #08172f;
        }

        .details-page button {
          font-family: inherit;
          cursor: pointer;
        }

        .details-page a {
          text-decoration: none;
        }

        .details-header {
          height: 76px;
          background: rgba(255,255,255,.96);
          border-bottom: 1px solid #e7edf5;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(18px);
        }

        .details-header-inner {
          width: min(1180px, calc(100% - 40px));
          height: 100%;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .details-header-logo {
          display: flex;
          align-items: center;
          width: 190px;
          height: 55px;
          flex-shrink: 0;
        }

        .details-header-logo img {
          display: block;
          width: 190px;
          max-height: 52px;
          object-fit: contain;
          object-position: left center;
        }

        .details-menu {
          display: none;
          width: 42px;
          height: 42px;
          padding: 8px;
          border: 0;
          background: transparent;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
        }

        .details-menu span {
          display: block;
          width: 25px;
          height: 2.5px;
          background: #08172f;
          border-radius: 4px;
        }

        .details-nav {
          display: flex;
          gap: 28px;
        }

        .details-nav a {
          color: #66758a;
          font-size: 13px;
          font-weight: 700;
        }

        .details-nav a:hover {
          color: #1674e8;
        }

        .details-actions {
          margin-left: auto;
          display: flex;
          gap: 9px;
        }

        .details-theme,
        .details-search {
          width: 43px;
          height: 43px;
          border: 1px solid #e0e7f0;
          border-radius: 13px;
          background: #fff;
          color: #08172f;
          font-size: 23px;
          display: grid;
          place-items: center;
        }

        .details-theme:hover,
        .details-search:hover {
          border-color: #1976e8;
          color: #1976e8;
        }

        .details-container {
          width: min(1080px, calc(100% - 40px));
          margin: auto;
          padding: 26px 0 70px;
        }

        .details-breadcrumb {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 20px;
          color: #8a98aa;
          font-size: 13px;
        }

        .details-breadcrumb a {
          color: inherit;
        }

        .details-breadcrumb a:hover {
          color: #1674e8;
        }

        .details-breadcrumb strong {
          color: #26364e;
          font-weight: 800;
        }

        .app-hero-card {
          position: relative;
          overflow: hidden;
          padding: 34px;
          border: 1px solid #dfe8f2;
          border-radius: 28px;
          background:
            radial-gradient(
              circle at 92% 8%,
              rgba(54,146,255,.16),
              transparent 31%
            ),
            linear-gradient(
              135deg,
              #ffffff,
              #f4f9ff
            );
          box-shadow:
            0 20px 55px rgba(20,58,100,.07);
        }

        .app-main-info {
          display: flex;
          align-items: flex-start;
          gap: 25px;
        }

        .detail-icon {
          width: 122px;
          height: 122px;
          flex: 0 0 122px;
          display: grid;
          place-items: center;
          border-radius: 27px;
          color: #fff;
          font-size: 49px;
          font-weight: 900;
          background:
            linear-gradient(135deg,#0871df,#51b0ff);
          box-shadow:
            0 17px 35px rgba(18,107,232,.18),
            inset 0 0 0 1px rgba(255,255,255,.25);
        }

        .social-icon {
          background:
            linear-gradient(135deg,#0bc66b,#20e883);
        }

        .games-icon {
          background:
            linear-gradient(135deg,#171c25,#697686);
        }

        .music-icon {
          background:
            linear-gradient(135deg,#101010,#242424);
          color: #1ed760;
        }

        .app-title-area {
          min-width: 0;
          padding-top: 3px;
        }

        .app-tags {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .app-tags span {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .3px;
        }

        .tag-mod {
          background: #e9f3ff;
          color: #126be8;
        }

        .tag-category {
          background: #f0f3f7;
          color: #63748a;
        }

        .tag-latest {
          background: #e7f8f0;
          color: #24905e;
        }

        .app-title-area h1 {
          margin: 0;
          font-size: clamp(34px,4vw,52px);
          line-height: 1.05;
          letter-spacing: -2.3px;
        }

        .app-title-area p {
          max-width: 680px;
          margin: 12px 0 0;
          color: #6b7b8f;
          font-size: 16px;
          line-height: 1.65;
        }

        .rating-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 27px;
          padding-top: 22px;
          border-top: 1px solid #e4ebf3;
        }

        .stars {
          color: #f2b21b;
          font-size: 20px;
          letter-spacing: 1px;
        }

        .rating-row strong {
          font-size: 21px;
        }

        .rating-row span {
          color: #8a98a9;
          font-size: 13px;
        }

        .app-stats {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          margin-top: 21px;
          border-top: 1px solid #e4ebf3;
          border-bottom: 1px solid #e4ebf3;
        }

        .stat-item {
          padding: 19px 16px;
          border-right: 1px solid #e4ebf3;
        }

        .stat-item:first-child {
          padding-left: 0;
        }

        .stat-item:last-child {
          border-right: 0;
        }

        .stat-item strong {
          display: block;
          font-size: 17px;
        }

        .stat-item span {
          display: block;
          margin-top: 5px;
          color: #93a0ae;
          font-size: 11px;
        }

        .app-actions {
          display: flex;
          gap: 12px;
          margin-top: 23px;
        }

        .primary-download {
          min-height: 58px;
          flex: 1;
          border: 0;
          border-radius: 17px;
          background: linear-gradient(135deg,#126be8,#2688f5);
          color: white;
          font-size: 15px;
          font-weight: 900;
          box-shadow: 0 13px 27px rgba(18,107,232,.22);
          transition: .2s ease;
        }

        .primary-download:hover {
          transform: translateY(-2px);
          box-shadow: 0 17px 32px rgba(18,107,232,.28);
        }

        .primary-download span {
          margin-right: 8px;
          font-size: 21px;
        }

        .favorite-button {
          min-width: 160px;
          min-height: 58px;
          padding: 0 22px;
          border: 1px solid #dbe3ed;
          border-radius: 17px;
          background: #fff;
          color: #58687c;
          font-size: 14px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .favorite-button .heart {
          font-size: 27px;
          line-height: 1;
        }

        .favorite-button:hover {
          border-color: #1674e8;
          color: #1674e8;
        }

        .trust-line {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          color: #8a98a9;
          font-size: 11px;
        }

        .trust-line span:first-child {
          color: #389d68;
          font-weight: 800;
        }

        .trust-line i {
          font-style: normal;
          color: #b7c0cb;
        }

        .preview-section {
          margin-top: 25px;
          overflow: hidden;
          border: 1px solid #dfe8f2;
          border-radius: 26px;
          background: #fff;
          box-shadow: 0 14px 40px rgba(20,58,100,.05);
        }

        .preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 25px 29px;
          border-bottom: 1px solid #e6edf4;
        }

        .section-kicker {
          color: #1674e8;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .preview-header h2,
        .section-heading-modern h2 {
          margin: 5px 0 0;
          font-size: 24px;
          letter-spacing: -.8px;
        }

        .preview-header p {
          margin: 5px 0 0;
          color: #8997a8;
          font-size: 12px;
        }

        .preview-dots {
          display: flex;
          gap: 7px;
        }

        .preview-dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c4cfdb;
        }

        .preview-body {
          min-height: 520px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 42px 20px 0;
          background:
            radial-gradient(
              circle at 50% 70%,
              rgba(52,142,244,.17),
              transparent 48%
            ),
            linear-gradient(180deg,#f6faff,#eef6ff);
        }

        .preview-phone {
          width: 255px;
          height: 485px;
          position: relative;
          padding: 7px;
          border: 7px solid #07172e;
          border-radius: 38px 38px 42px 42px;
          background: #fff;
          box-shadow:
            0 25px 55px rgba(8,35,70,.22);
          transform: rotate(2deg);
        }

        .preview-notch {
          position: absolute;
          z-index: 3;
          width: 100px;
          height: 24px;
          top: -7px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 0 0 17px 17px;
          background: #07172e;
        }

        .preview-screen {
          width: 100%;
          height: 100%;
          overflow: hidden;
          padding: 46px 15px 15px;
          border-radius: 27px;
          background: linear-gradient(180deg,#f2f8ff,#fff);
        }

        .preview-brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 16px;
        }

        .preview-brand b span {
          color: #126be8;
        }

        .preview-mini-icon {
          width: 29px;
          height: 29px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: linear-gradient(135deg,#0871df,#36a0ff);
          color: #fff;
          font-size: 13px;
          font-weight: 900;
        }

        .preview-search {
          display: flex;
          align-items: center;
          gap: 7px;
          height: 38px;
          margin-top: 22px;
          padding: 0 12px;
          border: 1px solid #dce6f1;
          border-radius: 999px;
          color: #9aa8b7;
          font-size: 9px;
        }

        .preview-search span {
          font-size: 15px;
        }

        .preview-app-card {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 13px;
          padding: 10px;
          border: 1px solid #dfe8f1;
          border-radius: 13px;
          background: #fff;
          box-shadow: 0 5px 14px rgba(25,65,105,.05);
        }

        .preview-app-icon {
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          flex: 0 0 37px;
          border-radius: 10px;
          background: #126be8;
          color: #fff;
          font-size: 15px;
          font-weight: 900;
        }

        .preview-app-card strong {
          display: block;
          font-size: 9px;
        }

        .preview-app-card small {
          display: block;
          margin-top: 3px;
          color: #96a3b1;
          font-size: 7px;
        }

        .preview-download {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 43px;
          margin-top: 18px;
          border-radius: 999px;
          background: #126be8;
          color: #fff;
          font-size: 9px;
          font-weight: 900;
        }

        .features-section,
        .information-section,
        .related-section {
          margin-top: 45px;
        }

        .section-heading-modern {
          margin-bottom: 17px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 12px;
        }

        .feature-card {
          display: flex;
          gap: 14px;
          padding: 20px;
          border: 1px solid #e0e8f1;
          border-radius: 18px;
          background: #fff;
          transition: .2s ease;
        }

        .feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(20,58,100,.07);
        }

        .feature-icon {
          width: 39px;
          height: 39px;
          flex: 0 0 39px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #eaf4ff;
          color: #126be8;
          font-size: 18px;
          font-weight: 900;
        }

        .feature-card h3 {
          margin: 1px 0 5px;
          font-size: 14px;
        }

        .feature-card p {
          margin: 0;
          color: #8290a1;
          font-size: 11px;
          line-height: 1.5;
        }

        .information-card {
          padding: 5px 20px;
          border: 1px solid #e0e8f1;
          border-radius: 20px;
          background: #fff;
        }

        .info-row {
          min-height: 51px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 1px solid #edf1f5;
          font-size: 12px;
        }

        .info-row:last-child {
          border-bottom: 0;
        }

        .info-row span {
          color: #8997a7;
        }

        .info-row strong {
          color: #26364d;
          text-align: right;
        }

        .bottom-download {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 45px;
          padding: 29px 31px;
          border-radius: 23px;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(76,168,255,.25),
              transparent 35%
            ),
            linear-gradient(135deg,#07182f,#0b274b);
          color: #fff;
        }

        .bottom-download h2 {
          margin: 6px 0 4px;
          font-size: 25px;
          letter-spacing: -.8px;
        }

        .bottom-download p {
          margin: 0;
          color: #9db0c6;
          font-size: 11px;
        }

        .bottom-download .section-kicker {
          color: #6bb3ff;
        }

        .bottom-download-button {
          min-height: 52px;
          padding: 0 24px;
          border: 0;
          border-radius: 999px;
          background: #1675eb;
          color: #fff;
          font-size: 12px;
          font-weight: 900;
          white-space: nowrap;
        }

        .related-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .related-heading > a {
          color: #1674e8;
          font-size: 12px;
          font-weight: 800;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
        }

        .related-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px;
          border: 1px solid #e0e8f1;
          border-radius: 18px;
          background: #fff;
          transition: .2s ease;
        }

        .related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 13px 28px rgba(20,58,100,.07);
        }

        .related-icon {
          width: 54px;
          height: 54px;
          flex: 0 0 54px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: linear-gradient(135deg,#0d70e9,#50adff);
          color: #fff;
          font-size: 21px;
          font-weight: 900;
        }

        .related-content {
          min-width: 0;
          padding-right: 22px;
        }

        .related-content h3 {
          margin: 0;
          font-size: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .related-content > span {
          display: block;
          margin-top: 4px;
          color: #8b99a9;
          font-size: 9px;
        }

        .related-content > div {
          display: flex;
          gap: 9px;
          margin-top: 7px;
          font-size: 8px;
        }

        .related-content b {
          color: #d99c00;
        }

        .related-content small {
          color: #8b99a9;
        }

        .related-arrow {
          position: absolute;
          top: 14px;
          right: 13px;
          color: #1674e8;
          font-size: 16px;
        }

        .details-footer {
          background:
            radial-gradient(
              circle at 15% 0%,
              rgba(22,116,232,.17),
              transparent 31%
            ),
            #061326;
          color: #fff;
        }

        .footer-top {
          width: min(1080px, calc(100% - 40px));
          margin: auto;
          padding: 48px 0 38px;
          display: grid;
          grid-template-columns: 1.7fr 1fr 1fr 1fr;
          gap: 35px;
        }

        .footer-image-link {
          display: block;
          width: 235px;
        }

        .footer-image-link img {
          display: block;
          width: 100%;
          max-height: 82px;
          object-fit: contain;
          object-position: left center;
        }

        .footer-brand-area p {
          max-width: 300px;
          margin: 15px 0 0;
          color: #8fa2b9;
          font-size: 11px;
          line-height: 1.7;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links h4 {
          margin: 0 0 6px;
          font-size: 12px;
        }

        .footer-links a {
          color: #91a4bb;
          font-size: 10px;
        }

        .footer-links a:hover {
          color: #fff;
        }

        .footer-socials {
          display: flex;
          gap: 8px;
        }

        .footer-socials a {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #12243c;
          color: #fff;
          font-size: 13px;
          font-weight: 800;
        }

        .footer-socials a:hover {
          background: #126be8;
        }

        .footer-bottom {
          width: min(1080px, calc(100% - 40px));
          margin: auto;
          padding: 17px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,.08);
          color: #71849c;
          font-size: 9px;
        }

        .footer-bottom b {
          color: #ff4267;
        }

        @media (max-width: 760px) {
          .details-header {
            height: 68px;
          }

          .details-header-inner {
            width: calc(100% - 20px);
            gap: 4px;
          }

          .details-menu {
            display: flex;
          }

          .details-header-logo {
            width: 175px;
            height: 52px;
          }

          .details-header-logo img {
            width: 175px;
            max-height: 48px;
          }

          .details-nav {
            display: none;
          }

          .details-actions {
            gap: 5px;
          }

          .details-theme,
          .details-search {
            width: 39px;
            height: 39px;
            border-radius: 12px;
            font-size: 21px;
          }

          .details-container {
            width: calc(100% - 20px);
            padding: 19px 0 48px;
          }

          .details-breadcrumb {
            margin: 0 3px 14px;
            gap: 7px;
            font-size: 11px;
            white-space: nowrap;
            overflow: hidden;
          }

          .app-hero-card {
            padding: 19px;
            border-radius: 22px;
          }

          .app-main-info {
            gap: 15px;
          }

          .detail-icon {
            width: 83px;
            height: 83px;
            flex-basis: 83px;
            border-radius: 21px;
            font-size: 34px;
          }

          .app-tags {
            gap: 5px;
            margin-bottom: 8px;
          }

          .app-tags span {
            padding: 5px 7px;
            font-size: 7px;
          }

          .app-title-area h1 {
            font-size: 28px;
            letter-spacing: -1.3px;
          }

          .app-title-area p {
            margin-top: 8px;
            font-size: 11px;
            line-height: 1.55;
          }

          .rating-row {
            margin-top: 20px;
            padding-top: 17px;
            gap: 8px;
          }

          .stars {
            font-size: 16px;
            letter-spacing: 0;
          }

          .rating-row strong {
            font-size: 17px;
          }

          .rating-row span {
            font-size: 10px;
          }

          .app-stats {
            margin-top: 16px;
          }

          .stat-item {
            padding: 14px 8px;
          }

          .stat-item:first-child {
            padding-left: 0;
          }

          .stat-item strong {
            font-size: 12px;
          }

          .stat-item span {
            margin-top: 4px;
            font-size: 8px;
          }

          .app-actions {
            gap: 8px;
            margin-top: 17px;
          }

          .primary-download {
            min-height: 50px;
            border-radius: 14px;
            font-size: 12px;
          }

          .primary-download span {
            font-size: 18px;
          }

          .favorite-button {
            min-width: 91px;
            min-height: 50px;
            padding: 0 10px;
            border-radius: 14px;
            font-size: 11px;
          }

          .favorite-button .heart {
            font-size: 21px;
          }

          .trust-line {
            margin-top: 11px;
            gap: 5px;
            font-size: 8px;
          }

          .preview-section {
            margin-top: 15px;
            border-radius: 20px;
          }

          .preview-header {
            padding: 19px;
          }

          .preview-header h2,
          .section-heading-modern h2 {
            font-size: 19px;
          }

          .preview-header p {
            font-size: 9px;
          }

          .preview-body {
            min-height: 450px;
            padding-top: 30px;
          }

          .preview-phone {
            width: 215px;
            height: 405px;
            border-width: 6px;
            border-radius: 32px;
          }

          .preview-notch {
            width: 83px;
            height: 20px;
          }

          .preview-screen {
            padding-top: 39px;
            border-radius: 23px;
          }

          .features-section,
          .information-section,
          .related-section {
            margin-top: 32px;
          }

          .feature-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .feature-card {
            padding: 15px;
            border-radius: 15px;
          }

          .feature-icon {
            width: 34px;
            height: 34px;
            flex-basis: 34px;
          }

          .feature-card h3 {
            font-size: 12px;
          }

          .feature-card p {
            font-size: 9px;
          }

          .information-card {
            padding: 3px 15px;
            border-radius: 17px;
          }

          .info-row {
            min-height: 45px;
            font-size: 10px;
          }

          .bottom-download {
            display: block;
            margin-top: 32px;
            padding: 22px;
            border-radius: 19px;
          }

          .bottom-download h2 {
            font-size: 20px;
          }

          .bottom-download p {
            font-size: 9px;
          }

          .bottom-download-button {
            width: 100%;
            margin-top: 17px;
            min-height: 48px;
          }

          .related-heading {
            align-items: center;
          }

          .related-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .related-card {
            padding: 12px;
          }

          .footer-top {
            width: calc(100% - 30px);
            padding: 35px 0 28px;
            grid-template-columns: 1fr 1fr;
            gap: 28px 20px;
          }

          .footer-brand-area {
            grid-column: 1 / -1;
          }

          .footer-image-link {
            width: 205px;
          }

          .footer-brand-area p {
            font-size: 9px;
          }

          .footer-links h4 {
            font-size: 10px;
          }

          .footer-links a {
            font-size: 9px;
          }

          .footer-bottom {
            width: calc(100% - 30px);
            display: block;
            line-height: 2;
            padding: 14px 0;
          }

          .footer-bottom span {
            display: block;
          }
        }
      `}</style>
    </main>
  );
}
