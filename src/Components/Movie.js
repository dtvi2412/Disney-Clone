import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Movie() {
    const movies = useSelector(state => state.movies.movies);
  
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                {movies.map((item)=>(
                    <Wrap to={`/detail/${item.id}`} key={item.id}>
                         <img src={item.linkImage} alt=""/>
                     </Wrap>
                ))}
           
             
            </Content>
        </Container>
    )
}

export default Movie

const Container = styled.div`
    margin:50px 0;
    font-family: Arial, Helvetica, sans-serif;
`;
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    
`;
const Wrap = styled(Link)`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow:rgb(0 0 0/ 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.45,0.46,0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
    &:hover{
        transform: scale(0.9);
        border-color:rgba(249,249,249,0.8);
        box-shadow:rgb(0 0 0/ 80%) 0px 40px 58px -16px,rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`;