"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Tools", href: "#tools" },
  { name: "Thoughts", href: "#thoughts" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.span
              className="text-xl font-bold text-sawad-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              TD
              <span className="text-sawad-muted group-hover:text-sawad-white transition-colors duration-300">
                .
              </span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="text-sm text-sawad-muted hover:text-sawad-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-sawad-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden md:block"
          >
            <Link
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-sawad-black bg-sawad-white rounded-full hover:bg-sawad-muted hover:text-sawad-white transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              className="w-6 h-0.5 bg-sawad-white transition-all duration-300"
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              className="w-6 h-0.5 bg-sawad-white transition-all duration-300"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              className="w-6 h-0.5 bg-sawad-white transition-all duration-300"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <ul className="pt-6 pb-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-sawad-muted hover:text-sawad-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block px-5 py-2.5 text-sm font-medium text-sawad-black bg-sawad-white rounded-full hover:bg-sawad-muted hover:text-sawad-white transition-all duration-300"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}
