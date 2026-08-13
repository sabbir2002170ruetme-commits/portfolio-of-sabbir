import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { site, hero } from "../data/site.js";
import { highlights } from "../data/skills.js";
import { projects, featured_intro } from "../data/projects.js";
import { skills, skills_intro } from "../data/skills.js";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { StatusBadge, TagList, PillButton, ArrowLink } from "../components/ui.jsx";

function TypeTagline({ items }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = items[wordIndex];
    let timeout;
    if (!deleting) {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1600);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), 30);
      } else {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % items.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, items]);

  return (
    <span className="font-display italic text-moss">
      {text}
      <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-moss align-baseline" />
    </span>
  );
}

const socialLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "WhatsApp", href: site.whatsapp },
  { label: "LinkedIn", href: site.linkedin },
].filter(Boolean);

export default function Home() {
  const featured = projects.filter((p) => p.order <= 3);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-[1.55fr_1fr] lg:gap-16 lg:pb-32">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 border border-line-strong bg-cream px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                {site.location} · {hero.availability}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl md:text-7xl">
                Hi, I&rsquo;m
                <span className="block">Sabbir Ahamed.</span>
                <span className="mt-3 block text-3xl font-normal sm:text-4xl">
                  <TypeTagline items={site.tagline_items} />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                {hero.lede}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <PillButton to="/projects" className="min-w-[150px]">
                  View Projects
                </PillButton>
                <PillButton href={site.cv_file} variant="outline" download className="min-w-[150px]">
                  Download CV
                </PillButton>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2">
                {socialLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener"
                      className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-moss"
                    >
                      {l.label}
                      <span className="inline-block transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Profile portrait */}
          <Reveal delay={200} className="self-start lg:sticky lg:top-28">
            <figure className="border border-line bg-paper-deep p-3 shadow-card">
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
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="marquee overflow-hidden border-b border-line bg-ink py-4" aria-hidden="true">
        <div className="marquee-track flex w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {[...site.tagline_items, "Open to graduate research"].map((t, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="mx-6 flex items-center gap-6 font-mono text-xs uppercase tracking-[0.24em] text-cream/80"
                >
                  {t}
                  <span className="text-moss">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {highlights.items.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 60}
              className={`border-line px-5 py-10 sm:px-8 ${
                i % 2 === 0 ? "border-r" : ""
              } lg:border-r lg:last:border-r-0`}
            >
              <p className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {s.number}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="border-b border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={featured_intro.eyebrow}
              title={featured_intro.title}
              lede={featured_intro.lede}
            />
            <Reveal className="pb-2">
              <ArrowLink to="/projects">All projects</ArrowLink>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group block h-full bg-cream transition-colors hover:bg-paper"
                >
                  <div className="media-zoom aspect-[16/10] overflow-hidden bg-paper-deep">
                    <img
                      src={p.cover_image}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex h-[calc(100%-160px)] min-h-52 flex-col gap-3 p-6">
                    <div className="flex items-center justify-between">
                      <StatusBadge status={p.status} />
                      <span
                        className="font-mono text-xs text-ink-mute transition-colors group-hover:text-moss"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")} →
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{p.subtitle}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section className="border-b border-line py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <SectionHeading
                eyebrow={skills_intro.eyebrow}
                title={skills_intro.title}
                lede={skills_intro.lede}
              />
            </div>
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {skills.categories.map((cat, i) => (
                <Reveal key={cat.category} delay={(i % 4) * 60} className="bg-cream p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-moss">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                    {cat.category}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="border border-line bg-paper px-2 py-1 text-xs text-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="border border-ink bg-moss p-8 text-cream sm:p-14">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-cream/70">
                  Get in touch
                </p>
                <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                  Let&rsquo;s talk about how I can help deliver your next project.
                </h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 inline-block font-mono text-sm text-cream/80 underline decoration-cream/40 underline-offset-4 transition-colors hover:text-cream"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 bg-cream px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:bg-paper"
                >
                  Email me
                </a>
                {site.whatsapp && (
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 border border-cream/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-cream transition-colors hover:border-cream"
                  >
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
