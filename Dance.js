import React from 'react';
import danceCartoonImage from '../assets/Dance.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dance = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="py-12 px-6 bg-gradient-to-r from-yellow-100 to-red-100" id="dance-journey">
      <h2 className="text-4xl font-bold text-center mb-8 text-red-600" style={{ fontFamily: "'Darker Grotesque', cursive" }} data-aos="fade-down">
        Flow With Me
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        
        <div className="w-full md:w-1/2 px-4" data-aos="fade-left">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2 text-red-600" style={{ fontFamily: "'Pacifico', cursive" }}>Dance Coordinator</h3>
              <p className="text-gray-700">Led the dance team as president, organizing events, choreographing routines, and fostering a strong team spirit. My leadership contributed to numerous successful performances and competitions.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-2 text-red-600" style={{ fontFamily: "'Pacifico', cursive" }}>Awards & Achievements</h3>
              <p className="text-gray-700">Received several awards for outstanding performances and contributions to the dance community. Recognized for exceptional choreography, team leadership, and creative expression.</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0" data-aos="fade-right">
          <img 
            src={danceCartoonImage} 
            alt="Dance Cartoon"
            className="w-80 h-80 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Dance;
