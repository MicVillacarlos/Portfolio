import { Container, BioTextContainer, BioImage, Instagram, InstagramContainer, Slider,SliderTrack, ImageContainer, SliderSection} from './style'
import BioPic from '../../assets/aboutpic.png'
import curve from '../../assets/curve_line.svg'

export const Bio = () =>{
    return(
        <div>
        <Container>
            <BioTextContainer >
            <h1 data-aos="fade-right" data-aos-duration="1000">He makes Websites 😁</h1> <br/>
                <p  data-aos="fade-right" data-aos-duration="3000">
                    Mic is trying his best to keep his life together 🤞🤔, that's why he is always on his laptop, practicing his skills in coding and design.
                    <br/>
                    Career shifting from the Aviation Industry to Tech, he found his passion for coding because he loves solving problems and building stuff.
                    </p>
                    <br/><br/>
                    <InstagramContainer data-aos="fade-right" data-aos-duration="3000">
                        <p>Follow his Tech journey in</p>
                            <Instagram>
                                <p><a href='https://www.instagram.com/micodes/' target="_blank" rel="noopener noreferrer">Instagram</a> 👈</p>
                            </Instagram>
                    </InstagramContainer>
            </BioTextContainer>
            <BioImage>
                <img data-aos="fade-left" data-aos-duration="9000" src={BioPic} alt="BioImage" />
            </BioImage>
        </Container>
            <SliderSection>
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
            </SliderSection>
        </div>
    )
} 