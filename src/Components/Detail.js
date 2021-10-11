import React from 'react'
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GroupsIcon from '@mui/icons-material/Groups';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
function Detail() {
    //ID type String
    const {id} = useParams();

    const fakeDetail = useSelector(state => state.movies.movies);

    return (
        <Container>
       
                <> {fakeDetail.map(movie=>{
                
                        if(movie.id === parseInt(id))
                         {
                            return <>
                            <Background>
                                <img src={movie.linkImage} alt=""/>
                            </Background>
                            <ImageTitle>
                                <img src={movie.linkImage} alt=""/>
                            </ImageTitle>
                            <Controls>
                                <GroupPlayer>

                                    <PlayerButton>
                                        <PlayArrowIcon/>
                                        <span>PLAY</span>
                                    </PlayerButton>
                                    <TrailerButton>
                                        <PlayArrowIcon/>
                                        <span>TRAILER</span>
                                    </TrailerButton>
                                </GroupPlayer>
                        
                                <GroupButton>
                                    <AddButton>
                                        <span>+</span>
                                    </AddButton>
                                    <GroupWatchButton>
                                        <GroupsIcon/>
                                    </GroupWatchButton>
                                </GroupButton>
                         
                            </Controls>
                            <Subtitle>
                                2018 + 7m + Family, Fanstasy, Kids, Animation
                            </Subtitle>
                            <Description>
                                A Chinese mom who's sad when her grown son leaves home get another chance at motherhood when one of her dumplings springs to life. But she finds  that nothing stays cute and small forever.
                            </Description>
                        </>
                         }
                })}
            
                </> 

     
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding:0px calc(3.5vw + 5px);
    position: relative;
`;
const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity: 0.8;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
`;
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width:35vw;
    min-width: 200px;

    margin-top:50px;
    img{
        width:100%;
        height:100%;
        object-fit: contain;
    }
`;
const Controls = styled.div`
    display: flex;
    align-items: center;
    @media (max-width:485px){
     flex-direction:column;
     align-items:flex-start;
    }
`;
const PlayerButton = styled.button`
    border-radius:4px;
    font-size:15px;
    padding:0 24px;
    margin-right:22px;
    letter-spacing: 1.8px;
    display: flex;
    align-items: center;
    height: 56px;
    border:none;
    background: rgb(249,249,249);
    cursor: pointer;
    margin-top:40px;
    &:hover{
        background:rgb(199,198,198);
    }
    @media (max-width:350px){
        padding:0 13px;
    }
`;
const TrailerButton = styled(PlayerButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;
    @media (max-width:350px){
        margin-right:0px;
    }
`;
const AddButton = styled.button`
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor:pointer;
    margin-right:16px;
    margin-top:45px;
    span{
        font-size:30px;
        color:white;
    }
`;
const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0);
    color:white;
`;
const Subtitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`;
const Description = styled.div`
    line-height: 1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249,249,249);
`;
const GroupButton = styled.div`
    display:flex;
`;
const GroupPlayer = styled.div`
    display:flex;
`;