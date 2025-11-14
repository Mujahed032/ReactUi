import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">Md Mujahed Ul Islam</h1>
          <h2 className="hero-title">.NET Full Stack Developer</h2>
          <p className="hero-description">
            Experienced Full Stack Developer with 5 years of expertise in ASP.NET MVC, 
            ASP.NET Core, and Entity Framework. Building scalable, maintainable web applications 
            and RESTful APIs.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

