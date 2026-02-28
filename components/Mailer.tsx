"use client";

import Image from "next/image";
import { useState } from "react";
import MailerViewer from "./MailerViewer";

const MAILERS = [
  "mailer-1.png",
  "mailer-2.png",
  "mailer-3.png",
  "mailer-4.png",
  "mailer-5.png",
  "mailer-6.png",
  "mailer-7.png",
  "mailer-8.png",
];

const SMALL_MAILERS = [
  "mailer-1-small.png",
  "mailer-2-small.png",
  "mailer-3-small.png",
  "mailer-4-small.png",
  "mailer-5-small.png",
  "mailer-6-small.jpg",
  "mailer-7-small.png",
  "mailer-8-small.png",
];

const VISIBLE_COUNT = 4;

export default function MailerSection() {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const maxIndex = Math.max(0, MAILERS.length - VISIBLE_COUNT);

  const prev = () => setIndex(0); // jump to first
  const next = () => setIndex(maxIndex); // jump to last

  return (
    <section className='max-w-7xl mx-auto px-8 pb-32'>
      <div className='flex w-full items-center'>
        {/* NAV BUTTON */}
        <button
          onClick={prev}
          disabled={index === 0}
          className='flex-1 -translate-y-1/2 flex items-center justify-center opacity-60 hover:opacity-100 disabled:opacity-20 transition'
        >
          <span className='w-10 h-10 rounded-full border border-[#4a3b2f] flex items-center justify-center'>
            <Image
              src='/right-arrow.svg'
              alt='Previous'
              width={15}
              height={15}
              className='rotate-180'
            />
          </span>
        </button>
        {/* VIEWPORT */}
        <div className='overflow-hidden flex-12'>
          <div
            className='grid grid-flow-col auto-cols-[22.9%] gap-7 transition-transform duration-500 ease-linear'
            style={{ transform: `translateX(-${index * 25}%)` }}
          >
            {SMALL_MAILERS.map((src, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className='relative h-[550px] flex items-start justify-center overflow-hidden hover:cursor-pointer'
              >
                <Image
                  src={`/src/project/weekly-edit/emailers/${src}`}
                  alt={`Mailer ${i + 1}`}
                  fill
                  priority
                  className='object-cover object-top shadow-2xl'
                />
              </div>
            ))}
          </div>
        </div>
        {/* NAV BUTTONS */}
        <button
          onClick={next}
          disabled={index === maxIndex}
          className='flex-1 -translate-y-1/2 flex items-center justify-center opacity-60 hover:opacity-100 disabled:opacity-20 transition'
        >
          <span className='w-10 h-10 rounded-full border border-[#4a3b2f] flex items-center justify-center'>
            <Image src='/right-arrow.svg' alt='Next' width={15} height={15} />
          </span>
        </button>
      </div>

      {/* CTA */}
      <div className='flex w-full'>
        <div className='flex-1'></div>
        <div className='flex-12 flex justify-end'>
          <p className='group text-xs tracking-[0.3em] mt-20 opacity-60 inline-block transition'>
            <span className='relative inline-block'>
              CLICK TO VIEW FULL MAILER
            </span>
          </p>
        </div>
        <div className='flex-1'></div>
      </div>

      {/* Popup for active mailer */}
      {activeIndex !== null && (
        <MailerViewer
          mailers={MAILERS}
          startIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}
