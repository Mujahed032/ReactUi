import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">Hi, I'm<br />Md Mujahed Ul Islam</h1>
          <h2 className="hero-title">.NET Full Stack Developer</h2>
          <p className="hero-description">
            Building and running production applications with 5+ years of experience in C#, ASP.NET Core, React, PostgreSQL, and Docker. 
            Self-learner passionate about DevOps, microservices architecture, and delivering real-world solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="hero-code">
            <pre>{`public class Developer {
  string Name = "Md Mujahed Ul Islam";
  int Experience = 5;
  string[] Skills = { "C#", "ASP.NET Core", "React", "Docker" };
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

