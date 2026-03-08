"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLSpanElement>(null);
  const nextRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const heroImageWrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("space");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const initialTextRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);

  const [showGif, setShowGif] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);

  const CYCLE_WORDS = ["space", "Portfolio", "Work"];

  /* ---------------- HERO TIMELINE ---------------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(preloaderRef.current, {
          opacity: 0,
          duration: 0.3,
          delay: 0.1,
          onComplete: () => {
            if (preloaderRef.current)
              preloaderRef.current.style.display = "none";
          },
        })
        .to({}, { duration: 0.8 })
        .to(topBarRef.current, { opacity: 1, duration: 0.5 })
        .fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.2",
        )
        .to(
          heroImageWrapperRef.current,
          { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        )
        .to(
          bottomBarRef.current,
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const word = CYCLE_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, 300);
      } else {
        // Pause at full word before deleting
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 60);
      } else {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % CYCLE_WORDS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  /* ---------------- ABOUT TOGGLE ---------------- */
  const toggleAbout = () => {
    if (!aboutOpen) {
      gsap.to(initialTextRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(aboutTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      });
    } else {
      gsap.to(aboutTextRef.current, {
        y: 10,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
      gsap.to(initialTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.15,
        ease: "power2.out",
      });
    }
    setAboutOpen(!aboutOpen);
  };

  useEffect(() => {
    const runCycle = () => {
      if (isAnimating) return;
      setIsAnimating(true);

      const next = (currentIndex + 1) % CYCLE_WORDS.length;
      setNextIndex(next);

      // position next word below
      gsap.set(nextRef.current, { y: "100%", opacity: 1 });

      // slide current out up, next in from below
      gsap.to(currentRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "power2.inOut",
      });

      gsap.to(nextRef.current, {
        y: "0%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(next);
          setIsAnimating(false);
        },
      });
    };

    const timeout = setTimeout(runCycle, 5000);
    return () => clearTimeout(timeout);
  }, [currentIndex, isAnimating]);

  // reset next word position whenever currentIndex updates
  useEffect(() => {
    gsap.set(currentRef.current, { y: "0%" });
    gsap.set(nextRef.current, { y: "100%", opacity: 0 });
  }, [currentIndex]);

  return (
    <section
      ref={rootRef}
      className="heroSection relative h-screen w-full overflow-hidden bg-bgsand "
    >
      {/* PRELOADER */}
      <div
        ref={preloaderRef}
        className="absolute inset-0 z-50 flex items-center justify-center bg-bgsand"
      >
        <div className="flex gap-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="wave" />
          ))}
        </div>
      </div>

      {/* ── TOP BAR ── */}
      <div
        ref={topBarRef}
        className="absolute top-0 left-0 right-0 z-30 flex items-start justify-between px-8 pt-6"
        style={{ opacity: 0 }}
      >
        {/* Logo / Icon — top left */}
        <div className="w-12 h-12">
          <Image
            src="/src/project/imges/heroImages/logo2.png"
            alt="Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Name — top right */}
        <p
          className="font-sunroll text-2xl tracking-wide font-bold"
          style={{ color: "#3B2A1A" }}
        >
          <span className="font-extrabold">Shilpa</span> Kirtaniya
        </p>
      </div>

      {/* ── HEADING ── */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-center pt-16 pointer-events-none">
        <h1
          ref={headingRef}
          className="font-arial text-center leading-tight text-7xl mt-24"
          style={{ color: "#3B2A1A", opacity: 0 }}
        >
          Hii welcome to my{" "}
          <span
            ref={containerRef}
            className="inline-block overflow-hidden align-bottom text-left relative"
            style={{
              height: "1.1em",
              minWidth: "7ch",
              verticalAlign: "bottom",
            }}
          >
            {/* current word */}
            <span
              ref={currentRef}
              className="absolute left-0 bottom-0 w-full"
              style={{ display: "block", lineHeight: "1.1em" }}
            >
              {CYCLE_WORDS[currentIndex]}
            </span>

            {/* next word (waiting below) */}
            <span
              ref={nextRef}
              className="absolute left-0 bottom-0 w-full"
              style={{
                display: "block",
                lineHeight: "1.1em",
                transform: "translateY(100%)",
                opacity: 0,
              }}
            >
              {CYCLE_WORDS[nextIndex]}
            </span>
          </span>
        </h1>
      </div>

      {/* ── CENTRE ILLUSTRATION (GIF → static image) ── */}
      <div
        ref={heroImageWrapperRef}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0, scale: "0.96" }}
      >
        {showGif ? (
          /* GIF — plays once then we swap to static */
          <img
            src="/src/project/imges/heroImages/cover-page-animation.gif"
            alt="Hero illustration"
            className="object-contain max-h-full"
            /* swap to static after one loop — use onLoad + CSS trick */
            style={{ animationIterationCount: 1 }}
            onLoad={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              // After the gif's natural duration swap to static
              // We listen to animation end on the element if possible,
              // otherwise fall back to a timeout matching typical gif length
              const timeout = setTimeout(() => setShowGif(false), 3000);
              img.addEventListener("animationend", () => {
                clearTimeout(timeout);
                setShowGif(false);
              });
            }}
          />
        ) : (
          <img
            src="/src/project/imges/heroImages/bg.gif"
            alt="Hero illustration"
            className="object-contain max-h-full"
          />
        )}
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        ref={bottomBarRef}
        className="absolute bottom-0 left-0 right-0 z-30 flex items-end justify-between px-10 pb-10"
        style={{ opacity: 0 }}
      >
        {/* ── LEFT: bio text (initial + about) ── */}
        <div className="relative w-[45%] max-w-xs">
          {/* Initial short bio */}
          <div
            ref={initialTextRef}
            className="absolute bottom-0"
            style={{ color: "#3B2A1A" }}
          >
            <p className="font-noto font-bold text-xl leading-snug">
              I'm Shilpa,
            </p>
            <p className="font-noto font-light text-lg leading-snug opacity-80 mt-0.5">
              a communication and visual designer with 2+ years of experience
              turning ideas into campaigns, editorial layouts, and digital
              visuals.
            </p>
          </div>

          {/* Extended about text */}
          <div
            ref={aboutTextRef}
            className="absolute bottom-0 opacity-0 translate-y-[10px]"
            style={{ color: "#3B2A1A" }}
          >
            <p className="font-noto font-bold text-xl leading-snug">
              Hi there!
            </p>
            <p className="font-noto text-lg leading-snug opacity-80 mt-1">
              I’m Shilpa, a communication and visual designer who enjoys
              translating ideas into clear and engaging visuals. I studied
              design at the National Institute of Fashion Technology (NIFT),
              where I developed a strong interest in visual storytelling and
              editorial layouts. With 2+ years of experience, I’ve worked across
              campaigns, digital content, and motion design, building visual
              systems that help brands communicate consistently and creatively.
            </p>
            <p className="font-noto text-lg mt-2 opacity-80">
              To view my resume, click{" "}
              <a
                href="https://drive.google.com/file/d/1I8Q9Df-FtAgqphl6XFNaU9qvoGy6MxL5/view"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline"
              >
                here
              </a>
            </p>
          </div>
        </div>

        {/* ── RIGHT: nav links ── */}
        <div className="flex flex-col items-end gap-1">
          <a
            href="/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="font-noto text-2xl font-semibold hover:underline underline-offset-4"
            style={{ color: "#3B2A1A" }}
          >
            Projects
          </a>
          <button
            onClick={toggleAbout}
            className="font-noto text-2xl font-semibold hover:underline underline-offset-4 text-right"
            style={{ color: "#3B2A1A" }}
          >
            About{" "}
            <span className={aboutOpen ? "font-bold" : "font-normal"}>me</span>
          </button>
        </div>
      </div>
    </section>
  );
}
