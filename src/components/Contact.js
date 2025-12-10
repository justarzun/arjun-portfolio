import "./Contact.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section fade-contact">
      <h2 className="contact-heading">Get In Touch</h2>

      <div className="contact-glass-card">

        <p className="contact-text">
          I’m open to freelance work, collaborations, full-time roles or just a friendly chat.  
          Drop me a message — I usually respond within a few hours.
        </p>

        <div className="contact-buttons">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arjun1901214@gmail.com"
             target="_blank"
             rel="noopener noreferrer" className="contact-btn primary">
            Email Me
          </a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/justarzun" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/justarzun" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://instagram.com/justarzun" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
