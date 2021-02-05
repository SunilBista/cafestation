import React from 'react';
import styled from 'styled-components';

import {RiInstagramLine} from 'react-icons/ri';
import {ImFacebook2} from 'react-icons/im';
const Section = styled.section`
width: 100%;
height: 100%;
padding: 5rem 0rem 0rem;
background:#fff;
`;

const Intro = styled.section`
h1{
    color: #000d1a;
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin-top: -50px;
}`;

const MapContainer = styled.section`
padding: 3rem;
display: flex;
flex-direction: row;
justify-content: center;
iframe{
    width: 100%;
    height: 500px;
}
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


const Contact = () => {
    return ( 
        <Section>
            <Intro>
            <h1>Contact Us</h1>
            </Intro>
            <MapContainer>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d56519.19884902775!2d85.27260479120812!3d27.703391294986353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb19a5026a9ccf%3A0xa21746f97ba8ec3!2zVGFuZG9vcmkgY2hpeWEgc3RhdGlvbiBhbmQgY2FmZSwg4KSo4KS_4KS34KWN4KSg4KS-4KSo4KSo4KWN4KSmIOCkruCkvuCksOCljeCklywgS2F0aG1hbmR1!3m2!1d27.703395699999998!2d85.3076244!4m5!1s0x39eb19a5026a9ccf%3A0xa21746f97ba8ec3!2standoori%20chiya%20station%20and%20cafe!3m2!1d27.703395699999998!2d85.3076244!5e0!3m2!1sen!2snp!4v1612493156703!5m2!1sen!2snp"  frameborder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </MapContainer>
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
 
export default Contact;