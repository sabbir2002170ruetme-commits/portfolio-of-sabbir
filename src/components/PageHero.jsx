import Reveal from "./Reveal.jsx";

export default function PageHero({ eyebrow, title, lede }) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-moss">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {lede}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
