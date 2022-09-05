import {Slider, SliderTrack, ImageContainer,Container } from './style';
import curve from '../../assets/curve_line.svg'

export const Curly = () => {
  return (
    <div>
        <Container>
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
    </div>
  )
}
