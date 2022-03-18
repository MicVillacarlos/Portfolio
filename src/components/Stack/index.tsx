import { Container,Subcontainer, StackContainer,CircleLogo} from './style'
import mongo from '../../assets/mongoDb.svg'
import express from '../../assets/express.svg'
import react from '../../assets/react.svg'
import node from '../../assets/node_js.svg'
import photoshop from '../../assets/photoshop.svg'
import illustrator from '../../assets/illustrator.svg'
import { Curly } from '../Curly'

export const Stack = () =>{
    return(
        <Container>
            <Curly/>
        <Subcontainer>
            <h2 data-aos="fade-left" data-aos-duration="1000">Tech Stack</h2>
            <StackContainer  data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="500">
                <CircleLogo>
                    <img src={mongo} alt='mongoDb'/> <p>MongoDB</p>
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
            </StackContainer>
             <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1000">Other Skills</h2>
                <StackContainer>
                    <CircleLogo data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1300">
                        <img src={photoshop} alt='photoshop'/> <p>Photoshop</p>
                    </CircleLogo>
                    <CircleLogo data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="1300">
                        <img src={illustrator} alt='illustrator' /> <p>Illustrator</p> 
                    </CircleLogo>         
                </StackContainer>
        </Subcontainer>
        </Container>
    )
}