import { Link } from "react-router-dom";

export function TagList({ tags }) {
  if (!tags || tags.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li
          key={t}
          className="border border-line bg-cream px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink-mute"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function StatusBadge({ status }) {
  if (!status) return null;
  return (
    <span className="inline-block border border-moss/30 bg-moss/8 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-moss">
      {status}
    </span>
  );
}

export function ArrowLink({ to, href, children, className = "", state }) {
  const cls = `group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-moss transition-colors hover:text-moss-deep ${className}`;
  const inner = (
    <>
      {children}
      <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
        &rarr;
      </span>
    </>
  );
  if (to) {
    return (
      <Link to={to} state={state} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} target="_blank" rel="noopener">
      {inner}
    </a>
  );
}

export function PillButton({ to, href, children, variant = "primary", className = "", download = false }) {
  const styles =
    variant === "primary"
      ? "bg-ink text-cream hover:bg-moss border border-ink hover:border-moss"
      : "border border-line-strong bg-cream text-ink hover:border-moss hover:text-moss";
  const cls = `inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${styles} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} download={download} target={href.startsWith("/") ? undefined : "_blank"} rel="noopener">
      {children}
    </a>
  );
}
