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
        <Projects />
        <Contact />
      </main>
      <Footer />
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

// Step 5: Projects Section with filtering, modal, and animations
function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
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

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Website",
      category: "web",
      image: "🛒",
      description:
        "A full-featured e-commerce platform with cart, checkout, and payment integration.",
      longDescription:
        "Built a complete e-commerce solution with React, featuring product catalog, shopping cart, user authentication, and Stripe payment integration. Implemented responsive design and optimized performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/TalhaKhanSix",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "web",
      image: "🎨",
      description:
        "Modern portfolio website with smooth animations and responsive design.",
      longDescription:
        "Designed and developed a personal portfolio showcasing projects and skills. Features include smooth scroll animations, dark theme, and mobile-first responsive design.",
      technologies: ["React", "CSS3", "JavaScript"],
      liveUrl: "https://talhadaud.me",
      githubUrl: "https://github.com/TalhaKhanSix/talhadaud.me",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      category: "app",
      image: "📋",
      description:
        "A productivity app for managing tasks with drag-and-drop functionality.",
      longDescription:
        "Developed a task management application with features like drag-and-drop reordering, categories, due dates, and progress tracking. Uses local storage for data persistence.",
      technologies: ["React", "DnD Kit", "LocalStorage"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/TalhaKhanSix",
      featured: false,
    },
    {
      id: 4,
      title: "Weather Dashboard",
      category: "app",
      image: "🌤️",
      description:
        "Real-time weather app with location-based forecasts and beautiful UI.",
      longDescription:
        "Created a weather dashboard that fetches real-time data from OpenWeather API. Features include location search, 7-day forecast, and dynamic backgrounds based on weather conditions.",
      technologies: ["React", "API", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/TalhaKhanSix",
      featured: false,
    },
    {
      id: 5,
      title: "Landing Page Design",
      category: "design",
      image: "🖼️",
      description: "Creative landing page with modern UI/UX design principles.",
      longDescription:
        "Designed a stunning landing page with attention to typography, color theory, and user experience. Optimized for conversions with clear call-to-action elements.",
      technologies: ["Figma", "HTML", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/TalhaKhanSix",
      featured: false,
    },
    {
      id: 6,
      title: "Chat Application",
      category: "app",
      image: "💬",
      description: "Real-time chat app with rooms and private messaging.",
      longDescription:
        "Built a real-time chat application using WebSocket technology. Features include chat rooms, private messaging, typing indicators, and message history.",
      technologies: ["React", "Socket.io", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/TalhaKhanSix",
      featured: true,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: "🎯" },
    { id: "web", label: "Web Apps", icon: "🌐" },
    { id: "app", label: "Applications", icon: "📱" },
    { id: "design", label: "UI/UX", icon: "🎨" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("project-modal-overlay")) {
      closeModal();
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-filter">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => handleFilterClick(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isVisible ? "animate" : ""}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${
                hoveredProject === project.id ? "hovered" : ""
              } ${project.featured ? "featured" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openModal(project)}
            >
              {project.featured && (
                <span className="featured-badge">⭐ Featured</span>
              )}
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-overlay">
                <span className="view-project">View Details →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-summary">
          <p>
            Showing <span className="highlight">{filteredProjects.length}</span>{" "}
            of <span className="highlight">{projectsData.length}</span> projects
          </p>
        </div>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div className="project-modal-overlay" onClick={handleOverlayClick}>
            <div className={`project-modal ${isModalOpen ? "open" : ""}`}>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
              <div className="modal-header">
                <span className="modal-emoji">{selectedProject.image}</span>
                <div>
                  <h3>{selectedProject.title}</h3>
                  <span className="modal-category">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
              <div className="modal-body">
                <p>{selectedProject.longDescription}</p>
                <div className="modal-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span className="btn-icon">🔗</span>
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <span className="btn-icon">📦</span>
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Step 6: Contact Section with form validation and interactivity
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
              <div className={`form-group ${focusedField === "name" ? "focused" : ""} ${errors.name ? "error" : ""}`}>
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
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className={`form-group ${focusedField === "email" ? "focused" : ""} ${errors.email ? "error" : ""}`}>
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
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className={`form-group ${focusedField === "subject" ? "focused" : ""} ${errors.subject ? "error" : ""}`}>
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
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className={`form-group ${focusedField === "message" ? "focused" : ""} ${errors.message ? "error" : ""}`}>
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
              {errors.message && <span className="error-message">{errors.message}</span>}
              <span className="char-count">
                {formData.message.length} / 500 characters
              </span>
            </div>

            <button
              type="submit"
              className={`btn btn-primary submit-btn ${isSubmitting ? "submitting" : ""}`}
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
                <span>✅</span> Message sent successfully! I'll get back to you soon.
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

// Step 7: Footer
function Footer() {
  const [currentYear] = useState(new Date().getFullYear());

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">TD</span>
            <p>Building beautiful web experiences with React.</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Talha Daud. All rights reserved.</p>
          <button className="scroll-top-btn" onClick={handleScrollToTop}>
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default App;
