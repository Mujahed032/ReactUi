import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Humsafar Mubarak',
      description: 'A matrimony profile management system hosted on Render using a Dockerfile, with a Supabase PostgreSQL backend. The platform manages over 500 active user profiles in real time.',
      link: 'https://www.humsafarmubarak.com/Index',
      technologies: ['ASP.NET Core', 'PostgreSQL', 'Docker', 'Render', 'Supabase']
    },
    {
      name: 'RevalReason',
      description: 'A high-performance, dynamically functional system built on .NET 6, following a robust three-tier architecture for scalability. ADO.NET efficiently manages database interactions, Serilog ensures comprehensive logging, and dynamic functionalities cater to evolving requirements.',
      technologies: ['.NET 6', 'ADO.NET', 'Serilog', 'Three-Tier Architecture']
    },
    {
      name: 'CaliberLIMS',
      description: 'A Laboratory Information Management System (LIMS) using ASP.NET Core and Entity Framework Core, incorporating an API Gateway for efficient data routing and enhanced security. Leveraged stored procedures for optimized data handling and implemented jQuery-based services to facilitate real-time data processing and validation.',
      technologies: ['ASP.NET Core', 'Entity Framework Core', 'API Gateway', 'jQuery', 'Stored Procedures']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  Visit Project →
                </a>
              )}
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

