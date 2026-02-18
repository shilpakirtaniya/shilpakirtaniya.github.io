"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "@/components/Preloader";
import ProjectFooter from "@/components/ProjectFooter";
import ProjectHeader from "@/components/ProjectHeader";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Image data for scroller
const scrollerImages = [
  { src: "/src/project/VILASITA/Page4/1.png", alt: "Vilasita pattern 1" },
  { src: "/src/project/VILASITA/Page4/2.png", alt: "Vilasita pattern 2" },
  { src: "/src/project/VILASITA/Page4/3.png", alt: "Vilasita pattern 3" },
  { src: "/src/project/VILASITA/Page4/4.png", alt: "Vilasita pattern 4" },
  { src: "/src/project/VILASITA/Page4/5.png", alt: "Vilasita pattern 5" },
  { src: "/src/project/VILASITA/Page4/6.png", alt: "Vilasita pattern 6" },
  { src: "/src/project/VILASITA/Page4/7.png", alt: "Vilasita pattern 7" },
  { src: "/src/project/VILASITA/Page4/8.png", alt: "Vilasita pattern 8" },
];

// Page 5 content arrays
const mainPageContent = [
  "/src/project/VILASITA/page 5/1.jpg",
  "/src/project/VILASITA/page 5/2.jpg",
  "/src/project/VILASITA/page 5/3.jpg",
  "/src/project/VILASITA/page 5/4.jpg",
  "/src/project/VILASITA/page 5/5.jpg",
];

const page1Content = [
  "/src/project/VILASITA/page 5/1.1.jpg",
  "/src/project/VILASITA/page 5/2.1.jpg",
  "/src/project/VILASITA/page 5/3.1.jpg",
  "/src/project/VILASITA/page 5/4.1.jpg",
  "/src/project/VILASITA/page 5/5.1.jpg",
];

const page2Content = [
  "/src/project/VILASITA/page 5/1.2.jpg",
  "/src/project/VILASITA/page 5/2.2.jpg",
  "/src/project/VILASITA/page 5/3.2.jpg",
  "/src/project/VILASITA/page 5/4.2.jpg",
  "/src/project/VILASITA/page 5/5.2.jpg",
];

const garmentNames = ["Nandita", "Shilpa", "Vishek", "Gauri", "Vibha"];

