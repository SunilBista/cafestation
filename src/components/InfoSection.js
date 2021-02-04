import React from 'react';
import styled from 'styled-components';
import { galleryData } from '../data/galleryData';

const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
background: #000d1a;
`;
const Container = styled.section`
    padding: 3rem;
    display: grid;
    grid-template-colums: 1fr 1fr;
    grid-template-rows: 100px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;
const Intro = styled.section`
    h1{
        color: white;
        display: flex;
        justify-content: center;
        font-size: 20px;
        margin-top: -30px;
    }
    p{
        color: white;
        display: flex;
        justify-content: center;
        font-size: 20px;
        font-style: italic;
        text-align: center;
        margin-top:20px;
        margin-bottom:20px;
    }
`;
const Gallery = styled.section`
display:flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
`;
const Img = styled.img`
    width: 320px;
    height: 410px;
    margin-bottom: 20px;
    object-fit: cover;
    border: 2px solid white;

    @media screen and (max-width: 768px){
        margin-bottom: 10px;
    }
`;

const Info = () => {
    return ( 
        <Section>
            <Container>
                <Intro>
                    <h1>Welcome to Tandoori Chiya & Cafe Station</h1>
                    <p>Good food and great vides. Take a cup and forget about everything for a few minutes. </p>
                </Intro>
                <Gallery>
                    { galleryData.map((item, index) => (
                        <Img src={item.image} alt="Gallery" key={index}/>
                    ))}
                </Gallery>
            </Container>
        </Section>
     );
}
 
export default Info;