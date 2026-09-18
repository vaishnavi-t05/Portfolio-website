import './About.css';

const stats = [
  { value: '3', label: 'Projects completed' },
  { value: '8+', label: 'Tools in the kit' },
  { value: '2026', label: 'BCA graduate' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <span className="about__corner about__corner--tl" aria-hidden="true" />
      <span className="about__corner about__corner--br" aria-hidden="true" />

      <div className="container">
        <div className="about__grid">
          <div className="about__left">
            <p className="about__eyebrow serif">About <em>me</em> </p>

            <h2 className="about__title serif">
              Passionate <em>Full Stack</em> Developer
            </h2>
          </div>

          <div className="about__right">
            <p className="about__text">
              Hi, I&apos;m Vaishnavi, a passionate and aspiring Full Stack
              Developer. I enjoy building modern, responsive, and user-friendly
              web applications that provide a great user experience.
            </p>
            <p className="about__text">
              I completed my Bachelor of Computer Applications (BCA) and have
              developed projects using HTML, CSS, JavaScript, React, Python,
              Django, MySQL, and Firebase. I love learning new technologies and
              continuously improving my development skills.
            </p>
            <p className="about__text">
              My goal is to become a professional Full Stack Developer and
              contribute to innovative software solutions while growing as a
              developer.
            </p>

            <div className="about__stats">
              {stats.map((row) => (
                <div className="about__stat" key={row.label}>
                  <span className="about__stat-value serif">{row.value}</span>
                  <span className="about__stat-label mono">{row.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}