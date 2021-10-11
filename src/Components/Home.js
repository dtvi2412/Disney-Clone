import React from 'react'
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Movie from './Movie';
import Viewers from './Viewers';

function Home() {

 
    return (
        <Container>
         
            <ImageSlider/>
            <Viewers/>
            <Movie/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    overflow-x: hidden;
    
    min-height: calc(100vh - 70px);
    padding:0px calc(3.5vw + 5px);
    position: relative;
    color:#fff;
    &::before{
       background:url('https://i.pinimg.com/originals/68/2a/08/682a082861205cebfc1814627290b2a1.jpg')  center center / cover no-repeat fixed;
       
        content:'';
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;

    }
`;