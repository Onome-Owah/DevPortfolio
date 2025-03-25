import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-black shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-black hover:text-yellow-400">
            MyPortfolio
          </Link>
        </div>

        {/* Navbar Links - Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-lg hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="text-lg hover:text-yellow-400 transition duration-300"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-lg hover:text-yellow-400 transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/reviews"
            className="text-lg hover:text-yellow-400 transition duration-300"
          >
            Reviews
          </Link>
          <Link
            to="/contact"
            className="text-lg hover:text-yellow-400 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navbar (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-primary py-4">
          <ul className="flex flex-col space-y-4 items-center">
            <li><Link to="/" className="text-black hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/skills" className="text-black hover:text-yellow-400" onClick={() => setIsOpen(false)}>Skills</Link></li>
            <li><Link to="/projects" className="text-black hover:text-yellow-400" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/reviews" className="text-black hover:text-yellow-400" onClick={() => setIsOpen(false)}>Reviews</Link></li>
            <li><Link to="/contact" className="text-black hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
