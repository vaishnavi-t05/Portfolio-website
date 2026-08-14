import "./Project.css";

const project = [
  {
    title: "Instagram Clone",
    image: "/projects/instagram.png",
    description:
      "A responsive Instagram clone built with React and Firebase Authentication featuring stories, posts, likes, comments, and user authentication.",
    tech: ["React", "Firebase", "CSS"],
    github: "https://github.com/yourusername/instagram-clone",
    live: "https://your-instagram-clone.vercel.app",
  },
  {
    title: "E-Commerce Website",
    image: "/src/assets/Screenshot 2026-08-14 122804.png",
    description:
      "A modern e-commerce website with product listing, shopping cart, search, and responsive design.",
    tech: ["React", "Django", "MySQL"],
    github: "https://github.com/vaishnavi-t05/Ecommerce",
    live: "https://ecommerce-website-five-nu.vercel.app",
  },
  {
    title: "Portfolio Website",
    image: "src/assets/Screenshot 2026-08-14 123152.png",
    description:
      "A modern animated portfolio showcasing my skills, projects, and contact information with beautiful UI.",
    tech: ["React", "CSS"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.vercel.app",
  },
];

const Project = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2 className="section-title">My Projects</h2>

        <p className="section-subtitle">
          Here are some of the projects I've built while learning Full Stack Development.
        </p>

        <div className="projects-grid">
          {project.map((project, index) => (
            <div className="project-card" key={index}>

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;