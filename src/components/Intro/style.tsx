import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    overflow:hidden;
    margin: auto; 
    :hover{
        cursor: pointer;
    }
    button{
        border:0px;
        padding:0;
    }
    img{
        width:350px;
    }
    &:active{
        img{
            transform: translateY(1%);
        }
    }
    @media (max-width:768px) {
        height:80vh;
        img{
            width: 320px;
        }
    }
    @media (max-width:425px) {
        height:100vh;
        img{
            width: 280px;
        }        
    }
    @media (max-width:375px) {
        img{
            width: 230px;
        }
    }
    @media (max-width:320px) {
        img{
            width: 210px;
        }
    }
`

export const Slider = styled.div`
    height: 200px;
    margin:0;
    width: 80vw;
    display:grid;
    place-items: center;
    overflow: hidden;
    background-color:transparent;
`
export const scroll = keyframes`
    0%{transform: translateX(0)}
    100%{transform: translateX(-20vw)}
`
export const SliderTrack = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    background-color: transparent;
    animation: ${scroll} 6s linear infinite
`

export const ImageContainer = styled.div`
    height:200px;
    width: 20vw;
    padding:0;
    display: flex;
    align-items: center;
    p{
        color: white
    }
`