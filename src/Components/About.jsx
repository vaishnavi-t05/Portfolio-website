import "./About.css";

export default function About() {
  const about = {
    eyebrow: "About Me",

    headline: [
      "Passionate",
      "Full Stack",
      "Developer",
    ],

    accent: 1,

    paragraphs: [
      "Hi, I'm Vaishnavi, a passionate and aspiring Full Stack Developer. I enjoy building modern, responsive, and user-friendly web applications that provide a great user experience.",

      "I completed my Bachelor of Computer Applications (BCA) and have developed projects using HTML, CSS, JavaScript, React, Python, Django, MySQL, and Firebase. I love learning new technologies and continuously improving my development skills.",

      "My goal is to become a professional Full Stack Developer and contribute to innovative software solutions while growing as a developer."
    ],

    stats: [
      {
        value: "3",
        label: "Projects Completed",
      },
      {
        value: "8+",
        label: "Technologies",
      },
      {
        value: "BCA",
        label: "Graduate",
      },
    ],
  };

  return (
    <section id="about" className="about">

      <div className="container about__grid">

        <div className="about__intro">

          <p className="eyebrow">
            {about.eyebrow}
          </p>

          <h2 className="about__title">
            {about.headline.map((text, index) => (
              <span
                key={index}
                className={index === about.accent ? "about__accent" : ""}
              >
                {text}
                {index !== about.headline.length - 1 && <br />}
              </span>
            ))}
          </h2>

        </div>

        <div className="about__body">

          {about.paragraphs.map((text, index) => (
            <p key={index} className="about__text">
              {text}
            </p>
          ))}

          <div className="about__stats">

            {about.stats.map((item, index) => (
              <div className="about__stat" key={index}>

                <h3>{item.value}</h3>

                <span>{item.label}</span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}