"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileSidebar() {
  const navItems = [
    { name: "Home", href: "#", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { name: "Projects", href: "#projects", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    )},
    { name: "Experience", href: "#experience", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )},
    { name: "Tools", href: "#tools", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )},
    { name: "Contact", href: "#contact", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )},
  ];

  return (
    <aside className="sticky top-0 h-screen flex flex-col p-6 lg:p-8 relative overflow-y-auto">
      {/* Navigation Header with Icons */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-8"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-sawad-dark/50 backdrop-blur-sm rounded-full border border-sawad-border">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="p-2.5 text-sawad-muted hover:text-orange-500 transition-all duration-300 hover:bg-sawad-border/30 rounded-lg"
              title={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Profile Content - Centered */}
      <div className="flex-1 flex flex-col justify-center py-4">
        <div className="max-w-sm mx-auto text-center">
          {/* Profile Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            {/* Decorative dashed border */}
            <div className="absolute -top-3 -left-3 w-28 h-28 border-2 border-dashed border-orange-500 rounded-lg transform rotate-[-5deg]" />
            
            {/* Main image container */}
            <div className="relative w-56 h-72 mx-auto overflow-hidden rounded-lg bg-gradient-to-br from-orange-600 to-orange-500">
              {/* Profile image */}
              <Image
                src="/talhadaud.jpeg"
                alt="Talha Daud"
                fill
                className="object-cover object-center"
                priority
              />
              
              {/* Decorative frame corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-dashed border-orange-300/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-dashed border-orange-300/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-dashed border-orange-300/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-dashed border-orange-300/50" />
            </div>

            {/* Decorative curved line */}
            <svg
              className="absolute -top-8 -right-8 w-24 h-24 text-orange-500"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M10 90 Q 50 10, 90 50"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
              />
            </svg>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl lg:text-4xl font-bold text-sawad-white mb-2"
          >
            Talha Daud
          </motion.h1>

          {/* Fire Icon with decorative line */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="relative flex justify-center my-4"
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 23c-3.866 0-7-3.134-7-7 0-2.209 1.119-4.248 2.626-5.808.474-.49 1.166-.588 1.737-.245.571.344.882 1.012.76 1.646-.228 1.186.168 2.462 1.148 3.442.494.494 1.077.842 1.729 1.078V14c0-1.105.895-2 2-2s2 .895 2 2v2.113c.652-.236 1.235-.584 1.729-1.078.98-.98 1.376-2.256 1.148-3.442-.122-.634.189-1.302.76-1.646.571-.343 1.263-.245 1.737.245C19.881 11.752 21 13.791 21 16c0 3.866-3.134 7-7 7z"/>
              </svg>
            </div>
            {/* Decorative dashed curve */}
            <svg
              className="absolute -left-8 top-1/2 w-16 h-8 text-orange-500"
              viewBox="0 0 64 32"
              fill="none"
            >
              <path
                d="M0 28 Q 32 0, 64 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sawad-muted text-sm leading-relaxed mb-6 px-4"
          >
            A Software Engineer who has developed countless innovative solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-6 pb-4"
          >
            <a
              href="https://github.com/TalhaKhanSix"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sawad-muted hover:text-orange-500 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/talha-khan-6b6390389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sawad-muted hover:text-orange-500 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/h__talhakhan?igsh=MWNtNnBudHEwbHN6bA=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sawad-muted hover:text-orange-500 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator on Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-orange-500"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
        <span className="text-xs text-sawad-muted uppercase tracking-widest writing-vertical transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </motion.div>
    </aside>
  );
}
