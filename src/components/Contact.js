import { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  // Clear submit status after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email";
        return "";
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.length < 5) return "Subject must be at least 5 characters";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.length < 20) return "Message must be at least 20 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    setFocusedField(null);
  };

  const handleFocus = (e) => {
    setFocusedField(e.target.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "talhadaud@example.com",
      link: "mailto:talhadaud@example.com",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Pakistan",
      link: null,
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+92 XXX XXXXXXX",
      link: "tel:+92XXXXXXXXXX",
    },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "📦", url: "https://github.com/TalhaKhanSix" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
    { name: "Instagram", icon: "📸", url: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className={`contact-content ${isVisible ? "animate" : ""}`}>
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              Have a project in mind or want to collaborate? Feel free to reach
              out. I'm always open to discussing new opportunities.
            </p>

            <div className="contact-details">
              {contactInfo.map((info) => (
                <div className="contact-item" key={info.label}>
                  <span className="contact-icon">{info.icon}</span>
                  <div>
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div
                className={`form-group ${
                  focusedField === "name" ? "focused" : ""
                } ${errors.name ? "error" : ""}`}
              >
                <label htmlFor="name">
                  <span className="label-icon">👤</span>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div
                className={`form-group ${
                  focusedField === "email" ? "focused" : ""
                } ${errors.email ? "error" : ""}`}
              >
                <label htmlFor="email">
                  <span className="label-icon">📧</span>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
            </div>

            <div
              className={`form-group ${
                focusedField === "subject" ? "focused" : ""
              } ${errors.subject ? "error" : ""}`}
            >
              <label htmlFor="subject">
                <span className="label-icon">📝</span>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder="Project Inquiry"
                disabled={isSubmitting}
              />
              {errors.subject && (
                <span className="error-message">{errors.subject}</span>
              )}
            </div>

            <div
              className={`form-group ${
                focusedField === "message" ? "focused" : ""
              } ${errors.message ? "error" : ""}`}
            >
              <label htmlFor="message">
                <span className="label-icon">💬</span>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder="Tell me about your project..."
                rows="5"
                disabled={isSubmitting}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
              <span className="char-count">
                {formData.message.length} / 500 characters
              </span>
            </div>

            <button
              type="submit"
              className={`btn btn-primary submit-btn ${
                isSubmitting ? "submitting" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <span className="btn-icon">🚀</span>
                  Send Message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="submit-message success">
                <span>✅</span> Message sent successfully! I'll get back to you
                soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="submit-message error">
                <span>❌</span> Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
