import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import ThemeButton from './components/ThemeButton';
import Contact from './components/Contact';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Intro />
      <AboutMe />
      <ThemeButton />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
