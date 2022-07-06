import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ theme, align }) => css`
  ${align === "right"
    ? `
 ${theme.breakpoints.up("md")} {
    text-align: start;
    justify-content: start;
  }

 ${theme.breakpoints.between("md", "xl")} {
          margin-left: -40px;
    }
  `
    : `
 ${theme.breakpoints.up("md")} {
    text-align: end;
    justify-content: end;
  }

  ${theme.breakpoints.between("md", "xl")} {
          margin-right: -40px;
    }
  `}
`;

const BenefitsListItem = styled.div`
  display: grid;
  align-items: center;
  align-content: flex-start;
  grid-row-gap: 12px;
  grid-column-gap: 5px;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    min-height: 235px;
    max-height: 235px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    max-height: 335px;
    max-width: 418px;
  }

  ${dynamicStyles}
`;

export default BenefitsListItem;
