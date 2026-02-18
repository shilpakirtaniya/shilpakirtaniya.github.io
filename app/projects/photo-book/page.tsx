'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Preloader from '@/components/Preloader';
import ProjectFooter from '@/components/ProjectFooter';
import ProjectHeader from '@/components/ProjectHeader';

// Hero images data
const heroImages = [
  { src: '/src/project/Photography/hero page/1(1)(1).jpg', alt: 'Photography hero image 1' },
  { src: '/src/project/Photography/hero page/2(1)(1).jpg', alt: 'Photography hero image 2' },
  { src: '/src/project/Photography/hero page/3(1)(1).jpg', alt: 'Photography hero image 3' },
];

// Section 1 images (IRO IRO)
const iroIroImages = [
  { src: '/src/project/Photography/1 page/IMG_7467.jpg', alt: 'IRO IRO product photography 1' },
  { src: '/src/project/Photography/1 page/IMG_7468.jpg', alt: 'IRO IRO product photography 2' },
  { src: '/src/project/Photography/1 page/IMG_7470.jpg', alt: 'IRO IRO product photography 3' },
  { src: '/src/project/Photography/1 page/IMG_7464.jpg', alt: 'IRO IRO product photography 4' },
];

// Section 2 images (Urvashi Kaur)
const urvashiKaurImages = [
  { src: '/src/project/Photography/2 page/IMG-20230208-WA00125.png', alt: 'Urvashi Kaur photography 1' },
  { src: '/src/project/Photography/2 page/IMG-20230208-WA0012jb.png', alt: 'Urvashi Kaur photography 2' },
  { src: '/src/project/Photography/2 page/IMG-20230208-WA0012 bw.png', alt: 'Urvashi Kaur photography 3' },
];

// Section 3 images (IRO IRO)
const iroIroSection3Images = [
  { src: '/src/project/Photography/3 page/IMG_7627.jpg', alt: 'IRO IRO photography 1' },
  { src: '/src/project/Photography/3 page/IMG_7630.jpg', alt: 'IRO IRO photography 2' },
];

// Section 4 images (IRO IRO)
const iroIroSection4Images = [
  { src: '/src/project/Photography/4 page/IMG_20230824_084528.png', alt: 'IRO IRO photography 3' },
  { src: '/src/project/Photography/4 page/IMG_20230824_085053.jpg', alt: 'IRO IRO photography 4' },
];

// Last section images (grid)
const lastSectionImagesTop = [
  { src: '/src/project/Photography/last/1.jpg', alt: 'Photography collection 1' },
  { src: '/src/project/Photography/last/2.jpg', alt: 'Photography collection 2' },
  { src: '/src/project/Photography/last/3.jpg', alt: 'Photography collection 3' },
  { src: '/src/project/Photography/last/4.jpg', alt: 'Photography collection 4' },
];

const lastSectionImagesBottom = [
  { src: '/src/project/Photography/last/5.jpg', alt: 'Photography collection 5' },
  { src: '/src/project/Photography/last/6.jpg', alt: 'Photography collection 6' },
  { src: '/src/project/Photography/last/7.png', alt: 'Photography collection 7' },
  { src: '/src/project/Photography/last/8.jpg', alt: 'Photography collection 8' },
];

