import './Contact.css';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const details = [
  {
    icon: <FaEnvelope />,
    label: 'email',
    value: 'tvaishnavi2205@gmail.com',
    href: 'mailto:tvaishnavi2205@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    label: 'phone',
    value: '+91 81110 38226',
    href: 'tel:+918111038226',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'based in',
    value: 'Coimbatore, Tamil Nadu · IST',
    href: null,
  },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get('name');
    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:tvaishnavi2205@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <span className="contact__blob" aria-hidden="true" />

      <div className="container">
        <span className="contact__tag">CONTACT ME</span>

        <h2 className="contact__title serif">
          Hey, let&apos;s work
          <br />
          together
        </h2>

        <div className="contact__grid">
          <div className="contact__cards">
            {details.map((d) => (
              <a
                key={d.label}
                className="contact__card"
                href={d.href || undefined}
                style={{ pointerEvents: d.href ? 'auto' : 'none' }}
                aria-disabled={!d.href}
              >
                <span className="contact__card-icon" aria-hidden="true">
                  {d.icon}
                </span>
                <span className="contact__card-body">
                  <span className="contact__card-label mono">{d.label}</span>
                  <span className="contact__card-value">{d.value}</span>
                </span>
              </a>
            ))}

            <div className="contact__social">
              <span className="contact__social-title mono">or find me on</span>
              <div className="contact__social-links">
                <a
                  href="https://github.com/vaishnavi-t05"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social-link mono"
                >
                  <FaGithub /> github ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/vaishnavi2205/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__social-link mono"
                >
                  <FaLinkedin /> linkedin ↗
                </a>
              </div>
              <a
                href="https://wa.me/918111038226"
                target="_blank"
                rel="noreferrer"
                className="btn btn--light contact__whatsapp"
              >
                or WhatsApp me
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-grid">
              <label className="contact__field">
                <span className="contact__field-label mono">your name</span>
                <input type="text" name="name" required />
              </label>

              <label className="contact__field">
                <span className="contact__field-label mono">your email</span>
                <input type="email" name="email" required />
              </label>
            </div>

            <label className="contact__field">
              <span className="contact__field-label mono">subject</span>
              <input type="text" name="subject" required />
            </label>

            <label className="contact__field">
              <span className="contact__field-label mono">your message</span>
              <textarea name="message" rows="5" required />
            </label>

            <button type="submit" className="btn btn--light contact__submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;