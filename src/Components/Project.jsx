import './Project.css';
import portfolioShot from '../assets/port1.jpg';
import ecommerceShot from '../assets/cart.jpg';
import notesShot from '../assets/notess.jpg';
import instaShot from '../assets/insta.jpg';

const projects = [
  {
    num: '01',
    name: 'Portfolio Website',
    shot: portfolioShot,
    pos: 'center top',
    desc: 'A modern responsive portfolio showcasing my skills, projects and experience with smooth navigation and clean sections.',
    tech: ['React', 'JavaScript', 'CSS'],
    live: 'https://portfolio-website-iota-seven-17.vercel.app/',
    github: 'https://github.com/vaishnavi-t05/Portfolio-website',
  },
  {
    num: '02',
    name: 'Ecommerce Website',
    shot: ecommerceShot,
    pos: 'center top',
    desc: 'A responsive storefront to browse products, manage wishlists and carts with search, filters and interactive sections.',
    tech: ['React', 'JavaScript', 'CSS'],
    live: 'https://ecommerce-website-five-nu.vercel.app',
    github: 'https://github.com/vaishnavi-t05/Ecommerce',
  },
  {
    num: '03',
    name: 'Notes App',
    shot: notesShot,
    pos: 'center',
    desc: 'A full-stack notes manager with secure login and CRUD over REST APIs, built with a React frontend and Django backend.',
    tech: ['React', 'Django REST', 'MySQL'],
    live: 'https://note-phi-dun.vercel.app/login',
    github: 'https://github.com/vaishnavi-t05/Note',
  },
  {
    num: '04',
    name: 'Instagram Clone',
    shot: instaShot,
    pos: 'center 30%',
    desc: 'A full-stack social clone with signup, posts, likes, stories and profiles using Firebase auth and dynamic feeds.',
    tech: ['React', 'Firebase', 'CSS'],
    live: 'https://instagram-clone-self-seven.vercel.app/',
    github: 'https://github.com/vaishnavi-t05/instagram-clone',
  },
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
              <div className="proj-shot">
                <img
                  className="proj-shot__img"
                  src={p.shot}
                  alt={`${p.name} preview`}
                  loading="lazy"
                  style={{ objectPosition: p.pos }}
                />
              </div>

              <h3 className="proj-name">{p.name}</h3>

              <p className="proj-desc">{p.desc}</p>

              <div className="proj-chips">
                {p.tech.map((t) => (
                  <span className="proj-chip mono" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="proj-foot">
                <a
                  className="proj-code"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
                <a
                  className="proj-open"
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.name} live demo`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
