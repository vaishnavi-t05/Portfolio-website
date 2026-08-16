import "./Hero.css";
import profile from "../assets/profile.jpg"; // Change to your image path

function ArrowIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width="20"
      height="20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--one"></div>
      <div className="hero__glow hero__glow--two"></div>

      <div className="hero__inner container">

        {/* Left Content */}

        <div className="hero__content">

          <p className="eyebrow">
            👋 Welcome to my Portfolio
          </p>

          <h1 className="hero__title">
            Hi, I'm
            <br />

            <span className="hero__title-accent">
              Vaishnavi
            </span>

            <br />

           Fresher Full Stack Developer
          </h1>

          <p className="hero__description">
            Passionate Full Stack Developer with knowledge of
            HTML, CSS, JavaScript, React, Python, Django and MySQL.
            I enjoy building responsive, modern and user-friendly
            web applications.
          </p>

          <div className="hero__actions">

            <button
              className="btn btn--primary"
              onClick={() => scrollTo("#projects")}
            >
              View Projects
              <ArrowIcon />
            </button>

            <button
              className="btn btn--ghost"
              onClick={() => scrollTo("#contact")}
            >
              Contact Me
            </button>

          </div>

        </div>

        {/* Right Content */}

        <div className="hero__visual">

          <div className="hero__frame">

            <img
              src={profile}
              alt="Vaishnavi"
              className="hero__portrait"
            />

            <div className="hero__frame-overlay"></div>

          </div>

          <div className="hero__badge">

            <span className="hero__badge-value">
              Fresher
            </span>

            <span className="hero__badge-label">
              Full Stack Developer
            </span>

          </div>

          <div className="hero__ring"></div>

        </div>

      </div>

      <a href="#about" className="hero__scroll">
        <span className="hero__scroll-line"></span>
      </a>

    </section>
  );
}