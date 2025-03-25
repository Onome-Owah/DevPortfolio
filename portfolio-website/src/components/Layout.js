import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: 'url(/images/software.jpg)', 
          filter: 'brightness(50%)'
        }}
      ></div>
    
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-[-1]"></div>
    
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Layout;
