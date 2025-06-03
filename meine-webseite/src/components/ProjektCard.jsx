import { FaGithub } from 'react-icons/fa';

export default function ProjektCard({ titel, beschreibung, link, icon, tech, image }) {
  return (
    <div className="glass-card projekt-card">
      {image && (
        <img
          src={image}
          alt={titel}
          style={{
            width: '100%',
            borderRadius: '0.7rem 0.7rem 0 0',
            marginBottom: '1rem',
            boxShadow: '0 2px 12px rgba(99,102,241,0.10)'
          }}
        />
      )}
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
        {icon}
        <h3 className="gradient-text" style={{margin: 0, fontSize: '1.2rem'}}>{titel}</h3>
      </div>
      <p style={{color: 'var(--text-color)', marginBottom: '1rem'}}>{beschreibung}</p>
      {tech && <div style={{marginBottom: '1rem', fontSize: '0.98rem', color: 'var(--accent-color)', fontWeight: 500}}>Tech-Stack: {tech}</div>}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="animated-button projekt-link"
      >
        <FaGithub style={{marginRight: '8px', verticalAlign: 'middle'}} /> Auf GitHub ansehen
      </a>
    </div>
  );
}
