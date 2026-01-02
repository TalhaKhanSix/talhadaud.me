"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function BlogList() {
  return (
    <section id="thoughts" className="py-16 lg:py-24 px-6 md:px-12 lg:px-16 border-b border-sawad-border">
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
            Insights & Ideas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sawad-white">
            Latest Thoughts
          </h2>
        </motion.div>

        {/* Blog Posts List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-0 divide-y divide-sawad-border"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group py-8 first:pt-0"
            >
              <a
                href={`/blog/${post.slug}`}
                className="block hover:opacity-80 transition-opacity duration-300"
              >
                {/* Top row: Snippet text */}
                <p className="text-sawad-muted leading-relaxed mb-4">
                  {post.snippet}
                </p>

                {/* Date row */}
                <p className="text-sm text-sawad-muted mb-4">
                  {post.date}
                </p>

                {/* Title with arrow */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-sawad-white group-hover:text-orange-500 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  {/* Arrow icon */}
                  <motion.div
                    className="flex-shrink-0 mt-1 text-orange-500"
                    whileHover={{ x: 4, y: -4 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Read time on right */}
                <p className="text-sm text-sawad-muted mt-2 text-right">
                  {post.readTime}
                </p>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
