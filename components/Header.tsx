'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="xxs:h-[80px] sm:h-[100px] lg:h-[150px] w-full container max-w-screen-xl mx-auto">
      <div className="container headerContainer h-full w-full flex justify-between items-center mx-auto">
        <div className="logoContainer h-full xxs:w-1/3 w-2/5 flex items-center">
          <div className="logo xxs:h-[70px] xxs:w-[70px] sm:h-[80px] sm:w-[80px] lg:h-[100px] lg:w-[100px] rounded-full overflow-hidden">
            <Link href="/">
              <Image
                className="w-full hover:scale-110 scale-125 transition duration-75 ease-in-out"
                src="/src/project/imges/heroImages/1(2).png"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
        <div className="nameContainer h-full xxs:w-2/3 xs:w-1/3 w-2/5 items-center flex justify-end">
          <h1 className="xxs:text-xl sm:text-2xl lg:text-4xl text-black text-right font-sunroll">
            ShIlpa KIRtanIya
          </h1>
        </div>
      </div>
    </header>
  );
}