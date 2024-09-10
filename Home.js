import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import cartoonImage from '../assets/Me.jpg';

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gradient-to-b from-blue-100 to-pink-100">
      <div className="flex-1 flex justify-center mb-8" data-aos="fade-up">
        <img
          src={cartoonImage}
          alt="Cartoon representing Mansi"
          className="w-3/4 max-w-sm shadow-lg rounded-full animate__animated animate__zoomIn"
        />
      </div>

      <div className="flex-1 text-center md:text-left mt-8 md:mt-0 md:pl-12">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-4 animate__animated animate__zoomIn" style={{ fontFamily: "'Darker Grotesque', cursive" }} data-aos="fade-down">
          About Me
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-4 font-light animate__animated animate__fadeIn" style={{ fontFamily: "'Dancing Script', cursive" }} data-aos="fade-up">
          Hey! I'm <span className="font-medium text-yellow-600">Mansi</span>, the dev-animator hybrid with a passion for crafting mind-blowing digital experiences. By day, I wield code and animation magic to bring bold ideas to life. And when the screens go dark, I trade my keyboard for dance moves that fuel my creativity. With a fusion of technical wizardry and artistic swagger, I'm on a mission to create work that's pure awesomeness.
        </p>
      </div>
    </div>
  );
};

export default Home;
