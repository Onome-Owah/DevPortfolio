import React from 'react';

const skillsData = [
  {
    title: 'Java',
    icon: 'fab fa-java',
    description: 'Experienced in building robust backend systems with Java and frameworks like Spring Boot.',
  },
  {
    title: 'Kotlin',
    icon: 'fab fa-java',
    description: 'Skilled in Kotlin for building Android apps and backend services, leveraging its concise syntax and interoperability with Java.',
  },
  {
    title: 'JavaScript',
    icon: 'fab fa-js-square',
    description: 'Experienced in building web applications using JavaScript, with a focus on React and Node.js.',
  },
  {
    title: 'React',
    icon: 'fab fa-react',
    description: 'Building dynamic, responsive user interfaces with React. Understanding of hooks, state management, and React Router.',
  },
  { 
    title: 'HTML', 
    icon: 'fab fa-html5', 
    description: 'Experienced in building semantic and accessible web pages using modern HTML5 elements and best practices.' 
},
  {
    title: 'CSS',
    icon: 'fab fa-css3-alt',
    description: 'Skilled in designing responsive layouts and web components using modern CSS techniques like Flexbox and Grid.',
  },
  {
    title: 'Git & GitHub',
    icon: 'fab fa-github',
    description: 'Version control with Git and collaborating on open-source projects using GitHub.',
  },
  {
    title: 'Docker',
    icon: 'fab fa-docker',
    description: 'Experience with Docker for containerizing applications, ensuring portability across environments, and simplifying deployment.',
  },
  {
    title: 'SQL',
    icon: 'fas fa-database',
    description: 'Proficient in SQL for designing, managing, and optimizing databases using relational database management systems.',
  },
  {
    title: 'AWS',
    icon: 'fab fa-aws',
    description: 'Experience with deploying and managing cloud infrastructure on AWS to create scalable and cost-efficient applications.',
  },
  {
    title: 'Spring Boot',
    icon: 'fas fa-cogs',
    description: 'Proficient in using Spring Boot to build Java-based web applications and APIs with a focus on performance and security.',
  },
  {
    title: 'Postman',
    icon: 'fab fa-postman',
    description: 'Experience using Postman for API testing and documentation, ensuring APIs meet the requirements and function correctly.',
  },
  {
    title: 'Jenkins',
    icon: 'fab fa-jenkins',
    description: 'Used Jenkins for continuous integration and continuous deployment (CI/CD) to automate testing and deployment processes.',
  },
  {
    title: 'Datadog',
    icon: 'fab fa-cloud',
    description: 'Used Datadog for monitoring application performance, tracking metrics, and ensuring system reliability and uptime.',
  },
  {
    title: 'Power BI',
    icon: 'fab fa-microsoft',
    description: 'Skilled in Power BI for data visualization and building interactive reports and dashboards for business intelligence insights.',
  },
  {
    title: 'Tableau',
    icon: 'fab fa-tableau',
    description: 'Used Tableau to create visualizations and dashboards for analyzing and reporting on large datasets.',
  },
  {
    title: 'Excel',
    icon: 'fab fa-microsoft',
    description: 'Advanced skills in Excel for data analysis, including complex formulas, pivot tables, and data visualization techniques.',
  },
  {
    title: 'Jira',
    icon: 'fab fa-jira',
    description: 'Experienced in using Jira for project management, tracking tasks, and collaborating in agile environments.',
  },
  {
    title: 'Confluence',
    icon: 'fab fa-wiki',
    description: 'Used Confluence for documentation, knowledge sharing, and team collaboration in software development projects.',
  },
  {
    title: 'Agile Methodology',
    icon: 'fas fa-cogs',
    description: 'Experienced in working in agile environments, using Scrum to plan, develop, and deliver high-quality software iteratively.',
  },
  {
    title: 'Test-Driven Development (TDD)',
    icon: 'fas fa-check-square',
    description: 'Implemented Test-Driven Development to ensure code reliability and maintainability by writing tests before code.',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-light py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white p-1 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <i className={`${skill.icon} text-4xl text-primary`}></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{skill.title}</h3>
              <p className="text-base text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
