import styled from "styled-components";

export const AStyled = styled.a`
  text-decoration: none;
  font-family: ${(props) => props.theme.font.primary};
  color: inherit;
`;

export const Container = styled.div`
  border: 1px solid;
  border-radius: 10px;
  color: #f4bd0b;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  padding: 2em;
  margin-left: 9em;
  margin-right: 9em;

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
`;

export const H2 = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #f4bd0b;
  margin: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${(props) => props.theme.color.primary};
  }
`;
