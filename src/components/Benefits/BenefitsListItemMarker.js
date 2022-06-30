import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ align }) => css`
  ${align === "left"
    ? `
      grid-area: 1 / 2 / 2 / 2;
    
      &::before {
        right: 0;
      }
  `
    : `
      grid-area: 1 / 1 / 2 / 2;

      &::before {
        left: 0;        
      }
  `}
`;

const BenefitsListItemMarker = styled.span`
  position: relative;
  width: 80px;
  height: 16px;
  display: flex;
  align-items: center;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  &::before {
    width: 16px;
    height: 16px;
    border-radius: ${({ theme }) => theme.borderRadius.circle};
  }

  &::after {
    width: 80px;
    height: 4px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }

  ${dynamicStyles}
`;

export default BenefitsListItemMarker;
