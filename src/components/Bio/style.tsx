import styled from "styled-components";

export const Container = styled.div`
    height:auto;
    padding-left: 8em;
    padding-right: 8em;
    display: flex;
    align-items: center;
    gap:5em;
    margin-bottom: 5em;

    @media (max-width: 768px) {
        flex-direction:column;
        text-align:center;
        padding: 3em;
        margin-bottom: 0;
    }
    @media (max-width: 375px) {
        padding: 1em;
    }
`

export const BioTextContainer = styled.div`
    p{
        color: #f4bd0b;
        line-height: 1.2em;
        font-family: 'Gruppo', cursive;
        text-align:left;
        font-size: 1.5em;
    }
    h1{
        color:transparent;
        -webkit-text-stroke-width: 1.5px;
        -webkit-text-stroke-color: #f4bd0b;
        font-family: 'Syncopate',
        sans-serif;
    }
        @media (max-width: 768px) {
        margin: auto;
        width: 80%;
            p{
                text-align: justify;
            }
            h1{
                line-height:1em;
            } 
        }
        @media (max-width: 375px) {
            p{
                font-size: 1.2em;
                font-weight: 700;
            }
            h1{
                font-size:1.5em;
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
        width:300px;
        height:300px;
    }
    @media (max-width: 768px) {    
        margin:0; 
        justify-content: right;
        align-items: center;
        img{
            display:none
        }
    }
`
export const InstagramContainer = styled.div`
    display:flex;
    flex-direction: column;
    a{ 
        text-decoration: none;
        color: #f4bd0b;
    &:hover{
        text-shadow:0px 1px 2px white;
        font-size: 1.5;
    }
}
`