import Link from "next/link";

export default function Admin() {
  return (
    <main className="simplePage">
      <header className="topbar">
        <Link className="brand" href="/"><span className="brandMark">N</span>Nex<span>APK</span></Link>
        <Link href="/">← Website</Link>
      </header>
      <section className="content pageContent">
        <p className="eyebrow">CONTROL CENTER</p>
        <h1>NexAPK Admin</h1>
        <div className="adminGrid">
          <div className="adminCard"><b>APK Library</b><span>Manage apps and versions</span></div>
          <div className="adminCard"><b>Upload APK</b><span>Storage upload workflow</span></div>
          <div className="adminCard"><b>Downloads</b><span>Track download statistics</span></div>
        </div>
        <div className="notice">Admin authentication and real upload/storage will be connected after Supabase setup.</div>
      </section>
    </main>
  );
}
