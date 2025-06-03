import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaFeatherAlt, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projekte", label: "Projekte" },
    { to: "/lebenslauf", label: "Lebenslauf" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="navbar glass-nav">
      <div className="nav-content nav-centered">
        <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menü öffnen/schließen">
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
