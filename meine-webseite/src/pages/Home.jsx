import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import './Home.css';

const skills = [
  { name: 'React', icon: <FaReact color="#61dafb" /> },
  { name: 'HTML5', icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#264de4" /> },
  { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
  { name: 'Datenbanken', icon: <FaDatabase color="#a3a3a3" /> },
];

function Home() {
  return (
    <div className="home-modern">
      <div className="profilbild-wrapper profilbild-hero">
        <img src="/image.png" alt="Mein Profilbild" className="profilbild-modern profilbild-glow" />
      </div>
      <h1 className="gradient-text big">John Broder</h1>
      <h2 className="glow-text">Fullstack Entwickler & Designer</h2>
      <p className="intro-text">
        Willkommen auf meiner modernen Portfolio-Webseite!<br />
        Ich liebe es, kreative und technische Lösungen zu verbinden.
      </p>
      <div className="skills-badges">
        {skills.map((skill) => (
          <span className="skill-badge floating" key={skill.name}>
            {skill.icon} {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Home;


