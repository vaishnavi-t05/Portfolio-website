import "./Testimonial.css";

const testimonials = [
  {
    name: "Learning Journey",
    role: "Full Stack Development",
    message:
      "I enjoy learning new technologies and continuously improving my skills by building real-world projects with React, Django, and MySQL.",
  },
  {
    name: "Problem Solving",
    role: "Development Approach",
    message:
      "I like solving coding challenges, debugging applications, and creating responsive websites with clean and maintainable code.",
  },
  {
    name: "Career Goal",
    role: "Aspiring Full Stack Developer",
    message:
      "My goal is to join a professional development team where I can contribute, learn from experienced developers, and grow as a Full Stack Developer.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">Testimonials</h2>

        <p className="section-subtitle">
          My learning journey and development goals.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-message">
                "{item.message}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;