import { Container,ContainerNavItems,NavbarItem, LogoPic }
from './style';
import logoPic from '../../assets/logopic.png';
import  { Link }  from "react-router-dom"


export const Navbar= () => {
    return(
        <Container>
            <LogoPic>
                <Link to='/'>
                    <img src={logoPic} alt="logo pic"/> 
                </Link>
            </LogoPic>
            <ContainerNavItems>
                <NavbarItem>
                    <Link to='/works'><a>WORKS</a></Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to='/'><a>CONTACT</a></Link> 
                </NavbarItem>
            </ContainerNavItems>
        </Container>
    )
}

// font-family: 'Gruppo', cursive;
// font-family: 'Syncopate', sans-serif;