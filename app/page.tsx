"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const heroImageWrapperRef = useRef<HTMLDivElement>(null);

  const initialTextRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);

  const [showGif, setShowGif] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);

  /* ---------------- HERO TIMELINE ---------------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(heroImageWrapperRef.current, {
        opacity: 0,
        y: 0,
      });

      tl.to(preloaderRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        onComplete: () => {
          if (preloaderRef.current) preloaderRef.current.style.display = "none";
        },
      })

        // match original 1000ms delay
        .to({}, { duration: 1 })

        // remove gif (react-safe)
        .call(() => setShowGif(false))

        // show hero image instantly
        .to(heroImageWrapperRef.current, {
          opacity: 1,
          duration: 0,
        })

        // move hero image (same values as original)
        .to(heroImageWrapperRef.current, {
          y: getHeroTranslateY(),
          duration: 0.4,
          ease: "power2.out",
        })

        // heading
        .from(
          ".shilpaHeading",
          {
            y: 300,
            opacity: 0,
            scale: 0.3,
            duration: 0.7,
          },
          "+=0.6",
        )

        // subheading
        .from(
          ".shilpaSubHeading",
          {
            y: -30,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.4",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- ABOUT TOGGLE ---------------- */
  const toggleAbout = () => {
    if (!aboutOpen) {
      gsap.to(initialTextRef.current, {
        y: 200,
        duration: 0.7,
        ease: "linear",
      });

      gsap.to(aboutTextRef.current, {
        y: 0,
        opacity: 0.7,
        duration: 0.7,
        ease: "linear",
      });
    } else {
      gsap.to(initialTextRef.current, {
        y: 0,
        duration: 0.7,
        ease: "linear",
      });

      gsap.to(aboutTextRef.current, {
        y: 200,
        opacity: 0,
        duration: 0.7,
        ease: "linear",
      });
    }

    setAboutOpen(!aboutOpen);
  };

  function getHeroTranslateY() {
    const w = window.innerWidth;
    if (w >= 1280) return 70;
    if (w >= 1024) return 50;
    if (w >= 768) return 40;
    if (w >= 640) return 30;
    return 20;
  }

  return (
    <section ref={rootRef} className="heroSection relative h-screen w-full">
      {/* PRELOADER */}
      <div
        ref={preloaderRef}
        className="absolute inset-0 z-50 flex items-center justify-center bg-white"
      >
        <div className="flex gap-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="wave" />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full overflow-hidden">
          {/* HERO GIF */}
          {showGif && (
            <div className="absolute bottom-0 w-full z-50 pointer-events-none">
              <Image
                src="/src/project/imges/heroImages/ezgif.com-animated-gif-maker(6).gif"
                alt="Hero GIF"
                width={1920}
                height={600}
                className="w-full mt-[20px]"
                priority
              />
            </div>
          )}

          {/* HERO IMAGE */}
          <div
            ref={heroImageWrapperRef}
            className="absolute bottom-0 w-full z-20 mt-[20px] pointer-events-none"
          >
            <Image
              src="/src/project/imges/heroImages/1-ux7OjOU39-transformed.png"
              alt="Hero"
              width={1920}
              height={600}
              className="w-full"
              priority
            />
          </div>

          {/* TEXT + LINKS */}
          <div className="absolute inset-0 flex flex-col">
            {/* HEADINGS */}
            <div className="h-1/2 w-full flex flex-col justify-center items-center z-10">
              <h1 className="shilpaHeading xxs:text-5xl xl:text-8xl font-sunroll text-mud">
                ShIlpa KIRtanIya
              </h1>
              <h1 className="xxs:text-lg sm:text-sm md:text-md lg:text-lg xl:text-xl text-center font-noto font-light italic text-mud xxs:w-[300px] xl:w-[550px] opacity-65 leading-5 shilpaSubHeading">
                Visual designer, Textile designer, Photographer
              </h1>
            </div>

            {/* LINKS CONTAINER */}
            <div className="linksContainer h-1/2 w-full flex">
              {/* LEFT */}
              <div className="h-full w-1/2 flex justify-start items-end relative">
                <div
                  ref={initialTextRef}
                  className="h-[80%] w-[70%] flex flex-col justify-end items-start absolute p-16 text-mud opacity-70"
                >
                  <h1 className="text-2xl font-noto font-bold">Hi there!</h1>
                  <h1 className="text-xl font-noto w-[90%] z-20">
                    I’m Shilpa, an interdisciplinary designer with a passion for
                    visual design, textile design, illustrations, and
                    photography.
                  </h1>
                </div>

                <div
                  ref={aboutTextRef}
                  className="h-[80%] w-[70%] text-mud flex flex-col opacity-0 justify-end items-start absolute p-16 translate-y-[200px]"
                >
                  <h1 className="text-4xl font-noto font-bold">Hi there!</h1>
                  <h1 className="text-xl font-noto w-[90%]">
                    I’m Shilpa, an interdisciplinary designer with a passion for
                    visual design, textile design, illustrations, and
                    photography. With close to a year of experience at the
                    zero-waste fashion brand IRO IRO, I've refined my skills in
                    visual design, product styling, textile design, and
                    photography.
                  </h1>
                  <h1 className="text-xl font-noto">
                    To view my resume, click{" "}
                    <a
                      href="https://drive.google.com/file/d/1I8Q9Df-FtAgqphl6XFNaU9qvoGy6MxL5/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline z-50 font-bold"
                    >
                      here
                    </a>
                  </h1>
                </div>
              </div>

              {/* RIGHT */}
              <div className="h-full w-1/2 flex flex-col justify-end items-end p-16">
                <a
                  href="/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xxs:text-xs xs:text-sm sm:text-md md:text-ld lg:text-2xl font-noto text-mud hover:underline z-30"
                >
                  Work
                </a>
                <button
                  onClick={toggleAbout}
                  className="xxs:text-xs xs:text-sm sm:text-md md:text-ld lg:text-2xl font-noto text-mud hover:underline z-30"
                >
                  About me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
