import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, lede, className = "" }) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-moss">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {lede && <p className="mt-4 text-base leading-relaxed text-ink-soft">{lede}</p>}
    </Reveal>
  );
}
