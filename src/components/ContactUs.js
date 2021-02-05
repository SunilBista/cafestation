import React, { useState } from 'react';
import Contact from './Contact';
import DropDown from './DropDown';
import Navbar from './Navbar';
import GlobalStyles from '../globalStyles';
import Footer from './Footer';

import styled from 'styled-components';

const Section = styled.section`
width: 100%;
height: 100vh;
padding: 4rem 0rem;
`;

function ContactUs() {
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
    <Contact />
    </Section>
    <Footer />
    </>
  );
}

export default ContactUs;
