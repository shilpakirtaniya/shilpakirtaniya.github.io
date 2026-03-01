"use client";

import React, { use, useState } from "react";
import ProjectHeader from "@/components/ProjectHeader";
import Preloader from "@/components/Preloader";
import ProjectFooter from "@/components/ProjectFooter";
import CampainPopup, { SectionKey } from "@/components/CampainPopup";

const LaunchCampainPage = () => {
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);
  return (
    <>
      <ProjectHeader />
      <div className="hero relative h-svh w-full pt-12.5 overflow-hidden">
        <img
          src="/src/project/launch-campaign/hero.png"
          alt="Launch Campaign Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <img
          src="/src/project/launch-campaign/hero TEXT.png"
          alt="Launch Campaign Hero Overlay"
          className="absolute inset-0 h-full w-full object-contain z-10 pointer-events-none"
        />
      </div>
      <div className="buttons h-206.25 w-full bg-gunmetal-green p-10 flex gap-10">
        {/* LEFT BIG */}
        <div
          onClick={() => setActiveSection(1)}
          className="w-1/2 relative overflow-hidden"
        >
          <img
            src="/src/project/launch-campaign/buttons/button-1.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-1/2 flex flex-col gap-10">
          {/* TOP */}
          <div
            onClick={() => setActiveSection(2)}
            className="h-1/2 w-full relative overflow-hidden"
          >
            <img
              src="/src/project/launch-campaign/buttons/button-2.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* BOTTOM ROW */}
          <div className="h-1/2 w-full flex gap-10">
            <div
              onClick={() => setActiveSection(3)}
              className="w-1/2 relative overflow-hidden"
            >
              <img
                src="/src/project/launch-campaign/buttons/button-3.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div
              onClick={() => setActiveSection(4)}
              className="w-1/2 relative overflow-hidden"
            >
              <img
                src="/src/project/launch-campaign/buttons/button-4.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <CampainPopup activeSection={activeSection} setActiveSection={setActiveSection} />
      <ProjectFooter />

    </>
  );
};

export default LaunchCampainPage;
