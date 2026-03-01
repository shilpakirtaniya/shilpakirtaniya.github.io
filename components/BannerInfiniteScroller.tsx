import React from "react";
import { motion } from "framer-motion";
import { BannerItem } from "./Banner";

interface CarouselCardProps {
  item: BannerItem;
  position: "center" | "side-left" | "side-right";
}

const BannerInfiniteScroller: React.FC<CarouselCardProps> = ({
  item,
  position,
}) => {
  const isCenter = position === "center";

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        opacity: isCenter ? 1 : 0.85,
        // Reduced scale slightly (1.1 instead of 1.2) to prevent overlap
        // with buttons in the restricted 90% width space
        scale: isCenter ? 1 : 0.85,
        zIndex: isCenter ? 20 : 10,
        // Normalized X offset to keep side cards visible but tucked away
        x: position === "side-left" ? 50 : position === "side-right" ? -50 : 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      // Adjusted width to sm:w-[300px] to ensure 3 cards fit comfortably
      // within the 90% main container width
      className="w-[200px] h-[350px] relative rounded-sm overflow-hidden shadow-xl flex-none bg-white"
    >
      {/* Media Rendering */}
      {item.type === "video" ? (
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img src={item.src} alt="" className="w-full h-full object-cover" />
      )}

      {/* Overlay: Only visible when centered */}
      {isCenter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/5 text-center p-6"
        ></motion.div>
      )}
    </motion.div>
  );
};

export default BannerInfiniteScroller;
