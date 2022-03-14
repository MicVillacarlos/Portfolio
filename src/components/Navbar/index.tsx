import { Container,ContainerNavItems,NavbarItem, LogoPic }
from './style';
import logoPic from '../../assets/logopic.png';

export const Navbar= () => {
    return(
        <Container>
            <LogoPic>
                 <img src={logoPic} alt="logo pic"/>
            </LogoPic>
            <ContainerNavItems>
                    <NavbarItem>WORKS</NavbarItem>
                    <NavbarItem>CONTACT</NavbarItem>
            </ContainerNavItems>
        </Container>
    )
}

// font-family: 'Gruppo', cursive;
// font-family: 'Syncopate', sans-serif;