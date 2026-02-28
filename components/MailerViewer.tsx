"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface MailerViewerProps {
  mailers: string[];
  startIndex: number;
  onClose: () => void;
}

export default function MailerViewer({
  mailers,
  startIndex,
  onClose,
}: MailerViewerProps) {
  const [current, setCurrent] = useState(startIndex);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const prev = () => {
    if (current > 0) {
      setLoading(true);
      setCurrent((i) => i - 1);
    }
  };

  const next = () => {
    if (current < mailers.length - 1) {
      setLoading(true);
      setCurrent((i) => i + 1);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [current]);

  return (
    <div
      className='fixed inset-0 z-50 bg-black/80 flex items-center justify-evenly'
      onClick={() => {
        onClose();
        console.log("Closing viewer");
      }} // ✅ click outside closes
    >
      {/* LEFT NAV */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        disabled={current === 0}
        className='w-10 h-10 rounded-full bg-white shadow
                   flex items-center justify-center
                   opacity-70 hover:opacity-100 disabled:opacity-30'
      >
        <Image
          src='/right-arrow.svg'
          alt='Prev'
          width={15}
          height={15}
          className='rotate-180'
        />
      </button>

      {/* VIEWER */}
      <div
        className='relative w-[50vw] h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden'
        onClick={(e) => e.stopPropagation()} // ✅ prevent close inside
      >
        {/* Scroll area */}
        <div className='h-full w-full overflow-y-auto p-6' ref={scrollRef}>
          {loading && (
            <div className='w-full h-[600px] animate-pulse rounded bg-gray-200' />
          )}

          <Image
            key={mailers[current]}
            src={`/src/project/weekly-edit/emailers/${mailers[current]}`}
            alt='Mailer'
            width={1200}
            height={4000}
            priority
            onLoadingComplete={() => setLoading(false)}
            className={`w-full h-auto object-contain transition-opacity duration-300
              ${loading ? "opacity-0" : "opacity-100"}`}
          />
        </div>
      </div>

      {/* RIGHT NAV */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        disabled={current === mailers.length - 1}
        className='w-10 h-10 rounded-full bg-white shadow
                   flex items-center justify-center
                   opacity-70 hover:opacity-100 disabled:opacity-30'
      >
        <Image src='/right-arrow.svg' alt='Next' width={15} height={15} />
      </button>
    </div>
  );
}
