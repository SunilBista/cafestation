import React, { useState } from 'react';
import DropDown from './components/DropDown';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import GlobalStyles from './globalStyles';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <GlobalStyles />
    <Navbar toggle={toggle}/>
    <DropDown isOpen={isOpen} toggle={toggle}/>
    <HeroSection />
    </>
  );
}

export default App;
