import './Project.css';
import ecommerceShot from '../assets/Ecommerce.png';
import portfolioShot from '../assets/Portfolio.png';

const projects = [
  {
    num: '01',
    name: 'Portfolio Website',
    shot: portfolioShot,
    emoji: null,
    live: 'https://portfolio-website-iota-seven-17.vercel.app/',
    github: 'https://github.com/vaishnavi-t05/Portfolio-website',
  },
  {
    num: '02',
    name: 'Ecommerce Website',
    shot: ecommerceShot,
    emoji: null,
    live: 'https://ecommerce-website-five-nu.vercel.app',
    github: 'https://github.com/vaishnavi-t05/Ecommerce',
  },
  {
    num: '03',
    name: 'Notes App',
    shot: null,
    emoji: '📝',
    live: 'https://note-phi-dun.vercel.app/login',
    github: 'https://github.com/vaishnavi-t05/Note',
  },
  {
    num: '04',
    name: 'Instagram Clone',
    shot: null,
    emoji: '📸',
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
                {p.shot ? (
                  <img
                    className="proj-shot__img"
                    src={p.shot}
                    alt={`${p.name} preview`}
                    loading="lazy"
                  />
                ) : (
                  <span className="proj-shot__emoji" aria-hidden="true">
                    {p.emoji}
                  </span>
                )}
              </div>

              <h3 className="proj-name">{p.name}</h3>

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
