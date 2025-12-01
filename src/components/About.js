import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Learn more about my journey, experience, and what drives me as a software engineer</p>
        <div className="about-content">
          <h3 className="about-heading">Building the Future, One Line at a Time</h3>
          <p>
            I'm a <strong>.NET Full Stack Developer</strong> with <strong>5+ years of comprehensive experience</strong> in the software development lifecycle, 
            specializing in building and deploying production-ready applications that serve real users. I'm a proven <strong>self-learner</strong> who masters 
            new technologies and delivers verifiable results.
          </p>
          <p>
            Currently working as a <strong>Software Engineer at Caliber Technologies</strong>, I've developed and maintained responsive web applications, 
            designed RESTful APIs, and led microservices architecture implementations. I've optimized application performance through caching strategies, 
            database indexing, and code refactoring to ensure high-speed functionality and scalability.
          </p>
          <p>
            <strong>Live Projects I've Built & Run:</strong>
          </p>
          <ul className="about-projects-list">
            <li>
              <strong>humsafarmubarak.com</strong> - Matrimonial platform with 500+ active profiles, C# backend + Razor Pages, PostgreSQL, hosted on Render with Docker
            </li>
            <li>
              <strong>mujahed-portfolio.onrender.com</strong> - Personal portfolio website showcasing projects and skills
            </li>
          </ul>
          <p>
            I've worked extensively with <strong>CI/CD practices</strong>, including version control (Git), automated testing, and deployment pipelines 
            for efficient, high-quality releases. I create scalable systems with ASP.NET MVC and Entity Framework, integrating complex data exchange 
            via JSON and XML for seamless system interactions.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Active Profiles</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Live Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Self-Learner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

