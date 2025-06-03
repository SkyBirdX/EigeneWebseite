export default function ProjektCard({ titel, beschreibung, link }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{titel}</h3>
      <p className="text-gray-600">{beschreibung}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-2 inline-block">
        Auf GitHub ansehen
      </a>
    </div>
  );
}
