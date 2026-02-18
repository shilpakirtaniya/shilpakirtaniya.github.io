'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from '@/components/Preloader';
import ProjectFooter from '@/components/ProjectFooter';
import ProjectHeader from '@/components/ProjectHeader';
// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SocialMediaPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Refs for animations
  const editionRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const secondGroupRef = useRef<HTMLElement>(null);
  const revealer1Ref = useRef<HTMLDivElement>(null);
  const revealer2Ref = useRef<HTMLDivElement>(null);
  const revealer3Ref = useRef<HTMLDivElement>(null);
  const instaContainerRef = useRef<HTMLElement>(null);
  const grid1Ref = useRef<HTMLImageElement>(null);
  const grid2Ref = useRef<HTMLImageElement>(null);
  const grid3Ref = useRef<HTMLImageElement>(null);
  const grid4Ref = useRef<HTMLImageElement>(null);

  // Refs for letter elements
  const letterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Refresh ScrollTrigger after content is loaded
      ScrollTrigger.refresh();
      
      // Letter animations with ScrollTrigger
      const letters = letterRefs.current.filter(Boolean);
      letters.forEach((letter, index) => {
        gsap.from(letter, {
          y: 400,
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: editionRef.current,
            start: 'top 70%',
            end: 'bottom 0%',
            toggleActions: 'play none play reverse',
          },
        });
      });

      // Subheading animation
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0 },
        {
          y: () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1280) return 180;
            if (screenWidth >= 1024) return 100;
            if (screenWidth >= 768) return 80;
            return 60;
          },
          opacity: 0.7,
          duration: 0.7,
          delay: 0.6,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: editionRef.current,
            start: 'top 70%',
            end: 'bottom 0%',
            toggleActions: 'play none play reverse',
          },
        }
      );

      // Pin imageFrame animation - FIXED: ease moved outside scrollTrigger
      if (imageFrameRef.current && secondGroupRef.current) {
        gsap.to(imageFrameRef.current, {
          scrollTrigger: {
            trigger: imageFrameRef.current,
            endTrigger: secondGroupRef.current,
            start: 'center 50%',
            end: '+=150%',
            pin: true,
            pinSpacing: true,
            toggleActions: 'play reverse play reverse',
          },
          ease: 'power1.out', // Moved ease here
        });
      }

      // Revealer animations - FIXED: scrub property is correct, no ease needed inside scrollTrigger
      const masks1 = document.querySelectorAll('.img-mask1');
      const masks2 = document.querySelectorAll('.img-mask2');
      const masks3 = document.querySelectorAll('.img-mask3');

      if (masks1.length > 1 && revealer1Ref.current) {
        gsap.fromTo(
          masks1[1],
          { y: 500 },
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: revealer1Ref.current,
              start: 'center 50%',
              end: '+=100%',
              scrub: 0.5,
            },
          }
        );
      }

      if (masks2.length > 1 && revealer2Ref.current) {
        gsap.fromTo(
          masks2[1],
          { y: 500 },
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: revealer1Ref.current,
              start: 'center 50%',
              end: '+=100%',
              scrub: 0.5,
            },
          }
        );
      }

      if (masks3.length > 1 && revealer3Ref.current) {
        gsap.fromTo(
          masks3[1],
          { y: 500 },
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: revealer1Ref.current,
              start: 'center 50%',
              end: '+=100%',
              scrub: 0.5,
            },
          }
        );
      }

      // Pin instaContainer animation - FIXED: ease moved outside scrollTrigger
      if (instaContainerRef.current) {
        gsap.to(instaContainerRef.current, {
          scrollTrigger: {
            trigger: instaContainerRef.current,
            start: 'top 0%',
            end: '+=200%',
            pin: true,
            pinSpacing: true,
            toggleActions: 'play reverse play reverse',
          },
          ease: 'power1.out', // Moved ease here
        });
      }

      // Instagram post animations
      const masks4 = document.querySelectorAll('.img-mask4');
      const masks5 = document.querySelectorAll('.img-mask5');

      if (masks4.length > 1) {
        gsap.fromTo(
          masks4[1],
          { x: 600 },
          {
            x: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: instaContainerRef.current,
              start: 'top 0%',
              end: '+=100%',
              scrub: 0.5,
            },
          }
        );

        if (masks4.length > 2) {
          gsap.fromTo(
            masks4[2],
            { x: 1200 },
            {
              x: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: instaContainerRef.current,
                start: 'top 0%',
                end: '+=200%',
                scrub: 0.5,
              },
            }
          );
        }
      }

      if (masks5.length > 1) {
        gsap.fromTo(
          masks5[1],
          { x: 600 },
          {
            x: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: instaContainerRef.current,
              start: 'top 0%',
              end: '+=100%',
              scrub: 0.5,
            },
          }
        );

        if (masks5.length > 2) {
          gsap.fromTo(
            masks5[2],
            { x: 1200 },
            {
              x: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: instaContainerRef.current,
                start: 'top 0%',
                end: '+=200%',
                scrub: 0.5,
              },
            }
          );
        }
      }

      // Grid animations
      if (grid1Ref.current && grid2Ref.current) {
        gsap.fromTo(
          grid1Ref.current,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 1.5,
            repeatDelay: 4,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          }
        );

        gsap.fromTo(
          grid2Ref.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            repeatDelay: 4,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          }
        );
      }

      if (grid3Ref.current && grid4Ref.current) {
        gsap.fromTo(
          grid3Ref.current,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 1.5,
            repeatDelay: 4,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          }
        );

        gsap.fromTo(
          grid4Ref.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            repeatDelay: 4,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          }
        );
      }

      // Refresh ScrollTrigger after all animations are set up
      ScrollTrigger.refresh();
    }

    return () => {
      // Clean up ScrollTrigger on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoading]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <ProjectHeader />

      <div className="order-content">
        {/* Hero Section */}
        <section className="w-full md:h-[300px] xl:h-[500px] bg-header1 bg-cover bg-no-repeat flex justify-center items-end pt-[50px]">
          <div className="md:h-[300px] xl:h-[500px] md:w-[470px] lg:w-[600px] xl:w-[1050px] relative">
            <div
              ref={editionRef}
              className="h-full md:text-[150px] lg:text-[200px] xl:text-[370px] w-full flex justify-center font-edition overflow-hidden opacity-50 absolute"
            >
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[0] = el; }}>S</div>
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[1] = el; }}>0</div>
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[2] = el; }}>C</div>
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[3] = el; }}>I</div>
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[4] = el; }}>A</div>
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[5] = el; }}>L</div>
              <div className="h-full w-[8.333%]"></div>
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[6] = el; }}>M</div>
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[7] = el; }}>E</div>
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[8] = el; }}>D</div>
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[9] = el; }}>I</div>
              <div className="h-full flex items-center" ref={(el) => { letterRefs.current[10] = el; }}>A</div>
            </div>
            <div className="h-full w-full absolute flex justify-start items-center">
              <h1
                ref={subheadingRef}
                className="subheading1 font-calibri md:text-md lg:text-lg xl:text-xl ml-10"
              >
                Designed for IRO IRO
              </h1>
            </div>
          </div>
        </section>

        <main className="container max-w-screen-2xl mx-auto">
          {/* Description Section */}
          <section className="h-[400px] w-full flex justify-center items-center">
            <div className="md:w-[670px] lg:w-[900px] xl:w-[1100px] mx-auto">
              <h1 className="text-[18px] leading-6 w-[700px] max-w-full">
                Throughout my tenure at IRO IRO, my main role centered around
                visual/graphic design. I played a crucial part in crafting the
                brand&apos;s social media and website graphics. This encompassed
                designing grid layouts, individual posts, and engaging stories for
                their social media platforms. Additionally, I contributed to the
                development of visual elements for their website. When working on
                the brand&apos;s social media, my primary consideration was maintaining
                a focus on fostering community engagement while highlighting their
                products and inspirations.
                <p className="font-bold mt-2">
                  Below, you&apos;ll find some of the social media creatives I produced
                  for the brand.
                </p>
              </h1>
            </div>
          </section>

          {/* Image Frame Section - Pinned */}
          <section ref={secondGroupRef} className="h-[150vh] w-full mx-auto">
            <div
              ref={imageFrameRef}
              className="imageFrame md:h-[293px] md:w-[670px] lg:h-[387px] lg:w-[900px] xl:h-[473px] xl:w-[1100px] mx-auto bg-background1 bg-cover flex justify-center items-center md:gap-10 lg:gap-11 3xl:gap-28"
            >
              {/* Revealer 1 */}
              <div
                ref={revealer1Ref}
                className="revealer1 md:h-[250px] md:w-[150px] lg:h-[300px] lg:w-[180px] xl:h-[335px] xl:w-[202px] shadow-xl relative overflow-hidden"
              >
                <div className="img-mask1 absolute h-full w-full flex justify-center">
                  <Image
                    src="/src/project/Social Media/page 1/1/1.jpeg"
                    alt="Social media post 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="img-mask1 absolute h-full w-full flex justify-center">
                  <Image
                    src="/src/project/Social Media/page 1/2/1.png"
                    alt="Social media post 1 alternate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Revealer 2 */}
              <div
                ref={revealer2Ref}
                className="revealer2 md:h-[250px] md:w-[150px] lg:h-[300px] lg:w-[180px] xl:h-[335px] xl:w-[202px] shadow-xl relative overflow-hidden"
              >
                <div className="img-mask2 absolute h-full w-full flex justify-center">
                  <Image
                    src="/src/project/Social Media/page 1/1/2.png"
                    alt="Social media post 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="img-mask2 absolute h-full w-full flex justify-center">
                  <Image
                    src="/src/project/Social Media/page 1/2/2.png"
                    alt="Social media post 2 alternate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Revealer 3 */}
              <div
                ref={revealer3Ref}
                className="revealer3 md:h-[250px] md:w-[150px] lg:h-[300px] lg:w-[180px] xl:h-[335px] xl:w-[202px] shadow-xl relative overflow-hidden"
              >
                <div className="img-mask3 absolute h-full w-full flex justify-center">
                  <Image
                    src="/src/project/Social Media/page 1/1/3.png"
                    alt="Social media post 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="img-mask3 absolute h-full w-full flex justify-center">
                  <Image
                    src="/src/project/Social Media/page 1/2/3.png"
                    alt="Social media post 3 alternate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="secondGroup h-[100vh] w-full"></section>

          {/* Instagram Posts Section - Pinned */}
          <section
            ref={instaContainerRef}
            className="instaContainer xxs:h-[100vh] w-full flex justify-center items-center"
          >
            {/* Instagram Post 1 */}
            <div className="instapost1 md:h-[360px] md:w-[360px] lg:h-[470px] lg:w-[470px] xl:h-[600px] xl:w-[600px] relative">
              <Image
                className="absolute md:ml-[-3px] lg:ml-[-4px] xl:ml-[-5px]"
                src="/src/project/Social Media/page 2/73 no background.png"
                alt="Instagram frame"
                fill
                style={{ objectFit: 'contain' }}
              />
              <div className="h-full w-full absolute flex justify-center md:pt-[45px] lg:pt-[58px] xl:pt-[80px]">
                <div className="h-[74%] w-[65%] relative overflow-hidden">
                  <div className="w-full h-full img-mask4 absolute">
                    <Image
                      className="object-cover"
                      src="/src/project/Social Media/page 2/left image/cover shot.jpg"
                      alt="Instagram post left 1"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="w-full h-full img-mask4 absolute">
                    <Image
                      className="object-cover"
                      src="/src/project/Social Media/page 2/left image/2.png"
                      alt="Instagram post left 2"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="w-full h-full img-mask4 absolute">
                    <Image
                      className="object-cover"
                      src="/src/project/Social Media/page 2/left image/3.png"
                      alt="Instagram post left 3"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Post 2 */}
            <div className="instapost2 md:h-[360px] md:w-[360px] lg:h-[470px] lg:w-[470px] xl:h-[600px] xl:w-[600px] relative">
              <Image
                className="absolute md:ml-[-3px] lg:ml-[-4px] xl:ml-[-5px]"
                src="/src/project/Social Media/page 2/73 no background.png"
                alt="Instagram frame"
                fill
                style={{ objectFit: 'contain' }}
              />
              <div className="h-full w-full absolute flex justify-center md:pt-[45px] lg:pt-[58px] xl:pt-[80px]">
                <div className="h-[74%] w-[65%] relative overflow-hidden">
                  <div className="w-full h-full img-mask5 absolute">
                    <Image
                      className="object-cover"
                      src="/src/project/Social Media/page 2/right image/2 page image 1 right.png"
                      alt="Instagram post right 1"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="w-full h-full img-mask5 absolute">
                    <Image
                      className="object-cover"
                      src="/src/project/Social Media/page 2/right image/2 page image 2 right.png"
                      alt="Instagram post right 2"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="w-full h-full img-mask5 absolute">
                    <Image
                      className="object-cover"
                      src="/src/project/Social Media/page 2/right image/2 page image 3right.png"
                      alt="Instagram post right 3"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Grid Container Section */}
          <section className="gridContainer md:h-[500px] lg:h-[600px] xl:h-[700px] w-full flex flex-col justify-center items-center">
            <div className="h-[90%] w-full flex justify-center items-center">
              <div className="md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[600px] xl:w-[600px] relative">
                <Image
                  ref={grid2Ref}
                  className="grid2 absolute"
                  src="/src/project/Social Media/page 3/2 grid/final grid 1.png"
                  alt="Instagram grid 1"
                  fill
                  style={{ objectFit: 'contain' }}
                />
                <Image
                  ref={grid1Ref}
                  className="grid1 absolute"
                  src="/src/project/Social Media/page 3/1 grid/final grid 2.png"
                  alt="Instagram grid 2"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] xl:h-[600px] xl:w-[600px] relative">
                <Image
                  ref={grid4Ref}
                  className="grid4 absolute"
                  src="/src/project/Social Media/page 3/2 grid/final grid 3.png"
                  alt="Instagram grid 3"
                  fill
                  style={{ objectFit: 'contain' }}
                />
                <Image
                  ref={grid3Ref}
                  className="grid3 absolute"
                  src="/src/project/Social Media/page 3/1 grid/final grid 4.png"
                  alt="Instagram grid 4"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <h1 className="text-md text-center font-thin font-sans opacity-70">
              &quot;Instagram Grid designed for IRO IRO showcasing their annual
              collection PYAAR 23.&quot;
            </h1>
          </section>
        </main>

        {/* Footer with Back Button */}
        <ProjectFooter />
      </div>
    </>
  );
}