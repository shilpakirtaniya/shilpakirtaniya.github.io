"use client";

import Image from "next/image";

// Replace these src values with your actual image paths
const newsletters = [
  {
    id: 1,
    src: "/images/newsletter-1.jpg",
    alt: "Save the Date – Fall Winter newsletter",
  },
  {
    id: 2,
    src: "/images/newsletter-2.jpg",
    alt: "Fall Winter 2025 Drop 1 newsletter",
  },
  {
    id: 3,
    src: "/images/newsletter-3.jpg",
    alt: "Mommy & Me newsletter",
  },
  {
    id: 4,
    src: "/images/newsletter-4.jpg",
    alt: "Warm & Comfy newsletter",
  },
  {
    id: 5,
    src: "/images/newsletter-5.jpg",
    alt: "Mindful Mama Giveaway newsletter",
  },
  {
    id: 6,
    src: "/images/newsletter-6.jpg",
    alt: "Organic Rompers newsletter",
  },
];

export default function Emailers() {
  // Heights that mirror the staggered card lengths in the reference image
  const cardHeights = [520, 480, 500, 540, 460, 510];

  // Subtle rotations to give the slight perspective tilt seen in the reference
  const cardRotations = [-1.5, -0.5, 0.3, 0, 0.8, 1.2];

  return (
     <div className='w-full h-full '>
      <img src="/src/project/launch-campaign/buttons/newsletter/FINAL-05.png" alt="" className='w-full h-full object-cover' />      
    </div>
  );
}