import React from 'react';
import PageHero from '../components/PageHero';
import EquipmentShowcase from '../components/EquipmentShowcase';
import CtaBanner from '../components/CtaBanner';
import Reveal from '../components/Reveal';
import './Equipment.css';

const CAPABILITIES = [
  { label: 'Max Lift Capacity', value: '80 Tonnes' },
  { label: 'Max Working Height', value: '45 Metres' },
  { label: 'Cutting Tolerance', value: '±0.5mm' },
  { label: 'Fleet Availability', value: '24/7 On Call' },
];

export default function Equipment() {
  return (
    <>
      <PageHero
        breadcrumb="Equipment"
        eyebrow="Our Fleet"
        title="Equipment Sized For Industrial Steel Work"
        sub="Cranes, welding rigs, cutting systems, and access platforms — maintained in-house and ready to mobilize to your site."
      />

      <section className="section">
        <div className="container">
          <EquipmentShowcase />
        </div>
      </section>

      <section className="section section--tight capability-band">
        <div className="container capability-band__grid">
          {CAPABILITIES.map((cap, i) => (
            <Reveal as="div" className="capability-band__item" delay={i * 90} key={cap.label}>
              <span className="capability-band__value">{cap.value}</span>
              <span className="capability-band__label">{cap.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container equipment-note">
          <Reveal as="div" className="section-head">
            <p className="eyebrow">Maintenance Standard</p>
            <h2 className="section-title">Maintained In-House. Inspected Before Every Mobilization.</h2>
            <p className="section-sub">
              Every piece of equipment in our fleet is serviced on a fixed
              schedule and inspected before it leaves the yard — because
              equipment failure on a structural site isn't an acceptable risk.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
