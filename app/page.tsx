import Link from "next/link";

const apps = [
  { name: "YouTube", category: "Entertainment", version: "20.29.37", size: "98.3 MB", badge: "MOD" },
  { name: "Alight Motion", category: "Video", version: "5.0.272", size: "86.8 MB", badge: "NEW" },
  { name: "Recharge Task", category: "Productivity", version: "1.0.1", size: "7.2 MB", badge: "NEW" },
  { name: "Telegram", category: "Communication", version: "11.12.0", size: "78.4 MB", badge: "MOD" },
  { name: "Spotify", category: "Music", version: "9.0.48", size: "82.1 MB", badge: "MOD" },
  { name: "CapCut", category: "Video", version: "14.6.0", size: "245 MB", badge: "NEW" }
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brandMark">N</span>
          <span>Nex<span>APK</span></span>
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/latest">Latest</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <button className="searchButton">⌕</button>
      </header>

      <section className="hero">
        <div className="heroGlow" />
        <p className="eyebrow">NEXT-GEN APK PLATFORM</p>
        <h1>Discover your next<br /><span>favorite APK.</span></h1>
        <p className="heroText">Fast, clean and organized APK discovery — built for mobile users.</p>
        <div className="searchBox">
          <span>⌕</span>
          <input placeholder="Search apps, games or APKs..." />
          <button>Search</button>
        </div>
      </section>

      <section className="content">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">CURATED FOR YOU</p>
            <h2>Latest APKs</h2>
          </div>
          <Link href="/latest" className="viewAll">View all →</Link>
        </div>

        <div className="apkGrid">
          {apps.map((app) => (
            <Link className="apkCard" href={`/apk/${app.name.toLowerCase().replaceAll(" ", "-")}`} key={app.name}>
              <div className="appIcon">{app.name.charAt(0)}</div>
              <div className="appInfo">
                <div className="badges"><b>{app.badge}</b><small>VERIFIED</small></div>
                <h3>{app.name}</h3>
                <p>{app.category}</p>
                <div className="meta"><span>★ {app.version}</span><span>◉ {app.size}</span></div>
              </div>
            </Link>
          ))}
        </div>

        <button className="loadMore">Load More APKs <span>↓</span></button>
      </section>

      <footer>
        <div className="footerBrand"><span className="brandMark">N</span><b>NexAPK</b></div>
        <p>Fast. Simple. NexAPK.</p>
        <div className="footerLinks">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/dmca">DMCA</Link>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Telegram">Telegram</a>
        </div>
        <small>© 2026 NexAPK. All rights reserved.</small>
      </footer>
    </main>
  );
}
