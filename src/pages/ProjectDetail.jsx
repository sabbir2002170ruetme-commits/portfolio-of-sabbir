import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";
import { site } from "../data/site.js";
import Gallery from "../components/Gallery.jsx";
import VideoPlayer from "../components/VideoPlayer.jsx";
import Reveal from "../components/Reveal.jsx";
import { StatusBadge, TagList, ArrowLink } from "../components/ui.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink">Project not found</h1>
        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-moss"
          >
            &larr; All projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20">
          <Reveal>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-moss"
            >
              <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
                &larr;
              </span>
              All projects
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-3xl">
                <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                  {project.title}
                </h1>
                {project.subtitle && (
                  <p className="mt-4 text-lg text-ink-soft">{project.subtitle}</p>
                )}
              </div>
              <StatusBadge status={project.status} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8">
              <TagList tags={project.tags} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.7fr_1fr] lg:gap-20">
          <div className="min-w-0">
            <Reveal>
              <div className="media-zoom overflow-hidden border border-line bg-paper-deep shadow-card">
                <img
                  src={project.cover_image}
                  alt={project.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <p className="text-base leading-[1.85] text-ink-soft sm:text-lg">{project.body}</p>
            </Reveal>

            <Reveal className="mt-8 border-l-2 border-moss pl-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-moss">
                My contribution
              </p>
              <p className="mt-3 text-base leading-[1.8] text-ink-soft">{project.contribution}</p>
            </Reveal>

            {project.videos && project.videos.length > 0 && (
              <Reveal className="mt-12">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Demo
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {project.videos.map((v) => (
                    <VideoPlayer key={v} src={v} />
                  ))}
                </div>
              </Reveal>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <Reveal className="mt-12">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Gallery
                </h2>
                <div className="mt-6">
                  <Gallery images={project.gallery} altPrefix={project.title} />
                </div>
              </Reveal>
            )}
          </div>

          <aside className="flex flex-col gap-6">
            {project.outcomes && project.outcomes.length > 0 && (
              <Reveal className="border border-line bg-cream p-7">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-moss">Outcomes</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {project.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.supervisor && (
              <Reveal className="border border-line bg-cream p-7">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-moss">Supervisor</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.supervisor}</p>
              </Reveal>
            )}

            {project.future_plan && (
              <Reveal className="border border-line bg-cream p-7">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-moss">What's next</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.future_plan}</p>
              </Reveal>
            )}

            {project.related_publication && (
              <Reveal className="border border-line bg-cream p-7">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-moss">
                  Related publication
                </p>
                <div className="mt-4">
                  <ArrowLink to="/publications" state={{ anchor: project.related_publication }} className="text-xs">
                    View publication
                  </ArrowLink>
                </div>
              </Reveal>
            )}

            <Reveal className="border border-ink bg-ink p-7">
              <p className="font-display text-lg font-semibold text-cream">
                Interested in this work?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Open to collaborations, graduate research discussions, or anything similar you're
                building.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 inline-flex items-center gap-2 border border-cream/40 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-cream transition-colors hover:border-cream"
              >
                Email {site.name.split(" ")[0]}
              </a>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
