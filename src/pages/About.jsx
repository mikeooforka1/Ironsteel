import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import StatsBar from '../components/StatsBar';
import CtaBanner from '../components/CtaBanner';
import Reveal from '../components/Reveal';
import './About.css';

const VALUES = [
  {
    title: 'Precision',
    desc: 'Every cut, weld, and bolt is verified against specification before it leaves our workshop.',
  },
  {
    title: 'Safety',
    desc: 'Zero-incident targets on every site, enforced through certified crew training and daily inspection.',
  },
  {
    title: 'Accountability',
    desc: 'We document every milestone — so you always know exactly where your project stands.',
  },
  {
    title: 'Durability',
    desc: 'We build structures meant to outlast the contract, not just pass the final inspection.',
  },
];

const TIMELINE = [
  { year: '2008', text: 'Founded as a small structural fabrication outfit serving the Aba industrial corridor.' },
  { year: '2013', text: 'Expanded into full structural steel erection, taking on our first multi-site contract.' },
  { year: '2018', text: 'Opened our in-house fabrication workshop, bringing CNC cutting and welding under one roof.' },
  { year: '2024', text: 'Grew our fleet and crew to support large-format industrial and infrastructure projects nationwide.' },
];

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About IRONSTEEL"
        title="Eighteen Years Of Steel On The Ground"
        sub="Iron & Steel Utilities Nig. Ltd. is a structural steel construction and fabrication company built by engineers who'd rather solve hard problems on site than push paper in an office."
      />

      <section className="section about-page__intro">
        <div className="container about-page__intro-grid">
          <Reveal as="div" className="about-page__media bracket-frame">
            <img
              src="/assets/images/about-1.jpg"
              alt="IRONSTEEL fabrication workshop interior"
              loading="lazy"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Our Story</p>
              <h2 className="section-title">From One Welding Bay To A Full Industrial Contractor</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="about-page__text">
                IRONSTEEL started in 2008 as a small fabrication outfit
                serving local manufacturers around Aba, Abia State. What set
                us apart early was simple: we refused to subcontract our
                welding. If our name was on a structure, our own certified
                crew built it.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="about-page__text">
                That principle scaled with us. Today we run a full structural
                steel construction division alongside our fabrication
                workshop, taking projects from concept drawing through to
                final handover — for industrial, commercial, and
                infrastructure clients across Nigeria.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <Link to="/services" className="btn btn--primary">Explore Our Services</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head section-head--center">
            <p className="eyebrow">What Drives Us</p>
            <h2 className="section-title">Four Things We Don't Compromise On</h2>
          </Reveal>
          <div className="values-grid">
            {VALUES.map((value, i) => (
              <Reveal as="article" className="value-card" delay={i * 90} key={value.title}>
                <span className="value-card__index">0{i + 1}</span>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__desc">{value.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight timeline-section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <p className="eyebrow">Our Journey</p>
            <h2 className="section-title">Milestones On The Way Here</h2>
          </Reveal>
          <ol className="timeline">
            {TIMELINE.map((item, i) => (
              <Reveal as="li" className="timeline__item" delay={i * 100} key={item.year}>
                <span className="timeline__year">{item.year}</span>
                <span className="timeline__line" aria-hidden="true" />
                <p className="timeline__text">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
