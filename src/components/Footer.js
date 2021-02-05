import React from 'react';
import styled from 'styled-components';

import {RiInstagramLine} from 'react-icons/ri';
import {ImFacebook2} from 'react-icons/im';
const Section = styled.section`
width: 100%;
height: 100%;
background:#fff;
`;

const ContactContainer = styled.section`
padding: 3rem;
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
background: #e3e3e3;
@media screen and (max-width: 768px){
    display: block;
}
`;
const SocialMediaContainer = styled.section`
div{
    display: flex;
    justify-content:space-between;
    margin-top: 5px;
    width: 50px;
}
a{
    color: inherit;
    text-decoration: none;
}

a+a{
    font-size: 20px;
    position: relative;
    bottom: 2.5px;
}
@media screen and (max-width: 768px){
    align-items: center;
    margin-bottom: 20px;
}

`;
const PhoneContainer = styled.section`
@media screen and (max-width: 768px){
    align-items: center;
}`;
const Line = styled.section`
font-style: italic;
@media screen and (max-width: 768px){
    align-items: center;
    margin-bottom: 20px;
}
`;
const CopyRight = styled.section`
display: flex;
justify-content: center;
background: #e3e3e3;
padding: 1rem;
font-weight: bold;
@media screen and (max-width: 768px){
    align-items: center;
    margin-bottom: 10px;
}
`;


const Footer = () => {
    return ( 
        <Section>
            <ContactContainer>
                <SocialMediaContainer>
                    <p>Connect With Us</p>
                    <div>
                    <a href="https://www.facebook.com"><ImFacebook2 /></a>
                    <a href="https://www.instagram.com"><RiInstagramLine /></a>
                    </div>
                </SocialMediaContainer>
                <Line>
                    <p>"Thanks for visiting us. Happy serving you."</p>
                </Line>
                <PhoneContainer>
                <p>Call Us On</p>
                <p>+977- 980-8749775</p>
                <p></p>
                </PhoneContainer>
            </ContactContainer>
            <CopyRight>
                <p>Tandoori Chiya and Cafe Station.</p>
                <p>&copy; All Right Reserved.</p>
            </CopyRight>
        </Section>
     );
}
 
export default Footer;