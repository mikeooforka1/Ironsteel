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
  { year: '1976', text: 'Founded as a small structural fabrication outfit serving the local industrial corridor.' },
  { year: '1982', text: 'Officially commenced operations, becoming a reliable service provider for oil, gas, and industrial companies.' },
  { year: '1995', text: 'Incorporated under the Companies and Allied Matters Act as Iron & Steel Utilities Ltd. on October 16th.' },
  { year: '2026', text: 'Celebrating 50 years of operations, continuing to grow our fleet and crew for large-format nationwide projects.' },
];

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About IRON & STEEL"
        title="50 Years Of Steel On The Ground"
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
               IRON AND STEEL UTILITIES NIG. LTD is a leading steel fabrication and machine shop company. With over 40 years of operations, we have remained a reliable service provider, leading oil and gas companies in Nigeria such as Schlumberger (SLB), as well as industrial companies such as the Initiate Plc, a company listed on the Nigerian Exchange Limited. 
Though we started operation in 1982, Iron & Steel Utilities Ltd was incoporated under the companies and allied matters Act of 1990, on 16th October, 1995. We are a company certified under the Nigeiran Oil and Gas Industry Content Joint Qualification System (NOGIC JQS ) as a service company in their oil and gas industry to provide “Rehabilitation and Fabrication”. NNPC, PPMC, SLB, Doley Ventures, Farwel etc. are some of the renowned orgnizations Iron and Steel Utilities is proud to have served over the years and who continue to utilize our services, not only because of our over 40 years experience but because of the quality of our service and our resourcefullness in providing solution to client’s operatioanl challenges.
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
