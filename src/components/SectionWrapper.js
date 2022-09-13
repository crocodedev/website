import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ theme, bgColor, sectionGap, disablePaddings }) => css`
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

  ${disablePaddings
    ? ""
    : `
      ${theme.breakpoints.down("md")} {
        padding-top: 70px;
        padding-bottom: 70px;
      }
    
      ${theme.breakpoints.between("md", "xl")} {
        padding-top: 80px;
        padding-bottom: 80px;
      }
    
      ${theme.breakpoints.up("xl")} {
        padding-top: 110px;
        padding-bottom: 100px;
      }
    `}
`;

const SectionWrapper = styled.section`
  width: 100%;
  ${dynamicStyle}
`;

export default SectionWrapper;
