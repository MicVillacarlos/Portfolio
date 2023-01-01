import styled from "styled-components";

export const AStyled = styled.a`
  text-decoration: none;
  font-family: ${(props) => props.theme.font.primary};
  color: inherit;
`;

export const WorkExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  border: 1px solid;
  border-radius: 10px;
  color: #f4bd0b;
  display: flex;
  gap: 0.5em;
  padding: 1em;
  justify-content: space-around;
  width: 40%;
  margin: 0 auto;
  p {
    font-family: ${(props) => props.theme.font.secondary};
  }
  h4 {
    font-family: ${(props) => props.theme.font.primary};
  }
  transition: transform 1s;
  &:hover {
    text-shadow: 0px 1px 2px #d2d0c7;
    transform: translateY(-3.5%);
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
    }
    h4 {
      text-align: center;
    }
  }
`;

export const StyledImage = styled.img`
  height: 30%;
  width: 30%;
  border-radius: 5px;
  @media (max-width: 1024px) {
    height: 70%;
    width: 70%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;

export const H2 = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #f4bd0b;
  margin: 2em;
  display: flex;
  justify-content: center;
  :hover {
    color: ${(props) => props.theme.color.primary};
  }
`;
