import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../data/siteData';
import './HeroSlider.css';

const SLIDE_DURATION = 6500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const total = HERO_SLIDES.length;

  const goTo = useCallback((i) => {
    setIndex(((i % total) + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (isPaused) return undefined;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % total);
    }, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [index, isPaused, total]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Featured IRONSTEEL projects"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={onKeyDown}
    >
      <div className="hero-slider__beam" aria-hidden="true" />

      <div className="hero-slider__track">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.title}
            className={`hero-slide ${i === index ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}`}
            aria-hidden={i !== index}
          >
            <div className="hero-slide__scrim" />
          </div>
        ))}
      </div>

      <div className="container hero-slider__content">
        <div className="hero-copy" key={index}>
          <p className="hero-copy__eyebrow">
            <span className="hero-copy__index">0{index + 1}</span>
            {HERO_SLIDES[index].eyebrow}
          </p>
          <h1 className="hero-copy__title">
            {HERO_SLIDES[index].title.split('\n').map((line) => (
              <span className="hero-copy__line" key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero-copy__sub">{HERO_SLIDES[index].sub}</p>
          <div className="hero-copy__actions">
            <Link to="/contact" className="btn btn--primary">Request A Quote</Link>
            <Link to="/gallery" className="btn btn--ghost">View Our Work</Link>
          </div>
        </div>
      </div>

      <div className="hero-slider__controls container">
        <button type="button" className="hero-arrow" onClick={prev} aria-label="Previous slide">
          ‹
        </button>
        <div className="hero-dots" role="tablist" aria-label="Slides">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              className={`hero-dot ${i === index ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            >
              <span className="hero-dot__progress" style={i === index && !isPaused ? { animationDuration: `${SLIDE_DURATION}ms` } : undefined} />
            </button>
          ))}
        </div>
        <button type="button" className="hero-arrow" onClick={next} aria-label="Next slide">
          ›
        </button>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span />
        Scroll
      </div>
    </section>
  );
}
