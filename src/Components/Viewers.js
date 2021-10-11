import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="https://digistatement.com/wp-content/uploads/2021/05/672ca784d459dca1dc37d94c1f582152-1.png" alt=""/>
            </Wrap>
    
            <Wrap>
                <img src="https://w0.peakpx.com/wallpaper/280/33/HD-wallpaper-black-amoled-marvel-dark.jpg" alt=""/>
            </Wrap>
    
            <Wrap>
                <img src="https://c4.wallpaperflare.com/wallpaper/5/268/8/star-wars-typography-black-background-wallpaper-preview.jpg" alt=""/>
            </Wrap>
    
            <Wrap>
                <img src="https://cdn.vox-cdn.com/thumbor/XnN6uedxunG1KXxwEiS5va4jsXg=/0x0:1199x776/1200x800/filters:focal(505x293:695x483)/cdn.vox-cdn.com/uploads/chorus_image/image/62669743/onward.0.jpg" alt=""/>
            </Wrap>
    
            <Wrap>
                <img src="https://assets-cdn.nationalgeographic.com/natgeo/static/default.NG.logo.dark.jpg" alt=""/>
            </Wrap>
    
            
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top:30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5,minmax(0 , 1fr));
  
    @media (max-width:665px){

     display: flex;
     flex-direction: column;
     align-items: center;
    }
`;
const Wrap = styled.div`
    cursor: pointer;
    border:3px solid rgba(249,249,249,0.1);
    border-radius: 10px;
    box-shadow:rgb(0 0 0/ 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.45,0.46,0.94) 0s;
    
    width:200px;
    height: 100px;

    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        transform: scale(1.05);
        border-color:rgba(249,249,249,0.8);
        box-shadow:rgb(0 0 0/ 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
    @media (max-width:1100px){
        width:120px;
        height: 80px;
    }
    @media (max-width:665px){
        width:220px;
        height: 100px;
    }
   
`;