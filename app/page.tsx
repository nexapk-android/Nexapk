import Link from "next/link";

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
    style: "whatsapp",
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
    style: "instagram",
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
    style: "bgmi",
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
    style: "spotify",
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
    style: "capcut",
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
    style: "youtube",
  },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/" className={`brand ${footer ? "footer-brand-logo" : ""}`}>
      <span className="brand-mark">N</span>
      <span className="brand-name">
        Nex<span>APK</span>
      </span>
    </Link>
  );
}

function AppIcon({
  icon,
  style,
}: {
  icon: string;
  style: string;
}) {
  return <div className={`app-icon ${style}`}>{icon}</div>;
}

export default function Home() {
  return (
    <main>

      {/* HEADER */}
      <header className="header">
        <div className="header-inner">

          <button className="menu-btn" aria-label="Menu">
            <span />
            <span />
            <span />
          </button>

          <Logo />

          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/latest">Latest APKs</Link>
          </nav>

          <div className="header-actions">
            <button className="header-search" aria-label="Search">
              <span>⌕</span>
            </button>
          </div>

        </div>
      </header>


      {/* HERO */}
      <section className="hero-section">
        <div className="hero">

          <div className="hero-top">

            <span className="hero-label">
              <span className="label-dot" />
              NexAPK • APK Platform
            </span>

            <h1>
              Discover the apps
              <br />
              you actually need.
            </h1>

            <p>
              Explore the latest apps, games and useful tools
              in one clean and simple place.
            </p>

          </div>

          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              type="search"
              placeholder="Search apps, games or categories..."
              aria-label="Search APKs"
            />

            <button aria-label="Search">
              Search
            </button>
          </div>

          <div className="popular-row">
            <span>Popular</span>

            <Link href="/latest?search=whatsapp">WhatsApp</Link>
            <Link href="/latest?search=instagram">Instagram</Link>
            <Link href="/latest?search=spotify">Spotify</Link>
            <Link href="/latest?search=telegram">Telegram</Link>
          </div>

        </div>
      </section>


      {/* LATEST APKs */}
      <section className="apps-section">

        <div className="section-heading">

          <div>
            <span className="section-kicker">EXPLORE</span>
            <h2>Latest APKs</h2>
            <p>Fresh apps and updates for you.</p>
          </div>

          <Link href="/latest" className="view-all">
            View all <span>→</span>
          </Link>

        </div>


        <div className="apk-grid">

          {apps.map((app) => {
            const slug = app.name
              .toLowerCase()
              .replace(/\s+/g, "-");

            return (
              <article className="apk-card" key={app.name}>

                <Link href={`/apk/${slug}`} className="card-main">

                  <div className="card-top">

                    <AppIcon
                      icon={app.icon}
                      style={app.style}
                    />

                    <div className="app-details">

                      <div className="app-title-row">
                        <h3>{app.name}</h3>

                        <span
                          className={`badge badge-${app.badge.toLowerCase()}`}
                        >
                          {app.badge}
                        </span>
                      </div>

                      <div className="app-meta">
                        v{app.version}
                        <span>•</span>
                        {app.category}
                      </div>

                    </div>

                    <span className="arrow">↗</span>

                  </div>

                  <p className="app-description">
                    Latest version with updated features and
                    a smooth experience.
                  </p>

                </Link>


                <div className="card-footer">

                  <div className="stats">

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

                  <Link
                    href={`/apk/${slug}`}
                    className="download-button"
                  >
                    Download
                    <span>↓</span>
                  </Link>

                </div>

              </article>
            );
          })}

        </div>


        <div className="load-more-wrap">
          <Link href="/latest" className="load-more">
            View all APKs
            <span>→</span>
          </Link>
        </div>

      </section>


      {/* SMALL TRUST BAR */}
      <section className="trust-bar">

        <div className="trust-item">
          <span>✓</span>
          <div>
            <b>Regular Updates</b>
            <small>Fresh versions</small>
          </div>
        </div>

        <div className="trust-item">
          <span>ϟ</span>
          <div>
            <b>Fast Experience</b>
            <small>Built for speed</small>
          </div>
        </div>

        <div className="trust-item">
          <span>◉</span>
          <div>
            <b>Easy Access</b>
            <small>No account required</small>
          </div>
        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand-area">

            <Logo footer />

            <p>
              Discover apps, games and useful tools
              in one simple place.
            </p>

          </div>


          <div className="footer-links">

            <h4>Legal</h4>

            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/dmca">DMCA</Link>
            <Link href="/contact">Contact</Link>

          </div>


          <div className="footer-social">

            <h4>Follow NexAPK</h4>

            <div className="social-links">

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
                𝕏
              </a>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>© 2026 NexAPK. All rights reserved.</span>

          <span>
            Made with <b>♥</b> for Android users
          </span>

        </div>

      </footer>

    </main>
  );
}
