import React, { useState } from 'react';
import Contact from './Contact';
import DropDown from './DropDown';
import HeroSection from './HeroSection';
import Info from './InfoSection';
import Navbar from './Navbar';
import Testimonials from './Testimonials';
import GlobalStyles from '../globalStyles';
import Footer from './Footer';

function Home() {
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
    <Footer />
    </>
  );
}

export default Home;
