import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    margin: auto;
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
        height:80vh;
        img{
            width: 320px;
        }
    }
    @media (max-width: 425px){
        height:100vh;
        img{
            width: 280px;
        }
        height:80vh;        
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
