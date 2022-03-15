import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap ;
    justify-content: center;
    align-items: center;
    height:80vh;
`

export const Subcontainer = styled.div`
    height:45vh;
    padding-left: 2em;
    padding-right: 2em;
    text-align: center;
    margin:0;
    h2{
        color:transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #f4bd0b;
        font-family: 'Syncopate',
         sans-serif;
    }
    &:hover{
        h2{
            color:#f4bd0b;
        }
    }
    @media (max-width:320px) {  
        margin-top: 3em;
    }
`
export const StackContainer = styled.div`
    display: flex;
    flex-wrap: wrap ;
    justify-content: center;
    align-items: center;
    gap:2em;
    margin:0;
    @media (max-width:768px) {
        gap: 5px;
    }
`

export const CircleLogo = styled.div`
    font-family: 'Gruppo', cursive;
    margin:1.5em;
    color: #f4bd0b;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width:4.5em;
    }
    @media (max-width:768px) {  
        img{
            width:3em;
            padding:0;
        }
        p{
            font-size: 1em;
        }
    }
    @media (max-width:500px) { 
        img{
            width:3em;
        }
        p{
            font-size: 0.5em;
        }
    }
    @media (max-width:330px) {  
        img{
            width:1.5em;
        }
        p{
            font-size: 0.8em;
        }
    }

`
export const ClickHere = styled.div`
    font-family: 'Gruppo', cursive;
    text-align: center;
    color: #f4bd0b;
`