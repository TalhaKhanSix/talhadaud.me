import { useState, useEffect } from "react";

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

export default Header;
