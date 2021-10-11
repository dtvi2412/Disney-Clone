import styled from 'styled-components'
import React from 'react'
import { style } from '@mui/system';

function Login() {
    return (
        <Container>
           <CTA>
               <CTALogoOne src="https://play-lh.googleusercontent.com/4whGAVjZGrrlNxzheKAfBXrxggtyAb4euWLeQI8fDfVfdnFEZjE0DZTJ8DKoh64pqcIa" alt=""/>


               <SignUp>GET ALL THERE</SignUp>
               <Description>Get Premier account to Raya and the Last Dragon with a Disney+ subscription. As of 03/26/21, the price and The disney Bundle will increase by $1.</Description>
               {/* <CTALogoTwo src="https://play-lh.googleusercontent.com/4whGAVjZGrrlNxzheKAfBXrxggtyAb4euWLeQI8fDfVfdnFEZjE0DZTJ8DKoh64pqcIa" alt=""/> */}
           </CTA>
        </Container>
    )
}

export default Login;
const Container = styled.div`
    height: calc(100vh-70px);

    position: relative;
/* 
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity: 0.8; */

    display: flex;
    align-items: center;
    justify-content: center;
    &::before{
    
        background-position: top;
        background-size:cover;
        background-repeat:no-repeat;
        background-image:url('https://803277.smushcdn.com/1580116/wp-content/uploads/2020/10/latest-one-day-at-disney-installment-prompts-our-team-to-discuss-their-favorite-disney-film-posters.png?lossy=1&strip=0&webp=1') ;
        content:'';

        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        opacity: 0.8;
        z-index:-1;
    }
`;
const CTA = styled.div`
    max-width:650px;
    padding:80px 40px;
    width:80%;
    display: flex;
    flex-direction: column;
    margin-top:200px;
    align-items: center;

`;
const CTALogoOne = styled.img`
    width:200px;
`;
const SignUp = styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius: 4px;
    text-align:center;
    font-size:18px;
    cursor: pointer;
    transition: all 250ms;
    margin-top:8px;
    margin-bottom:12px;
    &:hover{
        background:#0483ee;
    }
`;
const Description = styled.p`
    font-size:11px;
    letter-spacing: 1.5px;
    text-align:center;
    line-height: 1.5;
`;
const CTALogoTwo =styled.img`
    width:90%;
`;