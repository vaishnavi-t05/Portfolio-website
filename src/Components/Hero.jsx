import { useEffect, useState } from 'react';
import './Hero.css';
import profile from '../assets/profile.jpg';

function Arrow() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function Hero() {
  const [zoom, setZoom] = useState(false);

  const go = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!zoom) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setZoom(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [zoom]);

  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__hello">Hello, i&apos;m</span>{' '}
            <span className="hero__name">Vaishnavi</span>
          </h1>

          <p className="hero__role serif">
            Fresher <em>full-stack </em>developer
          </p>

          <p className="hero__desc">
            I build web apps from sign-in screen to database query. I care about
            the small stuff — button states, loading spinners, error messages
            that actually help. Currently on the lookout for my first real team.
          </p>

          <div className="hero__actions">
            <button className="btn btn--fill" onClick={() => go('#projects')}>
              Visit My Project <Arrow />
            </button>
            <button className="btn btn--ghost" onClick={() => go('#contact')}>
              Say hello
            </button>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <img src={profile} alt="Portrait of Vaishnavi" className="hero__portrait" />
            <span className="hero__tape" aria-hidden="true" />
            <button
              type="button"
              className="hero__expand"
              onClick={() => setZoom(true)}
              aria-label="Enlarge profile photo"
            >
              <ExpandIcon />
            </button>
          </div>

          <span className="hero__sun" aria-hidden="true" />
        </div>
      </div>

      {zoom && (
        <div className="hero__modal" onClick={() => setZoom(false)}>
          <div
            className="hero__modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="hero__modal-close"
              onClick={() => setZoom(false)}
              aria-label="Close enlarged photo"
            >
              <CloseIcon />
            </button>
            <img src={profile} alt="Vaishnavi enlarged" className="hero__modal-img" />
          </div>
        </div>
      )}
    </section>
  );
}