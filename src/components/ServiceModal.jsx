export default function ServiceModal({ service, onClose }) {
  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <div className="service-modal" onClick={(e) => e.stopPropagation()}>
        <button className="service-modal-close" onClick={onClose}>×</button>

        <div className="service-modal-image-wrap">
          <img src={service.img} alt="" className="service-modal-img" />
        </div>

        <h2 className="service-modal-title">{service.title}</h2>

        {service.detailSections ? (
          service.detailSections.map((sub, i) => (
            <div key={i} className="service-modal-subsection">
              <h3 className="service-modal-subsection-title">{sub.title}</h3>
              <p className="service-modal-subsection-intro">{sub.intro}</p>

              {sub.type === "cards" ? (
                <ul className="service-modal-cards">
                  {sub.items.map((it, j) => (
                    <li key={j}><strong>{it.term}</strong> – {it.desc}</li>
                  ))}
                </ul>
              ) : (
                <ul className="service-modal-pill-list">
                  {sub.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              )}
            </div>
          ))
        ) : (
          <>
            <p className="service-modal-detail">{service.detail}</p>
            {service.bullets && (
              <ul className="service-modal-bullets">
                {service.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}
