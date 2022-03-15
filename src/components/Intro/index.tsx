import { Container, Slider, SliderTrack, ImageContainer } from './style';
import HandGif from '../../assets/hand_intro.gif';
import ShoesGif from '../../assets/shoes.gif';
import curve from '../../assets/curve_line.svg';
import { useState } from "react";

export const Intro = () =>{
const [isHand, setIsHand] = useState(true)

const introClick = ()=>{
    !isHand ? setIsHand(true): setIsHand(false)
}

    return(
            <Container>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <button onClick={introClick}>
                        {isHand ? 
                            <img src={HandGif} alt="waving-hand-gif" />  : 
                            <img src={ShoesGif} alt="waving-shoes-gif" />
                        }
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