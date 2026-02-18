'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Preloader from '@/components/Preloader';
import ProjectFooter from '@/components/ProjectFooter';
import ProjectHeader from '@/components/ProjectHeader';

// Exploration images
const explorationImages = [
  { src: '/src/project/surface work/2nd page/1.jpg', alt: 'Surface work exploration 1' },
  { src: '/src/project/surface work/2nd page/2.jpg', alt: 'Surface work exploration 2' },
  { src: '/src/project/surface work/2nd page/3.jpg', alt: 'Surface work exploration 3', scaleX: -1 },
  { src: '/src/project/surface work/2nd page/4.jpg', alt: 'Surface work exploration 4', scaleX: -1 },
];

// Front/Back container images
const frontBackImages = [
  { src: '/src/project/surface work/4th page/1.jpg', alt: 'Front view 1', label: 'front', labelPosition: 'top-left' },
  { src: '/src/project/surface work/4th page/2.jpg', alt: 'Front view 2', hasOffset: true },
  { src: '/src/project/surface work/4th page/3.jpg', alt: 'Back view 1' },
  { src: '/src/project/surface work/4th page/4.jpg', alt: 'Back view 2', label: 'back', labelPosition: 'bottom-right' },
];

export default function SurfaceEmbellishmentPage() {
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
        <main className="container max-w-screen-xl mx-auto">
          {/* Hero Section */}
          <section className="xxs:h-[500px] sm:h-[700px] lg:h-[800px] xl:h-screen w-full relative overflow-hidden pt-[50px]">
            <div className="absolute inset-0">
              <img
                className="absolute xxs:left-52 xxs:scale-[290%] sm:scale-[200%] lg:scale-[170%] 2xl:scale-[170%] xl:left-40 2xl:left-[350px] left-0 bottom-0 bg-contain"
                src="/src/project/surface work/hero page/20221120_155919.jpg"
                alt="Surface work hero image"
              />
            </div>
            <div className="absolute grid place-content-end xxs:p-5 lg:p-16 h-full w-full">
              <div className="xxs:h-[350px] xs:h-[270px] sm:h-[400px] md:h-[450px] lg:h-[340px] xxs:w-[220px] xs:w-[370px] sm:w-[400px] md:w-[300px] lg:w-[400px] font-sans text-white">
                <h1 className="xxs:text-md sm:text-lg lg:text-xl mb-2 font-[500]">
                  Surface Work
                </h1>
                <p className="xxs:text-xs sm:text-sm md:text-md leading-6 lg:text-lg">
                  I remember my <b><i>Thamma</i></b> (grandmother) making
                  <b><i>Katha</i></b> from old cotton sarees of her. She would
                  spend days stitching all the pieces of cloth together with her
                  hands with love and a lot of patience using running stitches and
                  give it to us saying
                  <i> &quot;eta katha na, eta amaar bhalobasha&quot;</i> (this is not just a
                  Katha, this is my love for you). And that&apos;s how i got introduced
                  to Running stitches.
                </p>
                <p className="xxs:text-xs sm:text-sm md:text-lg leading-6 lg:text-xl mt-2">
                  Incorporating the same affection and patience, I made this piece
                  combined with <b><i>block print</i></b>, hope you like it!!!
                </p>
              </div>
            </div>
          </section>

          {/* Exploration Section */}
          <section className="explorationSection md:h-[500px] lg:h-[600px] xl:h-[700px] w-full flex flex-col justify-center items-center mx-auto">
            <div className="explorationContainer md:h-[177px] lg:h-[207px] md:w-full lg:w-[70%] mx-auto flex justify-between gap-2">
              {explorationImages.map((image, index) => (
                <div
                  key={`exploration-${index}`}
                  className="h-full relative"
                  style={{ 
                    transform: image.scaleX ? `scaleX(${image.scaleX})` : 'none'
                  }}
                >
                  <Image
                    className="h-full w-auto object-contain"
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={207}
                  />
                </div>
              ))}
            </div>
            <h3 className="md:text-md lg:text-lg xl:text-xl font-display opacity-65 italic text-left md:w-full lg:w-[70%] mt-4">
              &quot;exploration&quot;
            </h3>
          </section>

          {/* Crop Top Section */}
          <section className="h-[90vh] md:h-[400px] lg:h-[500px] xl:h-[660px] w-full flex">
            <div className="h-full w-1/3 grid place-content-end">
              <h1 className="xl:w-[400px] md:w-[200px] text-right opacity-65 md:text-md lg:text-lg xl:text-xl italic font-sans mr-5">
                &quot;block printed sleeveless crop top with embroidery details&quot;
              </h1>
            </div>
            <div className="h-full w-2/3 relative">
              <Image
                className="object-contain"
                src="/src/project/surface work/3rd page/image.png"
                alt="Block printed crop top"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </section>

          {/* Front/Back Container Section - No Animations */}
          <section className="md:h-[575px] lg:h-[706px] xl:h-[1016px] w-full grid place-items-center mx-auto">
            <div className="frontBackContainer md:h-[250px] lg:h-[320px] xl:h-[400px] md:w-full flex gap-3 justify-center">
              {/* Image 1 - Front */}
              <div className="image5 md:w-[170px] lg:w-[238px] xl:w-[299px] w-[316px] h-full relative">
                <p className="md:text-md lg:text-lg xl:text-xl italic opacity-65 font-sans absolute -top-6 left-0">
                  front
                </p>
                <Image
                  className="object-cover"
                  src={frontBackImages[0].src}
                  alt={frontBackImages[0].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Image 2 */}
              <div className="w-[316px] md:w-[170px] lg:w-[238px] xl:w-[299px] h-full relative">
                <Image
                  className="object-cover mt-[200px]"
                  src={frontBackImages[1].src}
                  alt={frontBackImages[1].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Image 3 */}
              <div className="w-[316px] md:w-[170px] lg:w-[238px] xl:w-[299px] h-full relative">
                <Image
                  className="object-cover"
                  src={frontBackImages[2].src}
                  alt={frontBackImages[2].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Image 4 - Back */}
              <div className="image8 w-[316px] md:w-[187px] lg:w-[238px] xl:w-[299px] h-full relative">
                <Image
                  className="object-cover"
                  src={frontBackImages[3].src}
                  alt={frontBackImages[3].alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <p className="md:text-md lg:text-lg xl:text-xl italic opacity-65 font-sans text-right absolute -bottom-6 right-0">
                  back
                </p>
              </div>
            </div>
          </section>

          {/* Big Front/Back Section - No Animations */}
          <section className="h-screen md:h-[500px] xl:h-[700px] w-full flex justify-end items-start gap-5">
            {/* Big Front Container */}
            <div className="bigfrontContainer md:w-[55%] xl:w-[800px] md:h-[315px] lg:h-[420px] xl:h-[600px] relative overflow-hidden">
              <h1 className="text-lg italic opacity-65 font-sans m-4 absolute z-10">
                front
              </h1>
              <Image
                className="object-cover"
                src="/src/project/surface work/5th page/1.jpg"
                alt="Front view large"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Big Back Container */}
            <div className="bigBackContainer xl:w-[400px] md:w-[30%] md:h-[315px] lg:h-[420px] xl:h-[600px] relative overflow-hidden">
              <div className="h-full w-full grid place-content-end absolute border overflow-hidden">
                <h1 className="md:text-md lg:text-lg xl:text-xl italic opacity-65 font-sans text-right m-4 z-10">
                  back
                </h1>
              </div>
              <Image
                className="object-cover"
                src="/src/project/surface work/5th page/2.jpg"
                alt="Back view large"
                fill
                style={{ objectFit: 'cover' }}
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