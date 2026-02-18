"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Preloader from "@/components/Preloader";
import ProjectFooter from "@/components/ProjectFooter";
import ProjectHeader from "@/components/ProjectHeader";

// Image data for the scroller
const scrollerImages = [
  {
    src: "/src/project/for IRO IRO/hero images/1.png",
    alt: "IRO IRO Pyaar collection 1",
  },
  {
    src: "/src/project/for IRO IRO/hero images/2.png",
    alt: "IRO IRO Pyaar collection 2",
  },
  {
    src: "/src/project/for IRO IRO/hero images/3.png",
    alt: "IRO IRO Pyaar collection 3",
  },
  {
    src: "/src/project/for IRO IRO/hero images/4.png",
    alt: "IRO IRO Pyaar collection 4",
  },
  {
    src: "/src/project/for IRO IRO/hero images/5.png",
    alt: "IRO IRO Pyaar collection 5",
  },
];

// Lookbook pages
const lookbookPages = [
  { src: "/src/project/imges/1.png", alt: "Lookbook page 1" },
  { src: "/src/project/imges/2.png", alt: "Lookbook page 2" },
  { src: "/src/project/imges/3.png", alt: "Lookbook page 3" },
  { src: "/src/project/imges/4.png", alt: "Lookbook page 4" },
  { src: "/src/project/imges/5.png", alt: "Lookbook page 5" },
  { src: "/src/project/imges/6.png", alt: "Lookbook page 6" },
  { src: "/src/project/imges/7.png", alt: "Lookbook page 7" },
  { src: "/src/project/imges/8.png", alt: "Lookbook page 8" },
  { src: "/src/project/imges/9.png", alt: "Lookbook page 9" },
  { src: "/src/project/imges/10.png", alt: "Lookbook page 10" },
];

export default function IroIroLookbookPage() {
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
      <section className="w-screen overflow-hidden pt-[50px]">
        <div className="flex w-max animate-marquee gap-2">
          {[...scrollerImages, ...scrollerImages].map((image, index) => (
            <div
              key={`scroller-${index}`}
              className="
          relative
          xxs:w-[340px]
          sm:w-[460px]
          md:w-[500px]
          2xl:w-[665px]
          h-[244px]
          sm:h-[307px]
          md:h-[333px]
          4xl:h-[443px]
          shrink-0
        "
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="container max-w-screen-xl w-full mx-auto z-0">
        <div className="block">
          {/* Scroller Section */}

          {/* Main Heading Section */}
          <section className="h-[40vh] w-full gap-5 text-center flex flex-col justify-center items-center">
            <h3 className="xxs:text-xs sm:text-sm md:text-md lg:text-lg font-display italic opacity-65">
              lookbook
            </h3>
            <h1 className="xxs:text-lg xs:text-xl sm:text-2xl lg:text-3xl font-noto font-semibold opacity-70">
              IRO IRO&apos;s annual collection- Pyaar
            </h1>
            <h3 className="text-sm font-sans opacity-65 xxs:w-[340px] sm:w-[460px] lg:w-[576px] xl:w-[720px] 2xl:w-[900px]">
              The lookbook and accompanying collateral showcase IRO IRO&apos;s
              annual collection, &quot;Pyaar&quot;, Inspired by the
              relationships that fuels creativity. the collection encapsulates a
              sense of familiarity and nostalgia, resonating deeply with the
              audience.
            </h3>
          </section>

          {/* Lookbook Pages Section */}
          <section className="bg-grey pb-[200px] w-full pt-[80px]">
            <div className="xxs:w-[340px] sm:w-[460px] lg:w-[576px] xl:w-[720px] 2xl:w-[900px] mx-auto">
              <h3 className="text-sm font-sans italic opacity-65 mb-5">
                Several pages from the lookbook.
              </h3>
            </div>

            {lookbookPages.map((page, index) => (
              <div
                key={`lookbook-page-${index}`}
                className="xxs:w-[340px] sm:w-[460px] lg:w-[576px] xl:w-[720px] 2xl:w-[900px] mx-auto mb-10"
              >
                <Image
                  src={page.src}
                  alt={page.alt}
                  width={900}
                  height={600}
                  className="w-full h-auto"
                  priority={index < 2}
                />
              </div>
            ))}

            <div className="xxs:w-[340px] sm:w-[460px] lg:w-[576px] xl:w-[720px] 2xl:w-[900px] mx-auto mt-20">
              <h3 className="text-sm text-center font-sans italic opacity-65">
                Softwares used: Adobe InDesign, Adobe Photoshop
              </h3>
            </div>
          </section>

          {/* Back Button Section */}
          <ProjectFooter />
        </div>
      </div>
    </>
  );
}
