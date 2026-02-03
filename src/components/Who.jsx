export default function Who() {
  return (
    <section className="who" id="who" data-aos="fade-up">
      <div className="container who-container">
        <div className="who-text">
          <h2>About Us</h2>
          <p>
            Dedicated IUI support hub with a referral-based model. Procedures are performed by clinicians,
            providing cost-effective, safe, and accessible care.
             All services are offered on referral from 
            a qualified clinician,and all insemination procedures are performed by clinician incharge of care.
          </p>
        </div>

        <div className="who-features">
          {["Referral-based", "Clinician-led", "Ethical care", "Accessible IUI", "Affordable IUI"].map((item, i) => (
            <div
              className="who-card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={100 * (i + 1)}
            >
              <span className="who-card-label">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
