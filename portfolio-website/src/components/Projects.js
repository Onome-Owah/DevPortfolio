import React, { useState } from 'react';

const projects = [
  { 
    title: 'Job Board Web Application', 
    period: '2025', 
    tech: 'React, Java', 
    link: 'https://onomesjobboard.netlify.app/', 
    description: 'Developed a full-stack job platform using React and Java, streamlining job search processes.' 
  },
  { 
    title: 'Portfolio Website', 
    period: '2025', 
    tech: 'React, Tailwind CSS', 
    link: 'https://onomes-portfolio.netlify.app/', 
    description: 'Designed this responsive portfolio using React and Tailwind CSS to showcase my projects and skills.' 
  },
  { 
    title: 'AI-Powered Trading Bot', 
    period: 'Ongoing, 2025', 
    tech: 'AI, Binance API', 
    link: 'https://github.com/Onome-Owah/TradBot', 
    description: 'Built an automated trading bot using AI and Binance API for market analysis and decision-making.' 
  },
  { 
    title: 'AI Chatbot', 
    period: '2025', 
    tech: 'AI, JavaScript', 
    link: 'https://zeeta.netlify.app/', 
    description: 'Created an interactive chatbot with natural language processing capabilities for user engagement.' 
  },
  { 
    title: 'Flight Quote System', 
    period: 'Feb 2024 – Apr 2024', 
    tech: 'React, Java', 
    link: 'https://github.com/yourusername/flight-quote-system', 
    description: 'Designed a full-stack application using React and Java to provide real-time flight quotes, improving operational efficiency.' 
  },
  { 
    title: 'API Reengineering for Device Team', 
    period: 'May 2024 – Present', 
    tech: 'Kotlin, AWS, Jenkins', 
    link: 'https://github.com/yourusername/api-reengineering', 
    description: 'Engineered and restructured 3 critical APIs for vehicle device authentication, boosting system reliability and performance.' 
  },
  { 
    title: 'Oil Delivery App', 
    period: 'Nov 2023 – Jan 2024', 
    tech: 'React, HTML, CSS, JavaScript', 
    link: 'https://oildelivery.netlify.app', 
    description: 'Developed a responsive web application for an oil delivery company, enhancing user experience and order management.' 
  },
  { 
    title: 'Patient Management System', 
    period: '2023 - Master’s Project', 
    tech: 'C#', 
    link: 'https://github.com/Onome-Owah/Patient-Management-System', 
    description: 'Developed a C#-based system to manage patient records, optimizing data organization for healthcare use cases.' 
  },
  { 
    title: 'Recipe Management System', 
    period: '2023 - Master’s Project', 
    tech: 'C#', 
    link: 'https://github.com/Onome-Owah/RecipeManagementSystem', 
    description: 'Created a C#-driven web application to store and organize recipes, enhancing user accessibility through a robust database.' 
  },
  { 
    title: 'Spaceville Website', 
    period: '2022', 
    tech: 'React, JavaScript', 
    link: 'https://spaceville.netlify.app/', 
    description: 'Created a website for Spaceville, offering a platform to buy, sell, and manage crypto assets.' 
  },
  { 
    title: 'TradExpress', 
    period: '2022', 
    tech: 'React, JavaScript', 
    link: 'https://tradex-press.netlify.app/', 
    description: 'Developed a platform for buying, selling, and managing crypto, providing real-time trading features.' 
  },
  { 
    title: 'Tech Consulting Website', 
    period: '2022', 
    tech: 'React, JavaScript', 
    link: 'https://techconsultsite.netlify.app/', 
    description: 'Built a professional tech consulting website showcasing services, portfolio, and client testimonials.' 
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter(project => 
    (filter === 'All' || project.tech.includes(filter)) && 
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects" className="py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Projects</h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <input 
            type="text" 
            placeholder="Search projects..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border rounded w-full sm:w-72 text-black"
          />
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)} 
            className="p-3 border rounded bg-white text-black"
            aria-label="Filter projects by technology"
          >
            <option value="All">All</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="Kotlin">Kotlin</option>
            <option value="C#">C#</option>
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.period} | {project.tech}</p>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-500 hover:underline">
                  View Project
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No projects available for this filter.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
