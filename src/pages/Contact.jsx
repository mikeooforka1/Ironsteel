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
  const [status, setStatus] = useState('idle'); // idle | submitting | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // REQUIRED: Replace this string with the actual Web3Forms access key tied to the company email
          access_key: "0ea7d770-404b-42d8-b53e-01e679ed3639", 
          subject: `New Quote Request: ${form.service}`,
          from_name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('sent');
        // Clear the form on successful submission
        setForm({ name: '', email: '', phone: '', service: SERVICE_OPTIONS[0], message: '' });
        
        // Optional: Reset status back to idle after a few seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Form submission failed:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Network error during form submission:", error);
      setStatus('error');
    }
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
                title="IRON &amp; STEEL location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing IRON&STEEL's location"
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
                {status === 'submitting' ? 'Sending Request...' : 'Send Inquiry'}
              </button>

              {status === 'sent' && (
                <p className="contact-form__status success-text" role="status" style={{ color: 'green', marginTop: '1rem' }}>
                  Your request has been sent successfully. We will be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="contact-form__status error-text" role="status" style={{ color: 'red', marginTop: '1rem' }}>
                  There was an error sending your request. Please try again or contact us directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}