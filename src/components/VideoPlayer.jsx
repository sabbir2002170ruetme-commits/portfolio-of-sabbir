export default function VideoPlayer({ src }) {
  if (!src) return null;
  return (
    <video
      className="w-full border border-line bg-ink"
      controls
      preload="metadata"
      playsInline
    >
      <source src={src} type="video/mp4" />
      Your browser doesn't support embedded video.{" "}
      <a href={src}>Download the video</a> instead.
    </video>
  );
}
