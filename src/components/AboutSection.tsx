"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 px-6 md:px-12 lg:px-16 border-b border-sawad-border">
      <div className="max-w-4xl">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sawad-muted text-sm tracking-widest uppercase mb-6"
        >
          About Me
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-sawad-white leading-tight mb-8"
        >
          I craft digital experiences that blend{" "}
          <span className="text-orange-500">aesthetics</span> with{" "}
          <span className="text-orange-500">functionality</span>.
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-sawad-muted text-lg leading-relaxed"
        >
          <p>
            As the internet continues to develop and grow exponentially, jobs related 
            to the industry do too, particularly those that relate to web design and 
            development.
          </p>
          <p>
            Whether you work in marketing, sales, or product design, you understand 
            the importance of a quality landing page. Landing pages are standalone 
            websites used to generate leads or sales—in other words they help you 
            increase your revenue.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-sawad-border"
        >
          <div>
            <span className="block text-4xl font-bold text-sawad-white">3+</span>
            <span className="text-sm text-sawad-muted">Years Experience</span>
          </div>
          <div>
            <span className="block text-4xl font-bold text-sawad-white">20+</span>
            <span className="text-sm text-sawad-muted">Projects Completed</span>
          </div>
          <div>
            <span className="block text-4xl font-bold text-sawad-white">15+</span>
            <span className="text-sm text-sawad-muted">Happy Clients</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="#projects"
            className="px-6 py-3 text-sm font-medium text-sawad-black bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-sawad-white border border-sawad-border rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
