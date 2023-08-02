import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ theme, align }) => css`
  ${align === "left"
    ? `

    ${theme.breakpoints.down("md")}{
      grid-area: 1 / 1 / 2 / 2;

      &::before {
        left: 0;
      }
    }

    ${theme.breakpoints.up("md")}{
      grid-area: 1 / 2 / 2 / 2;

      &::before {
        right: 0;
      }
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
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;
  height: 100%;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  &::before {
    border-radius: ${({ theme }) => theme.borderRadius.circle};
  }

  &::after {
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 40px;

    &::before {
      width: 10px;
      height: 10px;
    }

    &::after {
      width: 40px;
      height: 2px;
    }
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 80px;

    &::before {
      width: 16px;
      height: 16px;
    }

    &::after {
      width: 80px;
      height: 4px;
    }
  }

  ${dynamicStyles}
`;

export default BenefitsListItemMarker;
