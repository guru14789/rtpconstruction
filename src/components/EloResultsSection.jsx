import React from "react";
import "./EloResultsSection.css";

// SVG Monogram Icons
const MountainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const HouseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const LotusIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3c-1.5 3-3.5 5.5-6 7 2.5 1 5 1 6-1 1 2 3.5 2 6 1-2.5-1.5-4.5-4-6-7z" />
    <path d="M12 12c-2.5 3-6 4.5-10 4 3 2 7 2 10-1 3 3 7 3 10 1-4 .5-7.5-1-10-4z" />
    <path d="M12 17c-2 2-5 3-8 2.5 2.5 1.5 5.5 1.5 8 0 2.5 1.5 5.5 1.5 8 0-3 .5-6-.5-8-2.5z" />
  </svg>
);

const CARDS_DATA = [
  {
    id: "card-1",
    client: "Hotel Mira",
    tagline: "Regional visibility boosted",
    icon: <MountainIcon />,
    gradientClass: "card-grad-ember",
    stat1: { num: "+240%", label: "more website visitors" },
    stat2: { num: "+180%", label: "more direct inquiries" },
    photo: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/c42a7f3d-d802-4377-8cc6-9c209cdfad5f.webp",
    alt: "Hotel Mira alpine chalet at sunset with glowing windows",
  },
  {
    id: "card-2",
    client: "Nordhaus Estates",
    tagline: "Leads multiplied",
    icon: <HouseIcon />,
    gradientClass: "card-grad-tangerine",
    stat1: { num: "+663%", label: "more online leads" },
    stat2: { num: "+32%", label: "more organic traffic" },
    photo: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/d469e4d7-94ba-4457-ad51-b589766069f0.webp",
    alt: "Nordhaus Estates architectural showroom",
  },
  {
    id: "card-3",
    client: "Studio Belle Peau",
    tagline: "From invisible to fully booked",
    icon: <LotusIcon />,
    gradientClass: "card-grad-rust",
    stat1: { num: "+362%", label: "more qualified leads" },
    stat2: { num: "+75%", label: "more online bookings" },
    photo: "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e791074d-795e-4b42-ad94-a6b113ecb72d.webp",
    alt: "Studio Belle Peau candle-lit treatment space",
  },
];

export function EloResultsSection() {
  const headlineWords = [
    "We", "build", "massive", "structures", "with", "precision."
  ];

  return (
    <section id="projects" className="elo-results-root">
      <div className="elo-frame">
        {/* Eyebrow */}
        <div className="elo-eyebrow-wrap">
          <span className="elo-eyebrow">Projects</span>
        </div>

        {/* Staggered entrance headline */}
        <h2 className="elo-headline" aria-label="We build massive structures with precision.">
          {headlineWords.map((word, i) => (
            <span
              key={i}
              className="elo-word-wrap"
              style={{ animationDelay: `${60 + i * 55}ms` }}
            >
              <span className="elo-word">{word}&nbsp;</span>
            </span>
          ))}
        </h2>

        {/* Lead subhead */}
        <p className="elo-lead">
          Our clients come from very different industries, but the goal is always the same: measurable results.
          <br className="elo-lead-br" />
          The projects below show the results that are actually possible.
        </p>

        {/* Thin divider rule */}
        <div className="elo-rule-divider" aria-hidden="true" />

        {/* Three sunset cards */}
        <div className="elo-cards-grid">
          {CARDS_DATA.map((card, idx) => (
            <div
              key={card.id}
              className={`elo-card ${card.gradientClass}`}
              style={{ animationDelay: `${380 + idx * 120}ms` }}
            >
              {/* Card top: Name, tagline, monogram */}
              <div className="elo-card-header">
                <div className="elo-card-header-left">
                  <h3 className="elo-client-name">{card.client}</h3>
                  <p className="elo-client-outcome">{card.tagline}</p>
                </div>
                <div className="elo-card-icon" aria-hidden="true">
                  {card.icon}
                </div>
              </div>

              {/* Card stats: 2 large numbers divided by thin line */}
              <div className="elo-stats-bar">
                <div className="elo-stat-col">
                  <span className="elo-stat-num">{card.stat1.num}</span>
                  <span className="elo-stat-lbl">{card.stat1.label}</span>
                </div>
                <div className="elo-stats-divider" aria-hidden="true" />
                <div className="elo-stat-col">
                  <span className="elo-stat-num">{card.stat2.num}</span>
                  <span className="elo-stat-lbl">{card.stat2.label}</span>
                </div>
              </div>

              {/* Photo framed by stacked paper layers */}
              <div className="elo-photo-stage">
                <div className="elo-paper elo-paper-layer-1" aria-hidden="true" />
                <div className="elo-paper elo-paper-layer-2" aria-hidden="true" />
                <div className="elo-paper-surface">
                  <img
                    src={card.photo}
                    alt={card.alt}
                    loading="lazy"
                    className="elo-card-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Pill Button */}
        <div className="elo-btn-wrap">
          <a href="#contact" className="elo-pill-btn">
            View more projects
            <span className="elo-btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default EloResultsSection;
