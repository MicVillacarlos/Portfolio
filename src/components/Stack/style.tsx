import styled from "styled-components";

export const Container = styled.div`
    height:80vh;
    padding-left: 2em;
    padding-right: 2em;
    text-align: right;

    h1{
        color:transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #f4bd0b;
        font-family: 'Syncopate',
         sans-serif;
    }
    &:hover{
        h1{
            color:#f4bd0b;;
        }
    }
`
export const StackContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:2em;
`

export const CircleLogo = styled.div`
    font-family: 'Syncopate', sans-serif;
    border-radius: 100%;
    margin:2em;
    width: 8em;
    height: 8em;
    background-color: #f4bd0b;

    display: flex;
    justify-content: center;
    align-items: center;
`