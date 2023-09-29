import './App.css';
import React, { useState, useEffect } from "react";
import { Footer } from './views/components/layouts/footer/footer';
import Nav from './views/components/layouts/nav/nav';

function App() {
  return (
    <>
      <Nav />

      <Footer />
    </>
  );
}

export default App;



/*

import './App.css';
import React, { useState, useEffect } from "react";
import { Footer } from './views/components/layouts/footer/footer';
import Nav from './views/components/layouts/nav/nav';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const container = document.getElementById('container-content-page');
    const scrollPosition = container.scrollTop;
    const sectionHeight = window.innerHeight;
    // Calcular la sección actual en función de la posición de desplazamiento
    const newSection = Math.floor(scrollPosition / sectionHeight);
    
    if (newSection !== currentSection) {
      setCurrentSection(newSection);
    }
  };
  useEffect(() => {
    const container = document.getElementById('container-content-page');
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  useEffect(() => {
    const container = document.getElementById('container-content-page');
    container.scrollTo({
      top: currentSection * window.innerHeight,
      behavior: 'smooth',
    });
  }, [currentSection]);

  return (
    <>
      <Nav />

      <Footer />
    </>
  );
}

export default App;

*/