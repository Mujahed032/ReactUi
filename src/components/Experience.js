import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Caliber Technologies',
      location: 'Hyderabad, India',
      period: '07/2020 – 06/2025',
      technologies: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework', 'SQL Server', 'Microservices', 'RESTful APIs', 'Agile'],
      responsibilities: [
        'Developed and maintained responsive and interactive web applications using ASP.NET MVC, Entity Framework, C#, SQL, HTML, CSS, JavaScript, and jQuery, delivering robust solutions for enterprise-level applications.',
        'Designed and developed RESTful Web APIs using ASP.NET Core, integrating with external services and enabling smooth data communication across different systems.',
        'Led the development of microservices architectures, ensuring scalability, reliability, and efficient handling of business-critical operations.',
        'Conducted research and development for new technologies, implementing innovative solutions to optimize application performance and system efficiency.',
        'Implemented dynamic web pages utilizing JavaScript, jQuery, and Bootstrap, enhancing user interaction and delivering an engaging user experience across devices.',
        'Managed complex database designs using EF Core Code-First approach and SQL Server, creating optimized schemas, handling migrations, and maintaining data integrity across large datasets.',
        'Developed and optimized stored procedures, functions, and triggers in SQL Server to support high-volume data operations and reporting.',
        'Delivered end-to-end solutions for desktop applications using C#, WinForms, and SQL Server, providing robust and efficient data management systems.',
        'Optimized application performance through caching strategies, database indexing, query optimization, and code refactoring to ensure high-speed functionality and scalability.',
        'Developed scalable systems with ASP.NET MVC and Entity Framework, integrating complex data exchange via JSON and XML for seamless system interactions.',
        'Built reusable front-end components with JavaScript and jQuery, improving interactivity and performance while ensuring maintainability.',
        'Worked in an Agile environment, participating in sprint planning, daily stand-ups, and retrospectives, consistently delivering on project goals.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              {exp.technologies && (
                <div className="experience-technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

