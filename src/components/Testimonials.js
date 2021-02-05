import React from 'react';
import styled from 'styled-components';
import { reviewData } from '../data/reviewData';

const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
background: #fff;
`;

const Intro = styled.section`
    h1{
        color: #000d1a;
        display: flex;
        justify-content: center;
        font-size: 30px;
        margin-top: -50px;
    }
`;

const Container = styled.section`
padding: 3rem;
display: flex;
flex-direction: row;
justify-content: space-between;
@media screen and (max-width: 768px){
    display: block;
}
`;
const Card = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 400px;
padding: 2rem;
min-height: 200px;
height: auto; 
flex-wrap: wrap;
border-radius: 5px;
background: linear-gradient(150deg, #39ef74, #4600f1 100%);
color: white;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
&:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
}
    p:first-child{
        font-size: 20px;
        font-wight: 500;
        text-align: center;
        height: 140px;
    }
    p + p{
        font-style: italic;
    }
    @media screen and (max-width: 768px){
        display: block;
        margin: 20px 0px;

        p + p{
            display: flex;
            justify-content: center;
        }
    }
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    a{
        text-decoration: none;
        width: 155px;
        background: #000d1a;
        border-radius: 5px;
        color: white;
        padding: 1rem;
        transition: 0.3s;
    }
    a:hover {
        transform: translateY(-3px);
    }
`;

const Testimonials = () => {
    return ( 
        <Section>
            <Intro>
                <h1>Testimonials</h1>
            </Intro>
            <Container>
                   {reviewData.map((item, index) => (
                       <Card key={index}>
                       <p>{item.review}</p>
                       <p>{item.person}</p>
                       </Card>
                   ))} 
            </Container>
            <BtnContainer>
                    <a href='https://search.google.com/local/writereview?placeid=ChIJ4e68tJ8Z6zkR2PeSeXTSJaE' target="_blank" rel="noreferrer">
                        Write a Review
                    </a>
            </BtnContainer>
        </Section>
     );
}
 
export default Testimonials;