import { Container,ContainerNavItems,NavbarItem, LogoPic }
from './style';
import logoPic from '../../assets/logopic.png';
import { Link } from 'react-scroll'

export const Navbar= () => {
    return(
        <Container>
            <LogoPic>
                <img src={logoPic} alt="logo pic"/>
            </LogoPic>
            <ContainerNavItems>
                <NavbarItem>
                    <Link to='about' spy={true} smooth={true} duration={800}>
                        ABOUT
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to='works' spy={true} smooth={true} duration={800}>
                        WORKS
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to='contact' spy={true} smooth={true} duration={800}>
                        CONTACT
                    </Link>
                </NavbarItem>
            </ContainerNavItems>
        </Container>
    )
}


