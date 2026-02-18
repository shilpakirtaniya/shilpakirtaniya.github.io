'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      id="sectionToScroll"
      className="h-[450px] w-full flex justify-center items-center mt-20"
    >
      <div className="h-full w-full max-w-screen-xl flex items-center justify-center">
        <div className="h-[70%] w-full flex flex-col items-center justify-between text-center">

          {/* TITLE */}
          <h1 className="font-noto italic font-light text-3xl md:text-4xl opacity-80">
            Get in touch
          </h1>

          {/* DESCRIPTION */}
          <div className="flex flex-col items-center gap-3 max-w-md">
            <p className="calibri text-sm md:text-base opacity-70 leading-relaxed">
              If you&apos;re keen on connecting or collaborating, feel free to reach out to me via:
            </p>

            <p className="text-sm md:text-base font-medium opacity-70 cursor-pointer">
              Phone: <span className="font-semibold">+91 7987387507</span>
            </p>
          </div>

          {/* ICONS */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/shilpa-kirtaniya-504375231/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 border border-shadedblack rounded-full flex items-center justify-center transition hover:scale-95"
            >
              <Image
                src="/linkein.svg"
                alt="LinkedIn"
                width={18}
                height={18}
              />
            </a>

            <a
              href="mailto:shilpakirtaniyaa@gmail.com"
              className="h-10 w-10 border border-shadedblack rounded-full flex items-center justify-center transition hover:scale-95"
            >
              <Image
                src="/email.svg"
                alt="Email"
                width={20}
                height={20}
              />
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="text-sm font-light opacity-80">
            <p>Copyright ©2024 All Rights Reserved</p>
          </div>

        </div>
      </div>
    </footer>
  );
}