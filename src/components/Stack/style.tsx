import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 9em 0 9em;
`
export const StackContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin:3em;
    gap: 2em;

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

export const LogosContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap: 3em;
`

export const CircleLogo = styled.div`
    font-family: 'Gruppo', cursive;
    color: #f4bd0b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width:4.5em;
    }

    p{
        font-size: 1.2em;
    }

    /* @media (max-width: 768px) {  
        img{
            width:3.5em;

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
            font-size: 0.6em;
        }
    } */

`