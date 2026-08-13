import { awards, awards_intro } from "../data/awards.js";
import { dateReadable } from "../data/format.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Gallery from "../components/Gallery.jsx";
import { TagList, ArrowLink } from "../components/ui.jsx";

export default function Awards() {
  return (
    <>
      <PageHero eyebrow="Awards" title={awards_intro.title} lede={awards_intro.lede} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-14">
            {awards.map((award) => (
              <Reveal key={award.order}>
                <article className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[240px_1fr] lg:gap-14">
                  <div className="lg:pt-1.5">
                    <p className="font-mono text-sm uppercase tracking-[0.18em] text-moss">
                      {award.date ? dateReadable(award.date) : ""}
                    </p>
                    <p className="mt-3 font-display text-5xl font-light text-line-strong">
                      {String(award.order).padStart(2, "0")}
                    </p>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
                      {award.title}
                    </h2>
                    <p className="mt-3 inline-block border border-moss/30 bg-moss/8 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-moss">
                      {award.result}
                    </p>
                    <p className="mt-5 max-w-2xl text-sm leading-[1.85] text-ink-soft sm:text-base">
                      {award.body}
                    </p>

                    <div className="mt-6">
                      <TagList tags={award.tags} />
                    </div>

                    {award.certificate && (
                      <div className="mt-7">
                        <ArrowLink href={award.certificate} className="text-xs">
                          View certificate
                        </ArrowLink>
                      </div>
                    )}

                    {award.gallery && award.gallery.length > 0 && (
                      <div className="mt-8 max-w-2xl">
                        <Gallery images={award.gallery} altPrefix={award.title} />
                      </div>
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
