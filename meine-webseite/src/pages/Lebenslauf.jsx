import "./lebenslauf.css";

export default function Lebenslauf() {
  return (
    <div className="lebenslauf-container">
      <h1>John Broder</h1>
      <div className="lebenslauf-grid">
        <div className="lebenslauf-info">
          <section className="kontakt">
            <h2>Kontakt</h2>
            <p><strong>E-Mail:</strong> broderjohn5@gmail.com</p>
            <p><strong>Geburtsdatum:</strong> 23.08.2006</p>
            <p><strong>Telefon:</strong> +41 76 831 31 60</p>
            <p><strong>Adresse:</strong> 5734 Reinach AG</p>
            <p><strong>Staatsbürgerschaft:</strong> Schweiz</p>
          </section>

          <section className="sprachen">
            <h2>Sprachen</h2>
            <ul>
              <li>Deutsch (Muttersprache)</li>
              <li>Englisch (Schulkenntnisse)</li>
              <li>Französisch (Schulkenntnisse)</li>
            </ul>
          </section>

          <section className="kenntnisse-persoenlich">
            <h2>Meine Eigenschaften</h2>
            <ul>
              <li>Teamfähig</li>
              <li>Zielstrebig</li>
              <li>Logisches Denken</li>
              <li>Kommunikationsstark</li>
            </ul>
          </section>

          <section className="ausbildung">
            <h2>Ausbildung</h2>
            <ul>
              <li>08/2022 - bis jetzt: Informatik Mittelschule</li>
              <li>08/2019 - 07/2022: Bezirksschule</li>
              <li>08/2013 - 07/2019: Primarschule</li>
            </ul>
          </section>

          <section className="interessen">
            <h2>Interessen</h2>
            <p>Fussball, Joggen, Kraftsport, Autofahren</p>
          </section>
        </div>
        <div className="lebenslauf-skills">
          <h2>Skills</h2>
          <Skill name="HTML" level={4} />
          <Skill name="CSS" level={4} />
          <Skill name="ReactJS" level={4} />
          <Skill name="JavaScript" level={4} />
          <Skill name="Tailwind CSS" level={2} />
          <Skill name="Backend" level={3} />
          <Skill name="C#" level={3} />
          <Skill name="Firebase" level={2} />
          <Skill name="Datenbanken" level={3} />
          <Skill name="MongoDB" level={1} />
          <Skill name="SQL" level={3} />
        </div>
      </div>
    </div>
  );
}

function Skill({ name, level }) {
  return (
    <div className="skill">
      <span>{name}</span>
      <div className="skill-bar">
        <div
          className="skill-level"
          style={{ width: `${(level / 5) * 100}%` }}
          title={`${level} von 5`}
        />
      </div>
    </div>
  );
}
