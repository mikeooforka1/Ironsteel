import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__beam" aria-hidden="true" />
      <div className="container not-found__content">
        <p className="eyebrow">Error 404</p>
        <h1 className="not-found__title">Off The Blueprint</h1>
        <p className="not-found__sub">
          The page you're looking for isn't part of this structure. Let's
          get you back on solid ground.
        </p>
        <Link to="/" className="btn btn--primary">Back To Home</Link>
      </div>
    </section>
  );
}
