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

function AppIcon({ app }: { app: AppData }) {
  return (
    <div className="app-icon">
      <div className="app-icon-glow" />
      <span>{app.icon}</span>
    </div>
  );
}

function PreviewPhone({ app }: { app: AppData }) {
  return (
    <div className="phone">
      <div className="phone-camera" />

      <div className="phone-screen">
        <div className="phone-top">
          <div className="phone-logo">N</div>

          <div className="phone-brand">
            Nex<span>APK</span>
          </div>
        </div>

        <div className="phone-search">
          <span>⌕</span>
          <span>Search APKs</span>
        </div>

        <div className="phone-card">
          <div className="phone-card-icon">{app.icon}</div>

          <div className="phone-card-text">
            <strong>{app.name}</strong>
            <small>Latest version</small>
          </div>

          <span className="phone-check">✓</span>
        </div>

        <div className="phone-card">
          <div className="phone-card-icon second">N</div>

          <div className="phone-card-text">
            <strong>Premium Features</strong>
            <small>Updated today</small>
          </div>
        </div>

        <div className="phone-download">
          <span>↓</span>
          Download APK
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

  const relatedApps = Object.entries(apps)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .details-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 8% 8%, rgba(36,126,245,.07), transparent 25%),
            #f6f8fc;
          color: #09182f;
          font-family: Arial, Helvetica, sans-serif;
        }

        .details-page a {
          text-decoration: none;
          color: inherit;
        }

        /* HEADER */

        .details-header {
          position: sticky;
          top: 0;
          z-index: 50;
          height: 74px;
          border-bottom: 1px solid #e5eaf1;
          background: rgba(255,255,255,.88);
          backdrop-filter: blur(20px);
        }

        .header-inner {
          width: min(1160px, calc(100% - 36px));
          height: 100%;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .menu-button {
          display: none;
          width: 42px;
          height: 42px;
          border: 0;
          background: transparent;
          padding: 7px;
        }

        .menu-button span {
          display: block;
          width: 26px;
          height: 3px;
          margin: 5px 0;
          border-radius: 20px;
          background: #102039;
        }

        .header-logo {
          width: 190px;
          height: 55px;
          display: flex;
          align-items: center;
        }

        .header-logo img {
          width: 190px;
          max-height: 52px;
          object-fit: contain;
          object-position: left center;
          display: block;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-left: 10px;
        }

        .header-nav a {
          color: #68778b;
          font-size: 13px;
          font-weight: 700;
          transition: .2s;
        }

        .header-nav a:hover {
          color: #1674e8;
        }

        .header-actions {
          margin-left: auto;
          display: flex;
          gap: 9px;
        }

        .header-action {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid #dfe5ed;
          border-radius: 13px;
          background: #fff;
          color: #17253b;
          font-size: 22px;
        }

        /* CONTAINER */

        .details-container {
          width: min(1080px, calc(100% - 36px));
          margin: auto;
          padding: 25px 0 75px;
        }

        /* BREADCRUMB */

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 2px 19px;
          color: #8b98a9;
          font-size: 12px;
        }

        .breadcrumb strong {
          color: #26364d;
        }

        .breadcrumb a:hover {
          color: #1674e8;
        }

        /* HERO */

        .hero {
          position: relative;
          overflow: hidden;
          padding: 34px;
          border: 1px solid #dce6f1;
          border-radius: 30px;
          background:
            radial-gradient(circle at 94% 5%, rgba(48,139,255,.17), transparent 30%),
            radial-gradient(circle at 4% 100%, rgba(48,139,255,.07), transparent 30%),
            linear-gradient(135deg, #fff 0%, #f4f9ff 100%);
          box-shadow: 0 25px 65px rgba(26,65,110,.08);
        }

        .hero:after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          right: -120px;
          bottom: -140px;
          border-radius: 50%;
          background: rgba(39,133,244,.08);
        }

        .hero-main {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 24px;
        }

        .app-icon {
          position: relative;
          width: 122px;
          height: 122px;
          flex: 0 0 122px;
          display: grid;
          place-items: center;
          overflow: hidden;
          border-radius: 29px;
          background: linear-gradient(145deg, #0871df, #42a7ff);
          color: white;
          font-size: 52px;
          font-weight: 900;
          box-shadow:
            0 18px 40px rgba(19,111,230,.25),
            inset 0 1px 1px rgba(255,255,255,.5);
        }

        .app-icon-glow {
          position: absolute;
          width: 80px;
          height: 80px;
          top: -30px;
          right: -25px;
          border-radius: 50%;
          background: rgba(255,255,255,.2);
        }

        .app-icon span {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          min-width: 0;
          padding-top: 3px;
        }

        .badges {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }

        .badge {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .4px;
        }

        .badge-blue {
          color: #116ee3;
          background: #e7f2ff;
        }

        .badge-gray {
          color: #68788b;
          background: #eef2f6;
        }

        .badge-green {
          color: #228a5b;
          background: #e7f7ef;
        }

        .hero h1 {
          margin: 0;
          color: #08172e;
          font-size: clamp(35px, 4.2vw, 52px);
          line-height: 1.02;
          letter-spacing: -2.5px;
        }

        .hero-description {
          max-width: 700px;
          margin: 12px 0 0;
          color: #718095;
          font-size: 15px;
          line-height: 1.65;
        }

        /* RATING */

        .rating {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 27px;
          padding-top: 22px;
          border-top: 1px solid #e1e9f2;
        }

        .stars {
          color: #f1ad18;
          font-size: 20px;
          letter-spacing: 1px;
        }

        .rating-number {
          font-size: 21px;
          font-weight: 900;
        }

        .reviews {
          color: #8b98a8;
          font-size: 12px;
        }

        /* STATS */

        .stats {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 21px;
          border-top: 1px solid #e1e9f2;
          border-bottom: 1px solid #e1e9f2;
        }

        .stat {
          padding: 18px 16px;
          border-right: 1px solid #e1e9f2;
        }

        .stat:first-child {
          padding-left: 0;
        }

        .stat:last-child {
          border-right: 0;
        }

        .stat strong {
          display: block;
          font-size: 17px;
          font-weight: 900;
        }

        .stat span {
          display: block;
          margin-top: 5px;
          color: #96a2b0;
          font-size: 10px;
        }

        /* ACTIONS */

        .hero-actions {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 12px;
          margin-top: 23px;
        }

        .download-button {
          flex: 1;
          min-height: 59px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 17px;
          background: linear-gradient(135deg, #106ce7, #258af5);
          color: white;
          font-size: 15px;
          font-weight: 900;
          box-shadow: 0 15px 30px rgba(18,108,232,.23);
          transition: .2s ease;
        }

        .download-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 38px rgba(18,108,232,.3);
        }

        .download-button b {
          font-size: 21px;
        }

        .favorite {
          min-width: 155px;
          min-height: 59px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid #d9e2ec;
          border-radius: 17px;
          background: #fff;
          color: #59697d;
          font-size: 13px;
          font-weight: 800;
        }

        .favorite span {
          font-size: 24px;
          line-height: 1;
        }

        .trust {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 9px;
          margin-top: 14px;
          color: #8c99a9;
          font-size: 10px;
        }

        .trust strong {
          color: #399968;
        }

        /* PREVIEW */

        .preview {
          margin-top: 24px;
          overflow: hidden;
          border: 1px solid #dce6f1;
          border-radius: 27px;
          background: #fff;
          box-shadow: 0 18px 50px rgba(25,63,105,.06);
        }

        .preview-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 25px 29px;
          border-bottom: 1px solid #e5ebf2;
        }

        .eyebrow {
          color: #1675e8;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .preview-head h2,
        .section-title h2 {
          margin: 5px 0 0;
          color: #0a1930;
          font-size: 25px;
          letter-spacing: -.9px;
        }

        .preview-head p {
          margin: 5px 0 0;
          color: #8a98a9;
          font-size: 11px;
        }

        .dots {
          display: flex;
          gap: 6px;
        }

        .dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c7d1dc;
        }

        .preview-body {
          min-height: 510px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 40px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 75%, rgba(47,143,255,.2), transparent 45%),
            linear-gradient(180deg, #f5f9ff, #edf5ff);
        }

        /* PHONE */

        .phone {
          position: relative;
          width: 265px;
          height: 500px;
          padding: 7px;
          border: 7px solid #07172f;
          border-radius: 41px;
          background: white;
          transform: rotate(1.5deg);
          box-shadow: 0 30px 65px rgba(8,34,68,.25);
        }

        .phone-camera {
          position: absolute;
          z-index: 5;
          top: -7px;
          left: 50%;
          width: 105px;
          height: 25px;
          transform: translateX(-50%);
          border-radius: 0 0 18px 18px;
          background: #07172f;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          padding: 46px 15px 15px;
          overflow: hidden;
          border-radius: 30px;
          background: linear-gradient(180deg, #f3f8ff, #fff);
        }

        .phone-top {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .phone-logo {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: linear-gradient(135deg, #0871df, #38a1ff);
          color: white;
          font-size: 13px;
          font-weight: 900;
        }

        .phone-brand {
          color: #0c1b31;
          font-size: 16px;
          font-weight: 900;
        }

        .phone-brand span {
          color: #1675e8;
        }

        .phone-search {
          height: 39px;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 21px;
          padding: 0 13px;
          border: 1px solid #dce5ef;
          border-radius: 999px;
          background: #fff;
          color: #a0adbb;
          font-size: 9px;
        }

        .phone-search span:first-child {
          font-size: 16px;
        }

        .phone-card {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 13px;
          padding: 11px;
          border: 1px solid #dce5ee;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 7px 16px rgba(22,64,108,.05);
        }

        .phone-card-icon {
          width: 39px;
          height: 39px;
          flex: 0 0 39px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #1475e8;
          color: white;
          font-size: 16px;
          font-weight: 900;
        }

        .phone-card-icon.second {
          background: #17263a;
        }

        .phone-card-text {
          min-width: 0;
          flex: 1;
        }

        .phone-card-text strong {
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #16243a;
          font-size: 9px;
        }

        .phone-card-text small {
          display: block;
          margin-top: 4px;
          color: #9aa7b5;
          font-size: 7px;
        }

        .phone-check {
          color: #2ba36c;
          font-size: 12px;
          font-weight: 900;
        }

        .phone-download {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 19px;
          border-radius: 999px;
          background: linear-gradient(135deg,#126ee9,#2688f5);
          color: white;
          font-size: 9px;
          font-weight: 900;
        }

        .phone-download span {
          font-size: 15px;
        }

        /* SECTIONS */

        .section {
          margin-top: 46px;
        }

        .section-title {
          margin-bottom: 17px;
        }

        .section-title p {
          margin: 5px 0 0;
          color: #8b98a8;
          font-size: 11px;
        }

        /* FEATURES */

        .features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 13px;
        }

        .feature {
          display: flex;
          gap: 14px;
          padding: 21px;
          border: 1px solid #dfe7f0;
          border-radius: 19px;
          background: #fff;
          transition: .2s ease;
        }

        .feature:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(22,62,104,.08);
        }

        .feature-icon {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #eaf4ff;
          color: #1474e8;
          font-size: 19px;
          font-weight: 900;
        }

        .feature h3 {
          margin: 1px 0 5px;
          font-size: 14px;
        }

        .feature p {
          margin: 0;
          color: #8492a3;
          font-size: 11px;
          line-height: 1.55;
        }

        /* INFORMATION */

        .info-card {
          padding: 5px 22px;
          border: 1px solid #dfe7f0;
          border-radius: 21px;
          background: #fff;
        }

        .info-row {
          min-height: 54px;
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
          color: #8b98a8;
        }

        .info-row strong {
          color: #25364e;
          text-align: right;
        }

        /* CTA */

        .cta {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-top: 46px;
          padding: 31px;
          border-radius: 25px;
          background:
            radial-gradient(circle at 90% 10%, rgba(62,157,255,.3), transparent 32%),
            linear-gradient(135deg,#06162d,#0c2b51);
          color: white;
          box-shadow: 0 20px 45px rgba(4,25,52,.14);
        }

        .cta .eyebrow {
          color: #6cb6ff;
        }

        .cta h2 {
          margin: 6px 0 5px;
          font-size: 26px;
          letter-spacing: -.8px;
        }

        .cta p {
          margin: 0;
          color: #9db0c7;
          font-size: 11px;
        }

        .cta-button {
          min-width: 190px;
          min-height: 53px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #1877eb;
          color: white;
          font-size: 12px;
          font-weight: 900;
        }

        .cta-button:hover {
          background: #2788fa;
        }

        /* RELATED */

        .related-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .view-all {
          color: #1674e8;
          font-size: 11px;
          font-weight: 900;
        }

        .related {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 13px;
        }

        .related-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 16px;
          border: 1px solid #dfe7f0;
          border-radius: 19px;
          background: #fff;
          transition: .2s ease;
        }

        .related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(22,62,104,.08);
        }

        .related-icon {
          width: 55px;
          height: 55px;
          flex: 0 0 55px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          background: linear-gradient(145deg,#0871df,#46a7ff);
          color: white;
          font-size: 22px;
          font-weight: 900;
        }

        .related-content {
          min-width: 0;
          padding-right: 20px;
        }

        .related-content h3 {
          margin: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 12px;
        }

        .related-content > span {
          display: block;
          margin-top: 5px;
          color: #8997a7;
          font-size: 9px;
        }

        .related-meta {
          display: flex;
          gap: 9px;
          margin-top: 7px;
          font-size: 8px;
        }

        .related-rating {
          color: #d99d00;
          font-weight: 900;
        }

        .related-downloads {
          color: #8c99a9;
        }

        .related-arrow {
          position: absolute;
          right: 13px;
          top: 12px;
          color: #1674e8;
          font-size: 16px;
        }

        /* FOOTER */

        .footer {
          background:
            radial-gradient(circle at 10% 0%, rgba(27,117,233,.2), transparent 30%),
            #061326;
          color: white;
        }

        .footer-inner {
          width: min(1080px, calc(100% - 36px));
          margin: auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.7fr 1fr 1fr 1fr;
          gap: 35px;
          padding: 50px 0 38px;
        }

        .footer-logo {
          width: 235px;
          display: block;
        }

        .footer-logo img {
          display: block;
          width: 100%;
          max-height: 82px;
          object-fit: contain;
          object-position: left center;
        }

        .footer-brand p {
          max-width: 300px;
          margin: 15px 0 0;
          color: #91a4bb;
          font-size: 11px;
          line-height: 1.7;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-column h4 {
          margin: 0 0 6px;
          font-size: 12px;
        }

        .footer-column a {
          color: #91a4bb;
          font-size: 10px;
        }

        .footer-column a:hover {
          color: white;
        }

        .socials {
          display: flex;
          gap: 8px;
        }

        .social {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: #12253d;
          color: white !important;
          font-size: 13px !important;
          font-weight: 900;
        }

        .social:hover {
          background: #1674e8;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 17px 0;
          border-top: 1px solid rgba(255,255,255,.08);
          color: #71859d;
          font-size: 9px;
        }

        .footer-bottom b {
          color: #ff4167;
        }

        /* DARK MODE */

        html[data-theme="dark"] .details-page {
          background: #070e1a;
          color: #edf4ff;
        }

        html[data-theme="dark"] .details-header {
          background: rgba(7,14,26,.9);
          border-color: #17243a;
        }

        html[data-theme="dark"] .header-action {
          background: #0d1829;
          border-color: #203049;
          color: #eaf2ff;
        }

        html[data-theme="dark"] .menu-button span {
          background: #edf4ff;
        }

        html[data-theme="dark"] .hero {
          border-color: #1c314b;
          background:
            radial-gradient(circle at 94% 5%, rgba(48,139,255,.17), transparent 30%),
            linear-gradient(135deg,#0d192a,#0b2038);
        }

        html[data-theme="dark"] .hero h1,
        html[data-theme="dark"] .preview-head h2,
        html[data-theme="dark"] .section-title h2 {
          color: #f2f7ff;
        }

        html[data-theme="dark"] .hero-description {
          color: #9badc2;
        }

        html[data-theme="dark"] .rating,
        html[data-theme="dark"] .stats {
          border-color: #203149;
        }

        html[data-theme="dark"] .favorite {
          background: #0e1b2d;
          border-color: #263951;
          color: #b9c8d9;
        }

        html[data-theme="dark"] .preview,
        html[data-theme="dark"] .feature,
        html[data-theme="dark"] .info-card,
        html[data-theme="dark"] .related-card {
          background: #0d1929;
          border-color: #1d3048;
        }

        html[data-theme="dark"] .preview-head {
          border-color: #1d3048;
        }

        html[data-theme="dark"] .phone-screen {
          background: #f3f8ff;
        }

        html[data-theme="dark"] .info-row {
          border-color: #1c2d43;
        }

        html[data-theme="dark"] .info-row strong {
          color: #e4edf8;
        }

        /* MOBILE */

        @media (max-width: 760px) {

          .details-header {
            height: 68px;
          }

          .header-inner {
            width: calc(100% - 16px);
            gap: 3px;
          }

          .menu-button {
            display: block;
          }

          .header-logo {
            width: 170px;
            height: 51px;
          }

          .header-logo img {
            width: 170px;
            max-height: 48px;
          }

          .header-nav {
            display: none;
          }

          .header-actions {
            gap: 5px;
          }

          .header-action {
            width: 39px;
            height: 39px;
            border-radius: 12px;
            font-size: 20px;
          }

          .details-container {
            width: calc(100% - 18px);
            padding: 18px 0 50px;
          }

          .breadcrumb {
            margin: 0 3px 14px;
            gap: 7px;
            font-size: 10px;
            white-space: nowrap;
            overflow: hidden;
          }

          .hero {
            padding: 19px;
            border-radius: 23px;
          }

          .hero-main {
            gap: 14px;
          }

          .app-icon {
            width: 83px;
            height: 83px;
            flex-basis: 83px;
            border-radius: 21px;
            font-size: 34px;
          }

          .badges {
            gap: 5px;
            margin-bottom: 8px;
          }

          .badge {
            padding: 5px 7px;
            font-size: 7px;
          }

          .hero h1 {
            font-size: 27px;
            letter-spacing: -1.3px;
          }

          .hero-description {
            margin-top: 8px;
            font-size: 10px;
            line-height: 1.55;
          }

          .rating {
            margin-top: 18px;
            padding-top: 16px;
            gap: 7px;
          }

          .stars {
            font-size: 15px;
            letter-spacing: 0;
          }

          .rating-number {
            font-size: 16px;
          }

          .reviews {
            font-size: 9px;
          }

          .stats {
            margin-top: 15px;
          }

          .stat {
            padding: 13px 7px;
          }

          .stat strong {
            font-size: 11px;
          }

          .stat span {
            margin-top: 4px;
            font-size: 7px;
          }

          .hero-actions {
            gap: 7px;
            margin-top: 16px;
          }

          .download-button {
            min-height: 49px;
            border-radius: 14px;
            font-size: 11px;
          }

          .download-button b {
            font-size: 17px;
          }

          .favorite {
            min-width: 91px;
            min-height: 49px;
            border-radius: 14px;
            font-size: 9px;
          }

          .favorite span {
            font-size: 21px;
          }

          .trust {
            gap: 5px;
            margin-top: 10px;
            font-size: 7px;
          }

          .preview {
            margin-top: 15px;
            border-radius: 20px;
          }

          .preview-head {
            padding: 18px;
          }

          .preview-head h2,
          .section-title h2 {
            font-size: 19px;
          }

          .preview-head p {
            font-size: 8px;
          }

          .preview-body {
            min-height: 430px;
            padding-top: 29px;
          }

          .phone {
            width: 215px;
            height: 405px;
            border-width: 6px;
            border-radius: 34px;
          }

          .phone-camera {
            width: 84px;
            height: 20px;
          }

          .phone-screen {
            padding-top: 38px;
            border-radius: 25px;
          }

          .section {
            margin-top: 32px;
          }

          .section-title {
            margin-bottom: 13px;
          }

          .section-title p {
            font-size: 9px;
          }

          .features {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .feature {
            padding: 15px;
            border-radius: 15px;
          }

          .feature-icon {
            width: 34px;
            height: 34px;
            flex-basis: 34px;
            border-radius: 10px;
            font-size: 15px;
          }

          .feature h3 {
            font-size: 11px;
          }

          .feature p {
            font-size: 8px;
          }

          .info-card {
            padding: 3px 15px;
            border-radius: 17px;
          }

          .info-row {
            min-height: 44px;
            font-size: 9px;
          }

          .cta {
            display: block;
            margin-top: 32px;
            padding: 22px;
            border-radius: 20px;
          }

          .cta h2 {
            font-size: 20px;
          }

          .cta p {
            font-size: 8px;
          }

          .cta-button {
            width: 100%;
            min-height: 48px;
            margin-top: 16px;
          }

          .related-heading {
            align-items: center;
          }

          .related {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .related-card {
            padding: 12px;
          }

          .related-icon {
            width: 50px;
            height: 50px;
            flex-basis: 50px;
          }

          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 28px 20px;
            padding: 35px 0 27px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-logo {
            width: 205px;
          }

          .footer-brand p {
            font-size: 9px;
          }

          .footer-column h4 {
            font-size: 10px;
          }

          .footer-column a {
            font-size: 8px;
          }

          .footer-bottom {
            display: block;
            line-height: 2;
            padding: 14px 0;
          }

          .footer-bottom span {
            display: block;
          }
        }
      `}</style>

      <div className="details-page">

        {/* HEADER */}
        <header className="details-header">
          <div className="header-inner">

            <button className="menu-button" aria-label="Menu">
              <span />
              <span />
              <span />
            </button>

            <Link href="/" className="header-logo">
              <img
                src="/nexapk-header.png"
                alt="NexAPK"
              />
            </Link>

            <nav className="header-nav">
              <Link href="/">Home</Link>
              <Link href="/latest">Latest APKs</Link>
              <Link href="/latest?category=games">Games</Link>
              <Link href="/latest?category=tools">Tools</Link>
            </nav>

            <div className="header-actions">
              <Link
                href="/"
                className="header-action"
                aria-label="Theme"
              >
                ☼
              </Link>

              <Link
                href="/latest"
                className="header-action"
                aria-label="Search"
              >
                ⌕
              </Link>
            </div>

          </div>
        </header>

        <main className="details-container">

          {/* BREADCRUMB */}
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href={`/latest?category=${app.category}`}>
              {app.category}
            </Link>
            <span>›</span>
            <strong>{app.name}</strong>
          </div>

          {/* HERO */}
          <section className="hero">

            <div className="hero-main">

              <AppIcon app={app} />

              <div className="hero-content">

                <div className="badges">
                  <span className="badge badge-blue">
                    {app.badge}
                  </span>

                  <span className="badge badge-gray">
                    {app.category}
                  </span>

                  <span className="badge badge-green">
                    LATEST
                  </span>
                </div>

                <h1>{app.name}</h1>

                <p className="hero-description">
                  {app.description}
                </p>

              </div>

            </div>

            <div className="rating">
              <span className="stars">★★★★★</span>
              <strong className="rating-number">
                {app.rating}
              </strong>
              <span className="reviews">
                {app.reviews}
              </span>
            </div>

            <div className="stats">

              <div className="stat">
                <strong>{app.downloads}</strong>
                <span>Downloads</span>
              </div>

              <div className="stat">
                <strong>{app.size}</strong>
                <span>File Size</span>
              </div>

              <div className="stat">
                <strong>{app.android}</strong>
                <span>Required</span>
              </div>

            </div>

            <div className="hero-actions">

              <Link
                href="#download"
                className="download-button"
              >
                <b>↓</b>
                Download APK
              </Link>

              <Link
                href="#favorite"
                className="favorite"
              >
                <span>♡</span>
                Favorite
              </Link>

            </div>

            <div className="trust">
              <strong>✓ Safe</strong>
              <span>•</span>
              <span>Fast Download</span>
              <span>•</span>
              <span>No Registration</span>
            </div>

          </section>

          {/* PREVIEW */}
          <section className="preview">

            <div className="preview-head">

              <div>
                <span className="eyebrow">
                  APP PREVIEW
                </span>

                <h2>See it in action</h2>

                <p>
                  A quick look at the NexAPK experience.
                </p>
              </div>

              <div className="dots">
                <span />
                <span />
                <span />
              </div>

            </div>

            <div className="preview-body">
              <PreviewPhone app={app} />
            </div>

          </section>

          {/* FEATURES */}
          <section className="section">

            <div className="section-title">
              <span className="eyebrow">
                HIGHLIGHTS
              </span>

              <h2>Why you&apos;ll love it</h2>

              <p>
                Everything you need for a better app experience.
              </p>
            </div>

            <div className="features">

              <div className="feature">
                <div className="feature-icon">✦</div>

                <div>
                  <h3>Premium Features</h3>
                  <p>
                    Explore useful features and additional
                    customization options.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">⚡</div>

                <div>
                  <h3>Fast Experience</h3>
                  <p>
                    Enjoy a clean interface designed for a
                    smooth experience.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">↻</div>

                <div>
                  <h3>Regular Updates</h3>
                  <p>
                    Stay updated with the latest available
                    version.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">✓</div>

                <div>
                  <h3>Easy Access</h3>
                  <p>
                    Simple access without unnecessary
                    complicated steps.
                  </p>
                </div>
              </div>

            </div>

          </section>

          {/* INFORMATION */}
          <section className="section">

            <div className="section-title">
              <span className="eyebrow">
                DETAILS
              </span>

              <h2>App Information</h2>

              <p>
                Important information about this application.
              </p>
            </div>

            <div className="info-card">

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

          {/* CTA */}
          <section className="cta" id="download">

            <div>
              <span className="eyebrow">
                READY TO DOWNLOAD?
              </span>

              <h2>
                Get {app.name}
              </h2>

              <p>
                Download the latest version from NexAPK.
              </p>
            </div>

            <Link
              href="#download"
              className="cta-button"
            >
              ↓ &nbsp; Download APK
            </Link>

          </section>

          {/* RELATED */}
          <section className="section">

            <div className="section-title related-heading">

              <div>
                <span className="eyebrow">
                  DISCOVER MORE
                </span>

                <h2>You May Also Like</h2>
              </div>

              <Link
                href="/latest"
                className="view-all"
              >
                View All →
              </Link>

            </div>

            <div className="related">

              {relatedApps.map(([key, item]) => (
                <Link
                  key={key}
                  href={`/apk/${key}`}
                  className="related-card"
                >

                  <div className="related-icon">
                    {item.icon}
                  </div>

                  <div className="related-content">

                    <h3>{item.name}</h3>

                    <span>
                      {item.category} • v{item.version}
                    </span>

                    <div className="related-meta">
                      <span className="related-rating">
                        ★ {item.rating}
                      </span>

                      <span className="related-downloads">
                        {item.downloads}
                      </span>
                    </div>

                  </div>

                  <span className="related-arrow">
                    →
                  </span>

                </Link>
              ))}

            </div>

          </section>

        </main>

        {/* FOOTER */}
        <footer className="footer">

          <div className="footer-inner">

            <div className="footer-top">

              <div className="footer-brand">

                <Link href="/" className="footer-logo">
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

              <div className="footer-column">
                <h4>Follow NexAPK</h4>

                <div className="socials">

                  <a
                    href="#"
                    className="social"
                    aria-label="Instagram"
                  >
                    ◎
                  </a>

                  <a
                    href="#"
                    className="social"
                    aria-label="Telegram"
                  >
                    ➤
                  </a>

                  <a
                    href="#"
                    className="social"
                    aria-label="YouTube"
                  >
                    ▶
                  </a>

                  <a
                    href="#"
                    className="social"
                    aria-label="X"
                  >
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

          </div>

        </footer>

      </div>
    </>
  );
}
