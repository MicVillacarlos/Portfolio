import styled from "styled-components";

export const Container = styled.div`
    height:60vh;
    padding: 3em;
    display: flex;
    align-items: center;
    gap:5em;

    @media (max-width: 768px) {
        flex-direction:column;
        text-align:center;
        line-height: 20px;
    }
`

export const BioTextContainer = styled.div`
    p{
        color: #f4bd0b;
        line-height: 1.2em;
        font-family: 'Gruppo', cursive;
        text-align:justify;
        font-size: 1.5em;
    }
    h1{
        color:transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #f4bd0b;
        font-family: 'Syncopate',
        sans-serif;
    }
        @media (max-width: 768px) {
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
        @media (max-width: 320px) {
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
    display:flex;
    justify-content: center;
    align-items: top;
    
    img{
        width:280px;
        height:280px;
    }
    @media (max-width: 768px) {    
        margin:0; 
        justify-content: right;
        align-items: center;
        img{
            width:150px;
            height:150px;
        }
    }
    @media (max-width: 425px) {    
        img{
            display:none
        }
    }
`
export const InstagramContainer = styled.div`
    display:flex;
    flex-direction: column;
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
`