import { certificates, certificates_intro } from "../data/certificates.js";
import { dateReadable } from "../data/format.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import { useLightbox } from "../components/Lightbox.jsx";

export default function Certificates() {
  const { openLightbox } = useLightbox();
  const images = certificates.map((c) => c.image);

  return (
    <>
      <PageHero eyebrow="Certificates" title={certificates_intro.title} lede={certificates_intro.lede} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, i) => (
              <Reveal key={cert.order} delay={(i % 3) * 60}>
                <article className="group flex h-full flex-col border border-line bg-cream transition-colors hover:border-line-strong">
                  <button
                    type="button"
                    onClick={() => openLightbox(images, i)}
                    aria-label={`View ${cert.title} full size`}
                    className="media-zoom relative block aspect-[4/3] overflow-hidden border-b border-line bg-paper-deep"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain p-2"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-2 pt-8 text-left font-mono text-[11px] uppercase tracking-[0.16em] text-cream opacity-0 transition-opacity group-hover:opacity-100">
                      View full size
                    </span>
                  </button>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                      {cert.title}
                    </h3>
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
                      {cert.issuer}
                      {cert.date ? ` · ${dateReadable(cert.date)}` : ""}
                      {cert.credential_id ? ` · ID ${cert.credential_id}` : ""}
                    </p>
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
