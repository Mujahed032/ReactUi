import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'ASP.NET Core',
    'ASP.NET MVC',
    'Entity Framework Core',
    'C#',
    'ADO.NET',
    'SQL Server',
    'RESTful APIs',
    'Microservices',
    'API Gateway',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'JavaScript',
    'jQuery',
    'LINQ',
    'Git',
    'GitHub',
    'Visual Studio',
    'Postman',
    'Agile/Scrum',
    'Debugging',
    'Unit Testing',
    'Deployment',
    'React',
    'Angular'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Highly Skilled Full Stack Developer</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

