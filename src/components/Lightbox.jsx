import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [group, setGroup] = useState(null);
  const [index, setIndex] = useState(0);
  const open = useRef(false);

  const openLightbox = useCallback((images, startIndex = 0) => {
    if (!images || images.length === 0) return;
    setGroup(images);
    setIndex(startIndex);
    open.current = true;
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    open.current = false;
    document.body.style.overflow = "";
  }, []);

  const show = useCallback(
    (delta) => {
      setIndex((i) => (i + delta + group.length) % group.length);
    },
    [group]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (!open.current) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(-1);
      if (e.key === "ArrowRight") show(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close, show]);

  const value = { openLightbox, close };

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {open.current && group && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 px-6 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream text-xl transition hover:bg-cream/20"
          >
            &times;
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => show(-1)}
            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream text-2xl transition hover:bg-cream/20"
          >
            &#8249;
          </button>
          <img
            src={group[index]}
            alt=""
            className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain shadow-lift"
          />
          <button
            type="button"
            aria-label="Next image"
            onClick={() => show(1)}
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream text-2xl transition hover:bg-cream/20"
          >
            &#8250;
          </button>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  return useContext(LightboxContext);
}
