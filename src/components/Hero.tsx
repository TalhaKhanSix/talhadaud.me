"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Eyebrow text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sawad-muted text-sm md:text-base tracking-widest uppercase"
          >
            Hello, I&apos;m Talha Daud
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-sawad-white leading-[0.9] tracking-tight"
          >
            Software
            <br />
            <span className="text-sawad-muted">Engineer</span>
          </motion.h1>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-sawad-muted max-w-xl leading-relaxed"
          >
            Passionate about crafting exceptional digital experiences through 
            clean code and thoughtful design. Specializing in creating intuitive 
            user interfaces that blend aesthetics with functionality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 text-sm font-medium text-sawad-black bg-sawad-white rounded-full hover:bg-sawad-muted hover:text-sawad-white transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-sm font-medium text-sawad-white border border-sawad-border rounded-full hover:bg-sawad-dark hover:border-sawad-muted transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
