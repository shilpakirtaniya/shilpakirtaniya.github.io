import React from "react";

/* =======================
   Types
======================= */

export type AdMediaType = "image" | "video";

export interface AdItem {
  id: number;
  src: string;
  type: AdMediaType;
}

/* =======================
   Data
======================= */

const ads: AdItem[] = [
  { id: 1, src: "/src/project/launch-campaign/buttons/Ads/1.png", type: "image" },
  { id: 2, src: "/src/project/launch-campaign/buttons/Ads/2.png", type: "image" },
  { id: 3, src: "/src/project/launch-campaign/buttons/Ads/3.mp4", type: "video" },
  { id: 4, src: "/src/project/launch-campaign/buttons/Ads/4.png", type: "image" },
  { id: 5, src: "/src/project/launch-campaign/buttons/Ads/5.png", type: "image" },
  { id: 6, src: "/src/project/launch-campaign/buttons/Ads/6.mp4", type: "video" },
  { id: 7, src: "/src/project/launch-campaign/buttons/Ads/7.png", type: "image" },
  { id: 8, src: "/src/project/launch-campaign/buttons/Ads/8.png", type: "image" },
];

/* =======================
   Helper Component
======================= */

const MediaRenderer: React.FC<{ item: AdItem }> = ({ item }) => {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    );
  }
  return <img src={item.src} alt="" className="w-full h-full object-cover" />;
};

/* =======================
   Component
======================= */

const Ads: React.FC = () => {
  return (
    <section className="bg-gunmetal-green min-h-screen p-6 sm:p-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Pill */}
        <div className="flex justify-center mb-10">
          <div className="px-6 py-2 border border-white/20 rounded-full text-white/90 text-sm tracking-wide bg-white/5 backdrop-blur-md text-center w-full">
            Static Ads • Video Ads • GIFs (Meta)
          </div>
        </div>

        {/* Layout Container */}
        <div className="flex flex-col gap-5">
          
          {/* Row 1: Staggered Top */}
          <div className="row1 h-[900px] w-full flex gap-5">
            <div className="col1 h-full w-1/2 gap-5 flex flex-col">
              <div className="h-3/5 w-full overflow-hidden rounded-[32px] bg-white/5">
                {ads[0] && <MediaRenderer item={ads[0]} />}
              </div>
              <div className="h-2/5 w-full overflow-hidden rounded-[32px] bg-white/5">
                {ads[2] && <MediaRenderer item={ads[2]} />}
              </div>
            </div>
            <div className="col2 h-full w-1/2 gap-5 flex flex-col">
              <div className="h-2/5 w-full overflow-hidden rounded-[32px] bg-white/5">
                {ads[1] && <MediaRenderer item={ads[1]} />}
              </div>
              <div className="h-3/5 w-full overflow-hidden rounded-[32px] bg-white/5">
                {ads[3] && <MediaRenderer item={ads[3]} />}
              </div>
            </div>
          </div>

          {/* Row 2: Middle Pair */}
          <div className="row2 h-[600px] w-full flex gap-5">
            <div className="col1 h-full w-1/2 overflow-hidden rounded-[32px] bg-white/5">
              {ads[4] && <MediaRenderer item={ads[4]} />}
            </div>
            <div className="col2 h-full w-1/2 overflow-hidden rounded-[32px] bg-white/5">
              {ads[5] && <MediaRenderer item={ads[5]} />}
            </div>
          </div>

          {/* Row 3: Bottom Pair */}
          <div className="row3 h-[400px] w-full flex gap-5">
            <div className="col1 h-full w-1/2 overflow-hidden rounded-[32px] bg-white/5">
              {ads[6] && <MediaRenderer item={ads[6]} />}
            </div>
            <div className="col2 h-full w-1/2 overflow-hidden rounded-[32px] bg-white/5">
              {ads[7] && <MediaRenderer item={ads[7]} />}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ads;