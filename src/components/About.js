import { useState, useEffect } from "react";
import profileImg from "../talha-profile.png";

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

export default About;
