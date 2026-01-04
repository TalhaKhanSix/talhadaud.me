"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

const budgetOptions = [
  { value: "", label: "Select your budget" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-plus", label: "$50,000+" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({ name: "", email: "", budget: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 px-6 md:px-12 lg:px-16">
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
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sawad-white">
            Let&apos;s Work Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-sawad-muted leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Whether you need
              a complete web application, a design system, or just want to chat
              about possibilities – let&apos;s connect.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-sawad-muted uppercase tracking-widest mb-2">
                  Email
                </h3>
                <a
                  href="mailto:talhakhansix@gmail.com"
                  className="text-xl text-sawad-white hover:text-sawad-muted transition-colors duration-300"
                >
                  talhakhansix@gmail.com  
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-sawad-muted uppercase tracking-widest mb-2">
                  Location
                </h3>
                <p className="text-xl text-sawad-white">Available Worldwide</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-sawad-muted uppercase tracking-widest mb-2">
                  Socials
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/TalhaKhanSix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sawad-muted hover:text-sawad-white transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/talha-khan-6b6390389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sawad-muted hover:text-sawad-white transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/h__talhakhan?igsh=MWNtNnBudHEwbHN6bA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sawad-muted hover:text-sawad-white transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-sawad-muted uppercase tracking-widest mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-sawad-border text-sawad-white placeholder-sawad-border focus:outline-none focus:border-sawad-muted transition-colors duration-300"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-sawad-muted uppercase tracking-widest mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-sawad-border text-sawad-white placeholder-sawad-border focus:outline-none focus:border-sawad-muted transition-colors duration-300"
                />
              </div>

              {/* Budget Select */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-sawad-muted uppercase tracking-widest mb-3"
                >
                  Budget <span className="text-sawad-border lowercase">(optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-sawad-border text-sawad-white focus:outline-none focus:border-sawad-muted transition-colors duration-300 cursor-pointer appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0 center",
                    backgroundSize: "1.5rem",
                  }}
                >
                  {budgetOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-sawad-dark text-sawad-white"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-sawad-muted uppercase tracking-widest mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-sawad-border text-sawad-white placeholder-sawad-border focus:outline-none focus:border-sawad-muted transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 mt-8 text-sm font-medium rounded-full transition-all duration-300 ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-orange-500 text-sawad-black hover:bg-orange-600"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 pt-12 border-t border-sawad-border text-center"
        >
          <p className="text-sawad-muted text-sm">
            © {new Date().getFullYear()} Talha Daud. Built with ❤️ 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
