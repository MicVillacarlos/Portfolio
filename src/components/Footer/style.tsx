import styled from "styled-components";

export const Container = styled.div`
    margin: 0 0 -2em 0;
    padding-left:2em;
    padding-right:2em;
    background-color:${(props)=>props.theme.color.primary};
    display:flex;
    align-items:center;
    justify-content: space-around;
    height: 2em;

    a{
        text-decoration: none;
        color: ${(props)=>props.theme.color.secondary};
        background-color: ${(props)=>props.theme.color.primary};
        font-weight: 900;
        font-size:1.2em;
        font-family: ${(props)=>props.theme.font.secondary};
        :hover{
            color:white;
        }
        :active{
            color: ${(props)=>props.theme.color.primary};
        }
    }
    p{
        font-weight: 500;
        font-size:0.8em;
        color: ${(props)=>props.theme.color.secondary};
        background-color: ${(props)=>props.theme.color.primary};
        font-family: ${(props)=>props.theme.font.secondary};
    }

    @media (max-width:768px) {
        flex-wrap:wrap;
        font-size: 0.7em;
    }


`