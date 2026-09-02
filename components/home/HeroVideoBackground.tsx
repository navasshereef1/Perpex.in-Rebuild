"use client";

import { useEffect, useRef, useState } from "react";

// Real, freely-licensed business/consulting footage (Pexels, no attribution
// required). Small SD files on purpose: they sit behind a dark duotone
// overlay and are never the sharp focal layer, so file size matters more
// than resolution here. One clip loads at a time; the next only fetches
// once the current one ends, so the browser is never holding four videos
// in memory. Paused automatically when the tab isn't visible.
const clips = [
  "https://videos.pexels.com/video-files/9034412/9034412-sd_640_360_24fps.mp4",
  "https://videos.pexels.com/video-files/8478953/8478953-sd_640_360_25fps.mp4",
  "https://videos.pexels.com/video-files/7148968/7148968-sd_640_360_25fps.mp4",
  "https://videos.pexels.com/video-files/7693471/7693471-sd_640_360_25fps.mp4",
];

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onVisibility = () => {
      const v = videoRef.current;
      if (!v) return;
      if (document.hidden) v.pause();
      else v.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <video
      ref={videoRef}
      key={clips[index]}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      playsInline
      preload="auto"
      onEnded={() => setIndex((i) => (i + 1) % clips.length)}
    >
      <source src={clips[index]} type="video/mp4" />
    </video>
  );
}
