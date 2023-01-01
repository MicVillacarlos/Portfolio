import styled from "styled-components";

export const Container = styled.div`
    padding: 1em 3em;
    display:flex;
    justify-content: space-between;
    align-items: center;
    ;
    @media (max-width:768px) {
        display:flex;
        flex-direction: column;
        gap:10px;
    }
    ;
`
export const ContainerNavItems = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 2em;
`
export const NavbarItem = styled.p`
    font-family: 'Gruppo', cursive;
    color: ${(props)=>props.theme.color.primary};
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    transition: transform 1s;
    &:hover{
        text-shadow:0px 1px 2px white;
        transform: translateY(-30%);
    }
    a{
        text-decoration: none;
        color: ${(props)=>props.theme.color.primary};
    }
`

export const LogoPic = styled.div`
    img{
        width: 50px;
        :hover{
            cursor: pointer;
        }
    }
`