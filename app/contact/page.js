'use client';

import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function ContactPage() {
  const { showToast } = useApp();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Message sent successfully! We\'ll get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="cert-hero">
        <img src="/extracted-imgs/62_MD_COACHING.png" alt="Contact" className="cert-hero-bg" />
        <div className="cert-hero-overlay">
          <h1>Contact Us</h1>
          <p>Have questions? We&apos;re here to help. Reach out to us and we&apos;ll get back to you within 24 hours.</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>MD Coaching Hub, 4th Floor, Tech Park,<br />Koramangala, Bangalore - 560034<br />Karnataka, India</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210<br />+91 87654 32109</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info@mdcoachinghub.com<br />admissions@mdcoachinghub.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 8:00 PM<br />Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link" id="social-facebook">Facebook</a>
                <a href="#" className="social-link" id="social-twitter">Twitter</a>
                <a href="#" className="social-link" id="social-instagram">Instagram</a>
                <a href="#" className="social-link" id="social-linkedin">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you, {form.name}! We&apos;ve received your message and will get back to you at <strong>{form.email}</strong> within 24 hours.</p>
                <button className="enroll-btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3>Send us a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Full Name *</label>
                      <input type="text" id="contact-name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email *</label>
                      <input type="email" id="contact-email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone</label>
                      <input type="tel" id="contact-phone" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-subject">Subject</label>
                      <select id="contact-subject" name="subject" value={form.subject} onChange={handleChange}>
                        <option value="">Select a topic</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="course">Course Information</option>
                        <option value="placement">Placement Support</option>
                        <option value="certification">Certification Query</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message *</label>
                    <textarea id="contact-message" name="message" rows="5" placeholder="How can we help you?" value={form.message} onChange={handleChange}></textarea>
                  </div>
                  <button type="submit" className="auth-submit-btn" id="contact-submit">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
