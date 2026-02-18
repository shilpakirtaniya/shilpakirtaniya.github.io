'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  imageScale: string;
  imagePosition: string;
}

export default function ProjectCard({
  href,
  imageSrc,
  title,
  subtitle,
  imageScale,
  imagePosition
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="xxs:h-[201px] xxs:w-[320px] xs:h-[270px] xs:w-[430px] sm:h-[350px] sm:w-[550px] md:h-[235px] md:w-[370px] lg:h-[310px] lg:w-[487px] xl:h-[381px] xl:w-[600px] relative overflow-hidden projects group cursor-pointer">
        <Image
          className={`absolute ${imagePosition} ${imageScale} transition duration-150 ease-in-out group-hover:scale-100 group-hover:grayscale-[90%]`}
          src={imageSrc}
          alt={title}
          width={600}
          height={381}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute h-full w-full flex flex-col justify-center items-center">
          <h1 className="projectHeading sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-noto font-light opacity-0 group-hover:opacity-100 text-white italic transition-opacity duration-150 ease-in-out">
            {title}
          </h1>
          <h3 className="font-sans font-thin text-white sm:text-sm md:text-md lg:text-lg xl:text-xl tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out">
            {subtitle}
          </h3>
        </div>
      </div>
    </Link>
  );
}