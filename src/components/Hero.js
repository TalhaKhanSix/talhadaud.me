import { useState, useEffect } from "react";
import profileImg from "../talha-profile.png";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Web Developer",
    "Problem Solver",
  ];

  // Fade in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  // Handle mouse move for image parallax effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsImageHovered(false);
  };

  const handleButtonClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: "📦", url: "https://github.com/TalhaKhanSix" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
  ];

  return (
    <section id="home" className={`hero ${isVisible ? "hero-visible" : ""}`}>
      <div className="container hero-content">
        <div className="hero-text">
          <p className="greeting">
            <span className="wave">👋</span> Hello, I am
          </p>
          <h1 className="name">Talha Daud</h1>
          <h2 className="title">
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="tagline">
            I build clean, responsive, and user-friendly web applications with
            React.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={(e) => handleButtonClick(e, "projects")}
            >
              <span className="btn-icon">🚀</span>
              View My Work
            </button>
            <button
              className="btn btn-outline"
              onClick={(e) => handleButtonClick(e, "contact")}
            >
              <span className="btn-icon">📧</span>
              Contact Me
            </button>
          </div>
          <div className="hero-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div
          className={`hero-image ${isImageHovered ? "hovered" : ""}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="image-wrapper"
            style={{
              transform: `perspective(1000px) rotateY(${
                mousePosition.x
              }deg) rotateX(${-mousePosition.y}deg)`,
            }}
          >
            <img src={profileImg} alt="Talha Daud" />
            <div className="image-glow"></div>
          </div>
          <div className="floating-badges">
            <span className="badge badge-1">⚛️ React</span>
            <span className="badge badge-2">💻 JavaScript</span>
            <span className="badge badge-3">🎨 CSS</span>
          </div>
        </div>
      </div>
      <div
        className="scroll-indicator"
        onClick={(e) => handleButtonClick(e, "about")}
      >
        <span className="scroll-text">Scroll Down</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}

export default Hero;
