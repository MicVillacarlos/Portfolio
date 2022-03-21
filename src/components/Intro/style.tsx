import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap:3em;
    padding-left:10em;
    padding-right:10em;
    align-items: center;
    justify-content: center;
    height:70vh;
    color: ${(props)=>props.theme.color.primary};
    
    h1{
        color:transparent;
        -webkit-text-stroke-width: 1.5px;
        -webkit-text-stroke-color: #f4bd0b;
        font-family: 'Syncopate',
        sans-serif;
    }

    button{
        border:0px;
        padding:0;
        
        &:hover{
        cursor: pointer;
    }
    }
    img{
        width:350px;
    }
    @media (max-width: 768px){
        height:60vh;
        img{
            width: 320px;
        }
    }
    @media (max-width: 425px){
        height:100vh;
        flex-direction: column;
        height:80vh;   
        img{
            width: 280px;
        } 
        h1{
            display:none;
        }     
    }
    @media (max-width: 375px){
        img{
            width: 230px;
        }
    }
    @media (max-width: 320px){
        img{
            width: 210px;
        }
    }
`

export const H1Container = styled.div`
    color:transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #f4bd0b;
    font-family: 'Syncopate',
    sans-serif;

    display:flex;
    align-items: center;
    justify-content: center;
    width: 500px;

    p{
        color: #f4bd0b;
        font-size:0.8em;
    }
`