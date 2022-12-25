import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content:center;
  display: flex;
  gap: 5em;
  height: auto;
  margin-bottom: 5em;
  padding-left: 8em;
  padding-right: 8em;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 3em;
    margin-bottom: 0;
  }
  @media (max-width: 375px) {
    padding: 1em;
  }
`;

export const Margin2 = styled.div`
  margin: 2em;
`;

export const WorkExperienceText = styled.div`
  h3 {
    color: #f4bd0b;
    line-height: 1.2em;
    font-family: "Gruppo", cursive;
  }
  p {
    color: #f4bd0b;
    line-height: 1.2em;
    font-family: "Gruppo", cursive;
    font-size: 0.9em;
  }
  h2 {
    color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #f4bd0b;
    font-family: "Syncopate", sans-serif;
  }
  @media (max-width: 768px) {
    margin: auto;
    width: 80%;
    p {
      text-align: justify;
    }
    h2 {
      line-height: 1em;
    }
  }
  @media (max-width: 375px) {
    p {
      font-size: 1.2em;
      font-weight: 700;
    }
    h2 {
      font-size: 1.5em;
    }
  }
  &:hover {
    a {
      text-shadow: 0px 1px 2px white;
      transform: translateY(-30%);
      text-shadow: 0px 2px 5px white;
    }
  }
`;

export const WorkExperienceImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;

  img {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 768px) {
    margin: 0;
    justify-content: right;
    align-items: center;
    img {
      display: none;
    }
  }
`;
