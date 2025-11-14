import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Caliber Technologies',
      location: 'Hyderabad, India',
      period: '07/2020 – 06/2025',
      responsibilities: [
        'Developed and maintained responsive and interactive web applications using ASP.NET MVC, Entity Framework, C#, SQL, HTML, CSS, JavaScript, and jQuery, delivering robust solutions for various enterprise-level applications.',
        'Designed and developed RESTful Web APIs using ASP.NET Core, integrating with external services and enabling smooth data communication across different systems.',
        'Led the development of microservices architectures, ensuring scalability, reliability, and efficient handling of business-critical operations',
        'Implemented dynamic web pages utilizing JavaScript, jQuery, and Bootstrap, focusing on enhancing user interaction and delivering an engaging user experience across devices.',
        'Managed database design using EF Core Code-First approach, creating optimized schemas, handling migrations, and ensuring data integrity throughout the application lifecycle.',
        'Delivered end-to-end solutions for desktop applications using C#, WinForms, and SQL Server, providing robust and efficient data management systems.',
        'Optimized application performance through caching strategies, database indexing, and code refactoring to ensure high-speed functionality and scalability.',
        'Developed scalable systems with ASP.NET MVC and Entity Framework, integrating complex data exchange via JSON and XML for seamless system interactions.',
        'Built reusable front-end components with JavaScript and jQuery, improving interactivity and performance while ensuring maintainability.',
        'Implemented secure authentication and authorization systems using ASP.NET Identity, safeguarding web applications with role-based access control and secure user authentication.',
        'Contributed to the company\'s design system, maintaining consistency in visual and functional components across all applications.',
        'Worked in an Agile environment, participating in sprint planning, daily stand-ups, and retrospectives, consistently delivering on project goals.',
        'Conducted code reviews to improve code quality and ensure adherence to best practices across projects.',
        'Applied responsive design techniques to optimize user experience on different devices, including mobile and desktop platforms.'
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

