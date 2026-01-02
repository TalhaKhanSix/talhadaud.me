"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ExperienceList() {
  return (
    <section id="experience" className="py-16 lg:py-24 px-6 md:px-12 lg:px-16 border-b border-sawad-border">
      <div className="max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sawad-muted text-sm tracking-widest uppercase mb-4">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sawad-white">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-sawad-border" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative pl-20 md:pl-28"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-10 top-0 w-4 h-4 rounded-full bg-orange-500 border-2 border-orange-500 z-10" />

                {/* Company Logo (Circular) */}
                <div className="absolute left-0 top-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-sawad-dark border border-sawad-border flex items-center justify-center overflow-hidden">
                  {/* Placeholder with initials */}
                  <span className="text-xl md:text-2xl font-bold text-sawad-muted">
                    {experience.company
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="group bg-sawad-dark border border-sawad-border rounded-2xl p-6 md:p-8 hover:border-sawad-muted transition-all duration-500">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      {/* Role Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-sawad-white group-hover:text-orange-500 transition-colors duration-300">
                        {experience.role}
                      </h3>
                      {/* Company */}
                      <p className="text-sawad-muted font-medium mt-1">
                        {experience.company}
                      </p>
                    </div>

                    {/* Date Range & Location */}
                    <div className="text-right">
                      <p className="text-sm font-medium text-sawad-white">
                        {experience.startDate} — {experience.endDate}
                      </p>
                      <p className="text-sm text-sawad-muted mt-1">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sawad-muted leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  {experience.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium text-sawad-muted bg-sawad-black border border-sawad-border rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
