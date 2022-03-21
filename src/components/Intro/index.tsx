import { Container,H1Container } from './style';
import HandGif from '../../assets/hand_intro.gif';
import ShoesGif from '../../assets/shoes.gif';
import { useState } from "react";
import { Curly } from '../Curly'

export const Intro = () =>{
const [isHand, setIsHand] = useState(true)

const introClick = ()=>{
    !isHand ? setIsHand(true): setIsHand(false)
}

    return(
        <div>
            <Container data-aos="fade-up" data-aos-duration="2000">
                <div>
                    <button onClick={introClick}>
                        {isHand ? 
                            <img src={HandGif} alt="waving-hand-gif"/>  : 
                            <img src={ShoesGif} alt="waving-shoes-gif"/>
                        }
                    </button>
                </div>
                <H1Container>
                    <h1>
                        HellO,<br/> NICE TO MEET YOU<br/> 
                    </h1>
                </H1Container>
            </Container>
            <Curly/>
        </div>
            
    )
}