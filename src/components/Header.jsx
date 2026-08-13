import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { site } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center border border-line-strong bg-cream font-display text-sm font-bold text-moss-deep">
            SA
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-6">
            {site.nav.map((item) => (
              <li key={item.url}>
                <NavLink
                  to={item.url}
                  className="nav-link font-mono text-xs uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={site.cv_file}
            download
            target="_blank"
            rel="noopener"
            className="border border-ink bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cream transition-colors hover:bg-moss hover:border-moss"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-line-strong text-ink lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper lg:hidden" aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {site.nav.map((item) => (
              <li key={item.url}>
                <NavLink
                  to={item.url}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 font-mono text-sm uppercase tracking-[0.16em] text-ink-soft"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={site.cv_file}
                download
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="inline-block border border-ink bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cream"
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
