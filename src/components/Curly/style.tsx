import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Slider = styled.div`
  height: 200px;
  width: 80vw;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: transparent;
  position: relative;

  @media (max-width: 425px) {
    height: 150px;
  }
  @media (max-width: 320px) {
    height: 100px;
  }
`;

export const scroll = keyframes`
    0%{transform: translateX(0)}
    100%{transform: translateX(-10vw)}
`;
export const ImageContainer = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  width: 20vw;
  img {
    width: 100%;
  }
`;

export const SliderTrack = styled.div`
  display: flex;
  align-items: center;
  width: calc(1000px * 4);
  background-color: transparent;
  animation: ${scroll} 5s linear infinite;
`;
