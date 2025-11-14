import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Profile</h2>
        <div className="about-content">
          <p>
            Experienced Full Stack Developer with 5 years of expertise in <strong>ASP.NET MVC</strong>, 
            <strong> ASP.NET Core</strong>, and <strong>Entity Framework</strong>. Demonstrated success in building 
            scalable, maintainable web applications and RESTful APIs that integrate seamlessly across 
            back-end and front-end technologies. Skilled in architecting resilient systems, implementing 
            complex business logic, and ensuring data accuracy and reliability.
          </p>
          <p>
            Proficient with <strong>CI/CD practices</strong>, including version control (Git), automated testing, 
            and deployment pipelines for efficient, high-quality releases.
          </p>
          <p>
            Developed and deployed a live project — <a href="https://www.humsafarmubarak.com/Index" target="_blank" rel="noopener noreferrer" className="project-link">www.humsafarmubarak.com</a>, 
            a matrimony profile management system hosted on Render using a Dockerfile, with a Supabase 
            PostgreSQL backend. The platform is currently running successfully as a matchmaking service, 
            generating steady business growth and managing over <strong>500 active user profiles</strong> in real time. 
            We have established a systematic business process, supported by a team of 3–4 employees dedicated 
            to sales and lead generation, contributing to consistent revenue growth and client engagement. 
            This project showcases strong hands-on experience in modern cloud hosting, containerization, 
            database integration, and scalable business-oriented web application development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

