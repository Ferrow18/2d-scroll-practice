"use client";

import Picture1 from "@/public/johan.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ZoomInPicture() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <>
      <div ref={container} className="h-[500vh] relative">
        <div className="h-[100vh] sticky top-0 overflow-hidden">
          <motion.div
            style={{ scale }}
            className="absolute top-0 w-full h-[100vh] origin-[75%_80%]"
          >
            <Image
              src={Picture1}
              alt="Picture1"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        {/* <div className="bg-red-300 relative h-[100vh]"></div> */}
      </div>
      <div className="h-[100vh] relative"></div>
    </>
  );
}
