import styled from "styled-components";

export const Container = styled.div`
    padding: 1em;
    display:flex;
    justify-content: space-between;
    align-items: center;
    overflow:hidden;
    @media (max-width:768px) {
        display:flex;
        flex-direction: column;
        gap:10px;
    }
`
export const ContainerNavItems = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 2em;
`
export const NavbarItem = styled.p`
    font-family: 'Gruppo', cursive;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    a{
        text-decoration:none;
        color: ${(props)=>props.theme.color.primary};
    }
    transition: transform 1s;
    &:hover{
        text-shadow:0px 1px 2px white;
        transform: translateY(-30%);
    }
`

export const LogoPic = styled.div`
    img{
        width: 50px;
    }
`