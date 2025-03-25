import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          © 2025 Onome Owah. All rights reserved.
        </p>
        <p className="mt-4 text-sm">
          Connect with me: 
          <a href="mailto:onomeowah@gmail.com" className="text-primary hover:underline ml-2">onomeowah@gmail.com</a>
        </p>
        <div className="mt-4 space-x-6">
          <a href="https://linkedin.com/in/onome-laura-owah-a74a4411a/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/Onome-Owah" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            GitHub
          </a>
          <a href="https://onomedevportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
