"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "3+",
    label: "Years of Experience",
    description: "Building digital products",
  },
  {
    value: "5+",
    label: "Projects Completed",
    description: "From concept to deployment",
  },
];

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

export default function BentoStats() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-12 lg:px-16 border-b border-sawad-border">
      <div className="max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-sawad-dark border border-sawad-border rounded-2xl p-6 md:p-8 hover:border-orange-500 transition-all duration-500"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sawad-border/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                {/* Large number */}
                <motion.span
                  className="block text-6xl md:text-7xl lg:text-8xl font-bold text-sawad-white mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.span>
                
                {/* Label */}
                <h3 className="text-lg md:text-xl font-semibold text-sawad-white mb-2">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-sawad-muted">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