export default function VilasitaPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Refs for section5
  const section5Ref = useRef<HTMLElement>(null);
  const mainPageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const page1Refs = useRef<(HTMLDivElement | null)[]>([]);
  const page2Refs = useRef<(HTMLDivElement | null)[]>([]);
  const garmentsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Initialize animations
  useEffect(() => {
    if (!isLoading) {
      // Grid animations for page 1
      gsap.fromTo(
        ".grided1",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.5,
          repeatDelay: 2,
          repeat: -1,
          yoyo: true,
        },
      );

      gsap.fromTo(
        ".grided4",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          repeatDelay: 2,
          repeat: -1,
          yoyo: true,
        },
      );

      gsap.fromTo(
        ".grided3",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.5,
          repeatDelay: 2,
          repeat: -1,
          yoyo: true,
          delay: 1,
        },
      );

      gsap.fromTo(
        ".grided6",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          repeatDelay: 2,
          repeat: -1,
          yoyo: true,
          delay: 1,
        },
      );

      gsap.fromTo(
        ".grided2",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.5,
          repeatDelay: 2,
          repeat: -1,
          yoyo: true,
          delay: 2,
        },
      );

      gsap.fromTo(
        ".grided5",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          repeatDelay: 2,
          repeat: -1,
          yoyo: true,
          delay: 2,
        },
      );

      // Set initial opacity for page 5
      gsap.set(mainPageRefs.current, { opacity: 0 });
      gsap.set(page1Refs.current, { opacity: 0 });
      gsap.set(page2Refs.current, { opacity: 0 });
      gsap.set(garmentsRefs.current, { opacity: 0 });

      // Set initial opacity of first image to 1
      if (mainPageRefs.current[0])
        gsap.set(mainPageRefs.current[0], { opacity: 1 });
      if (page1Refs.current[0]) gsap.set(page1Refs.current[0], { opacity: 1 });
      if (page2Refs.current[0]) gsap.set(page2Refs.current[0], { opacity: 1 });
      if (garmentsRefs.current[0])
        gsap.set(garmentsRefs.current[0], { opacity: 0.7 });
    }
  }, [isLoading]);

  // Handle click on section5
  const handleSection5Click = () => {
    const nextIndex = (currentIndex + 1) % mainPageContent.length;

    // Animate mainPage images
    gsap.to(mainPageRefs.current[nextIndex], { opacity: 1, duration: 0.5 });
    gsap.to(mainPageRefs.current[currentIndex], { opacity: 0, duration: 0.5 });

    // Animate page1 images
    gsap.to(page1Refs.current[nextIndex], { opacity: 1, duration: 0.5 });
    gsap.to(page1Refs.current[currentIndex], { opacity: 0, duration: 0.5 });

    // Animate page2 images
    gsap.to(page2Refs.current[nextIndex], { opacity: 1, duration: 0.5 });
    gsap.to(page2Refs.current[currentIndex], { opacity: 0, duration: 0.5 });

    // Animate garments text
    gsap.to(garmentsRefs.current[nextIndex], { opacity: 0.7, duration: 0.5 });
    gsap.to(garmentsRefs.current[currentIndex], { opacity: 0, duration: 0.5 });

    setCurrentIndex(nextIndex);
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <ProjectHeader />

      <div className="order-content">
        <main className="font-calibri overflow-x-hidden">
          {/* Hero Section */}
          <section className="h-screen w-full border-black relative pt-[50px]">
            <div className="h-full w-full absolute flex flex-col justify-between p-10 z-10 text-white">
              <div className="h-[10%] w-full flex justify-between">
                <h1 className="font-calibri text-xl text-left w-[200px]">
                  A ready-to-wear collection.
                </h1>
                <h1 className="font-calibri bold text-xl">2021</h1>
                <h1 className="font-calibri text-xl text-right">
                  In collaboration with <br />
                  weavers of Gopalpur, Odisha
                </h1>
              </div>
              <h1 className="mainHeading font-sunroll text-9xl text-center">
                VIlaSITa
              </h1>
              <div className="h-[10vh] w-full"></div>
            </div>

            {/* Hero Images with CSS Animation */}
            <div className="h-full w-full absolute">
              <div className="relative h-full w-full overflow-hidden z-0 bg-black pointer-events-none">
                <Image
                  className="w-full absolute inset-0 object-cover animate-fadeLoop1"
                  src="/src/project/VILASITA/heroImages/1.png"
                  alt="Vilasita hero 1"
                  fill
                  priority
                />
                <Image
                  className="w-full absolute inset-0 object-cover animate-fadeLoop2"
                  src="/src/project/VILASITA/heroImages/2.png"
                  alt="Vilasita hero 2"
                  fill
                  priority
                />
                <Image
                  className="w-full absolute inset-0 object-cover animate-fadeLoop3"
                  src="/src/project/VILASITA/heroImages/3.png"
                  alt="Vilasita hero 3"
                  fill
                  priority
                />
              </div>
            </div>
          </section>

          {/* Section 1 - Description and Grid */}
          <section className="h-[1080px] w-full px-16 pt-16">
            <div className="h-full w-full">
              <div className="h-[10%] w-full mx-auto flex justify-between opacity-60">
                <h1 className="text-4xl font-sunroll">VIlaSITa</h1>
                <div className="flex gap-16">
                  <h1 className="w-[100px] font-bold text-right text-sm leading-4">
                    A ready-to-wear collection.
                  </h1>
                  <h1 className="w-[270px] font-bold text-right text-sm leading-4">
                    In collaboration with <br />
                    weavers of Gopalpur, Odisha
                  </h1>
                </div>
              </div>

              <div className="h-[90%] w-full">
                <div className="h-[40.5%] w-full flex flex-col justify-end font-light opacity-70">
                  <p className="w-[500px] text-justify text-lg leading-5 font-light">
                    Luxury is the epitome of great comfort, especially amidst
                    exquisite and expensive surroundings. This collection is
                    inspired by the antique possessions of Indian royalty and
                    their lavish lifestyle. It features objects of their
                    indulgence, reflecting the flamboyance of their lives.
                  </p>
                  <p className="w-[500px] text-justify text-lg leading-5 my-8">
                    Vilasita encapsulates the essence of ancient Indian luxury
                    and heritage, bringing relevance to opulent living. By
                    modernizing silhouettes and motifs, this timeless capsule
                    collection of women&apos;s wear embraces a subtle and earthy
                    color palette.
                  </p>
                </div>

                {/* Grid Images with GSAP animations */}
                <div className="h-[59.5%] w-full flex justify-start gap-5">
                  <div className="h-[480px] w-[320px] overflow-hidden relative bg-black">
                    <Image
                      className="absolute grided1 object-cover"
                      src="/src/project/VILASITA/Page 1/1.jpg"
                      alt="Vilasita grid 1"
                      fill
                    />
                    <Image
                      className="absolute grided4 object-cover"
                      src="/src/project/VILASITA/Page 1/4.jpg"
                      alt="Vilasita grid 4"
                      fill
                    />
                  </div>
                  <div className="h-[480px] w-[320px] overflow-hidden relative bg-black">
                    <Image
                      className="absolute grided2 object-cover"
                      src="/src/project/VILASITA/Page 1/2.jpg"
                      alt="Vilasita grid 2"
                      fill
                    />
                    <Image
                      className="absolute grided5 object-cover"
                      src="/src/project/VILASITA/Page 1/5.jpg"
                      alt="Vilasita grid 5"
                      fill
                    />
                  </div>
                  <div className="h-[480px] w-[320px] overflow-hidden relative bg-black">
                    <Image
                      className="absolute grided3 object-cover"
                      src="/src/project/VILASITA/Page 1/3.jpg"
                      alt="Vilasita grid 3"
                      fill
                    />
                    <Image
                      className="absolute grided6 object-cover"
                      src="/src/project/VILASITA/Page 1/6.jpg"
                      alt="Vilasita grid 6"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 - Mind Map and Mood Board */}
          <section className="3xl:h-[700px] 3xl:w-[1750px] mx-auto flex justify-between gap-5 items-center mt-20">
            <div className="h-full w-[55%]">
              <Image
                className="w-full"
                src="/src/project/VILASITA/Page 2/mind-map.png"
                alt="Vilasita mind map"
                width={962}
                height={700}
              />
            </div>
            <div className="h-full w-[45%]">
              <Image
                className="w-full"
                src="/src/project/VILASITA/Page 2/mood board 2.png"
                alt="Vilasita mood board"
                width={787}
                height={700}
              />
            </div>
          </section>

          {/* Section 3 - GIF */}
          <section className="h-[300px] w-full">
            <div className="gifDivision w-full h-full flex justify-center items-center">
              <Image
                className="w-[60%] mx-auto"
                src="/src/project/VILASITA/Page 3/1.gif"
                alt="Vilasita animated pattern"
                width={1050}
                height={300}
              />
            </div>
          </section>

          {/* Section 4 - CAD File */}
          <section className="h-[400px] w-full">
            <div className="h-full w-full flex flex-col justify-center items-center gap-2">
              <Image
                className="h-[70%] w-auto"
                src="/src/project/VILASITA/Page 3/2.png"
                alt="Vilasita CAD file"
                width={800}
                height={280}
              />
              <h1 className="text-xl text-center">
                After developing the motifs, they are placed on a CAD file to
                facilitate weaving for the artisans.
              </h1>
            </div>
          </section>

          {/* Section 5 - Weaving Technique */}
          <section className="h-[400px] w-full">
            <div className="h-full w-full flex flex-col justify-start items-center gap-2">
              <Image
                className="h-[80%] w-auto"
                src="/src/project/VILASITA/Page 3/3.png"
                alt="Vilasita weaving technique"
                width={800}
                height={320}
              />
              <h1 className="text-lg text-center">
                In Gopalpur, Odisha, weavers employ the extra weft technique to
                intricately weave the fabric.
              </h1>
            </div>
          </section>

          {/* Section 6 - Scroller */}
          {/* Section 6 - Infinite Scroller */}
          <section className="w-screen overflow-hidden scroller py-24">
            <div
              className="flex w-max gap-[1vw] animate-marquee"
              style={{ animationDuration: "35s" }}
            >
              {[...scrollerImages, ...scrollerImages].map((image, index) => (
                <div
                  key={`scroller-${index}`}
                  className="
          relative
          w-[10vw]
          min-w-[140px]
          h-[260px]
          shrink-0
        "
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 - Interactive Gallery */}
          <section
            ref={section5Ref}
            className="h-screen section5 w-full bg-vilasita bg-no-repeat bg-cover relative cursor-pointer"
            onClick={handleSection5Click}
          >
            <div className="h-full w-full flex container mx-auto">
              {/* Left Column - Main Images */}
              <div className="h-screen w-2/5 relative overflow-hidden">
                {mainPageContent.map((src, index) => (
                  <div
                    key={`main-${index}`}
                    ref={(el) => {
                      mainPageRefs.current[index] = el;
                    }}
                    className="h-full w-full mainPage absolute"
                  >
                    <Image
                      className="w-full object-cover scale-120"
                      src={src}
                      alt={`Vilasita look ${index + 1}`}
                      fill
                    />
                  </div>
                ))}
              </div>

              {/* Right Column - Details */}
              <div className="h-screen w-3/5 flex justify-center overflow-hidden items-center">
                <div className="h-[600px] w-[706px] absolute flex flex-col justify-between">
                  <h1 className="h-[10%] font-sunroll text-4xl text-white">
                    VIlaSITa
                  </h1>

                  <div className="h-[80%] w-full flex justify-between">
                    {/* Left Detail Images */}
                    <div className="h-full w-[45%] relative overflow-hidden">
                      {page1Content.map((src, index) => (
                        <div
                          key={`page1-${index}`}
                          ref={(el) => {
                            page1Refs.current[index] = el;
                          }}
                          className="h-full w-full page-1 absolute"
                        >
                          <Image
                            className="h-full object-cover"
                            src={src}
                            alt={`Vilasita detail ${index + 1}`}
                            fill
                          />
                        </div>
                      ))}
                    </div>

                    {/* Right Detail Images */}
                    <div className="h-full w-[45%] relative overflow-hidden">
                      {page2Content.map((src, index) => (
                        <div
                          key={`page2-${index}`}
                          ref={(el) => {
                            page2Refs.current[index] = el;
                          }}
                          className="h-full w-full page2 absolute"
                        >
                          <Image
                            className="h-full object-cover"
                            src={src}
                            alt={`Vilasita detail ${index + 1}`}
                            fill
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="h-[10%] w-full flex justify-between">
                    <h1 className="w-[45%] text-right text-white opacity-70 font-light text-xl py-2">
                      2021 S/S
                    </h1>

                    <div className="h-full w-[45%] relative">
                      {garmentNames.map((name, index) => (
                        <div
                          key={`garment-${index}`}
                          ref={(el) => {
                            garmentsRefs.current[index] = el;
                          }}
                          className="garments opacity-0 text-right w-full text-xl text-white font-thin py-2 leading-4 absolute"
                        >
                          <h1>Garment:</h1>
                          <h1>{name}</h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Click Hint */}
                <div className="absolute h-full w-full flex justify-center items-end">
                  <h1 className="w-full text-sm text-white font-light text-center mb-10 opacity-50">
                    click for more pictures
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer with Back Button */}
        <ProjectFooter />
      </div>
    </>
  );
}
