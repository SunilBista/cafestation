import React, { useState } from 'react';
import Contact from './components/Contact';
import DropDown from './components/DropDown';
import HeroSection from './components/HeroSection';
import Info from './components/InfoSection';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
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
    <Info />
    <Testimonials />
    <Contact />
    </>
  );
}

export default App;
