'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Preloader from '@/components/Preloader';
import ProjectFooter from '@/components/ProjectFooter';
import ProjectHeader from '@/components/ProjectHeader';

// Coral print images
const repeatImages = [
  { src: '/src/project/coral print/repeat 4.jpg', alt: 'Coral print pattern 4' },
  { src: '/src/project/coral print/repeat 1.jpg', alt: 'Coral print pattern 1' },
];

const repeatImagesBottom = [
  { src: '/src/project/coral print/repeat 3.jpg', alt: 'Coral print pattern 3' },
  { src: '/src/project/coral print/repeat 2.jpg', alt: 'Coral print pattern 2' },
];

export default function CoralsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <ProjectHeader />
      <div className="order-content">
        <main className="container max-w-screen-xl mx-auto pt-[50px]">
          {/* Hero Title Section */}
          <section className="xs:h-[200px] md:h-[300px] lg:h-[600px] w-full flex justify-center items-center">
            <div className="xs:h-[150px] md:h-[200px] lg:h-[200px] w-[500px] relative flex justify-center items-center">
              <h1 className="xs:text-4xl md:text-5xl lg:text-9xl font-arial flex text-offblue gap-5 absolute z-20">
                <div className="z-30">c</div>
                <div>o</div>
                <div className="z-30">r</div>
                <div>a</div>
                <div className="z-30">l</div>
              </h1>
              <h1 className="xs:text-3xl md:text-4xl lg:text-7xl font-amalfi opacity-60 absolute z-10">
                print project
              </h1>
            </div>
          </section>

          {/* GIF Section */}
          <section className="xs:h-[80px] sm:h-[120px] lg:h-[170px] xl:h-[200px] 2xl:h-[270px] w-full flex justify-center overflow-hidden">
            <div className="relative h-full w-auto">
              <Image
                className="h-full w-auto scale-120"
                src="/src/project/coral print/GIF/ezgif.com-gif-maker.gif"
                alt="Coral print animated pattern"
                width={800}
                height={270}
                style={{ objectFit: 'contain' }}
                unoptimized // For GIF support
              />
            </div>
          </section>

          {/* Top Repeat Images */}
          <section className="xs:h-[200px] sm:h-[240px] md:h-[400px] lg:h-[500px] xl:h-[550px] w-full flex justify-center items-end xxs:gap-[5px] xs:gap-[10px] md:gap-[15px] lg:gap-[20px] xs:mt-[70px] sm:mt-[80px] md:mt-[100px] lg:mt-[170px] xl:mt-[200px] pb-[10px]">
            {repeatImages.map((image, index) => (
              <div
                key={`repeat-top-${index}`}
                className="xxs:w-[170px] xs:w-[220px] sm:w-[315px] md:w-[376px] xxs:h-[121px] xs:h-[157px] sm:h-[225px] md:h-[268px] lg:h-[335px] xl:h-[402px] lg:w-[470px] xl:w-[564px] overflow-hidden"
              >
                <Image
                  className="h-full w-full object-cover"
                  src={image.src}
                  alt={image.alt}
                  width={564}
                  height={402}
                />
              </div>
            ))}
          </section>

          {/* Bottom Repeat Images */}
          <section className="xs:h-[200px] sm:h-[240px] md:h-[400px] lg:h-[500px] xl:h-[550px] w-full pt-[10px]">
            <div className="flex justify-center items-start xxs:gap-[5px] xs:gap-[10px] md:gap-[15px] lg:gap-[20px]">
              {repeatImagesBottom.map((image, index) => (
                <div
                  key={`repeat-bottom-${index}`}
                  className="xxs:w-[170px] xs:w-[220px] sm:w-[315px] md:w-[376px] xxs:h-[121px] xs:h-[157px] sm:h-[225px] md:h-[268px] lg:h-[335px] xl:h-[402px] lg:w-[470px] xl:w-[564px] overflow-hidden"
                >
                  <Image
                    className="h-full w-full object-cover"
                    src={image.src}
                    alt={image.alt}
                    width={564}
                    height={402}
                  />
                </div>
              ))}
            </div>

            <h1 className="xxs:w-[345px] xs:w-[450px] sm:w-[640px] md:w-[767px] lg:w-[960px] xl:w-[1148px] text-right opacity-65 xs:text-sm md:text-md lg:text-lg italic mx-auto">
              &quot;repeat&quot;
            </h1>
          </section>

          {/* Look Image */}
          <section className="container mx-auto xs:h-[257px] sm:h-[402px] md:h-[422px] lg:h-[563px] xl:h-[704px] w-full xs:mt-[100px] lg:mt-[200px]">
            <div className="h-full w-full flex overflow-hidden">
              <Image
                className="h-full w-auto object-cover"
                src="/src/project/coral print/look 3.jpg"
                alt="Coral print lookbook"
                width={1148}
                height={704}
              />
            </div>
          </section>
        </main>

        {/* Footer with Back Button */}
        <footer className="h-[400px] w-full flex items-center justify-center">
          <div className="container h-[70%] w-full flex flex-col justify-between">
            <div className="h-1/3 w-full flex items-center justify-center">
              <Link href="/projects">
                <div className="h-[40px] w-[180px] rounded-lg flex justify-center items-center backButton text-md hover:text-lg transition duration-150 ease-in-out hover:shadow-[0_0_1px_1px_#494F55]">
                  <h1 className="font-calibri">Back To Projects</h1>
                </div>
              </Link>
            </div>
            <ProjectFooter />
          </div>
        </footer>
      </div>
    </>
  );
}