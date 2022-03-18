import { Container, BioTextContainer, BioImage, Instagram, InstagramContainer} from './style'
import BioPic from '../../assets/aboutpic.png'

export const Bio = () =>{
    return(
        <div id='about'>
        <Container>
            <BioTextContainer >
            <h1 data-aos="fade-right" data-aos-duration="1000">Michael Villacarlos makes Websites</h1> <br/>
                <p  data-aos="fade-right" data-aos-duration="3000">
                    Mic is trying his best to keep his life together 🤞🤔, that's why he is always on his laptop, practicing his skills in coding and design.
                    <br/>
                    Career shifting from the Aviation Industry to Tech, he found his passion for coding because he loves solving problems and building stuff.
                    </p>
                    <br/>
                    <InstagramContainer data-aos="fade-right" data-aos-duration="3000">
                        <p>Follow his Tech journey in</p>
                            <Instagram>
                                <p><a href='https://www.instagram.com/micodes/' target="_blank" rel="noopener noreferrer">Instagram</a> 
                                👈
                                </p>
                            </Instagram>
                    </InstagramContainer>
            </BioTextContainer>
            <BioImage>
                <img data-aos="fade-left" data-aos-duration="9000" src={BioPic} alt="BioImage" />
            </BioImage>
        </Container>
        </div>
    )
} 