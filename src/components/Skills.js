import { useState } from "react";

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

export default Skills;
