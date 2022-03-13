import { Container, Slider, SliderTrack, ImageContainer } from './style'
import introGif from '../../assets/hand_intro.gif'
import curve from '../../assets/curve_line.svg'


export const Intro = () =>{
    return(
            <Container>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <button>
                        <img src={introGif} alt="waving-hand-gif" /> 
                    </button>
                </div>
                <Slider>
                    <SliderTrack>
                        <ImageContainer>
                            <img src={curve} alt="curve line" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={curve} alt="curve line" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={curve} alt="curve line" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={curve} alt="curve line" />
                        </ImageContainer>
                        <ImageContainer>
                            <img src={curve} alt="curve line" />
                        </ImageContainer>
                    </SliderTrack>
                </Slider>
            </Container>
    )
}