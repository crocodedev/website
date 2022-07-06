import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Text from "../Text";

const dynamicStyles = ({ theme, align }) => css`
  ${align === "left"
    ? `
    ${theme.breakpoints.down("md")}{
      grid-area: 1 / 2 / 2 / 2;
    }

    ${theme.breakpoints.up("md")}{
        grid-area: 1 / 1 / 2 / 2;
    }
    `
    : `
        grid-area: 1 / 2 / 2 / 2;

    `}
`;

const BenefitsListItemTitle = styled(Text)`
  ${dynamicStyles}
`;

export default BenefitsListItemTitle;
