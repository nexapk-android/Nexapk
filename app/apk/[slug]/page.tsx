import Link from "next/link";

const appData: Record<string, {
  name: string;
  category: string;
  version: string;
  size: string;
  rating: string;
  downloads: string;
  badge: string;
  icon: string;
  description: string;
  features: string[];
}> = {
  "whatsapp-plus": {
    name: "WhatsApp Plus",
    category: "Social",
    version: "17.20",
    size: "54 MB",
    rating: "4.6",
    downloads: "5M+",
    badge: "MOD",
    icon: "W",
    description:
      "Explore the latest version of WhatsApp Plus with a clean interface and additional customization options.",
    features: [
      "Clean and modern interface",
      "Additional customization options",
      "Improved privacy controls",
      "Regular version updates",
    ],
  },

  "instagram-pro": {
    name: "Instagram Pro",
    category: "Social",
    version: "32.0",
    size: "48 MB",
    rating: "4.5",
    downloads: "10M+",
    badge: "MOD",
    icon: "◎",
    description:
      "A modern Instagram experience with additional customization and useful features.",
    features: [
      "Clean browsing experience",
      "Extra customization options",
      "Improved privacy controls",
      "Regular updates",
    ],
  },

  "bgmi": {
    name: "BGMI",
    category: "Games",
    version: "3.6.0",
    size: "2.6 GB",
    rating: "4.7",
    downloads: "20M+",
    badge: "POPULAR",
    icon: "B",
    description:
      "Discover the latest BGMI version with updated gameplay and an improved experience.",
    features: [
      "Updated gameplay",
      "New content and improvements",
      "Optimized performance",
      "Regular updates",
    ],
  },

  "spotify-premium": {
    name: "Spotify Premium",
    category: "Music",
    version: "9.9.78",
    size: "86 MB",
    rating: "4.4",
    downloads: "5M+",
    badge: "NEW",
    icon: "S",
    description:
      "Explore the latest Spotify version with a clean music listening experience.",
    features: [
      "Clean music interface",
      "Smooth playback experience",
      "Personalized music discovery",
      "Regular updates",
    ],
  },

  "capcut-pro": {
    name: "CapCut Pro",
    category: "Tools",
    version: "12.5.0",
    size: "138 MB",
    rating: "4.5",
    downloads: "15M+",
    badge: "TRENDING",
    icon: "C",
    description:
      "Explore the latest CapCut version with creative editing tools and features.",
    features: [
      "Powerful editing tools",
      "Creative effects and templates",
      "Smooth editing workflow",
      "Regular updates",
    ],
  },

  "youtube-vanced": {
    name: "YouTube Vanced",
    category: "Entertainment",
    version: "18.23.39",
    size: "95 MB",
    rating: "4.3",
    downloads: "8M+",
    badge: "TRENDING",
    icon: "▶",
    description:
      "Explore the latest version with a clean and comfortable video viewing experience.",
    features: [
      "Clean video interface",
      "Smooth playback",
      "Useful viewing controls",
      "Regular updates",
    ],
  },
};

const relatedApps = [
  {
    name: "WhatsApp Plus",
    slug: "whatsapp-plus",
    icon: "W",
    category: "Social",
  },
  {
    name: "Instagram Pro",
    slug: "instagram-pro",
    icon: "◎",
    category: "Social",
  },
  {
    name: "Spotify Premium",
    slug: "spotify-premium",
    icon: "S",
    category: "Music",
  },
];

