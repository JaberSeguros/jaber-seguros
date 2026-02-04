"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const POSTER_SRC = "/assets/hero-image.webp";
const VIDEO_SOURCES = [
  { src: "/assets/hero-12s-24fps-1000k-1280.mp4", type: "video/mp4" },
] as const;

export default function HeroVideo({
  children,
}: {
  children?: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const idleIdRef = useRef<number | null>(null);

  // Respect prefers-reduced-motion (no hydration mismatch: read only in useEffect)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setPrefersReduced(mq.matches);
    const id = setTimeout(apply, 0);
    mq.addEventListener("change", apply);
    return () => {
      clearTimeout(id);
      mq.removeEventListener("change", apply);
    };
  }, []);

  // Defer video load until after LCP (requestIdleCallback) and only when allowed
  useEffect(() => {
    if (prefersReduced) return;

    const tryLoad = () => {
      setLoadVideo(true);
    };

    if (typeof requestIdleCallback !== "undefined") {
      idleIdRef.current = requestIdleCallback(tryLoad, { timeout: 1500 });
      return () => {
        if (idleIdRef.current != null) cancelIdleCallback(idleIdRef.current);
      };
    }
    const t = setTimeout(tryLoad, 400);
    return () => clearTimeout(t);
  }, [prefersReduced]);

  const onCanPlay = useCallback(() => {
    setVideoReady(true);
  }, []);

  const showPoster = !loadVideo || !videoReady;

  return (
    <header className="relative mx-auto h-[calc(100dvh-1rem)] min-h-[600px] w-[calc(100%-1rem)] max-w-[1890px] overflow-hidden rounded-4xl">
      {/* Poster: LCP image, fades out when video is ready */}
      <div
        className={cn(
          "absolute inset-0 size-full transition-opacity duration-700 ease-out",
          showPoster ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!showPoster}
      >
        <Image
          src={POSTER_SRC}
          alt="Jaber Seguros - Corretora de seguros e consórcios"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-60"
          quality={85}
        />
      </div>

      {/* Video: mount after idle; crossfade when canplay */}
      {loadVideo && !prefersReduced && (
        <video
          ref={videoRef}
          poster={POSTER_SRC}
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
          className={cn(
            "absolute inset-0 size-full object-cover object-center brightness-60 transition-opacity duration-700 ease-out",
            videoReady ? "opacity-100" : "opacity-0",
          )}
          onCanPlay={onCanPlay}
          onLoadedData={onCanPlay}
          aria-label="Vídeo de apresentação Jaber Seguros"
          title="Jaber Seguros - Corretora de seguros e consórcios"
        >
          {VIDEO_SOURCES.map(({ src, type }) => (
            <source key={type} src={src} type={type} />
          ))}
        </video>
      )}

      {children}
    </header>
  );
}
