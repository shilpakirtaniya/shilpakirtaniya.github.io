import React, { useState, useEffect, useRef } from "react";
import BannerInfiniteScroller from "./BannerInfiniteScroller";

export type BannerSection = "hero" | "scroll" | "carousel";
export interface BannerItem {
  id: number;
  src: string;
  type: "image" | "video";
  title?: string;
  subtitle?: string;
}

/* =======================
   Data
======================= */

const heroBanner: BannerItem = {
  id: 1,
  src: "/src/project/launch-campaign/buttons/banners/hero.png",
  type: "image",
};

const heroLogo: BannerItem = {
  id: 10,
  src: "/src/project/launch-campaign/buttons/banners/hero-logo.png",
  type: "image",
};

const scrollItems: BannerItem[] = [
  {
    id: 2,
    src: "/src/project/launch-campaign/buttons/banners/slider-1.png",
    type: "image",
  },
  {
    id: 3,
    src: "/src/project/launch-campaign/buttons/banners/slider-2.png",
    type: "image",
  },
  {
    id: 4,
    src: "/src/project/launch-campaign/buttons/banners/slider-3.png",
    type: "image",
  },
  {
    id: 5,
    src: "/src/project/launch-campaign/buttons/banners/slider-4.png",
    type: "image",
  },
];

const carouselItems: BannerItem[] = [
  {
    id: 6,
    src: "/src/project/launch-campaign/buttons/banners/WEB-1.png",
    type: "image",
  },
  {
    id: 7,
    src: "/src/project/launch-campaign/buttons/banners/WEB-2.png",
    type: "image",
  },
  {
    id: 8,
    src: "/src/project/launch-campaign/buttons/banners/WEB-3.png",
    type: "image",
  },
  {
    id: 9,
    src: "/src/project/launch-campaign/buttons/banners/WEB-4.png",
    type: "image",
  },
];

/* =======================
   Shared Media Component
======================= */

const MediaRenderer: React.FC<{ item: BannerItem }> = ({ item }) => {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    );
  }
  return (
    <img
      src={item.src}
      alt={item.title || ""}
      className="w-full h-full object-cover"
    />
  );
};

/* =======================
   Component
======================= */

const Banner: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0); // Dedicated index for Section 2

  // Auto-slide logic: every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Logic to get the 3 visible items for Section 2
  const getVisibleScrollItems = () => {
    const total = scrollItems.length;
    return [
      {
        item: scrollItems[(scrollIndex - 1 + total) % total],
        pos: "side-left" as const,
      },
      { item: scrollItems[scrollIndex], pos: "center" as const },
      {
        item: scrollItems[(scrollIndex + 1) % total],
        pos: "side-right" as const,
      },
    ];
  };

  const nextScroll = () =>
    setScrollIndex((prev) => (prev + 1) % scrollItems.length);
  const prevScroll = () =>
    setScrollIndex(
      (prev) => (prev - 1 + scrollItems.length) % scrollItems.length,
    );

  return (
    <section className="bg-[#f2efe4] min-h-screen p-6 sm:p-20 font-serif text-[#6b704c]">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {/* 1. HERO SECTION */}
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          <div className="relative w-full md:w-[65%] aspect-[16/9] overflow-hidden shadow-sm">
            <MediaRenderer item={heroBanner} />
          </div>

          <div className="w-full md:w-[30%] flex flex-col  pt-4">
            <div className="w-48 ml-[-30px]">
              <MediaRenderer item={heroLogo} />
            </div>
            <div className="space-y-4">
              <p className="text-[12px] leading-relaxed opacity-90 max-w-xs font-sans tracking-wide">
                Homepage launch visuals structured around clarity, hierarchy,
                and premium minimalism balancing emotion with conversion.
              </p>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest font-sans">
                  Software used-
                </p>
                <p className="text-xs opacity-80 font-sans">
                  Photoshop | Adobe Illustrator
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. UPDATED: RESIZING INFINITE SCROLLER */}
        <div className="flex flex-col items-center w-full">
          {/* Flex container replaces absolute positioning */}
          <div className="flex items-center justify-between w-full h-[550px]">
            {/* Left Button - 10% width */}
            <div className="w-[5%] flex justify-start z-20">
              <button
                onClick={prevScroll}
                className="p-3 border border-[#6b704c] rounded-full hover:bg-[#6b704c] hover:text-white transition-all active:scale-90"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            {/* Center Content - 80% width */}
            <div className="w-[90%] flex items-center justify-center overflow-visible">
              <div className="flex items-center justify-center gap-4 sm:gap-12 w-full">
                {getVisibleScrollItems().map(({ item, pos }) => (
                  <BannerInfiniteScroller
                    key={item.id}
                    item={item}
                    position={pos}
                  />
                ))}
              </div>
            </div>

            {/* Right Button - 10% width */}
            <div className="w-[5%] flex justify-end z-20">
              <button
                onClick={nextScroll}
                className="p-3 border border-[#6b704c] rounded-full hover:bg-[#6b704c] hover:text-white transition-all active:scale-90"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Section 2 Indicators */}
          <div className="flex gap-3 mt-4">
            {scrollItems.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  idx === scrollIndex
                    ? "bg-[#6b704c] scale-125"
                    : "bg-[#6b704c] opacity-30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3. INFINITE SLIDER CAROUSEL SECTION */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-full aspect-[21/9] overflow-hidden shadow-md group rounded-sm">
            {/* The Sliding Track: This moves horizontally based on currentIndex */}
            <div
              className="flex w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="w-full h-full flex-none relative">
                  <MediaRenderer item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Indicators */}
          <div className="flex gap-4">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full border border-[#6b704c] transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-[#6b704c]"
                    : "bg-transparent opacity-40 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;
