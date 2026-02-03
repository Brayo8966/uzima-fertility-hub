import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "who", "services", "approach", "clinicians", "book-appointment", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "who", "services", "approach", "clinicians", "book-appointment", "contact"];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="Uzima Fertility Hub" className="logo-img" />
          <span className="logo-text">Uzima Fertility Hub</span>
        </div>

        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {section === "who"
                  ? "About Us"
                  : section === "clinicians"
                  ? "For Clinicians"
                  : section === "approach"
                  ? "Our Approach"
                  : section === "book-appointment"
                  ? "Book Appointment"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
