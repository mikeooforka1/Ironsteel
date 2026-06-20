import React from 'react';
import PageHero from '../components/PageHero';
import ServicesGrid from '../components/ServicesGrid';
import CtaBanner from '../components/CtaBanner';
import Reveal from '../components/Reveal';
import './Services.css';

const PROCESS = [
  { step: '01', title: 'Site Survey & Brief', desc: 'We assess your site and requirements, and translate them into a structural scope.' },
  { step: '02', title: 'Engineering & Quote', desc: 'Our engineers review specifications and load requirements, then return a detailed quote.' },
  { step: '03', title: 'Fabrication', desc: 'Components are cut, welded, and treated in our workshop to exact specification.' },
  { step: '04', title: 'Site Erection', desc: 'Our certified crew mobilizes to erect, install, and inspect on your timeline.' },
  { step: '05', title: 'Handover & Support', desc: 'Full documentation is delivered, with maintenance support available after handover.' },
];

export default function Services() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="What We Do"
        title="Full-Scope Structural Steel Services"
        sub="From the first survey to the final inspection, we handle structural steel construction, fabrication, and industrial site utilities under one roof."
      />

      <section className="section">
        <div className="container">
          <ServicesGrid />
        </div>
      </section>

      <section className="section section--tight process-section">
        <div className="container">
          <Reveal as="div" className="section-head section-head--center">
            <p className="eyebrow">How We Work</p>
            <h2 className="section-title">Five Steps From Brief To Handover</h2>
          </Reveal>
          <ol className="process-list">
            {PROCESS.map((step, i) => (
              <Reveal as="li" className="process-list__item" delay={i * 80} key={step.step}>
                <span className="process-list__step">{step.step}</span>
                <div>
                  <h3 className="process-list__title">{step.title}</h3>
                  <p className="process-list__desc">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
