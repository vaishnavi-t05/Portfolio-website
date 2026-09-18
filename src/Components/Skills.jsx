import './Skills.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiDjango,
  SiMysql,
  SiFirebase,
} from 'react-icons/si';

const frontend = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
];

const system = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'SQLite', icon: <FaDatabase /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const Lane = ({ label, items, dir }) => {
  const chips = [...items, ...items];
  return (
    <div className="stack__lane">
      <span className="stack__lane-label mono">{label}</span>
      <div className={`stack__row stack__row--${dir}`}>
        {chips.map((s, i) => (
          <span className="stack__chip" key={`${s.name}-${i}`}>
            <span className="stack__chip-icon" aria-hidden="true">
              {s.icon}
            </span>
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container skills__wrap">
        <header className="skills__intro">
          <h2 className="skills__title serif">Skills</h2>
          <p className="skills__sub serif">I have gained</p>
        </header>

        <div className="stack">
          <Lane label="frontend" items={frontend} dir="ltr" />
          <Lane label="backend · database" items={system} dir="rtl" />
        </div>
      </div>
    </section>
  );
};

export default Skills;