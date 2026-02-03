import imgIUI from "../assets/service-iui-procedure.jpeg";
import imgMaleAssessment from "../assets/service-male-assessment.jpeg";
import imgHormonal from "../assets/service-hormonal-evaluation.jpeg";
import imgUltrasound from "../assets/service-ultrasound-monitoring.jpeg";
import imgCounselling from "../assets/service-counselling-guidance.jpeg";

export const SERVICES_DATA = [
  {
    title: "IUI Procedure Support",
    desc: "Professional semen preparation and coordinated procedural support for clinician-led IUI.",
    img: imgIUI,
    detail:
      "Our IUI support includes professional semen preparation, scheduling, coordination with clinicians, and documentation.",
    bullets: [
      "Semen preparation and processing",
      "Coordinated procedure day support",
      "Documentation and reporting",
      "Strictly by clinician referral",
    ],
  },
  {
    title: "Male Fertility Assessment Support",
    desc: "Coordination of semen analysis and related evaluations with licensed facilities.",
    img: imgMaleAssessment,
    detailSections: [
      {
        title: "Male Factor Infertility Screening (Semen Analysis)",
        intro:
          "Semen analysis assesses sperm count, motility, and morphology. Common findings include:",
        items: [
          { term: "Oligozoospermia", desc: "reduced sperm count" },
          { term: "Asthenozoospermia", desc: "reduced sperm motility" },
          { term: "Teratozoospermia", desc: "increased sperm morphological abnormalities" },
          { term: "Azoospermia", desc: "absence of sperm in ejaculate" },
        ],
        type: "cards",
      },
    ],
  },
  {
    title: "Hormonal Evaluation Coordination",
    desc: "Support for endocrine investigations relevant to infertility.",
    img: imgHormonal,
    detailSections: [
      {
        title: "Hormonal Evaluation",
        intro:
          "Hormone levels play a key role in reproductive function. We coordinate testing of the following markers when indicated by your clinician:",
        items: [
          "Antimullerian Hormone (AMH)",
          "Thyroid Stimulating Hormone (TSH)",
          "Prolactin (PRL)",
          "Follicle Stimulating Hormone (FSH)",
          "Estradiol (E2)",
          "Progesterone",
          "Testosterone",
        ],
        type: "list",
      },
    ],
  },
  {
    title: "Ultrasound Monitoring",
    desc: "Follicular monitoring and ultrasound evaluations.",
    img: imgUltrasound,
    detail:
      "We schedule scans and ensure reports are available to your clinician in time.",
    bullets: ["Follicular monitoring", "Cycle tracking", "Timely reporting"],
  },
  {
    title: "Patient Counselling & Guidance",
    desc: "Guided support for patients on fertility procedures and lifestyle.",
    img: imgCounselling,
    detail:
      "We provide supportive, confidential guidance that complements your clinician’s care.",
    bullets: ["Procedure guidance", "Lifestyle advice", "Confidential support"],
  },
];
