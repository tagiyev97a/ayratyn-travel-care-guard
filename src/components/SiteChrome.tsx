import { Link } from "@tanstack/react-router";
import { services, tel } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="font-display text-xl font-medium tracking-wide">AÝRATYN HYZMAT</Link>
        <nav className="flex gap-6 text-sm font-semibold">
          {services.map((s) => (
            <Link key={s.slug} to={`/${s.slug}`} className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-primary" }}>
              {s.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-xl">AÝRATYN HYZMAT</p>
          <a href="mailto:info@ayratyn.com" className="mt-2 block text-sm text-muted-foreground hover:text-primary">info@ayratyn.com</a>
        </div>
        {services.map((s) => (
          <div key={s.slug} className="text-sm">
            <p className="font-semibold">{s.name}</p>
            <a href={tel(s.phone)} className="mt-1 block text-muted-foreground hover:text-primary">{s.phone}</a>
          </div>
        ))}
      </div>
    </footer>
  );
}
