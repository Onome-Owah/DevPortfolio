import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="hero bg-primary text-white flex items-center justify-center relative px-6 md:px-12"
      style={{ minHeight: '100vh' }}
    >
      <div className="container text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm Onome Laura Owah
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
          A passionate Software Developer. I love building impactful solutions using technology 
          to make a difference.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="projects" className="bg-black text-primary py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-900 border border-primary inline-block text-center">
            Check My Work
          </a>

          <a href="/images/ONOME_LAURA_OWAH_Software_Development .pdf" download>
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-400 transition duration-200 border border-green-500 inline-block text-center">
              Download Resume
            </button>
          </a>
        </div>

        {/* About Me Section */}
        <div className="mt-12 max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">About Me</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            With a background in software development and product management, I specialize in 
            building scalable and intuitive applications. I thrive in dynamic environments, 
            collaborating with teams to turn complex ideas into well-engineered solutions.
            <br /><br />
            My journey began with a passion for technology and problem-solving. Over time, 
            I have honed my skills in backend and frontend development, API design, and system 
            architecture. Whether it’s optimizing performance, enhancing user experience, or 
            integrating business logic, I am driven by the challenge of building robust, 
            high-quality software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
