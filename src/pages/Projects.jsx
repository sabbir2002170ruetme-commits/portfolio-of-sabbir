import { Link } from "react-router-dom";
import { projects, projects_intro } from "../data/projects.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import { StatusBadge, TagList } from "../components/ui.jsx";

export default function Projects() {
  return (
    <>
      <PageHero eyebrow="Projects" title={projects_intro.title} lede={projects_intro.lede} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-24">
            {projects.map((p, i) => (
              <Reveal key={p.slug}>
                <article className="grid gap-8 lg:grid-cols-2 lg:gap-14">
                  <Link
                    to={`/projects/${p.slug}`}
                    className={`media-zoom group block overflow-hidden border border-line bg-paper-deep shadow-card ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={p.cover_image}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </Link>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-4">
                      <span className="font-display text-5xl font-light text-line-strong">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <StatusBadge status={p.status} />
                    </div>
                    <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink">
                      <Link
                        to={`/projects/${p.slug}`}
                        className="transition-colors hover:text-moss"
                      >
                        {p.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-base text-ink-soft">{p.subtitle}</p>
                    <p className="mt-5 line-clamp-4 max-w-xl text-sm leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                    <div className="mt-7">
                      <TagList tags={p.tags} />
                    </div>
                    <div className="mt-8">
                      <Link
                        to={`/projects/${p.slug}`}
                        className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-moss transition-colors hover:text-moss-deep"
                      >
                        Read more
                        <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </Link>
                    </div>
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
