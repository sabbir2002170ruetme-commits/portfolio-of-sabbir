import { experience, leadership, experience_intro } from "../data/experience.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Gallery from "../components/Gallery.jsx";
import { TagList } from "../components/ui.jsx";

function Entry({ item, altPrefix }) {
  return (
    <Reveal className="group relative border-l-2 border-line pl-8 pb-14 last:pb-0">
      <span
        className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-moss ring-4 ring-paper"
        aria-hidden="true"
      />
      {item.date_range && (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
          {item.date_range}
        </p>
      )}
      <h3 className="mt-2 font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
        {item.title}
      </h3>

      <div className="mt-5 space-y-5 text-sm leading-[1.8] text-ink-soft sm:text-base">
        <p>{item.body}</p>
        {item.contribution && (
          <p>
            <span className="font-semibold text-ink">My contribution: </span>
            {item.contribution}
          </p>
        )}
        {item.achievement && (
          <p>
            <span className="font-semibold text-ink">Achievement: </span>
            {item.achievement}
          </p>
        )}
      </div>

      {item.tags && (
        <div className="mt-6">
          <TagList tags={item.tags} />
        </div>
      )}

      {item.gallery && item.gallery.length > 0 && (
        <div className="mt-8">
          <Gallery images={item.gallery} altPrefix={altPrefix} className="grid-cols-3 sm:grid-cols-4" />
        </div>
      )}
    </Reveal>
  );
}

export default function Experience() {
  return (
    <>
      <PageHero eyebrow="Experience" title={experience_intro.title} lede={experience_intro.lede} />

      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-moss">Work</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Experience
            </h2>
          </Reveal>
          <div className="mt-14 max-w-3xl">
            {experience.map((item) => (
              <Entry key={item.order} item={item} altPrefix="Work" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-moss">Leadership</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Student leadership
            </h2>
          </Reveal>
          <div className="mt-14 max-w-3xl">
            {leadership.map((item) => (
              <Entry key={item.order} item={item} altPrefix={item.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
