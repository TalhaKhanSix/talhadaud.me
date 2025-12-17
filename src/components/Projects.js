import { useState, useEffect } from "react";

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

export default Projects;
