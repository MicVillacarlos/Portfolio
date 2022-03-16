import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
`

export const Slider = styled.div`
    height: 200px;
    width: 80vw;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color:transparent;
    position: relative;

    &:before, &:after{
        position: absolute;
        top: 0;
        height:100%;
        width:5rem;
        z-index:1;
        content:'';
    }

    &:before{
        left: 0;
        background: rgb(255,255,255);
        background: linear-gradient(-90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%); 
    }

    &:after{
        right: 0;
        background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%); 
    }
`

export const scroll = keyframes`
    0%{transform: translateX(0)}
    100%{transform: translateX(-10vw)}
`

export const SliderTrack = styled.div`
    display:flex;
    align-items: center;
    width:calc(400px*4);
    background-color: transparent;
    animation: ${scroll} 5s linear infinite
`

export const ImageContainer = styled.div`
    padding:0;
    display: flex;
    align-items: center;
    width:20vw;
    img{
        width:100%
    }
`