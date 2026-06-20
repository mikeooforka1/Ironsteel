import React from 'react';
import { EQUIPMENT } from '../data/siteData';
import Reveal from './Reveal';
import './EquipmentShowcase.css';

export default function EquipmentShowcase() {
  return (
    <div className="equipment-grid">
      {EQUIPMENT.map((item, i) => (
        <Reveal as="article" className="equipment-card" delay={(i % 4) * 90} key={item.id}>
          <div className="equipment-card__media">
            <img src={item.image} alt={item.name} loading="lazy" />
            <span className="equipment-card__spec">{item.spec}</span>
          </div>
          <div className="equipment-card__body">
            <h3 className="equipment-card__title">{item.name}</h3>
            <p className="equipment-card__desc">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
