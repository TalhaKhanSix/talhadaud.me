"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projectData = {
  title: "GYM Management System",
  description:
    "A mobile app for managing gym memberships, tracking workouts, and connecting with trainers through real-time chat features.",
  image: "/projects/dashboard.svg",
  tags: ["C#", "Oracle SQL", "Visual Studio", "Entity Framework"],
  year: "2024",
  features: [
    "Member registration and profile management",
    "Workout tracking and progress monitoring",
    "Trainer-client real-time chat functionality",
    "Membership plan management and billing",
    "Equipment booking and scheduling",
    "Attendance tracking system",
  ],
  techDetails: [
    {
      name: "C#",
      description: "Primary programming language for backend logic and business rules",
    },
    {
      name: "Oracle SQL",
      description: "Database management for storing member data, workouts, and transactions",
    },
    {
      name: "Visual Studio",
      description: "Integrated development environment for building the application",
    },
    {
      name: "Entity Framework",
      description: "ORM for seamless database operations and data modeling",
    },
  ],
};

export default function GymProjectContent() {
  return (
    <main className="min-h-screen bg-sawad-black text-sawad-white">
      {/* Back Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-sawad-black/80 backdrop-blur-md border-b border-sawad-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sawad-muted hover:text-orange-500 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Year Badge */}
            <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium mb-6">
              {projectData.year}
            </span>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {projectData.title}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-sawad-muted max-w-3xl mb-8">
              {projectData.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {projectData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-sawad-dark border border-sawad-border rounded-full text-sm text-sawad-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-12 border-t border-sawad-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-sawad-dark border border-sawad-border rounded-xl hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sawad-muted">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 px-6 md:px-12 border-t border-sawad-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectData.techDetails.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-sawad-dark border border-sawad-border rounded-xl hover:border-orange-500/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-sawad-white mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sawad-muted">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 md:px-12 border-t border-sawad-border">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in this project?
            </h2>
            <p className="text-sawad-muted mb-8">
              Feel free to reach out if you&apos;d like to learn more about this project or discuss similar solutions.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
            >
              Get in Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
