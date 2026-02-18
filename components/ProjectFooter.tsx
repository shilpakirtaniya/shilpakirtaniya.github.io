import React from "react";
import Link from "next/link";

const ProjectFooter = () => {
  return (
    <footer className="h-[400px] w-full flex items-center justify-center">
      <div className="container h-[70%] w-full flex flex-col justify-between">
        {/* BACK BUTTON */}
        <div className="h-1/3 w-full flex items-center justify-center">
          <div className="h-[40px] w-[180px] rounded-lg flex justify-center items-center backButton text-md hover:text-lg transition duration-150 ease-in-out">
            <h1 className="calibri">
              <Link href="/projects">Back To Projects</Link>
            </h1>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="h-1/3 w-full flex flex-col items-center justify-center gap-3">
          <div className="iconsContainer h-[40px] w-[200px] flex justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/shilpa-kirtaniya-504375231/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-[40px] border border-shadedblack rounded-full flex justify-center items-center"
            >
              <img
                className="h-[50%] hover:h-[40%] transition duration-150 ease-in-out"
                src="/linkein.svg"
                alt="LinkedIn"
              />
            </a>

            <a
              href="mailto:shilpakirtaniyaa@gmail.com"
              className="h-full w-[40px] border border-shadedblack rounded-full flex justify-center items-center"
            >
              <img
                className="h-[60%] hover:h-[40%] transition duration-150 ease-in-out"
                src="/email.svg"
                alt="Email"
              />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="h-1/3 w-full flex flex-col items-center justify-center">
          <p className="font-sans font-light">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default ProjectFooter;
