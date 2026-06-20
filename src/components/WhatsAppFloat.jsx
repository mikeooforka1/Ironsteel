import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../data/siteData';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with IRONSTEEL on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
      <span className="whatsapp-float__ping" aria-hidden="true" />
    </a>
  );
}
