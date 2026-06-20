import React from 'react';
import { STATS } from '../data/siteData';
import Reveal from './Reveal';
import './StatsBar.css';

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container stats-bar__grid">
        {STATS.map((stat, i) => (
          <Reveal as="div" className="stat" delay={i * 90} key={stat.label}>
            <span className="stat__value">{stat.value}</span>
            <span className="stat__label">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
