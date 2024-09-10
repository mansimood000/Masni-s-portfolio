import React from 'react';
import 'animate.css';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Blender from './components/Blender';
import Dance from './components/Dance';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
        <Projects />
        <Blender />
        <Dance />
      </main>
      <Footer />
    </div>
  );
}

export default App;
