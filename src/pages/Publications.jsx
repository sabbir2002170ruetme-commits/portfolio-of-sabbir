import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { publications, publications_intro } from "../data/publications.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import { ArrowLink } from "../components/ui.jsx";

export default function Publications() {
  const location = useLocation();
  const anchor = location.state?.anchor;

  useEffect(() => {
    if (anchor) {
      const timer = setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [anchor]);

  return (
    <>
      <PageHero eyebrow="Publications" title={publications_intro.title} lede={publications_intro.lede} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="flex flex-col gap-8">
            {publications.map((pub, i) => (
              <Reveal key={pub.slug}>
                <article
                  id={pub.slug}
                  className={`border bg-cream p-7 sm:p-9 ${
                    anchor === pub.slug ? "border-moss ring-2 ring-moss/20" : "border-line"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-moss">
                      {pub.type}
                    </p>
                    <span className="font-display text-3xl font-light text-line-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.7rem]">
                    {pub.title}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{pub.citation}</p>

                  {pub.award && (
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-clay">
                      ★ {pub.award}
                    </p>
                  )}
                  {pub.note && (
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
                      {pub.note}
                    </p>
                  )}

                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">Contribution:</span> {pub.contribution}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
                    {pub.doi_url && (
                      <a
                        href={pub.doi_url}
                        target="_blank"
                        rel="noopener"
                        className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-moss transition-colors hover:text-moss-deep"
                      >
                        DOI: {pub.doi}
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    )}
                    {pub.certificate && (
                      <ArrowLink href={pub.certificate} className="text-sm">
                        View certificate
                      </ArrowLink>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
