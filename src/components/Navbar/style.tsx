import styled from "styled-components";

export const Container = styled.div`
    padding: 2em;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
export const ContainerNavItems = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 2em;
    @media (max-width: 380px){
        display:block
    }
    transition: transform 1s;

`
export const NavbarItem = styled.p`
    font-family: 'Gruppo', cursive;
    color: #f4bd0b;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    transition: transform 1s;
    &:hover{
        text-shadow:0px 1px 2px white;
        transform: translateY(40%);
    }
`

export const LogoPic = styled.div`
    
    img{
        width: 50px;
    }
`