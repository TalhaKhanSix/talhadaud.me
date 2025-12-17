import { useState } from "react";

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

export default Footer;
