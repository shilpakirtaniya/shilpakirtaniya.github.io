"use client";

import Image from "next/image";
import { useState } from "react";
import InstaTile from "@/components/InstaTile";

const posts = [
  "/src/project/launch-campaign/buttons/Instagram/1.png",
  "/src/project/launch-campaign/buttons/Instagram/2.gif",
  "/src/project/launch-campaign/buttons/Instagram/3.gif",
  "/src/project/launch-campaign/buttons/Instagram/4.mp4",
  "/src/project/launch-campaign/buttons/Instagram/5.png",
  "/src/project/launch-campaign/buttons/Instagram/6.png",
  "/src/project/launch-campaign/buttons/Instagram/7.mp4",
  "/src/project/launch-campaign/buttons/Instagram/8.png",
  "/src/project/launch-campaign/buttons/Instagram/9.mp4",
  "/src/project/launch-campaign/buttons/Instagram/10.mp4",
  "/src/project/launch-campaign/buttons/Instagram/11.png",
  "/src/project/launch-campaign/buttons/Instagram/12.png",
];

export default function Instagram() {
  return (
    <section className="w-full bg-instagram text-white p-20">
      {/* HEADER */}
      <div className="max-w-[1100px] mx-auto">
        <p className="tracking-widest text-xl opacity-70">
          SOCIAL.MEDIA.CAMPAIGN
        </p>

        <div className="flex items-center gap-6">
          {/* SEASON BADGE */}
          <div className="w-20 h-20 rounded-full bg-[#8c7a5a] flex items-center justify-center text-center text-sm font-light">
            <img
              src="/src/project/launch-campaign/buttons/Instagram/logo.png"
              alt="Season Badge"
              className="w-full h-full"
            />
          </div>

          <div>
            <h1 className="text-xl tracking-wide">MAKEMAKE ORGANICS</h1>
            <p className="text-sm opacity-70 mt-1">
              POST &nbsp; | &nbsp; STORIES &nbsp; | &nbsp; REELS
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="max-w-xs mt-8 text-sm leading-relaxed opacity-80">
          Designed a cohesive content system balancing playful storytelling with
          product clarity. Typography overlays and layout structures were
          created to maintain brand consistency while highlighting fabric
          texture and organic detailing.
        </p>

        <p className="mt-4 text-xs opacity-60">
          Software: Photoshop · Illustrator · Premiere Pro
        </p>

        {/* INSTAGRAM TABS */}
        <div className="flex justify-evenly gap-16 mt-14 border-b border-white/20 pb-4">
          <span className="opacity-100 border-b-2 pb-2">▦</span>
          <span className="opacity-50">▶</span>
          <span className="opacity-50">▢</span>
          <span className="opacity-50">▢</span>
        </div>
      </div>

      {/* FEED GRID */}
      <div className="max-w-[1100px] mx-auto px-6 mt-10">
        <div className="grid grid-cols-3 gap-3">
          {posts.map((src, i) => (
            <InstaTile key={i} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
