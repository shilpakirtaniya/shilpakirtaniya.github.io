'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Preloader from '@/components/Preloader';
import MailerSection from '@/components/Mailer';
import ProjectFooter from '@/components/ProjectFooter';
import ProjectHeader from '@/components/ProjectHeader';

export default function WeeklyEditPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // same delay as Photography page

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <ProjectHeader />

      <main className="bg-[#e9e4d8] text-[#4a3b2f]">
        {/* HERO SECTION */}
        <section className="flex h-[110svh] w-full justify-between">
          <div className="flex h-[90%] w-[37%]">
            <img
              src="/src/project/weekly-edit/hero-1.jpg"
              alt="Newsletter hero 1"
              className="w-full object-cover"
            />
          </div>
          <div className="flex h-full w-[53%] justify-end items-end">
            <img
              src="/src/project/weekly-edit/hero-2.jpg"
              alt="Newsletter hero 2"
              className="w-full object-contain"
            />
          </div>
        </section>

        {/* INTRO TEXT */}
        <section className="max-w-4xl mx-auto px-8 mt-32">
          <p className="text-xl tracking-[0.3em] mb-6">NEWSLETTERS</p>

          <h1 className="text-7xl md:text-6xl mb-10 font-light font-sunroll">
            The Weekly Edit
          </h1>

          <p className="text-xl leading-snug mb-6 text-justify">
            While working at Makemake Organics, I designed these newsletters to
            help the brand stay connected with its customers and share new
            collection launches, sales, and updates. The focus was on keeping
            the communication clear, calm, and true to the brand’s minimal
            aesthetic.
          </p>

          <p className="text-xl leading-relaxed text-justify">
            The complete process was managed from design to execution, with
            layouts created in Illustrator and the final emails built and sent
            through Flodesk, ensuring each newsletter stayed consistent with the
            brand identity.
          </p>
        </section>

        {/* PHONE MOCKUPS */}
        <section className="mt-32 bg-[#dfd8cb] py-20 background-social-media">
          <div className="overflow-x-auto">
            <div className="flex justify-between w-full px-8">
              {['1', '2', '3', '4', '5'].map((n) => (
                <Image
                  key={n}
                  src={`/src/project/weekly-edit/mockss/phone-${n}.png`}
                  alt={`Phone mockup ${n}`}
                  width={180}
                  height={350}
                  className="h-[380px] w-auto flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </section>

        {/* META INFO */}
        <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row justify-between text-sm tracking-wide uppercase gap-10">
          <div>
            <p>Newsletters | Emailers</p>
            <p>2024–2025</p>
          </div>

          <div className="md:text-right">
            <p>Tools Used</p>
            <p>Adobe Illustrator | Flodesk</p>
          </div>
        </section>

        {/* MAILER GRID */}
        <MailerSection />
      </main>

      <ProjectFooter />
    </>
  );
}