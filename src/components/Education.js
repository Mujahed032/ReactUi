import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <div className="education-header">
            <h3 className="education-degree">Bachelor's Degree in Mechanical Engineering</h3>
            <h4 className="education-institution">JNTUH University</h4>
          </div>
          <div className="education-meta">
            <span className="education-period">2012 – 2016</span>
            <span className="education-location">Hyderabad, India</span>
          </div>
          <ul className="education-details">
            <li>Graduated with a Bachelor's Degree in Mechanical Engineering</li>
            <li>Developed a strong foundation in engineering principles and problem-solving methodologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;

