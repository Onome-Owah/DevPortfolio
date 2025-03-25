import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-black shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-black hover:text-yellow-400">
            MyPortfolio
          </Link>
        </div>

        {/* Navbar Links */}
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
            Contact {/* This is the 'Contact' link */}
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <i className="fas fa-bars"></i> {/* This can be a hamburger icon */}
          </button>
        </div>
      </div>

      {/* Mobile Navbar (Optional, If you want a mobile dropdown) */}
      {/* Example of dropdown for small screens */}
      {/* 
      <div className="md:hidden">
        <ul className="space-y-4">
          <li><Link to="/" className="block text-white">Home</Link></li>
          <li><Link to="/skills" className="block text-white">Skills</Link></li>
          <li><Link to="/projects" className="block text-white">Projects</Link></li>
          <li><Link to="/reviews" className="block text-white">Reviews</Link></li>
          <li><Link to="/contact" className="block text-white">Contact</Link></li>
        </ul>
      </div>
      */}
    </nav>
  );
};

export default Navbar;
