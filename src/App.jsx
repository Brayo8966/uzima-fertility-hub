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
        <IUIHub onBack={() => setView("main")} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Who />
      <Services onOpenIUIHub={() => setView("iui-hub")} />
      <Approach />
      <Clinicians />
      <BookAppointment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

