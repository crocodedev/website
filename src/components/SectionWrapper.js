import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ theme, bgColor, sectionGap }) => css`
  background-color: ${bgColor === "dark" ? theme.palette.tertiary.main : ""}
    ${bgColor === "paper" ? theme.palette.background.paper : ""}
    ${!bgColor === "paper" && !bgColor === "dark" ? theme.palette.background.default : ""};

  ${sectionGap
    ? `
    gap: 20px;
    display: flex;
    flex-direction: column;
  `
    : ""}
`;

const SectionWrapper = styled.section`
  padding-top: 110px;
  padding-bottom: 100px;

  ${dynamicStyle}
`;

export default SectionWrapper;
