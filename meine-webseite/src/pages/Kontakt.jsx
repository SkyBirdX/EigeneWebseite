import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Kontakt.css";

export default function Kontakt() {
  return (
    <div className="kontakt-modern">
      <h2 className="gradient-text big" style={{textAlign: 'center', marginBottom: '2.5rem'}}>Kontakt</h2>
      <div className="kontakt-cards">
        <a href="mailto:broderjohn5@gmail.com" className="kontakt-card" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="kontakt-icon" />
          <span>E-Mail</span>
          <span className="kontakt-info">broderjohn5@gmail.com</span>
        </a>
        <a href="https://github.com/SkyBirdX" className="kontakt-card" target="_blank" rel="noopener noreferrer">
          <FaGithub className="kontakt-icon" />
          <span>GitHub</span>
          <span className="kontakt-info">SkyBirdX</span>
        </a>
        <a href="https://www.linkedin.com/in/john-broder-1847a5306/" className="kontakt-card" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="kontakt-icon" />
          <span>LinkedIn</span>
          <span className="kontakt-info">john-broder-1847a5306</span>
        </a>
      </div>
    </div>
  );
}
