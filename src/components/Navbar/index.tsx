import { Container,ContainerNavItems,NavbarItem, LogoPic }
from './style';
import logoPic from '../../assets/logopic.png';

type NavbarProps = {
   logopic: string
}

export const Navbar= () => {
    return(
        <Container>
            <LogoPic>
                 <img src={logoPic} alt="ey"/>
            </LogoPic>
            <ContainerNavItems>
                    <NavbarItem>ABOUT</NavbarItem>
                    <NavbarItem>STACK</NavbarItem>
                    <NavbarItem>CONTACT</NavbarItem>
            </ContainerNavItems>
        </Container>
    )
}

// font-family: 'Gruppo', cursive;
// font-family: 'Syncopate', sans-serif;