import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:80vh;

    @media (max-width: 375px) {
        display:none;
    }
`

export const Subcontainer = styled.div`
    height:45vh;
    padding-left: 2em;
    padding-right: 2em;
    text-align: center;
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
`
export const StackContainer = styled.div`
    display: flex;
    flex-wrap: wrap ;
    justify-content: center;
    align-items: center;
    gap:2em;
    margin:0;
    
    @media (max-width: 768px) {
        gap: 1em;
    }
`

export const CircleLogo = styled.div`
    font-family: 'Gruppo', cursive;
    color: #f4bd0b;
    margin: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    

    img{
        width:4.5em;
    }
    @media (max-width: 768px) {  
        img{
            width:3.5em;
            padding:0;
        }
        p{
            font-size: 1em;
        }
    }
    @media (max-width: 425px) { 
        img{
            width:3em;
        }
        p{
            font-size: 0.5em;
        }
    }

`
export const ClickHere = styled.div`
    font-family: 'Gruppo', cursive;
    text-align: center;
    color: #f4bd0b;
`