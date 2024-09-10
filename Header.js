import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-center py-6 bg-gray-100">
      <div 
        className="text-4xl font-bold text-center w-full max-w-sm rounded-full shadow-lg animate__animated animate__zoomIn" 
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Mansi's Portfolio
      </div>
    </div>
  );
};

export default Header;
