import "./App.css";
import profileImg from "./talha-profile.png";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}

// Step 1: Header/Navigation with scroll effects and mobile menu
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll for header styling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scrolled
      setIsScrolled(window.scrollY > 50);

      // Detect active section
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
      if (
        isMenuOpen &&
        !e.target.closest(".nav") &&
        !e.target.closest(".menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👤" },
    { id: "skills", label: "Skills", icon: "💡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "contact", label: "Contact", icon: "📧" },
  ];

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container header-inner">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <span className="logo-icon">TD</span>
          <span className="logo-text">Talha Daud</span>
        </a>

        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div
            className="nav-overlay"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
}

// Step 2: Hero Section with typing effect and interactive elements
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

// Step 3: About Section with animations and interactivity
function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [yearsExperience, setYearsExperience] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  // Intersection Observer for scroll animation
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

  // Animate counters when visible
  useEffect(() => {
    if (isVisible) {
      const animateCounter = (setter, target, duration) => {
        let start = 0;
        const increment = target / (duration / 50);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setter(target);
            clearInterval(timer);
          } else {
            setter(Math.floor(start));
          }
        }, 50);
        return timer;
      };

      const timer1 = animateCounter(setYearsExperience, 3, 1000);
      const timer2 = animateCounter(setProjectsCompleted, 25, 1500);
      const timer3 = animateCounter(setHappyClients, 15, 1200);

      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
      };
    }
  }, [isVisible]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const tabs = [
    { id: "about", label: "About Me", icon: "👤" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
  ];

  const infoItems = [
    { label: "Name", value: "Talha Daud", icon: "👤" },
    { label: "Location", value: "Pakistan", icon: "📍" },
    { label: "Email", value: "talhadaud@example.com", icon: "📧" },
    {
      label: "Availability",
      value: "Available for work",
      icon: "✅",
      isAvailable: true,
    },
  ];

  const stats = [
    {
      label: "Years Experience",
      value: yearsExperience,
      icon: "📅",
      suffix: "+",
    },
    {
      label: "Projects Completed",
      value: projectsCompleted,
      icon: "🚀",
      suffix: "+",
    },
    { label: "Happy Clients", value: happyClients, icon: "😊", suffix: "+" },
  ];

  const experienceData = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2022 - Present",
      description:
        "Building modern web applications with React and JavaScript.",
    },
    {
      title: "Web Developer Intern",
      company: "Tech Company",
      period: "2021 - 2022",
      description:
        "Learned fundamentals of web development and worked on real projects.",
    },
  ];

  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University of Pakistan",
      period: "2019 - 2023",
      description: "Focused on software development and web technologies.",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="tab-content about-tab">
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
                  <span className="info-icon">{item.icon}</span>
                  <span className="info-label">{item.label}:</span>
                  <span
                    className={`info-value ${
                      item.isAvailable ? "available" : ""
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="tab-content experience-tab">
            {experienceData.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{exp.title}</h4>
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case "education":
        return (
          <div className="tab-content education-tab">
            {educationData.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <span className="company">{edu.institution}</span>
                  <span className="period">{edu.period}</span>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={`about-content ${isVisible ? "animate" : ""}`}>
          <div className="about-image">
            <img src={profileImg} alt="Talha Daud" />
            <div className="about-stats">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-value">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-text">
            <div className="about-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
            {renderTabContent()}
            <a
              href="/resume.pdf"
              className="btn btn-primary download-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="btn-icon">📄</span>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Step 4: Skills Section with useState and events
function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = [
    { name: "HTML5", level: 95, category: "frontend", icon: "🌐" },
    { name: "CSS3", level: 90, category: "frontend", icon: "🎨" },
    { name: "JavaScript", level: 88, category: "frontend", icon: "⚡" },
    { name: "React", level: 85, category: "frontend", icon: "⚛️" },
    { name: "TypeScript", level: 75, category: "frontend", icon: "📘" },
    { name: "Node.js", level: 70, category: "backend", icon: "🟢" },
    { name: "Python", level: 65, category: "backend", icon: "🐍" },
    { name: "Git", level: 80, category: "tools", icon: "📦" },
    { name: "Figma", level: 70, category: "tools", icon: "🎯" },
    { name: "VS Code", level: 90, category: "tools", icon: "💻" },
  ];

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSkillHover = (skillName) => {
    setHoveredSkill(skillName);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`skill-card ${
                hoveredSkill === skill.name ? "hovered" : ""
              }`}
              onMouseEnter={() => handleSkillHover(skill.name)}
              onMouseLeave={handleSkillLeave}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width:
                      hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <p>
            Showing <span className="highlight">{filteredSkills.length}</span>{" "}
            skills
            {activeCategory !== "all" && ` in ${activeCategory}`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default App;
