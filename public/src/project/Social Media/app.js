gsap.registerPlugin(ScrollTrigger);

const loader = document.getElementById("preloader");
const orderContent = document.querySelectorAll(".order-content");

// Hide all order content initially
orderContent.forEach((content) => {
  content.style.display = "none";
});

window.addEventListener("load", function () {
  // Hide the preloader
  loader.style.display = "none";

  // Show all order content once the preloader is hidden
  orderContent.forEach((content) => {
    content.style.display = "block";
  });
  gsap.from(".s", {
    y: 400,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".edition",
      start: "top 70%",
      end: "bottom 0%",
      // markers: true,
      ease: "power1.out",
      toggleActions: "play none play reverse",
    },
  });
  gsap.from(".o", {
    y: 400,
    duration: 0.5,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".edition",
      start: "top 70%",
      end: "bottom 0%",
      // markers: true,
      ease: "power1.out",
      toggleActions: "play none play reverse",
    },
  });
  gsap.from(".c", {
    y: 400,
    duration: 0.5,
    delay: 0.4,
    scrollTrigger: {
      trigger: ".edition",
      start: "top 70%",
      end: "bottom 0%",
      // markers: true,
      ease: "power1.out",
      toggleActions: "play none play reverse",
    },
  });

  gsap.from(".i", {
    y: 400,
    duration: 0.5,
    delay: 0.6,
    scrollTrigger: {
      trigger: ".edition",
      start: "top 70%",
      end: "bottom 0%",
      // markers: true,
      ease: "power1.out",
      toggleActions: "play none play reverse",
    },
  });

  gsap.from(".a", {
    y: 400,
    duration: 0.5,
    delay: 0.7,
    scrollTrigger: {
      trigger: ".edition",
      start: "top 70%",
      end: "bottom 0%",
      // markers: true,
      ease: "power1.out",
      toggleActions: "play none play reverse",
    },
  });

  gsap.from(".l", {
    y: 400,
    duration: 0.5,
    delay: 0.9,
    scrollTrigger: {
      trigger: ".edition",
      start: "top 70%",
      end: "bottom 0%",
      // markers: true,
      ease: "power1.out",
      toggleActions: "play none play reverse",
    },
  });

  gsap.from(".m", {
    y: 400,
    duration: 0.5,
    delay: 0.93,
    scrollTrigger: {
      trigger: ".edition",
      start: "top 70%",
      end: "bottom 0%",
      // markers: true,
      ease: "power1.out",
      toggleActions: "play none play reverse",
    },
  });

  gsap.from(".e", {
    y: 400,
    duration: 0.5,
    delay: 0.95,
    scrollTrigger: {
      trigger: ".edition",
      start: "top 70%",
      end: "bottom 0%",
      // markers: true,
      ease: "power1.out",
      toggleActions: "play none play reverse",
    },
  });

  gsap.from(".d", {
    y: 400,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
      trigger: ".edition",
      start: "top 70%",
      end: "bottom 0%",
      // markers: true,
      ease: "power1.out",
      toggleActions: "play none play reverse",
    },
  });

  gsap.fromTo(
    ".subheading1",
    {
      opacity: 0,
    },
    {
      y: () => {
        // Calculate the y value based on screen width
        const screenWidth = window.innerWidth;
        // Define different y values based on screen width
        if (screenWidth >= 1280) {
          return 180; // Value for larger screens
        } else if (screenWidth >= 1024) {
          return 100; // Value for medium screens
        } else if (screenWidth >= 768) {
          return 80; // Value for smaller screens
        }
      },
      opacity: 0.7,
      duration: 0.7,
      delay: 0.6,
      scrollTrigger: {
        trigger: ".edition",
        start: "top 70%",
        end: "bottom 0%",
        // markers: true,
        ease: "power1.out",
        toggleActions: "play none play reverse",
      },
    }
  );
  gsap.to(".imageFrame", {
    scrollTrigger: {
      trigger: ".imageFrame",
      endTrigger: ".secondGroup",
      start: "center 50%",
      end: "+=150%",
      // markers: true,
      ease: "power1.out",
      pin: true,
      pinSpacing: true,
      toggleActions: "play reverse play reverse",
    },
  });

  let masks1 = gsap.utils.toArray(".img-mask1");
  let masks2 = gsap.utils.toArray(".img-mask2");
  let masks3 = gsap.utils.toArray(".img-mask3");

  gsap.fromTo(
    masks1[1],
    { y: 500 },
    {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".revealer1",
        start: "center 50%",
        end: "+=100%",
        scrub: 0.5,
        // markers: true,
      },
    }
  );

  gsap.fromTo(
    masks2[1],
    { y: 500 },
    {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".revealer1",
        start: "center 50%",
        end: "+=100%",

        scrub: 0.5,
        // markers: true,
      },
    }
  );
  gsap.fromTo(
    masks3[1],
    { y: 500 },
    {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".revealer1",
        start: "center 50%",
        end: "+=100%",

        scrub: 0.5,
        // markers: true,
      },
    }
  );

  // instapost animations
  gsap.to(".instapost1", {
    scrollTrigger: {
      trigger: ".instaContainer",
      start: "top  0%",
      end: "+=200%",
      // markers: true,
      ease: "power1.out",
      pin: true,
      pinSpacing: true,
      toggleActions: "play reverse play reverse",
    },
  });

  let masks4 = gsap.utils.toArray(".img-mask4");
  let masks5 = gsap.utils.toArray(".img-mask5");

  // Animation for mask4[1]
  gsap.fromTo(
    masks4[1],
    { x: 600 },
    {
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".instaContainer",
        start: "top 0%", // Start animation when the trigger is halfway in the viewport
        end: "+=100%", // End animation after scrolling 100% of the viewport height

        scrub: 0.5,
        // markers: true,
      },
    }
  );

  // Animation for mask4[2]
  gsap.fromTo(
    masks4[2],
    { x: 1200 },
    {
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".instaContainer",
        start: "top 0%", // Start animation when the trigger is fully in the viewport
        end: "+=200%", // End animation after scrolling another 100% of the viewport height

        scrub: 0.5,
        // markers: true,
      },
    }
  );

  gsap.fromTo(
    masks5[1],
    { x: 600 },
    {
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".instaContainer",
        start: "top 0%", // Start animation when the trigger is halfway in the viewport
        end: "+=100%", // End animation after scrolling 100% of the viewport height

        scrub: 0.5,
        // markers: true,
      },
    }
  );

  // Animation for mask4[2]
  gsap.fromTo(
    masks5[2],
    { x: 1200 },
    {
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".instaContainer",
        start: "top 0%", // Start animation when the trigger is fully in the viewport
        end: "+=200%", // End animation after scrolling another 100% of the viewport height

        scrub: 0.5,
        // markers: true,
      },
    }
  );

  gsap.fromTo(
    ".grid1",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 1.5,
      repeatDelay: 4,
      repeat: -1,
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".grid3",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 1.5,
      repeatDelay: 4,
      repeat: -1,
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".grid2",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      repeatDelay: 4,
      repeat: -1,
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".grid4",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.5,
      repeatDelay: 4,
      repeat: -1,
      yoyo: true,
    }
  );
});
