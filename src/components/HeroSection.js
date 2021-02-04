import React from 'react';
import styled from 'styled-components/macro';
import  Main from '../images/main.jpg';

const Hero = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;
const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroContent = styled.div`
    position: relative;
    top: -100px;
    font-size: clamp(0.5rem, 8vw, 3rem);
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
    text-shadow: 1px 1px 8px #0000FF;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: calc(100% - 100px);
    color: #eee;
`;


const HeroSection = () => {
    return ( 
        <Hero>
            <HeroWrapper>
            <HeroContent>Tandoori Chiya  <br/> & Cafe Station</HeroContent>
            <Img src={Main} alt="Hero Section"/>
            </HeroWrapper>
        </Hero>
     );
}
 
export default HeroSection;