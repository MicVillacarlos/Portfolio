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
                    <a href="https://drive.google.com/file/d/1AhkDkKepp01c523xG64ywyXTgdhyj-bX/view?usp=sharing" target="_blank" rel="noreferrer"> 
                    RESUME 
                    </a>
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


