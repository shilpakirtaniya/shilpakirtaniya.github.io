"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Instagram from "./Instagram";
import Banner from "./Banner";
import Ads from "./Ads";
import Emailers from "./Emailers";

export type SectionKey = 1 | 2 | 3 | 4;

interface CampainPopupProps {
  activeSection: SectionKey | null;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionKey | null>>;
}

export default function CampainPopup({
  activeSection,
  setActiveSection,
}: CampainPopupProps) {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const sections: Record<SectionKey, JSX.Element> = {
    1: <Instagram />,
    2: <Banner />,
    3: <Ads />,
    4: <Emailers />,
  };

  // reset scroll + loading on section change
  useEffect(() => {
    if (activeSection !== null) {
      setLoading(true);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }

      // fake load delay (replace later if needed)
      const t = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(t);
    }
  }, [activeSection]);

  if (activeSection === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-evenly"
      onClick={() => setActiveSection(null)} // click outside closes
    >
      {/* LEFT NAV (kept for visual symmetry) */}
      <button
        disabled
        className="w-10 h-10 rounded-full bg-white shadow
                   flex items-center justify-center
                   opacity-30 cursor-default"
      >
        <Image
          src="/right-arrow.svg"
          alt="Prev"
          width={15}
          height={15}
          className="rotate-180"
        />
      </button>

      {/* VIEWER (EXACT SAME CONTAINER) */}
      <div
        className="relative w-[50vw] h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scroll area */}
        <div className="h-full w-full overflow-y-auto" ref={scrollRef}>
          {loading && (
            <div className="w-full h-[600px] animate-pulse rounded bg-gray-200" />
          )}

          {!loading && sections[activeSection]}
        </div>
      </div>

      {/* RIGHT NAV (kept for visual symmetry) */}
      <button
        disabled
        className="w-10 h-10 rounded-full bg-white shadow
                   flex items-center justify-center
                   opacity-30 cursor-default"
      >
        <Image src="/right-arrow.svg" alt="Next" width={15} height={15} />
      </button>
    </div>
  );
}