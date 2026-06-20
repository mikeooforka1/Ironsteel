import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import './AboutTeaser.css';

const POINTS = [
  'Licensed structural engineers on every project',
  'In-house fabrication workshop, zero subcontracted welding',
  'Documented QA/QC at every project milestone',
];

export default function AboutTeaser() {
  return (
    <section className="section about-teaser">
      <div className="container about-teaser__grid">
        <Reveal as="div" className="about-teaser__media bracket-frame">
          <img
            src="/assets/images/about-1.jpg"
            alt="IRONSTEEL fabrication workshop and structural steel framework"
            loading="lazy"
          />
          <div className="about-teaser__media-tag">
            <span className="about-teaser__media-tag-value">18+</span>
            <span className="about-teaser__media-tag-label">Years Building<br />With Steel</span>
          </div>
        </Reveal>

        <div className="about-teaser__content">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="section-title">
              Iron & Steel Utilities — <em>Engineered To Outlast</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="about-teaser__text">
              For over eighteen years, IRONSTEEL has delivered structural
              steel construction, fabrication, and industrial site services
              across Nigeria. We operate as both contractor and fabricator —
              meaning the steel that goes up on your site was cut, welded,
              and inspected by the same team that erects it.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <ul className="about-teaser__points">
              {POINTS.map((point) => (
                <li key={point}>
                  <span className="about-teaser__point-mark" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={240}>
            <div className="about-teaser__actions">
              <Link to="/about" className="btn btn--primary">More About Us</Link>
              <Link to="/services" className="btn btn--ghost">Our Services</Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