export default function PhotographyPage() {
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

      <div className="order-content container max-w-screen-xl mx-auto">
        <main>
          {/* Hero Section */}
          <section className="xxs:h-[400px] xs:h-[514px] sm:h-[600px] md:h-[800px] w-full flex flex-col justify-evenly items-center pt-[50px]">
            <h1 className="xxs:text-sm md:text-md font-sans text-center opacity-80">
              <span className="xxs:text-xs md:text-sm">2023-2024</span>______Photography
            </h1>
            
            <div className="xxs:h-[96px] xs:h-[123px] sm:h-[175px] md:h-[200px] w-full flex justify-center xxs:gap-5 sm:gap-7 md:gap-10 lg:gap-14">
              {heroImages.map((image, index) => (
                <div
                  key={`hero-${index}`}
                  className="h-full xxs:w-[96px] xs:w-[123px] sm:w-[175px] md:w-[200px] overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    priority={index < 2}
                  />
                </div>
              ))}
            </div>

            <h1 className="xxs:w-full sm:w-[560px] xxs:text-xs sm:text-[16px] sm:p-10 leading-5 font-sans text-center opacity-70">
              Here is a compilation of photographs I took over the span of a year,
              specifically for the brands I worked with, intended for use on their
              social media platforms and websites.
            </h1>
          </section>

          {/* Section 1 - IRO IRO Product Photography */}
          <section className="xxs:h-[900px] xs:h-[1158px] sm:h-[1150px] md:h-[900px] xl:h-[1100px] w-full flex xxs:flex-col md:flex-row 3xl:p-[60px]">
            {/* Left Column - Large Image */}
            <div className="xxs:h-[225px] xs:h-[290px] sm:h-[413px] md:h-full xxs:w-full md:w-1/2 flex xxs:justify-start justify-center">
              <div className="image4 h-[670px] xxs:h-[223px] xs:h-[287px] sm:h-[410px] md:h-[410px] xs:w-[386px] xxs:w-[300px] sm:w-[510px] md:w-full">
                <Image
                  src={iroIroImages[0].src}
                  alt={iroIroImages[0].alt}
                  width={510}
                  height={410}
                  className="w-full h-auto"
                  priority
                />
                <h1 className="xxs:text-sm lg:text-lg opacity-65 font-normal">
                  For IRO IRO |
                  <a
                    className="text-blue hover:underline"
                    href="https://www.instagram.com/p/C1ZZu9SyJUm/?hl=en&img_index=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b> Social Media</b>
                  </a>
                </h1>
              </div>
            </div>

            {/* Right Column - Three Images Stacked */}
            <div className="xxs:h-[675px] xs:h-[870px] sm:h-[735px] md:h-full xxs:w-full md:w-1/2 flex flex-col justify-end gap-5 items-end">
              {iroIroImages.slice(1).map((image, index) => (
                <div
                  key={`iro-iro-${index}`}
                  className="lg:h-[265px] lg:w-[400px] xl:h-[331px] xl:w-[500px] xs:h-[231px] xs:w-[347px] xxs:h-[180px] xxs:w-[270px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={331}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 - Urvashi Kaur */}
          <section className="xxs:h-[104px] xs:h-[174px] sm:h-[253px] md:h-[305px] lg:h-[400px] w-full flex flex-col justify-center items-start xxs:my-20 xs:my-24 sm:my-28 md:my-[130px] lg:my-[160px] xl:my-[200px]">
            <div className="h-[80%] w-full flex gap-5">
              {urvashiKaurImages.map((image, index) => (
                <Image
                  key={`urvashi-${index}`}
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="h-full w-auto"
                />
              ))}
            </div>
            <h1 className="xxs:text-sm lg:text-lg opacity-65 font-normal">
              For Urvashi Kaur | <b>Social media</b>
            </h1>
          </section>

          {/* Section 3 - IRO IRO Full Width */}
          <section className="xxs:h-[500px] xs:h-[643px] sm:h-[918px] md:h-[1106px] lg:h-[1000px] xl:h-[1400px] w-full flex mx-auto">
            <div className="h-full w-1/3 xxs:hidden lg:block"></div>
            <div className="h-full xxs:w-full lg:w-2/3 flex flex-col items-end">
              
              {/* Top Image */}
              <div className="h-1/2 w-full flex justify-end">
                <div className="imageContainer xxs:h-[216px] xs:h-[278px] sm:h-[397px] sm:w-[551px] md:h-[478px] md:w-[663px] xxs:w-[300px] xs:w-[386px] xl:h-[655px] xl:w-[900px] flex flex-col items-end">
                  <h1 className="xxs:text-sm text-lg opacity-65 font-normal text-right">
                    For IRO IRO |
                    <a
                      className="text-blue hover:underline"
                      href="https://www.instagram.com/p/CzD8Qw4yS3_/?hl=en&img_index=2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <b> Social Media</b>
                    </a>
                  </h1>
                  <Image
                    src={iroIroSection3Images[0].src}
                    alt={iroIroSection3Images[0].alt}
                    width={900}
                    height={655}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Bottom Image */}
              <div className="h-1/2 xxs:w-full flex xxs:justify-start justify-center">
                <div className="xxs:h-[165px] xs:h-[212px] xs:w-[321px] sm:h-[302px] sm:w-[458px] md:h-[396px] md:w-[539px] xxs:w-[250px] xl:h-[500px] xl:w-[750px] overflow-hidden">
                  <Image
                    src={iroIroSection3Images[1].src}
                    alt={iroIroSection3Images[1].alt}
                    width={750}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - IRO IRO Double Image */}
          <section className="xxs:h-[170px] xs:h-[218px] sm:h-[298px] md:h-[372px] lg:h-[500px] xl:h-[900px] w-full flex flex-col justify-center xxs:items-center items-end">
            <h1 className="xxs:text-sm text-lg opacity-65 font-normal text-right xxs:w-full lg:w-[900px] xl:w-[1260px] mx-auto">
              For IRO IRO |
              <a
                className="text-blue hover:underline"
                href="https://www.instagram.com/p/Cwkv1ODSCbP/?hl=en&img_index=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b> Social Media</b>
              </a>
            </h1>
            <div className="xxs:h-[70%] xxs:w-full lg:h-[300px] lg:w-[900px] xl:h-[470px] xl:w-[1260px] mx-auto flex justify-between">
              {iroIroSection4Images.map((image, index) => (
                <div key={`section4-${index}`} className="h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={630}
                    height={470}
                    className="h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Last Section - Grid Layout */}
          <section className="xxs:h-[195px] xs:h-[250px] sm:h-[320px] md:h-[400px] lg:h-[487px] h-screen w-full xxs:mt-[100px] xs:mt-[120px] sm:mt-[150px] md:mt-[170px] lg:mt-[210px] xl:mt-[270px] mb-5">
            
            {/* Top Row */}
            <div className="h-1/2 w-full flex justify-center items-end xxs:pb-[2px] xs:pb-[4px] sm:pb-[6px] md:pb-[8px] lg:pb-[30px] xxs:gap-1 xs:gap-2 sm:gap-3 md:gap-[16px] lg:gap-[60px]">
              {lastSectionImagesTop.map((image, index) => (
                <div
                  key={`top-${index}`}
                  className="imagesContainer xxs:w-[83px] xs:h-[106px] xs:w-[106px] xxs:h-[83px] sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={180}
                    height={180}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="h-1/2 w-full flex justify-center items-start xxs:pt-[2px] xs:pt-[4px] sm:pt-[6px] md:pt-[8px] lg:pt-[30px] xxs:gap-1 xs:gap-2 sm:gap-3 md:gap-[16px] lg:gap-[60px]">
              {lastSectionImagesBottom.map((image, index) => (
                <div
                  key={`bottom-${index}`}
                  className="imagesContainer xxs:w-[83px] xxs:h-[83px] xs:h-[106px] xs:w-[106px] sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={180}
                    height={180}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Camera Credit */}
          <h1 className="w-full text-center xxs:text-sm md:text-lg xxs:mb-5 md:mb-32 opacity-60">
            &quot;All the pictures are captured with a <b>Canon 1100D</b>&quot;
          </h1>
        </main>

        {/* Footer with Back Button */}
        <ProjectFooter />
      </div>
    </>
  );
}