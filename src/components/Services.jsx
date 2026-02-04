import { useState } from "react";
import { SERVICES_DATA } from "../data/services";
import ServiceModal from "./ServiceModal";

export default function Services({ onOpenIUIHub }) {
  const [active, setActive] = useState(null);

  return (
    <section className="services" id="services" data-aos="fade-up">
      <h2>Services</h2>

      <div className="service-grid">
        {SERVICES_DATA.map((s, i) => (
          <button
            key={i}
            className="service-card"
            onClick={() => {
              if (i === 0 && onOpenIUIHub) {
                onOpenIUIHub();
              } else {
                setActive(i);
              }
            }}
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={100 * (i + 1)}
          >
            <img src={s.img} alt={s.title} className="service-img" />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <span className="service-card-hint">
              {i === 0 ? "What is IUI?" : "Learn more"}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <ServiceModal service={SERVICES_DATA[active]} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
