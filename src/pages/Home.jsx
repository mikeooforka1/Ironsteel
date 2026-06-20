import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import StatsBar from '../components/StatsBar';
import AboutTeaser from '../components/AboutTeaser';
import ServicesGrid from '../components/ServicesGrid';
import EquipmentShowcase from '../components/EquipmentShowcase';
import GalleryGrid from '../components/GalleryGrid';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <AboutTeaser />

      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head section-head--center">
            <p className="eyebrow">What We Do</p>
            <h2 className="section-title">Capability Built For Heavy Industry</h2>
            <p className="section-sub">
              From the first structural drawing to the final weld inspection,
              every service we offer is backed by an in-house team and
              equipment fleet — not subcontracted guesswork.
            </p>
          </Reveal>
          <ServicesGrid limit={3} />
          <Reveal className="section-cta-row">
            <Link to="/services" className="btn btn--ghost">View All Services</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight equipment-section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <p className="eyebrow">Our Fleet</p>
            <h2 className="section-title">Equipment That Doesn't Slow Down</h2>
            <p className="section-sub">
              Certified, maintained, and ready to mobilize — our equipment
              fleet is sized for industrial-scale steel work.
            </p>
          </Reveal>
          <EquipmentShowcase />
          <Reveal className="section-cta-row">
            <Link to="/equipment" className="btn btn--ghost">View Full Fleet</Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head section-head--center">
            <p className="eyebrow">Site Gallery</p>
            <h2 className="section-title">Steel, Documented On Site</h2>
            <p className="section-sub">
              A look at recent fabrication and structural work across our
              active project sites.
            </p>
          </Reveal>
          <GalleryGrid limit={8} showFilters={false} />
          <Reveal className="section-cta-row">
            <Link to="/gallery" className="btn btn--ghost">View Full Gallery</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
