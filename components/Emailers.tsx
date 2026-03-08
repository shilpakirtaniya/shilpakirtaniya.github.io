"use client";

import Image from "next/image";

// Replace these src values with your actual image paths
const newsletters = [
  {
    id: 1,
    src: "/images/newsletter-1.jpg",
    alt: "Save the Date – Fall Winter newsletter",
  },
  {
    id: 2,
    src: "/images/newsletter-2.jpg",
    alt: "Fall Winter 2025 Drop 1 newsletter",
  },
  {
    id: 3,
    src: "/images/newsletter-3.jpg",
    alt: "Mommy & Me newsletter",
  },
  {
    id: 4,
    src: "/images/newsletter-4.jpg",
    alt: "Warm & Comfy newsletter",
  },
  {
    id: 5,
    src: "/images/newsletter-5.jpg",
    alt: "Mindful Mama Giveaway newsletter",
  },
  {
    id: 6,
    src: "/images/newsletter-6.jpg",
    alt: "Organic Rompers newsletter",
  },
];

export default function Emailers() {
  // Heights that mirror the staggered card lengths in the reference image
  const cardHeights = [520, 480, 500, 540, 460, 510];

  // Subtle rotations to give the slight perspective tilt seen in the reference
  const cardRotations = [-1.5, -0.5, 0.3, 0, 0.8, 1.2];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#7c7b6b]">

      {/* Layered background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6a695a]/70 via-transparent to-[#4e4e40]/80 pointer-events-none" />

      <div className="relative z-10 px-8 md:px-12 lg:px-16 pt-12 pb-24">

        {/* ── Header Row ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-16">

          {/* Left: Title + description */}
          <div className="max-w-[340px]">
            <h1
              className="text-white mb-3 leading-none"
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                fontWeight: 400,
              }}
            >
              Newsletters
            </h1>
            <p
              className="text-white/80 leading-[1.7]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "0.78rem",
                fontWeight: 300,
              }}
            >
              Launch announcement emails built on a modular grid system for
              clarity and seamless product storytelling. Minimal layouts
              reinforced brand consistency across digital touchpoints.
            </p>
          </div>

          {/* Right: Software credits */}
          <div
            className="text-right"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "0.78rem",
            }}
          >
            <p className="text-white/90 font-semibold tracking-wide">Software:</p>
            <p className="text-white/75 font-light">Illustrator | Flodesk</p>
          </div>
        </div>

        {/* ── Newsletter Card Strip ── */}
        <div className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {newsletters.map((item, index) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 rounded-sm overflow-hidden shadow-[0_10px_36px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-3 hover:shadow-[0_20px_56px_rgba(0,0,0,0.5)]"
              style={{
                width: "clamp(100px, 13%, 155px)",
                height: `${cardHeights[index]}px`,
                transform: `rotate(${cardRotations[index]}deg)`,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 40vw, 15vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}