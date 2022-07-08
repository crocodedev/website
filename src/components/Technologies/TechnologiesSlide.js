import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ active }) => css`
  display: ${active ? "flex" : "none"};
`;

const TechnologiesSlide = styled.div`
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 20px;
    padding: 15px 5px;
  }
  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 40px;
  }
  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 100px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
    padding: 20px;
  }

  ${dynamicStyle}
`;

export default TechnologiesSlide;
