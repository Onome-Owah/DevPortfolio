import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="hero bg-primary text-white flex items-center justify-center relative"
      style={{ height: '100vh' }}
    >

      <div className="container text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Onome Laura Owah</h1>
        <p className="text-xl mb-6">
          A passionate Software Developer. I love building impactful solutions 
          using technology to make a difference.
        </p>

        {/* <a href="projects" className="bg-white text-primary py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-100 mr-4">
          Check My Work
        </a>
      
        <a href="images/ONOME-LAURA-OWAH-Software-Development.pdf" download>
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition duration-200">
            Download Resume
          </button>
        </a> */}

<a href="projects" className="bg-black text-primary py-2 px-6 rounded-lg text-lg font-semibold hover:bg-black-100 border border-primary inline-block text-center mr-4">
  Check My Work
</a>

<a href="images/ONOME_LAURA_OWAH_Software_Development .pdf" download>
  <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-400 transition duration-200 border border-green-500 inline-block text-center">
    Download Resume
  </button>
</a>



        {/* About Me Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-primary mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            With a background in software development and product management, I specialize in 
            building scalable and intuitive applications. I thrive in dynamic environments, 
            collaborating with teams to turn complex ideas into well-engineered solutions.
            <br />
            <br />
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
