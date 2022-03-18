import { Container, StackContainer,CircleLogo,LogosContainer} from './style'
import mongo from '../../assets/mongoDb.svg'
import express from '../../assets/express.svg'
import react from '../../assets/react.svg'
import node from '../../assets/node_js.svg'
import photoshop from '../../assets/photoshop.svg'
import illustrator from '../../assets/illustrator.svg'

export const Stack = () =>{
    return(
        <Container>
            <StackContainer  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="500">
                <h2>Tech Stack</h2>
                <LogosContainer>
                    <CircleLogo>
                        <img src={mongo} alt='mongoDb'/>
                        <p>MongoDB</p>
                    </CircleLogo>
                    <CircleLogo>
                        <img src={express} alt='express'/> <p>Express</p> 
                    </CircleLogo>
                    <CircleLogo>
                        <img src={react} alt='React' /> <p>React</p>
                    </CircleLogo>
                    <CircleLogo>
                        <img src={node} alt='NodeJs'/> <p>NodeJs</p>
                    </CircleLogo>
                </LogosContainer>
            </StackContainer>
            <StackContainer  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="500">
                <h2>Other Skills</h2>
                 <LogosContainer>
                    <CircleLogo>
                        <img src={photoshop} alt='photoshop'/> <p>Photoshop</p>
                    </CircleLogo>
                    <CircleLogo>
                        <img src={illustrator} alt='illustrator' /> <p>Illustrator</p> 
                    </CircleLogo>
                </LogosContainer>
            </StackContainer>
        </Container>
    )
}