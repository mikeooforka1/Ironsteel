import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import { SITE } from '../data/siteData';
import Reveal from '../components/Reveal';
import './Contact.css';

const SERVICE_OPTIONS = [
  'Structural Steel Construction',
  'Steel Fabrication & Welding',
  'Industrial Site Utilities',
  'Construction Project Management',
  'Maintenance & Refurbishment',
  'Technical Consulting',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: SERVICE_OPTIONS[0], message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // No backend wired yet — this composes a mailto with the message body.
    const subject = encodeURIComponent(`Project Inquiry: ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get In Touch"
        title="Let's Talk About Your Project"
        sub="Tell us what you're building and we'll respond within one business day with next steps and a scoped quote."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal as="div" className="contact-info">
            <h2 className="contact-info__heading">Reach Us Directly</h2>
            <p className="contact-info__lead">
              Prefer to talk now? Reach our team directly on WhatsApp or
              email — both are monitored throughout the business day.
            </p>

            <ul className="contact-info__list">
              <li>
                <span className="contact-info__icon"><FaMapMarkerAlt aria-hidden="true" /></span>
                <div>
                  <span className="contact-info__label">Address</span>
                  <span>{SITE.address}</span>
                </div>
              </li>
              <li>
                <span className="contact-info__icon"><FaPhoneAlt aria-hidden="true" /></span>
                <div>
                  <span className="contact-info__label">Phone</span>
                  <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>
                </div>
              </li>
              <li>
                <span className="contact-info__icon"><FaEnvelope aria-hidden="true" /></span>
                <div>
                  <span className="contact-info__label">Email</span>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-info__icon"><FaWhatsapp aria-hidden="true" /></span>
                <div>
                  <span className="contact-info__label">WhatsApp</span>
                  <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer">
                    Start a conversation
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--amber contact-info__whatsapp-btn"
            >
              <FaWhatsapp aria-hidden="true" /> Message Us On WhatsApp
            </a>

            <div className="contact-map bracket-frame">
              <iframe
                src={SITE.mapsEmbed}
                title="IRONSTEEL location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing IRONSTEEL's location"
              />
            </div>
          </Reveal>

          <Reveal as="div" delay={120} className="contact-form-wrap">
            <h2 className="contact-form-wrap__heading">Request A Quote</h2>
            <p className="contact-form-wrap__lead">
              Fill in the details below and we'll get back to you with a
              scoped response.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label htmlFor="name">
                  Full Name
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} autoComplete="name" />
                </label>
                <label htmlFor="phone">
                  Phone Number
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} autoComplete="tel" />
                </label>
              </div>

              <label htmlFor="email">
                Email Address
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} autoComplete="email" />
              </label>

              <label htmlFor="service">
                Service Needed
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>

              <label htmlFor="message">
                Project Details
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your site, timeline, and scope..."
                />
              </label>

              <button type="submit" className="btn btn--primary btn--block" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Opening Email…' : 'Send Inquiry'}
              </button>

              {status === 'sent' && (
                <p className="contact-form__status" role="status">
                  Your email client should now be open with your message ready to send.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
