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
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    padding-top: 110px;
    padding-bottom: 100px;
  }

  ${dynamicStyle}
`;

export default SectionWrapper;
