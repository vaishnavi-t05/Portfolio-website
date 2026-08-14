import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <h2>Get In Touch</h2>
          <p>
            I'm currently looking for Full Stack Developer opportunities.
            Feel free to contact me for internships, jobs, or collaborations.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="info-box">
              <FaEnvelope className="icon" />
              <div>
                <h4>Email</h4>
                <p>tvaishnavi2205@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <FaPhoneAlt className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 8111038226</p>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>Location</h4>
                <p>Coimbatore, Tamil Nadu</p>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/vaishnavi-t05"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vaishnavi2205/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;