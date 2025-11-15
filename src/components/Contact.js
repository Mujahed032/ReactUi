import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:mohdmujahed032@gmail.com">mohdmujahed032@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <a href="tel:559302355">+966 559302355</a>
            </div>
            <div className="contact-item">
              <strong>Location:</strong>
              <span>Riyadh, Saudi Arabia</span>
            </div>
            <div className="contact-item">
              <strong>Visa Status:</strong>
              <span>Transferable Iqama</span>
            </div>
            <div className="contact-item">
              <strong>Nationality:</strong>
              <span>Indian</span>
            </div>
            <div className="contact-item">
              <strong>Date of Birth:</strong>
              <span>21-06-1994</span>
            </div>
          </div>
          <div className="contact-links">
            <h3>Connect with me</h3>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

