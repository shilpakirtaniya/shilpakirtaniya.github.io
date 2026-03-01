"use client";

import { useState } from "react";
import Image from "next/image";

interface InstaTileProps {
  src: string;
  index: number;
}

export default function InstaTile({ src, index }: InstaTileProps) {
  const [loaded, setLoaded] = useState(false);

  const isVideo = src.endsWith(".mp4");

  return (
    <div className="relative aspect-2/3 overflow-hidden bg-black">
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-neutral-800" />
      )}

      {/* IMAGE */}
      {!isVideo && (
        <Image
          src={src}
          alt={`Instagram post ${index + 1}`}
          fill
          onLoadingComplete={() => setLoaded(true)}
          className={`
            object-cover transition-all duration-300
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
        />
      )}

      {/* VIDEO */}
      {isVideo && (
        <video
          src={src}
          muted
          loop
          autoPlay
          playsInline
          onCanPlay={() => setLoaded(true)}
          className={`
            absolute inset-0 h-full w-full object-cover
            transition-all duration-300
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
        />
      )}
    </div>
  );
}