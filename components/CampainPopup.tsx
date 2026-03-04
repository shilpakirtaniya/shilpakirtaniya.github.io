"use client";

import { JSX, useEffect, useRef, useState } from "react";
import Instagram from "./Instagram";
import Banner from "./Banner";
import Ads from "./Ads";
import Emailers from "./Emailers";

export type SectionKey = 1 | 2 | 3 | 4;

interface CampainPopupProps {
  activeSection: SectionKey | null;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionKey | null>>;
  // Added optional width prop
  width?: string;
}

export default function CampainPopup({
  activeSection,
  setActiveSection,
  // Default value set to "w-[50vw]"
  width = "w-[50vw]",
}: CampainPopupProps) {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const sections: Record<SectionKey, JSX.Element> = {
    1: <Instagram />,
    2: <Banner />,
    3: <Ads />,
    4: <Emailers />,
  };

  useEffect(() => {
    if (activeSection !== null) {
      setLoading(true);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
      const t = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(t);
    }
  }, [activeSection]);

  if (activeSection === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-evenly"
      onClick={() => setActiveSection(null)}
    >
      {/* VIEWER - Now uses the dynamic width prop */}
      <div
        className={`relative ${width} h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full w-full overflow-y-auto" ref={scrollRef}>
          {loading && (
            <div className="w-full h-[600px] animate-pulse rounded bg-gray-200" />
          )}

          {!loading && sections[activeSection]}
        </div>
      </div>
    </div>
  );
}
