import React from 'react';
import PageHero from '../components/PageHero';
import GalleryGrid from '../components/GalleryGrid';
import CtaBanner from '../components/CtaBanner';

export default function Gallery() {
  return (
    <>
      <PageHero
        breadcrumb="Gallery"
        eyebrow="Site Gallery"
        title="Steel In Progress, Steel Delivered"
        sub="A documented look at our structural, fabrication, and site works. Filter by category to see specific stages of our process."
      />

      <section className="section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
