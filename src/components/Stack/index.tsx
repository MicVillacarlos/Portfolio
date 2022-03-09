import { Container, StackContainer,CircleLogo} from './style'


export const Stack = () =>{
    return(
        <Container>
            <h1 data-aos="fade-left" data-aos-duration="1000">Stack</h1>
            <StackContainer>
                <CircleLogo data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1000" >M</CircleLogo>
                <CircleLogo data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1500">E</CircleLogo>
                <CircleLogo data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="2000">R</CircleLogo>
                <CircleLogo data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="2500">N</CircleLogo>
            </StackContainer>
        </Container>
    )
}