function getIconClass(name: string) {
  return `detail-app-icon icon-${name
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
}

export default async function AppDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const app = appData[slug] ?? appData["whatsapp-plus"];

  return (
    <main className="details-page">

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">

          <button className="menu-btn" aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="logo">
            <img
              src="/logo-header.png"
              alt="NexAPK"
            />
          </Link>

          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/latest">Latest</Link>
          </nav>

          <div className="header-actions">
            <button
              className="icon-btn"
              aria-label="Toggle theme"
            >
              ☼
            </button>

            <Link
              href="/latest"
              className="icon-btn"
              aria-label="Search"
            >
              ⌕
            </Link>
          </div>

        </div>
      </header>


      {/* MAIN */}
      <section className="details-container">

        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/latest">{app.category}</Link>
          <span>›</span>
          <strong>{app.name}</strong>
        </div>


        {/* APP HERO */}
        <section className="app-details-hero">

          <div className="detail-top">

            <div className={getIconClass(app.name)}>
              {app.icon}
            </div>

            <div className="detail-heading">

              <div className="detail-badge">
                {app.badge}
              </div>

              <h1>{app.name}</h1>

              <p>
                Latest version • {app.category}
              </p>

              <div className="detail-rating">
                <span className="rating-star">★</span>
                <strong>{app.rating}</strong>
                <span>Excellent rating</span>
              </div>

            </div>

          </div>


          {/* STATS */}
          <div className="detail-stats">

            <div>
              <strong>{app.version}</strong>
              <span>Version</span>
            </div>

            <div>
              <strong>{app.size}</strong>
              <span>Size</span>
            </div>

            <div>
              <strong>{app.downloads}</strong>
              <span>Downloads</span>
            </div>

            <div>
              <strong>Android</strong>
              <span>Platform</span>
            </div>

          </div>


          {/* DESCRIPTION */}
          <p className="detail-description">
            {app.description}
          </p>


          {/* DOWNLOAD */}
          <div className="detail-actions">

            <a
              href="#download"
              className="primary-download"
            >
              <span>⇩</span>
              <span>
                <strong>Download APK</strong>
                <small>{app.size} • Latest Version</small>
              </span>
            </a>

            <button className="share-btn">
              ↗
              <span>Share</span>
            </button>

          </div>

          <div className="download-trust">
            <span>✓</span>
            Carefully reviewed
            <span>•</span>
            Updated regularly
            <span>•</span>
            Android compatible
          </div>

        </section>


        {/* CONTENT GRID */}
        <div className="details-content">

          <div className="details-main">

            {/* ABOUT */}
            <section className="detail-section">

              <div className="detail-section-heading">
                <span>✦</span>
                <h2>About {app.name}</h2>
              </div>

              <p>
                {app.description} NexAPK keeps app information
                organized so you can quickly check the version,
                size, category and important details before
                continuing.
              </p>

            </section>


            {/* FEATURES */}
            <section className="detail-section">

              <div className="detail-section-heading">
                <span>✓</span>
                <h2>Features</h2>
              </div>

              <div className="feature-list">

                {app.features.map((feature) => (
                  <div
                    className="feature-item"
                    key={feature}
                  >
                    <span>✓</span>
                    <p>{feature}</p>
                  </div>
                ))}

              </div>

            </section>


            {/* INFORMATION */}
            <section className="detail-section">

              <div className="detail-section-heading">
                <span>⌘</span>
                <h2>App Information</h2>
              </div>

              <div className="info-table">

                <div>
                  <span>App Name</span>
                  <strong>{app.name}</strong>
                </div>

                <div>
                  <span>Category</span>
                  <strong>{app.category}</strong>
                </div>

                <div>
                  <span>Latest Version</span>
                  <strong>{app.version}</strong>
                </div>

                <div>
                  <span>File Size</span>
                  <strong>{app.size}</strong>
                </div>

                <div>
                  <span>Platform</span>
                  <strong>Android</strong>
                </div>

                <div>
                  <span>Rating</span>
                  <strong>★ {app.rating}</strong>
                </div>

              </div>

            </section>


            {/* SCREENSHOTS */}
            <section className="detail-section">

              <div className="detail-section-heading">
                <span>▣</span>
                <h2>Screenshots</h2>
              </div>

              <div className="screenshots">

                <div className="screenshot-placeholder">
                  <span>Preview</span>
                </div>

                <div className="screenshot-placeholder">
                  <span>Preview</span>
                </div>

                <div className="screenshot-placeholder">
                  <span>Preview</span>
                </div>

              </div>

            </section>

          </div>


          {/* SIDEBAR */}
          <aside className="details-sidebar">

            <div className="sidebar-card" id="download">

              <div className="sidebar-icon">
                ⇩
              </div>

              <h3>Ready to download?</h3>

              <p>
                Check the app details and continue when you're
                ready.
              </p>

              <a
                href="#"
                className="sidebar-download"
              >
                Download APK
                <span>→</span>
              </a>

              <small>
                Version {app.version} • {app.size}
              </small>

            </div>


            <div className="sidebar-card">

              <h3>App Details</h3>

              <div className="mini-info">
                <span>Category</span>
                <strong>{app.category}</strong>
              </div>

              <div className="mini-info">
                <span>Version</span>
                <strong>{app.version}</strong>
              </div>

              <div className="mini-info">
                <span>Size</span>
                <strong>{app.size}</strong>
              </div>

            </div>

          </aside>

        </div>


        {/* RELATED */}
        <section className="related-section">

          <div className="related-heading">
            <div>
              <h2>More Apps You May Like</h2>
              <p>Explore more apps from NexAPK</p>
            </div>

            <Link href="/latest">
              View All →
            </Link>
          </div>


          <div className="related-grid">

            {relatedApps
              .filter((item) => item.slug !== slug)
              .map((item) => (
                <Link
                  href={`/apk/${item.slug}`}
                  className="related-card"
                  key={item.slug}
                >

                  <div className="related-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                  </div>

                  <span>→</span>

                </Link>
              ))}

          </div>

        </section>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <Link href="/" className="footer-logo">
              <img
                src="/logo-footer.png"
                alt="NexAPK"
              />
            </Link>

            <p>
              Apps, games and useful tools — all in one simple
              place.
            </p>

          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <Link href="/">Home</Link>
            <Link href="/latest">Latest APKs</Link>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/dmca">DMCA</Link>
            <Link href="/contact">Contact</Link>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 NexAPK. All rights reserved.</span>
          <span>Made with <b>♥</b> for Android lovers.</span>
        </div>

      </footer>

    </main>
  );
}
