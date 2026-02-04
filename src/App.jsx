import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Services from "./components/Services";
import Approach from "./components/Approach";
import IUIHub from "./components/IUIHub";
import Clinicians from "./components/Clinicians";
import BookAppointment from "./components/BookAppointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [view, setView] = useState("main"); // 'main' | 'iui-hub'
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (view === "iui-hub") {
    return (
      <div className="page">
        <main>
          <IUIHub onBack={() => setView("main")} />
        </main>
        <a
          href="https://wa.me/254754727441"
          className="whatsapp-fab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Uzima Fertility Hub on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            focusable="false"
            className="whatsapp-fab-icon"
          >
            <path
              fill="currentColor"
              d="M16 3C9.373 3 4 8.373 4 15c0 2.16.586 4.18 1.607 5.94L4 27l6.216-1.59A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-5.014-1.39l-.36-.214-3.69.944.986-3.6-.234-.37A9.9 9.9 0 0 1 6 15c0-5.514 4.486-10 10-10zm-4.258 5.5c-.24-.54-.492-.55-.72-.56l-.615-.01c-.214 0-.56.08-.853.39-.293.31-1.12 1.09-1.12 2.65 0 1.56 1.146 3.07 1.305 3.28.16.21 2.2 3.52 5.43 4.79 2.685 1.06 3.23.85 3.81.8.58-.05 1.88-.77 2.145-1.51.265-.74.265-1.37.185-1.5-.08-.13-.29-.21-.61-.37-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.72.16-.22.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.15-.15.32-.39.48-.58.16-.19.21-.32.32-.54.11-.22.06-.41-.02-.57-.08-.16-.72-1.79-.99-2.43z"
            />
          </svg>
        </a>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <Who />
        <Services onOpenIUIHub={() => setView("iui-hub")} />
        <Approach />
        <Clinicians />
        <BookAppointment />
        <Contact />
      </main>
      <a
        href="https://wa.me/254754727441"
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Uzima Fertility Hub on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
          className="whatsapp-fab-icon"
        >
          <path
            fill="currentColor"
            d="M16 3C9.373 3 4 8.373 4 15c0 2.16.586 4.18 1.607 5.94L4 27l6.216-1.59A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.9 9.9 0 0 1-5.014-1.39l-.36-.214-3.69.944.986-3.6-.234-.37A9.9 9.9 0 0 1 6 15c0-5.514 4.486-10 10-10zm-4.258 5.5c-.24-.54-.492-.55-.72-.56l-.615-.01c-.214 0-.56.08-.853.39-.293.31-1.12 1.09-1.12 2.65 0 1.56 1.146 3.07 1.305 3.28.16.21 2.2 3.52 5.43 4.79 2.685 1.06 3.23.85 3.81.8.58-.05 1.88-.77 2.145-1.51.265-.74.265-1.37.185-1.5-.08-.13-.29-.21-.61-.37-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.72.16-.22.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.15-.15.32-.39.48-.58.16-.19.21-.32.32-.54.11-.22.06-.41-.02-.57-.08-.16-.72-1.79-.99-2.43z"
          />
        </svg>
      </a>
      <Footer />
    </div>
  );
}

export default App;

