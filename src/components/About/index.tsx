import { Container, AboutTextContainer, AboutImage } from './style'
import aboutPic from '../../assets/aboutpic.png'


export const About = () =>{
    return(
        <Container>
            <AboutTextContainer >
                <h1 data-aos="fade-right" data-aos-duration="2000"> 
                    About 
                </h1>
                <p  data-aos="fade-right" data-aos-duration="3000">
                    MIC is trying his best to keep his life together, that's why he is always on his laptop, practicing his skills in coding and design.
                    <br/>
                    Career shifting from the Aviation Industry to Tech, he found his passion for coding because he loves solving problems and building stuff.
                    <br/><br/>
                    Follow his journey in Tech on <a href='https://www.instagram.com/micodes/' target="_blank">Instagram</a>
                </p>
            </AboutTextContainer>
            <AboutImage>
                <img data-aos="fade-zoom" data-aos-duration="4000" src={aboutPic} alt="aboutImage" />
            </AboutImage>
        </Container>
    )
} 