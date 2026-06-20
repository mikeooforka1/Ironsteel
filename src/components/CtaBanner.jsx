import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../data/siteData';
import Reveal from './Reveal';
import './CtaBanner.css';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__beam" aria-hidden="true" />
      <div className="container cta-banner__inner">
        <Reveal>
          <p className="eyebrow">Ready When You Are</p>
          <h2 className="cta-banner__title">
            Let's Put Your Project<br />On Solid Steel.
          </h2>
        </Reveal>
        <Reveal delay={120} className="cta-banner__actions">
          <Link to="/contact" className="btn btn--primary">Request A Quote</Link>
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <FaWhatsapp aria-hidden="true" /> Chat On WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
