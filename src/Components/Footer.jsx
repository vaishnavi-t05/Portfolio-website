import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const go = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <p className="footer__name serif">
            VAISHNAVI
          </p>
          <p className="footer__note mono">
            Thank you for visiting my portfolio.
            <br />
            Let's build something amazing together!
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="footer__link mono"
              onClick={(e) => go(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a
            href="https://github.com/vaishnavi-t05"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaishnavi2205/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span className="mono">© {new Date().getFullYear()} Vaishnavi · all rights reserved</span>
        <a href="#home" className="footer__top mono" onClick={(e) => go(e, '#home')}>
          back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;