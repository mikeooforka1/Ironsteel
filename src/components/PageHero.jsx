import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

export default function PageHero({ eyebrow, title, sub, breadcrumb }) {
  return (
    <section className="page-hero">
      <div className="page-hero__beam" aria-hidden="true" />
      <div className="page-hero__grid-lines" aria-hidden="true" />
      <div className="container page-hero__content">
        <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{breadcrumb}</span>
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {sub && <p className="page-hero__sub">{sub}</p>}
      </div>
    </section>
  );
}
