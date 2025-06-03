import { FaGithub } from "react-icons/fa";

export default function ProjektCard({ titel, beschreibung, link }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{titel}</h3>
      <p className="text-gray-600">{beschreibung}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        <FaGithub style={{ marginRight: '0.6rem', fontSize: '1.2em' }} />
        Auf GitHub ansehen
      </a>
    </div>
  );
}
