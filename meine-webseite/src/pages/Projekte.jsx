import ProjektCard from "../components/ProjektCard";
import { FaLightbulb } from "react-icons/fa";
import "./Projekte.css";
import './Home.css';

const projekte = [
  {
    titel: "Ideeninsel – Deine digitale Pinnwand für spontane Einfälle",
    beschreibung:
      "Die Ideeninsel ist eine Pinnwand für spontane Einfälle. Diese können über das Textfeld eingegeben und dann via den 'Hinzufügen'-Button angepinnt werden. Dank der Firestore Integration werden diese Ideen auch während des Reloads der Seite gespeichert und bleiben angepinnt, bis sie vom Benutzer wieder gelöscht werden.",
    link: "https://github.com/SkyBirdX/ILA3-0130_Ideeninsel_V2",
    icon: <FaLightbulb color="#facc15" style={{marginRight: '0.5rem', fontSize: '1.6rem'}} />,
    tech: "React, Firebase Firestore",
  },
];

export default function Projekte() {
  return (
    <div className="projekte-modern">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <img
          src="/projekt.png"
          alt="Projekt Vorschau"
          style={{
            width: '100%',
            maxWidth: '400px',
            borderRadius: '1rem',
            boxShadow: '0 2px 16px rgba(99,102,241,0.15)',
            objectFit: 'cover',
          }}
        />
      </div>
      <h2 className="gradient-text big" style={{textAlign: 'center', marginBottom: '2rem'}}>Mein Projekt</h2>
      <div className="projekte-grid">
        {projekte.map((projekt) => (
          <ProjektCard key={projekt.titel} {...projekt} />
        ))}
      </div>
    </div>
  );
}
