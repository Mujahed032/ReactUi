import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'C#', emoji: '💻' },
    { name: 'ASP.NET Core', emoji: '🌐' },
    { name: 'ASP.NET MVC', emoji: '🌐' },
    { name: 'Entity Framework Core', emoji: '📦' },
    { name: 'SQL Server', emoji: '🗄️' },
    { name: 'Docker', emoji: '🐳' },
    { name: 'RESTful APIs', emoji: '🔌' },
    { name: 'JavaScript', emoji: '🎨' },
    { name: 'Git/GitHub', emoji: '🔧' },
    { name: 'React', emoji: '⚛️' },
    { name: 'Angular', emoji: '⚛️' },
    { name: 'HTML5/CSS3', emoji: '📱' },
    { name: 'PostgreSQL', emoji: '🐘' },
    { name: 'Microservices', emoji: '🎯' },
    { name: 'API Gateway', emoji: '🔌' },
    { name: 'RabbitMQ', emoji: '🔄' },
    { name: 'Apache Kafka', emoji: '🔄' },
    { name: 'LINQ', emoji: '💾' },
    { name: 'ADO.NET', emoji: '💾' },
    { name: 'Razor Pages', emoji: '📄' },
    { name: 'Web API', emoji: '🌐' },
    { name: 'Bootstrap', emoji: '🎨' },
    { name: 'jQuery', emoji: '🎭' },
    { name: 'CI/CD Pipelines', emoji: '🚀' },
    { name: 'Swagger', emoji: '📋' },
    { name: 'Postman', emoji: '📬' },
    { name: 'Visual Studio', emoji: '🔧' },
    { name: 'Automated Deployment', emoji: '🚀' },
    { name: 'CQRS', emoji: '🔍' },
    { name: 'Clean Architecture', emoji: '🎯' },
    { name: 'SOLID/DRY Principles', emoji: '🏗️' },
    { name: 'Repository Pattern', emoji: '📐' },
    { name: 'Dependency Injection', emoji: '💉' },
    { name: 'Modular Architecture', emoji: '🏛️' },
    { name: 'Distributed Systems', emoji: '🌐' },
    { name: 'Unit Testing', emoji: '🧪' },
    { name: 'xUnit/NUnit', emoji: '🧪' },
    { name: 'Performance Optimization', emoji: '⚡' },
    { name: 'Logging (Serilog)', emoji: '📋' },
    { name: 'Agile/Scrum', emoji: '📊' },
    { name: 'Debugging', emoji: '🔍' },
    { name: 'MVVM', emoji: '🎯' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-emoji">{skill.emoji}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

