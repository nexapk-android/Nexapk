import Link from "next/link";

export default async function ApkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = slug.split("-").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
  return (
    <main className="simplePage">
      <header className="topbar">
        <Link className="brand" href="/"><span className="brandMark">N</span>Nex<span>APK</span></Link>
        <Link href="/">← Home</Link>
      </header>
      <section className="content pageContent">
        <div className="detailHero">
          <div className="appIcon big">{name.charAt(0)}</div>
          <div>
            <p className="eyebrow">VERIFIED APK</p>
            <h1>{name}</h1>
            <p>Latest version • Android • Safe download page</p>
          </div>
        </div>
        <div className="notice">Real APK metadata, screenshots, version history and secure download will be connected through Supabase.</div>
        <button className="downloadButton">Download APK ↓</button>
      </section>
    </main>
  );
}
