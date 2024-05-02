gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".grided1",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 0.5,
    repeatDelay: 2,
    repeat: -1,
    yoyo: true,
  }
);

gsap.fromTo(
  ".grided4",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.5,
    repeatDelay: 2,
    repeat: -1,
    yoyo: true,
  }
);

gsap.fromTo(
  ".grided3",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 0.5,
    repeatDelay: 2,
    repeat: -1,
    yoyo: true,
    delay: 1,
  }
);

gsap.fromTo(
  ".grided6",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.5,
    repeatDelay: 2,
    repeat: -1,
    yoyo: true,
    delay: 1,
  }
);

gsap.fromTo(
  ".grided2",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 0.5,
    repeatDelay: 2,
    repeat: -1,
    yoyo: true,
    delay: 2,
  }
);

gsap.fromTo(
  ".grided5",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 0.5,
    repeatDelay: 2,
    repeat: -1,
    yoyo: true,
    delay: 2,
  }
);

//page 5 animations

let mainPage = gsap.utils.toArray(".mainPage");
let page1 = gsap.utils.toArray(".page-1");
let page2 = gsap.utils.toArray(".page2");
let garments = gsap.utils.toArray(".garments");

// Define content arrays for each section
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

// Initialize index variable to 0
let currentIndex = 0;

// Remove existing scrollTrigger animations
gsap.set(mainPage, { opacity: 0 });
gsap.set(page1, { opacity: 0 });
gsap.set(page2, { opacity: 0 });

// Set initial opacity of first image to 1
gsap.set(mainPage[0], { opacity: 1 });
gsap.set(page1[0], { opacity: 1 });
gsap.set(page2[0], { opacity: 1 });
gsap.set(garments[0], { opacity: 0.7 });

// Add click event listener to section5
document.querySelector(".section5").addEventListener("click", function () {
  // Increment index and ensure it stays within bounds
  currentIndex = (currentIndex + 1) % mainPageContent.length;

  // Animate opacity of images based on currentIndex
  gsap.to(mainPage[currentIndex], { opacity: 1, duration: 0.5 });
  gsap.to(
    mainPage[currentIndex === 0 ? mainPage.length - 1 : currentIndex - 1],
    { opacity: 0, duration: 0.5 }
  );

  gsap.to(page1[currentIndex], { opacity: 1, duration: 0.5 });
  gsap.to(page1[currentIndex === 0 ? page1.length - 1 : currentIndex - 1], {
    opacity: 0,
    duration: 0.5,
  });

  gsap.to(page2[currentIndex], { opacity: 1, duration: 0.5 });
  gsap.to(page2[currentIndex === 0 ? page2.length - 1 : currentIndex - 1], {
    opacity: 0,
    duration: 0.5,
  });

  gsap.to(garments[currentIndex], { opacity: 0.7, duration: 0.5 });
  gsap.to(
    garments[currentIndex === 0 ? garments.length - 1 : currentIndex - 1],
    {
      opacity: 0,
      duration: 0.5,
    }
  );
});
// gsap.fromTo(
//   ".page1-1",
//   {
//     opacity: 1,
//   },
//   {
//     opacity: 0,
//     duration: 0.5,
//     repeatDelay: 10,
//     repeat: -1,
//     yoyo: true,
//     delay: 2,
//   }
// );

// gsap.fromTo(
//   ".page2-1",
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//     duration: 0.5,
//     repeatDelay: 10,
//     repeat: -1,
//     yoyo: true,
//     delay: 2,
//   }
// );

// gsap.fromTo(
//   ".page3-1",
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//     duration: 0.5,
//     repeatDelay: 10,
//     repeat: -1,
//     yoyo: true,
//     delay: 4,
//   }
// );

// gsap.fromTo(
//   ".page4-1",
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//     duration: 0.5,
//     repeatDelay: 10,
//     repeat: -1,
//     yoyo: true,
//     delay: 8,
//   }
// );

// gsap.fromTo(
//   ".page5-1",
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//     duration: 0.5,
//     repeatDelay: 10,
//     repeat: -1,
//     yoyo: true,
//     delay: 10,
//   }
// );

// gsap.fromTo(
//   ".page6-1",
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//     duration: 0.5,
//     repeatDelay: 10,
//     repeat: -1,
//     yoyo: true,
//     delay: 10,
//   }
// );
