// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import {Projects, Experience} from './components/Projects';
import Contact from './components/Contact';

const App = () =>{
  return (
    <div className="relative bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <div className="absolute w-full h-full top-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />
      <div className="relative bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900">
        <div className="bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900">
          <div className="bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900">
            <About />
            <Projects />
            <Contact />
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
