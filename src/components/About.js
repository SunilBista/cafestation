import React, { useState } from 'react';
import DropDown from './DropDown';
import Navbar from './Navbar';
import InfoSection from './InfoSection';
import GlobalStyles from '../globalStyles';
import Footer from './Footer';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem 0rem;
`;

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <GlobalStyles />
    <Navbar toggle={toggle}/>
    <DropDown isOpen={isOpen} toggle={toggle}/>
    <Section>
        <InfoSection />
    </Section>
    <Footer />
    </>
  );
}

export default About;
