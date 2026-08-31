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
  },
];

function AppIcon({
  icon,
  name,
}: {
  icon: string;
  name: string;
}) {
  return (
    <div className={`app-icon icon-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      {icon}
    </div>
  );
}

export default function Home() {
  return (
    <main className="site">

      {/* HEADER */}
      <header className="header">
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
            <Link href="/latest">Latest</Link>
          </nav>

          <div className="header-actions">
            <button className="icon-btn" aria-label="Toggle theme">
              ☼
            </button>

            <button className="icon-btn search-icon" aria-label="Search">
              ⌕
            </button>
          </div>

        </div>
      </header>


      {/* HERO */}
      <section className="hero-section">
        <div className="hero">

          <div className="hero-content">

            <div className="platform-badge">
              <span>🔥</span>
              #1 APK Platform
            </div>

            <h1>
              Download Your Favorite
              <br />
              APKs from <span>NexAPK</span>
            </h1>

            <p>
              Discover useful apps, games and tools — all in one place.
              Fast, simple and easy to explore.
            </p>

            <div className="hero-search">
              <span className="search-symbol">⌕</span>

              <input
                type="search"
                placeholder="Search for apps, games, or categories..."
                aria-label="Search APKs"
              />

              <button aria-label="Search">
                ⌕
              </button>
            </div>

            <div className="popular">
              <strong>Popular:</strong>

              <Link href="/latest?search=whatsapp">
                WhatsApp
              </Link>

              <Link href="/latest?search=instagram">
                Instagram
              </Link>

              <Link href="/latest?search=games">
                Games
              </Link>

              <Link href="/latest?search=spotify">
                Spotify
              </Link>

              <Link href="/latest?search=telegram">
                Telegram
              </Link>
            </div>

          </div>


          {/* PHONE VISUAL */}
          <div className="hero-visual">

            <div className="floating-app floating-one">W</div>
            <div className="floating-app floating-two">◎</div>
            <div className="floating-app floating-three">➤</div>
            <div className="floating-app floating-four">S</div>

            <div className="phone">
              <div className="phone-notch" />

              <div className="phone-screen">
                <div className="phone-logo">
                  <span className="mini-n">N</span>
                  <b>Nex<span>APK</span></b>
                </div>

                <div className="phone-line" />
                <div className="phone-line short" />

                <div className="phone-card">
                  <div className="mini-icon">A</div>
                  <div>
                    <b>Latest APKs</b>
                    <small>Updated today</small>
                  </div>
                </div>

                <div className="phone-card">
                  <div className="mini-icon">N</div>
                  <div>
                    <b>Discover Apps</b>
                    <small>Fast downloads</small>
                  </div>
                </div>

              </div>
            </div>

            <div className="download-note">
              Download
              <br />
              Now!
              <span>↙</span>
            </div>

          </div>

        </div>
      </section>


      {/* FEATURED */}
      <section className="featured-section">

        <div className="section-heading">

          <div className="section-title">
            <div className="fire">🔥</div>

            <div>
              <h2>Featured APKs</h2>
              <p>Handpicked apps you&apos;ll love</p>
            </div>
          </div>

          <Link href="/latest" className="view-all">
            View All <span>→</span>
          </Link>

        </div>


        <div className="apk-grid">

          {apps.map((app) => (
            <article className="apk-card" key={app.name}>

              <Link
                href={`/apk/${app.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="apk-main"
              >

                <AppIcon
                  icon={app.icon}
                  name={app.name}
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

                  <p>
                    Discover the latest version with useful features
                    and a smooth experience.
                  </p>

                </div>

                <span className="card-arrow">
                  →
                </span>

              </Link>


              <div className="apk-bottom">

                <div className="apk-stats">

                  <span>
                    <b>★</b>
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
                  href={`/apk/${app.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="download-btn"
                >
                  ⇩
                  Download APK
                </Link>

              </div>

            </article>
          ))}

        </div>


        {/* LOAD MORE */}
        <div className="load-more-wrap">
          <Link href="/latest" className="load-more">
            <span>▦</span>
            Load More APKs
            <b>→</b>
          </Link>
        </div>

      </section>


      {/* BENEFITS */}
      <section className="benefits">

        <div className="benefit">
          <div className="benefit-icon">✓</div>
          <div>
            <b>Verified Apps</b>
            <small>Carefully reviewed</small>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">ϟ</div>
          <div>
            <b>Fast Download</b>
            <small>High speed delivery</small>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">↻</div>
          <div>
            <b>Regular Updates</b>
            <small>Latest versions</small>
          </div>
        </div>

        <div className="benefit">
          <div className="benefit-icon">✓</div>
          <div>
            <b>No Registration</b>
            <small>Simple access</small>
          </div>
        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <Link href="/" className="footer-logo">
              <span className="logo-symbol">N</span>
              <span>
                Nex<span>APK</span>
              </span>
            </Link>

            <p>Your Trusted APK Platform</p>

          </div>


          <div className="footer-column">

            <h4>Quick Links</h4>

            <Link href="/terms">
              Terms of Service
            </Link>

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/dmca">
              DMCA
            </Link>

            <Link href="/contact">
              Contact Us
            </Link>

          </div>


          <div className="footer-column social-column">

            <h4>Follow Us</h4>

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
            Made with <b>♥</b> for Android Lovers
          </span>

        </div>

      </footer>

    </main>
  );
      }
