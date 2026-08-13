import { Link } from "react-router-dom";
import { site } from "../data/site.js";
import { currentYear } from "../data/format.js";

export default function Footer() {
  const socialLinks = [
    site.email && { label: "Email", href: `mailto:${site.email}` },
    site.whatsapp && { label: "WhatsApp", href: site.whatsapp },
    site.linkedin && { label: "LinkedIn", href: site.linkedin },
    site.github && { label: "GitHub", href: site.github },
    site.scholar && { label: "Google Scholar", href: site.scholar },
    site.orcid && { label: "ORCID", href: site.orcid },
  ].filter(Boolean);

  return (
    <footer className="mt-24 border-t border-line bg-paper-deep/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">{site.name}</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            {site.location}
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
            Mechanical engineer building systems that sense, decide and act, from aquaculture ponds
            to potato fields. Open to graduate research opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">Explore</p>
            <ul className="mt-4 flex flex-col gap-2">
              {site.nav.map((item) => (
                <li key={item.url}>
                  <Link
                    to={item.url}
                    className="text-sm text-ink-soft transition-colors hover:text-moss"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">Contact</p>
            <ul className="mt-4 flex flex-col gap-2">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener"
                    className="text-sm text-ink-soft transition-colors hover:text-moss"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.cv_file}
                  download
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-ink-soft transition-colors hover:text-moss"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-mono text-xs text-ink-mute">
            © {currentYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ink-mute">
            Rebuilt with React, Vite &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
