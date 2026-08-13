import { site } from "../data/site.js";
import { about_paragraphs, about_intro } from "../data/about.js";
import { education } from "../data/education.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import { ArrowLink } from "../components/ui.jsx";

function EducationItem({ edu }) {
  return (
    <Reveal className="group relative border-l-2 border-line pl-8 pb-12 last:pb-0">
      <span
        className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-moss ring-4 ring-paper"
        aria-hidden="true"
      />
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
        {edu.date_range}
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
        {edu.degree}
      </h3>
      <p className="mt-1.5 text-sm text-ink-soft">
        {edu.institution}
        {edu.location ? `, ${edu.location}` : ""}
      </p>

      <dl className="mt-5 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
        {edu.gpa && (
          <>
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">CGPA</dt>
            <dd className="text-ink-soft">{edu.gpa}</dd>
          </>
        )}
        {edu.board && (
          <>
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">Board</dt>
            <dd className="text-ink-soft">
              {edu.board}
              {edu.group ? ` · ${edu.group}` : ""}
            </dd>
          </>
        )}
        {edu.thesis && (
          <>
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
              Thesis
            </dt>
            <dd className="text-ink-soft">&ldquo;{edu.thesis}&rdquo;</dd>
          </>
        )}
        {edu.supervisor && (
          <>
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
              Supervisor
            </dt>
            <dd className="text-ink-soft">{edu.supervisor}</dd>
          </>
        )}
      </dl>

      {edu.transcript && (
        <div className="mt-6">
          <ArrowLink href={edu.transcript} className="text-xs">
            View transcript
          </ArrowLink>
        </div>
      )}
    </Reveal>
  );
}

export default function About() {
  return (
    <>
      <PageHero eyebrow={about_intro.eyebrow} title={about_intro.title} />

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.8fr_1fr] lg:gap-20">
          <div>
            {about_paragraphs.map((p, i) => (
              <Reveal key={i} className={i > 0 ? "mt-7" : ""}>
                <p className="text-base leading-[1.85] text-ink-soft sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <aside className="flex flex-col gap-8">
            <Reveal as="figure" className="border border-line bg-cream p-3 shadow-card">
              <div className="overflow-hidden">
                <img
                  src={site.profile_photo}
                  alt={`Portrait of ${site.name}`}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="flex items-center justify-between px-1 pb-1 pt-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                  {site.name}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-moss">
                  {site.location}
                </span>
              </figcaption>
            </Reveal>

            <Reveal delay={100} className="border border-line bg-paper-deep/60 p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-moss">Quick facts</p>
              <address className="mt-4 space-y-2 not-italic text-sm leading-relaxed text-ink-soft">
                <p>{site.name}</p>
                <p>{site.location}</p>
                <p>
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-moss underline decoration-moss/30 underline-offset-4 transition-colors hover:text-moss-deep"
                  >
                    {site.email}
                  </a>
                </p>
              </address>
              <div className="mt-6">
                <a
                  href={site.cv_file}
                  download
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-cream transition-colors hover:bg-moss hover:border-moss"
                >
                  Download CV
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-moss">Education</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Academic background
            </h2>
          </Reveal>
          <div className="mt-14 max-w-3xl">
            {education.map((edu) => (
              <EducationItem key={edu.order} edu={edu} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
