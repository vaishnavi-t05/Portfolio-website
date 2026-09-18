import './Project.css';

const projects = [
  {
    num: '01',
    cat: 'Portfolio',
    title: 'This page,',
    titleEm: 'rewritten.',
    description:
      'A modern and responsive personal portfolio website designed to showcase my skills, projects, education, and professional experience. The website features a clean user interface, interactive sections, smooth navigation, and a responsive design built with React.js, JavaScript, HTML, and CSS.',
    tech: ['React', 'CSS'],
    live: 'https://portfolio-website-iota-seven-17.vercel.app/',
    github: 'https://github.com/vaishnavi-t05/Portfolio-website',
  },
  {
    num: '02',
    cat: 'E-Commerce',
    title: 'A storefront',
    titleEm: 'that adds up.',
    description:
      'A responsive E-Commerce web application that allows users to browse products, search and filter items, manage wishlists, and add products to a shopping cart. The application features a user-friendly interface, interactive product sections, and a responsive design built with React.js, JavaScript, HTML, and CSS.',
    tech: ['React', 'CSS'],
    live: 'https://ecommerce-website-five-nu.vercel.app',
    github: 'https://github.com/vaishnavi-t05/Ecommerce',
  },
  {
    num: '03',
    cat: 'Notes App',
    title: 'A scratchpad',
    titleEm: 'for the head.',
    description:
      'A full-stack Notes Management application that allows users to securely create, view, edit, and delete personal notes. The application features user authentication, CRUD operations, REST API integration, and a responsive user-friendly interface built with frontend and backend.',
    tech: ['React', 'Django REST Framework', 'REST API', 'Postman', 'MySQL'],
    live: 'https://note-phi-dun.vercel.app/login',
    github: 'https://github.com/vaishnavi-t05/Note',
  }
];

const Project = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__bar">
          <h2 className="projects__title serif">
            Project <em>Experience.</em>
          </h2>
          <a
            className="section-head__more"
            href="https://github.com/vaishnavi-t05"
            target="_blank"
            rel="noreferrer"
          >
            Full archive
          </a>
        </div>

        <p className="projects__sub">
          Here are some of the projects I've built while learning Full Stack Development.
        </p>

        <div className="projects__grid">
          {projects.map((p) => (
            <article className="proj-card" key={p.num}>
              <div className="proj-body">
                <h3 className="proj-title serif">{p.cat}</h3>

                <p className="proj-desc">{p.description}</p>

                <div className="proj-chips">
                  {p.tech.map((t) => (
                    <span className="proj-chip mono" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="proj-actions">
                  <a
                    className="proj-live mono"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    live demo ↗
                  </a>
                  <a
                    className="proj-src mono"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    source on github
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;