'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

// Project data
const projects = [
  {
    id: 1,
    href: '/projects/lookbook',
    imageSrc: '/src/project/imges/2.png',
    title: 'Look book',
    subtitle: '| For IRO IRO |',
    imageScale: 'scale-105',
    imagePosition: 'w-full'
  },
  {
    id: 2,
    href: '/projects/wedding-card',
    imageSrc: '/src/project/Wedding card/page 2/mockup 3.png',
    title: 'Wedding card design',
    subtitle: '| Commission Work |',
    imageScale: 'scale-105',
    imagePosition: 'h-full'
  },
  {
    id: 3,
    href: '/projects/social-media',
    imageSrc: '/src/project/Social Media/DSC03608(1).jpg',
    title: 'Social media design',
    subtitle: '| For IRO IRO |',
    imageScale: 'scale-105',
    imagePosition: 'w-full'
  },
  {
    id: 4,
    href: '/projects/photo-book',
    imageSrc: '/src/project/Photography/3 page/IMG_7630.jpg',
    title: 'Photo book',
    subtitle: '| Photography | Product Styling |',
    imageScale: 'scale-105',
    imagePosition: 'w-full'
  },
  {
    id: 5,
    href: '/projects/vilasita',
    imageSrc: '/src/project/VILASITA/IMG-20230108-WA0020(1).jpg',
    title: 'Vilasita',
    subtitle: '| Textile Design |',
    imageScale: 'scale-105',
    imagePosition: 'w-full'
  },
  {
    id: 6,
    href: '/projects/coral-print',
    imageSrc: '/src/project/coral print/GIF/pattern 1.png',
    title: 'Corals',
    subtitle: '| A Print Project |',
    imageScale: 'scale-105',
    imagePosition: 'w-full'
  },
  {
    id: 7,
    href: '/projects/surface-embellishment',
    imageSrc: '/src/project/surface work/image.png',
    title: 'Surface embelishment',
    subtitle: '| Thread Needle Work |',
    imageScale: 'scale-105',
    imagePosition: 'w-full'
  },
  {
    id: 8,
    href: '/projects/weekly-edits',
    imageSrc: '/src/project/weekly-edit/hero-2.jpg',
    title: 'Surface embelishment',
    subtitle: '| Newsletters |',
    imageScale: 'scale-105',
    imagePosition: 'w-full'
  }
];

export default function ProjectsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for resources
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
      <Header />
      <main className="container mx-auto px-4">
        <section className="projectContainer grid sm:gap-[30px] lg:gap-[50px] xl:gap-[80px] sm:grid-cols-1 md:grid-cols-2 place-items-center mt-32">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}