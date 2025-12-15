import "./App.css";
import profileImg from "./astronaut.png";
import { useState, useEffect, useCallback } from "react";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

// Step 1: Header/Navigation with mobile menu and scroll state
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll for header styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(".nav") && !e.target.closest(".menu-toggle")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const handleNavClick = useCallback((e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, "home")}>
          Talha Daud
        </a>
        <button 
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`nav-link ${activeSection === item ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

// Step 2: Hero Section with typing effect
function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "Web Developer"];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          // Finished typing, pause then delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex, roles]);

  const handleButtonClick = useCallback((e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="greeting">Hello, I am</p>
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
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={(e) => handleButtonClick(e, "projects")}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline"
              onClick={(e) => handleButtonClick(e, "contact")}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Talha Daud" />
        </div>
      </div>
    </section>
  );
}

// Step 3: About Section with animation on scroll
function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  const infoItems = [
    { label: "Name", value: "Talha Daud" },
    { label: "Location", value: "Pakistan" },
    { label: "Email", value: "talha@example.com" },
    { label: "Availability", value: "Available for work", isAvailable: true },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={`about-content ${isVisible ? "animate" : ""}`}>
          <div className="about-image">
            <img src={profileImg} alt="Talha Daud" />
          </div>
          <div className="about-text">
            <p>
              Hi! I'm <span className="highlight">Talha Daud</span>, a
              passionate Frontend Developer based in Pakistan. I specialize in
              building modern, responsive web applications using React and
              JavaScript.
            </p>
            <p>
              I love turning complex problems into simple, beautiful, and
              intuitive designs. When I'm not coding, you'll find me learning
              new technologies and exploring the latest trends in web
              development.
            </p>
            <div className="about-info">
              {infoItems.map((item) => (
                <div className="info-item" key={item.label}>
                  <span className="info-label">{item.label}:</span>
                  <span className={`info-value ${item.isAvailable ? "available" : ""}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
