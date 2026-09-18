import { useEffect, useState } from 'react';
import './Navbar.css';

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" onClick={(e) => go(e, '#home')}>
          <span className="nav__logo-icon" aria-label="Vaishnavi">v</span>
        </a>

        <nav className="nav__desktop" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__link"
              onClick={(e) => go(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn--fill btn--sm nav__cta"
            onClick={(e) => go(e, '#contact')}
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`nav__burger-line ${open ? 'nav__burger-line--x1' : ''}`} />
          <span className={`nav__burger-line ${open ? 'nav__burger-line--x2' : ''}`} />
        </button>
      </div>

      <div className={`nav__overlay ${open ? 'nav__overlay--open' : ''}`}>
        <div className="container nav__overlay-inner">
          <div className="nav__overlay-links">
            <a href="#home" className="nav__overlay-link" onClick={(e) => go(e, '#home')}>
              Home
            </a>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav__overlay-link"
                onClick={(e) => go(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="nav__overlay-meta">tvaishnavi2205@gmail.com · +91 81110 38226</p>
        </div>
      </div>
    </header>
  );
}