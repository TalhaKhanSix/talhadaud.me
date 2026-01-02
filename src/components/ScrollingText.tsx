"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "Dynamic Animation",
  "Motion Design",
  "User Experience",
  "Web Development",
  "Creative Solutions",
  "Modern Interfaces",
];

export default function ScrollingText() {
  return (
    <section className="py-8 overflow-hidden border-b border-sawad-border bg-sawad-dark">
      <div className="relative">
        {/* First marquee row */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate items for seamless loop */}
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center mx-6"
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-sawad-white">
                {item}
              </span>
              <span className="text-orange-500 mx-6 text-2xl">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
