import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    window.location.href = `mailto:mohdmujahed032@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your next project or opportunity</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email</strong>
              <a href="mailto:mohdmujahed032@gmail.com">mohdmujahed032@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>Phone</strong>
              <a href="tel:+966559302355">+966 559302355</a>
            </div>
            <div className="contact-item">
              <strong>Location</strong>
              <span>Riyadh, Saudi Arabia</span>
            </div>
            <div className="contact-item">
              <strong>Visa Status</strong>
              <span>Transferable Iqama</span>
            </div>
            <div className="contact-item">
              <strong>Nationality</strong>
              <span>Indian</span>
            </div>
            <div className="contact-item">
              <strong>Date of Birth</strong>
              <span>21-06-1994</span>
            </div>
            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/mohd-mujahed-ul-islam-b94bb4198/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/mujahed032" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link github"
              >
                GitHub
              </a>
              <a 
                href="https://www.humsafarmubarak.com/Index" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link website"
              >
                Website
              </a>
              <a 
                href="https://mujahed-portfolio.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link portfolio"
              >
                Portfolio
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

