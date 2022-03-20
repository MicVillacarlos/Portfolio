import { Container, BioTextContainer, BioImage, InstagramContainer} from './style'
import BioPic from '../../assets/aboutpic.png'
// import { Curly } from '../Curly'

export const Bio = () =>{
    return(
        <div id='about'>
        <Container>
            <BioTextContainer >
            <h1 data-aos="fade-right" data-aos-duration="1000">Michael Villacarlos makes Websites</h1> <br/>
            <p  data-aos="fade-right" data-aos-duration="3000">
            Mic is trying his best to keep his life together 🤞🤔. That's why he is always on his laptop, practicing his skills in coding and design. 
            <br/>
            With that said, he consistently aims to achieve the best and most efficient result on each project that he tackles. 
            </p>
            <br/>
            <InstagramContainer data-aos="fade-right" data-aos-duration="3000">
                <p>To know him more, you can follow his Tech journey in <a href='https://www.instagram.com/micodes/' target="_blank" rel="noopener noreferrer">Instagram</a> 👈</p>
            </InstagramContainer>
            </BioTextContainer>
            <BioImage>
                <img data-aos="fade-left" data-aos-duration="9000" src={BioPic} alt="BioImage" />
            </BioImage>
        </Container>
        {/* <Curly/> */}
        </div>
    )
} 