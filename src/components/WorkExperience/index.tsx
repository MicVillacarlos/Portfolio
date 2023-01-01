import * as S from "./style";
import KuhlWebsite from "../../assets/KuhlWebsite.png";

export const WorkExperience = () => {
  return (
    <S.WorkExperienceContainer data-aos="fade-up-right">
      <S.H2>
        <h2> Work Projects</h2>
      </S.H2>
      <S.AStyled href="https://simulation.kuhl-japan.com/">
        <S.CardContainer>
          <S.TextContainer>
            <h4> Kuhl-Japan - ・KUHL Simulation・</h4>
            <p>( Junior Frontend Web-Developer )</p>
            <br />
            <p>
              A website where customers <br /> can order car parts and cars
              online.
            </p>
          </S.TextContainer>
          <S.StyledImage src={KuhlWebsite} alt="WebsiteJpeg" />
        </S.CardContainer>
      </S.AStyled>
    </S.WorkExperienceContainer>
  );
};
