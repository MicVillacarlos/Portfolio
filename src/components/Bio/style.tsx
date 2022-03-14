import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    height:60vh;
    padding-left: 2em;
    padding-right: 2em;
    display: flex;
    align-items: center;
    overflow:hidden;

    @media (max-width:768px) {
        display:block;
        text-align:center;
        line-height: 20px;
        margin-bottom: 20px;
    }
`

export const BioTextContainer = styled.div`
    width: 70%;
        p{
            color: #f4bd0b;
            line-height: 1.2em;
            font-family: 'Gruppo', cursive;
            font-size: large;
            text-align:justify;
        }
        h1{
            color:transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #f4bd0b;
            font-family: 'Syncopate',
            sans-serif;
        }
            @media (max-width:768px) {
                margin: auto;
                width: 80%;
                    p{
                        font-size: medium;
                        text-align: justify;
                    }
                    h1{
                        display: none;
                    } 
            }
            @media (max-width:375px) {
                p{
                    font-size: medium
                }
            }
            @media (max-width:320px) {
                p{
                    font-size: small
                }
            }
    &:hover{
        a{
            text-shadow:0px 1px 2px white;
            transform: translateY(-30%);
            text-shadow:0px 2px 5px white;
        }
    }
    
    `

export const BioImage = styled.div`
    margin-left: 2em;
    margin-right: 1em;
    display:flex;
    justify-content: center;
    align-items: top;

    img{
        width:280px;
        height:280px;
    }
    @media (max-width:768px) {    
        margin:0; 
        justify-content: right;
        align-items: center;
        img{
            width:150px;
            height:150px;
            margin-right:2em;
            margin-top:-4em;
        }
    }
    @media (max-width:500px) {    
        img{
            display:none
        }
    }
`
export const InstagramContainer = styled.div`
    display:flex;
    gap:10px;
    @media (max-width:768px) {     
        flex-direction: column;
    }

`
export const Instagram = styled.div`
    background-color:transparent;
        a{ 
            text-decoration: none;
            color: #f4bd0b;
        }
        transition: transform 1s;
        &:hover{
            text-shadow:0px 1px 2px white;
            transform: translateY(-25%);
            font-size: 1.5;
        }
        @media (max-width:768px) {     
            padding:0;
            margin:0;
        }
`

export const SliderSection = styled.div`
   display:flex;
   align-items: center;
   justify-content: center;
   width:100%;
   overflow: hidden;

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