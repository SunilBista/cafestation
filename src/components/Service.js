import React, { useState } from 'react';
import DropDown from './DropDown';
import Navbar from './Navbar';
import GlobalStyles from '../globalStyles';
import Footer from './Footer';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
height: 75vh;
padding: 4rem 0rem;
`;

const Intro = styled.section`
padding: 3rem;
h1{
    color: #000d1a;
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin-top: 30px;
}
p{
    display: flex;
    margin-top: 20px;
    text-align: center;
    justify-content: center;
}
`;

function Service() {
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
        <Intro>
            <h1>Services</h1>
            <p>
                We provide awesome Tandoori tea and keema noodles. We are located in basantapur. Please visit us.
            </p>
        </Intro>
    </Section>
    <Footer />
    </>
  );
}

export default Service;
