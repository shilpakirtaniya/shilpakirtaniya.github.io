import React from "react";
import Link from "next/link";

const ProjectHeader = () => {
  return (
    <header className="h-[50px] w-full flex items-center fixed z-20 bg-white">
      <div className="container max-w-screen-xl mx-auto w-[95%] h-[80%] flex items-center justify-between">
        <Link className="font-gillsans text-4xl" href="/projects">
          <span className="font-bold">Shilpa</span>{" "}
          <span className="font-normal">Kirtaniya</span>
        </Link>
        <ul className="text-md flex gap-10 font-arial font-light">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Project</Link>
          </li>
          <li>
            <Link href="/projects#sectionToScroll" className="cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default ProjectHeader;
