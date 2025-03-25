import React from 'react';

const skillsData = [
  { title: 'Java', icon: 'fab fa-java', description: 'Experienced in building robust backend systems with Java and frameworks like Spring Boot.' },
  { title: 'Kotlin', icon: 'fab fa-java', description: 'Skilled in Kotlin for building Android apps and backend services.' },
  { title: 'JavaScript', icon: 'fab fa-js-square', description: 'Building web applications using JavaScript, focusing on React and Node.js.' },
  { title: 'React', icon: 'fab fa-react', description: 'Creating dynamic user interfaces with React, including hooks and state management.' },
  { title: 'HTML', icon: 'fab fa-html5', description: 'Building semantic and accessible web pages with modern HTML5 best practices.' },
  { title: 'CSS', icon: 'fab fa-css3-alt', description: 'Designing responsive layouts using Flexbox, Grid, and modern CSS techniques.' },
  { title: 'Git & GitHub', icon: 'fab fa-github', description: 'Version control with Git and collaborating on open-source projects using GitHub.' },
  { title: 'Docker', icon: 'fab fa-docker', description: 'Containerizing applications with Docker for better portability and deployment.' },
  { title: 'SQL', icon: 'fas fa-database', description: 'Managing and optimizing databases using SQL and relational databases.' },
  { title: 'AWS', icon: 'fab fa-aws', description: 'Deploying and managing cloud infrastructure on AWS for scalable applications.' },
  { title: 'Spring Boot', icon: 'fas fa-cogs', description: 'Building high-performance Java-based APIs and web applications with Spring Boot.' },
  { title: 'Postman', icon: 'fab fa-postman', description: 'Testing and documenting APIs using Postman to ensure reliability.' },
  { title: 'Jenkins', icon: 'fab fa-jenkins', description: 'Automating CI/CD pipelines using Jenkins for software deployment.' },
  { title: 'Datadog', icon: 'fab fa-cloud', description: 'Monitoring application performance and system reliability using Datadog.' },
  { title: 'Power BI', icon: 'fab fa-microsoft', description: 'Visualizing data and creating business intelligence reports using Power BI.' },
  { title: 'Tableau', icon: 'fab fa-tableau', description: 'Building dashboards and visual reports for data analysis with Tableau.' },
  { title: 'Excel', icon: 'fab fa-microsoft', description: 'Advanced Excel skills, including pivot tables and complex data analysis.' },
  { title: 'Jira', icon: 'fab fa-jira', description: 'Managing projects and tracking development tasks using Jira.' },
  { title: 'Confluence', icon: 'fab fa-wiki', description: 'Collaborating on software documentation and knowledge sharing with Confluence.' },
  { title: 'Agile Methodology', icon: 'fas fa-cogs', description: 'Applying Agile principles using Scrum for iterative software development.' },
  { title: 'Test-Driven Development (TDD)', icon: 'fas fa-check-square', description: 'Writing tests before code to improve maintainability and reliability.' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-light py-16 px-4 sm:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">Skills</h2>

        {/* Original Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <i className={`${skill.icon} text-4xl text-primary mb-4`}></i>
              <h3 className="text-xl font-semibold text-primary mb-2">{skill.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
