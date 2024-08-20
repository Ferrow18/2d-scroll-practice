"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { useScroll, useTransform, motion } from "framer-motion";

import Picture1 from "@/public/phillip.jpg";
import Picture2 from "@/public/bailey.jpg";
import Picture3 from "@/public/kalen.jpg";
import Picture4 from "@/public/kelen.jpg";
import Picture5 from "@/public/mark.jpg";
import Picture6 from "@/public/pine.jpg";
import Picture7 from "@/public/simon.jpg";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const opacityUp = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const opacityDown = useTransform(scrollYProgress, [0, 0.5], [1, 0.1]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
      top: 0,
      opacity: opacityUp,
    },
    {
      // bailey - top
      src: Picture2,
      scale: scale5,
      top: "-30vh",
      opacity: opacityDown,
    },
    {
      // kalen - bottom
      src: Picture3,
      scale: scale6,
      top: "30vh",
      opacity: opacityDown,
    },
    {
      // kelen - bottom right
      src: Picture4,
      scale: scale5,
      top: "15vh",
      left: "30vw",
      opacity: opacityDown,
    },
    {
      // mark - top left
      src: Picture5,
      scale: scale5,
      top: "-15vh",
      left: "-30vw",
      opacity: opacityDown,
    },
    {
      // pine - top right
      src: Picture6,
      scale: scale9,
      top: "-15vh",
      left: "30vw",
      opacity: opacityDown,
    },
    {
      // simon - bottom left
      src: Picture7,
      scale: scale9,
      top: "15vh",
      left: "-30vw",
      opacity: opacityDown,
    },
  ];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky h-[100vh] top-0 overflow-hidden">
        {pictures.map(({ src, scale, top, left, opacity }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale, opacity }}
              className={`w-full h-full absolute top-0 flex justify-center items-center`}
            >
              <div style={{ top, left }} className="w-[25vw] h-[25vh] relative">
                <Image
                  src={src}
                  alt="hero"
                  fill
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
