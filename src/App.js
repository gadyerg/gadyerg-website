import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import ThemeButton from './components/ThemeButton';

function App() {
  return (
    <React.Fragment>
      <ThemeButton />
      <NavBar />
      <Intro />
      <AboutMe />
    </React.Fragment>
  );
}

export default App;
