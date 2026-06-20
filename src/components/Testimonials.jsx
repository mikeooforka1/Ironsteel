import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/siteData';
import Reveal from './Reveal';
import './Testimonials.css';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const goTo = (i) => setIndex(((i % total) + total) % total);

  return (
    <Reveal as="div" className="testimonials">
      <div className="testimonials__quote-mark" aria-hidden="true">"</div>
      <blockquote className="testimonials__quote">
        {TESTIMONIALS[index].quote}
      </blockquote>
      <div className="testimonials__author">
        <span className="testimonials__name">{TESTIMONIALS[index].name}</span>
        <span className="testimonials__role">{TESTIMONIALS[index].role}</span>
      </div>
      <div className="testimonials__nav">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            type="button"
            className={`testimonials__dot ${i === index ? 'is-active' : ''}`}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </Reveal>
  );
}
