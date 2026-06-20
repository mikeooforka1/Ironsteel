import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Equipment', to: '/equipment' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__bar container">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img
            src="/assets/logo/logo.png"
            alt="IRONSTEEL — Iron & Steel Utilities Nig. Ltd. logo"
            className="brand__mark"
            width="48"
            height="48"
          />
          <span className="brand__text">
            <span className="brand__name">IRON<em>STEEL</em></span>
            <span className="brand__tag">Utilities Nig. Ltd.</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="btn btn--primary site-header__cta">
          Get A Quote
        </Link>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link, i) => (
            <li key={link.to} style={{ transitionDelay: `${i * 40}ms` }}>
              <NavLink
                to={link.to}
                className={({ isActive }) => `mobile-nav__link${isActive ? ' is-active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-nav__index">0{i + 1}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn--amber" onClick={() => setMenuOpen(false)}>
          Get A Quote
        </Link>
      </div>
    </header>
  );
}
