import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-logo">
          Vaishnavi<span>.</span>
        </h2>

        <p className="footer-text">
          Thank you for visiting my portfolio.
          Let's build something amazing together!
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">

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

        <a href="#home" className="back-top">
          <FaArrowUp />
        </a>

        <p className="copyright">
          © {new Date().getFullYear()} Vaishnavi. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;