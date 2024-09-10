import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-2">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a 
            href="https://www.linkedin.com/in/mansi-mood" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a 
            href="mailto:mansimood000@gmail.com" 
            className="text-gray-400 hover:text-white"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>
          <a 
            href="https://www.instagram.com/page.mansii" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a 
            href="https://github.com/mansimood000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a 
            href="https://mansimood000.wixsite.com/my-site-1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white"
          >
            <i className="fas fa-globe fa-2x"></i> 
          </a>
        </div>
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Mansi Mood. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
