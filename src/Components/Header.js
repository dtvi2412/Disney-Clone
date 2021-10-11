import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <Left>     
                <Link to="/">
                <Logo src="https://toppng.com/uploads/preview/disney-logo-11530965441h3dubhchrf.png"/>
                </Link>  
     
            <Menu>
                <Link to="/">DISNEY</Link>
                <a href="#SHOP">SHOP</a>
                <a href="#TRENDING">TRENDING</a>
                <a href="#MOVIES">MOVIES</a>
                <a href="#TV">TV</a>
                <a href="#PARKS">PARKS</a>
                <a href="#MORE">MORE</a>
            </Menu>
            </Left>
    
            <SignIn>
                <Link to="/login">Sign In/</Link>
                <a href="#Register">Register</a>
            </SignIn>
        </Container>
    )
}

export default Header;

const Container = styled.div`
 height: 70px;
 background:#fff;
 padding:0 40px;

 display: flex;
 justify-content: space-between;
 align-items: center;

`;
const Left = styled.div`
    display:flex;
    align-items: center;
`;
const Logo = styled.img`
    width:70px;
    height: 70px;
    object-fit: cover;

    margin-right: 50px;
`;
const Menu = styled.div`
    a{
        color:#111;
        margin:0 10px;
        font-weight: 600;
        position: relative;
        &::after{
            content: '';
            height: 3px;
            background-color: #111;
            width:100%;
            
            position:absolute;
            bottom:-3px;
            left:0;
            opacity: 0;
            transform-origin: left center;
            transform: scaleX(0);
     
            transition: all 300ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        }
        &:hover::after{
            opacity: 1;
            transform: scaleX(1);
        }
    }
    @media (max-width:800px){
        display: none;
    }
`;
const SignIn = styled.div`
    a{
        text-decoration: none;
        color:#111;
        font-weight: 400;
        margin:0 3px;
        font-size:0.9rem;
    }
`;
