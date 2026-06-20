import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SITE } from '../data/siteData';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Equipment', to: '/equipment' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__beam" aria-hidden="true" />
      <div className="container site-footer__grid">
        <div className="footer-brand">
          <Link to="/" className="footer-brand__mark">
            <img src="/assets/logo/logo.png" alt="IRONSTEEL logo" width="56" height="56" />
            <span className="footer-brand__name">IRON &amp; <em>STEEL</em></span>
          </Link>
          <p className="footer-brand__desc">
            Structural steel construction, fabrication and industrial site
            services built to specification — engineered to outlast.
          </p>
          <div className="footer-social">
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social__icon footer-social__icon--whatsapp"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="footer-social__icon"
              aria-label={`Email us at ${SITE.email}`}
            >
              <FaEnvelope aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <h3 className="footer-heading">Navigate</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h3 className="footer-heading">Get In Touch</h3>
          <ul className="footer-contact__list">
            <li>
              <span className="footer-contact__label">Address</span>
              {SITE.address}
            </li>
            <li>
              <span className="footer-contact__label">Phone</span>
              <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
            </li>
            <li>
              <span className="footer-contact__label">Email</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <span className="footer-contact__label">WhatsApp</span>
              <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer">
                Message us directly
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-cta">
          <h3 className="footer-heading">Start A Project</h3>
          <p>
            Tell us what you're building. Our team responds within one
            business day.
          </p>
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--amber footer-cta__btn"
          >
            <FaWhatsapp aria-hidden="true" /> Chat On WhatsApp
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} Iron &amp; Steel Utilities Nig. Ltd. All rights reserved.</p>
        <p className="footer-bottom__sub">Built on structure. Defined by precision.</p>
      </div>
    </footer>
  );
}
