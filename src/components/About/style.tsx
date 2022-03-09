import styled from "styled-components";

export const Container = styled.div`
    height:80vh;
    padding-left: 2em;
    padding-right: 2em;
    display: flex;
    align-items: center;

    &:hover{
        a{
            text-shadow:0px 2px 5px white;
        }
    }
    
`

export const AboutTextContainer = styled.div`
    width: 70%;
    h1{
        color:transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #f4bd0b;
        font-family: 'Syncopate', sans-serif;
    }

    p{
        color: #f4bd0b;
        line-height: 1.2em;
        font-family: 'Gruppo', cursive;
        font-size: x-large
    }
    a{
        text-decoration: none;
        color: #f4bd0b;
    }
    &:hover{
        h1{
            color: #f4bd0b;
        }
    }
`

export const AboutImage = styled.div`
    margin-left: 2em;
    margin-right: 1em;
    width:30%;
    display:flex;
    justify-content: center;
    align-items: top;
    img{
        width:300px;
        height:300px;
    }
`
