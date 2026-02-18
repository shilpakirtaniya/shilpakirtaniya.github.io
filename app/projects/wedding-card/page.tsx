'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import Preloader from '@/components/Preloader';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectFooter from '@/components/ProjectFooter';

export default function WeddingCardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const weddingHeroRef = useRef<HTMLImageElement>(null);
  const letterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Hero image scale animation
      gsap.fromTo(
        weddingHeroRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 1 }
      );

      // Letter animations
      const letters = letterRefs.current.filter(Boolean);
      letters.forEach((letter, index) => {
        gsap.from(letter, {
          y: 400,
          duration: 0.5,
          opacity: 0,
          delay: index * 0.1 + 0.3,
        });
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <ProjectHeader />

      <div className="order-content container max-w-screen-xl w-[95%] mx-auto">
        <main>
          {/* Hero Section */}
          <section className="sm:h-[300px] md:h-[350px] pt-[50px] lg:h-[400px] xl:h-[600px] w-full relative overflow-hidden">
            <Image
              ref={weddingHeroRef}
              className="w-full absolute object-cover"
              src="/src/project/Wedding card/HERO IMAGE.png"
              alt="Wedding card hero image"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            <div className="h-full w-full absolute flex flex-col justify-center items-center">
              <h1 className="flex font-sunroll sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl noto opacity-65 text-black">
                <div ref={(el) => { letterRefs.current[0] = el; }} className="w">W</div>
                <div ref={(el) => { letterRefs.current[1] = el; }} className="e">e</div>
                <div ref={(el) => { letterRefs.current[2] = el; }} className="d">d</div>
                <div ref={(el) => { letterRefs.current[3] = el; }} className="d2">d</div>
                <div ref={(el) => { letterRefs.current[4] = el; }} className="i">I</div>
                <div ref={(el) => { letterRefs.current[5] = el; }} className="n">n</div>
                <div ref={(el) => { letterRefs.current[6] = el; }} className="g">g</div>
                <div className="w-5"></div>
                <div ref={(el) => { letterRefs.current[7] = el; }} className="c">C</div>
                <div ref={(el) => { letterRefs.current[8] = el; }} className="a">a</div>
                <div ref={(el) => { letterRefs.current[9] = el; }} className="r">R</div>
                <div ref={(el) => { letterRefs.current[10] = el; }} className="d">d</div>
              </h1>
              <h1 className="sm:text-xm md:text-md lg:text-lg xl:text-xl italic noto font-[100] opacity-65">
                Designed for Priya and Vipin
              </h1>
            </div>
          </section>

          {/* Description Section */}
          <section className="sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] w-full flex justify-center items-center">
            <h1 className="sm:text-sm md:text-md lg:text-lg xl:text-xl font-noto font-[200] text-center sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[750px] opacity-70">
              A wedding card designed for a client who requested a soft and
              soothing aesthetic, along with realistic sketches of the bride and
              groom to personalize the invitation for their special day.
            </h1>
          </section>

          {/* Full Page Image */}
          <section className="xl:h-[800px] w-full flex flex-col justify-between items-center mb-10">
            <Image
              className="h-full w-auto mx-auto"
              src="/src/project/Wedding card/page 4/1.png"
              alt="Wedding card page 4"
              width={800}
              height={800}
              style={{ objectFit: 'contain' }}
            />
          </section>

          {/* Three Column Images */}
          <section className="sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] w-full mx-auto flex justify-between items-center gap-4 mb-10">
            <div className="relative w-[30%] h-full">
              <Image
                className="object-contain"
                src="/src/project/Wedding card/page 3/1.png"
                alt="Wedding card detail 1"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="relative w-[30%] h-full">
              <Image
                className="object-contain"
                src="/src/project/Wedding card/page 3/2.png"
                alt="Wedding card detail 2"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="relative w-[30%] h-full">
              <Image
                className="object-contain"
                src="/src/project/Wedding card/page 3/3.jpg"
                alt="Wedding card detail 3"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </section>

          {/* Mockup Section */}
          <section className="xl:h-[800px] mx-auto flex justify-center mb-10">
            <div className="relative h-full w-full">
              <img
                className="object-contain w-full"
                src="/src/project/Wedding card/page 2/mockup 3.png"
                alt="Wedding card mockup"
              />
            </div>
          </section>
        </main>

        {/* Footer with Back Button */}
        <ProjectFooter />
      </div>
    </>
  );
}