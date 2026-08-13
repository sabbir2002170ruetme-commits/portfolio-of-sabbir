import { useLightbox } from "./Lightbox.jsx";

export default function Gallery({ images, altPrefix, className = "" }) {
  const { openLightbox } = useLightbox();

  if (!images || images.length === 0) return null;

  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${className}`}>
      {images.map((src, i) => (
        <button
          type="button"
          key={src + i}
          onClick={() => openLightbox(images, i)}
          aria-label={`Open ${altPrefix} photo ${i + 1} of ${images.length} full-size`}
          className="media-zoom group aspect-[4/3] overflow-hidden border border-line bg-paper-deep"
        >
          <img
            src={src}
            alt={`${altPrefix} photo ${i + 1}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500"
          />
        </button>
      ))}
    </div>
  );
}
