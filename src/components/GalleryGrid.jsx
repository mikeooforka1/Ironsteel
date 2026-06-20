import React, { useEffect, useMemo, useState } from 'react';
import { GALLERY_IMAGES } from '../data/siteData';
import Reveal from './Reveal';
import './GalleryGrid.css';

export default function GalleryGrid({ limit, showFilters = true }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(GALLERY_IMAGES.map((img) => img.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const list =
      activeCategory === 'All'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === activeCategory);
    return limit ? list.slice(0, limit) : list;
  }, [activeCategory, limit]);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = () => setLightboxIndex((i) => (i + 1) % filtered.length);
  const showPrev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filtered.length]);

  return (
    <div className="gallery">
      {showFilters && (
        <div className="gallery__filters" role="tablist" aria-label="Filter gallery by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`gallery__filter ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="gallery__grid">
        {filtered.map((img, i) => (
          <Reveal
            as="button"
            type="button"
            className="gallery__item"
            delay={(i % 4) * 80}
            key={img.src + img.alt}
            onClick={() => openLightbox(i)}
            aria-label={`View larger image: ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <span className="gallery__item-overlay">
              <span className="gallery__item-category">{img.category}</span>
              <span className="gallery__item-expand" aria-hidden="true">＋</span>
            </span>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="gallery__empty">No images in this category yet.</p>
      )}

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
          <button type="button" className="lightbox__close" onClick={closeLightbox} aria-label="Close preview">
            ✕
          </button>
          <button type="button" className="lightbox__arrow lightbox__arrow--prev" onClick={showPrev} aria-label="Previous image">
            ‹
          </button>
          <figure className="lightbox__figure">
            <img src={filtered[lightboxIndex].src} alt={filtered[lightboxIndex].alt} />
            <figcaption>{filtered[lightboxIndex].alt}</figcaption>
          </figure>
          <button type="button" className="lightbox__arrow lightbox__arrow--next" onClick={showNext} aria-label="Next image">
            ›
          </button>
          <div className="lightbox__backdrop" onClick={closeLightbox} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
