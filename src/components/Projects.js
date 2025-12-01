import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Humsafar Mubarak',
      description: 'A fully functional matrimonial platform with 500+ live users and paid subscription features. Built with enterprise-grade architecture including user profiles, advanced search filters, real-time messaging, and secure payment integration. Hosted on Render using Dockerfile with Supabase PostgreSQL backend.',
      link: 'https://www.humsafarmubarak.com/Index',
      technologies: ['C#', 'ASP.NET Core', 'Razor Pages', 'PostgreSQL', 'Docker', 'Supabase'],
      features: [
        '500+ active user profiles',
        'Real-time profile management',
        'Advanced search filters',
        'Secure payment integration',
        'Docker containerization',
        'Cloud-hosted on Render'
      ]
    },
    {
      name: 'CoreFlow',
      description: 'ADO.NET efficiently manages database interactions, Serilog ensures comprehensive logging, and dynamic functionalities cater to evolving requirements. This ASP.NET Core-based system excels in handling dynamic data processing, encapsulating core business logic, and implementing structured logging. Key features include a modular three-tier architecture, detailed pagination support, and adherence to industry best practices. The RevalReason project, built on .NET 6, follows a robust three-tier architecture for scalability - a high-performance, dynamically functional system designed for optimal management and maintenance.',
      technologies: ['.NET 6', 'ADO.NET', 'Serilog', 'Three-Tier Architecture', 'ASP.NET Core', 'C#'],
      features: [
        'Three-tier architecture',
        'Comprehensive logging with Serilog',
        'Dynamic data processing',
        'Optimized database interactions with ADO.NET',
        'Modular design',
        'Pagination support'
      ]
    },
    {
      name: 'CaliberLIMS',
      description: 'A Laboratory Information Management System (LIMS) using ASP.NET Core and Entity Framework Core, incorporating an API Gateway for efficient data routing and enhanced security. Leveraged stored procedures for optimized data handling and implemented jQuery-based services to facilitate real-time data processing and validation.',
      technologies: ['ASP.NET Core', 'Entity Framework Core', 'API Gateway', 'jQuery', 'Stored Procedures', 'SQL Server'],
      features: [
        'API Gateway for data routing',
        'Enhanced security implementation',
        'Optimized stored procedures',
        'Real-time data processing',
        'jQuery-based services',
        'Data validation systems'
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Personal Projects</h2>
        <p className="section-subtitle">Side projects built as a hobby, demonstrating self-learning and ability to deliver production-ready applications</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              {project.features && (
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  Live Site →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

