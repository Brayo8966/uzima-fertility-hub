import imgReferralPathway from "../assets/clinician-referral-pathway.jpeg";
import imgFastTurnaround from "../assets/clinician-fast-turnaround.jpeg";
import imgClinicalHelp from "../assets/clinician-clinical-help.jpeg";

export default function Clinicians() {
  const cards = [
    { title: "Clear Referral Pathway", desc: "Simple and efficient referrals.", img: imgReferralPathway },
    { title: "Fast Turnaround", desc: "Quick feedback and results.", img: imgFastTurnaround },
    { title: "Respect & Autonomy", desc: "We support your clinical decisions.", img: imgClinicalHelp },
  ];

  return (
    <section className="clinicians" id="clinicians" data-aos="fade-up">
      <div className="container clinicians-container">
        <h2>For Clinicians</h2>
        <p>We provide clear referrals, fast turnaround, and collaborative care.</p>

        <div className="clinician-cards">
          {cards.map((c, i) => (
            <div
              className="clinician-card"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={100 * (i + 1)}
            >
              <img src={c.img} alt={c.title} className="clinician-img" />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="clinician-buttons">
          <a href="#contact" className="hero-btn">Partner With Us</a>
        </div>
      </div>
    </section>
  );
}
