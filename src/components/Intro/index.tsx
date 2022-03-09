import { Container, ContainerSlide} from './style'
import introGif from '../../assets/hand_intro.gif'
import introCurly from './assets/introcurly.png'

export const Intro = () =>{
    return(
        <Container>
            <div data-aos="fade-up" data-aos-duration="2000">
              <img src={introGif} alt="waving-hand-gif" /> 
            </div>
            <ContainerSlide>
                {/* <img src={props.introCurly} alt="intro" /> */}
            </ContainerSlide>
        </Container>
    )
}