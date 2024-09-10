import React from 'react';
import cartoonImage from '../assets/Code.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="py-12 px-6 bg-gradient-to-r from-pink-100 to-blue-100" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 text-pink-600" style={{ fontFamily: "'Darker Grotesque', cursive" }} data-aos="fade-down">
        CodeCraft
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        
        <div className="w-full md:w-1/2 px-4">
          <div className="space-y-8"> 
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden transform transition-transform duration-500 hover:scale-105" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-2 text-pink-600" style={{ fontFamily: "'Pacifico', cursive" }}>ChakraGroup - Main Website</h3>
              <p className="text-gray-700">A main website project built with React JS and styled using Tailwind CSS. This project features a modern design and interactive elements.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden transform transition-transform duration-500 hover:scale-105" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-2 text-pink-600" style={{ fontFamily: "'Pacifico', cursive" }}>Medicos Clan - MongoDB Backend</h3>
              <p className="text-gray-700">A medical management application with a robust backend built using MongoDB. Designed to handle patient data, appointments, and medical records.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden transform transition-transform duration-500 hover:scale-105" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-2 text-pink-600" style={{ fontFamily: "'Pacifico', cursive" }}>Cyclone Intensity Estimator - Deep Learning</h3>
              <p className="text-gray-700">A deep learning project that uses neural networks to estimate cyclone intensity based on meteorological data. Implemented using Python and TensorFlow.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden transform transition-transform duration-500 hover:scale-105" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-2 text-pink-600" style={{ fontFamily: "'Pacifico', cursive" }}>My Bucket List - React JS & Tailwind CSS</h3>
              <p className="text-gray-700">A personal bucket list website built with React JS and styled using Tailwind CSS, featuring a cute design and interactive elements.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden transform transition-transform duration-500 hover:scale-105" data-aos="fade-up">
              <h3 className="text-2xl font-semibold mb-2 text-pink-600" style={{ fontFamily: "'Pacifico', cursive" }}>Musical Game - React Native</h3>
              <p className="text-gray-700">An engaging musical rhythm game developed using React Native, designed for seamless play on both web and mobile platforms.</p>
            </div>

          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0" data-aos="fade-left">
          <img 
            src={cartoonImage} 
            alt="Cartoon"
            className="w-80 h-90 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
