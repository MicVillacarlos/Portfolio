import { Container, BioTextContainer, BioImage, InstagramContainer} from './style'
import BioPic from '../../assets/aboutpic.png'
// import { Curly } from '../Curly'

export const Bio = () =>{
    return(
        <div id='about'>
        <Container>
            <BioTextContainer >
            <h1 data-aos="fade-right" data-aos-duration="1000">I make creative and efficient Websites</h1><br/>
            <p  data-aos="fade-right" data-aos-duration="3000">
            I'm a passionate developer based in Cebu City, Philippines. I love creating and designing innovative solutions to challenging problems. I consistently aim to achieve the best and most efficient result on each project that I tackle.
            <br/><br/>
            Aside from coding, I am also passionate about music. I love creating music with my band 🎹. I also enjoy outdoor activities such as cycling, running and hiking. 
            </p>
            <br/>
            <InstagramContainer data-aos="fade-right" data-aos-duration="3000">
                <p>To know more about me and my journey from the Aviation Industry to Tech, follow me on <a href='https://www.instagram.com/micodes/' target="_blank" rel="noopener noreferrer">Instagram</a> 👈
                </p>
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