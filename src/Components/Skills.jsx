import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiDjango,
  SiMysql,
  SiFirebase,
  SiVisualstudiocode,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      // { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQLite", icon: <FaDatabase /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name:  "VScode", icon: <SiVisualstudiocode />},
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build responsive and scalable web
          applications.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <span className="skill-icon">{skill.icon}</span>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;