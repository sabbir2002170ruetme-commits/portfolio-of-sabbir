import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 py-24 text-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-moss">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-soft">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <div className="mt-9">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-cream transition-colors hover:bg-moss hover:border-moss"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
