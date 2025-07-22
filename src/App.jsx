import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SquareBackground from './block/SquareBackground';

function App() {
  return (
    <div className="App">
      <SquareBackground />
      <CustomNavbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App
