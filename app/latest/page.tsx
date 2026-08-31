import Link from "next/link";

export default function Latest() {
  return (
    <main className="simplePage">
      <header className="topbar">
        <Link className="brand" href="/"><span className="brandMark">N</span>Nex<span>APK</span></Link>
        <Link href="/">← Home</Link>
      </header>
      <section className="content pageContent">
        <p className="eyebrow">NEXAPK LIBRARY</p>
        <h1>Latest APKs</h1>
        <p className="heroText">This page will become the full searchable APK catalogue.</p>
        <div className="notice">Database and real APK storage will be connected in the next setup stage.</div>
      </section>
    </main>
  );
}
