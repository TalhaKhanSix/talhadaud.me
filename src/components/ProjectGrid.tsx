"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-16 lg:py-24 px-6 md:px-12 lg:px-16 border-b border-sawad-border">
      <div className="max-w-4xl">
        {/* Section Header - Large Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-sawad-white">PROJ</span>
            <span className="text-sawad-muted/30">ECTS</span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              {project.link ? (
                project.link.startsWith('/') ? (
                  <Link href={project.link} className="block">
                    <div className="flex items-center gap-6 md:gap-8 py-4 hover:bg-sawad-dark/30 rounded-xl transition-all duration-300 -mx-4 px-4 cursor-pointer">
                      {/* Thumbnail */}
                      <div className="relative w-28 h-20 md:w-40 md:h-28 flex-shrink-0 overflow-hidden rounded-lg bg-sawad-dark border border-sawad-border">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold text-sawad-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sawad-muted text-sm md:text-base truncate md:whitespace-normal md:line-clamp-1">
                          {project.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0">
                        <motion.div
                          className="w-10 h-10 flex items-center justify-center text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 17L17 7M17 7H7M17 7v10"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-6 md:gap-8 py-4 hover:bg-sawad-dark/30 rounded-xl transition-all duration-300 -mx-4 px-4 cursor-pointer">
                    {/* Thumbnail */}
                    <div className="relative w-28 h-20 md:w-40 md:h-28 flex-shrink-0 overflow-hidden rounded-lg bg-sawad-dark border border-sawad-border">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-sawad-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sawad-muted text-sm md:text-base truncate md:whitespace-normal md:line-clamp-1">
                        {project.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-10 h-10 flex items-center justify-center text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17L17 7M17 7H7M17 7v10"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </a>
                )
              ) : (
                <div className="flex items-center gap-6 md:gap-8 py-4 hover:bg-sawad-dark/30 rounded-xl transition-all duration-300 -mx-4 px-4">
                  {/* Thumbnail */}
                  <div className="relative w-28 h-20 md:w-40 md:h-28 flex-shrink-0 overflow-hidden rounded-lg bg-sawad-dark border border-sawad-border">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-sawad-white mb-1 group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sawad-muted text-sm md:text-base truncate md:whitespace-normal md:line-clamp-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-10 h-10 flex items-center justify-center text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
