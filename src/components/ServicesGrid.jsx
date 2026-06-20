import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/siteData';
import Reveal from './Reveal';
import './ServicesGrid.css';

export default function ServicesGrid({ limit, showLinks = true }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <div className="services-grid">
      {items.map((service, i) => (
        <Reveal as="article" className="service-card" delay={(i % 3) * 90} key={service.id}>
          <span className="service-card__index">0{i + 1}</span>
          <h3 className="service-card__title">{service.title}</h3>
          <p className="service-card__summary">{service.summary}</p>
          <ul className="service-card__points">
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {showLinks && (
            <Link to="/contact" className="service-card__link">
              Request This Service <span aria-hidden="true">→</span>
            </Link>
          )}
        </Reveal>
      ))}
    </div>
  );
}
