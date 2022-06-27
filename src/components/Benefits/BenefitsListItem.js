import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ align }) => css`
  ${align === "right"
    ? `
    text-align: start;
  justify-content: start;

  `
    : `
    text-align: end;
  justify-content: end;
  `}
`;

const BenefitsListItem = styled.div`
  display: grid;
  align-items: center;
  align-content: flex-start;
  max-width: 418px;
  grid-row-gap: 12px;
  grid-column-gap: 5px;
  max-height: 335px;
  overflow: hidden;

  ${dynamicStyles}
`;

export default BenefitsListItem;
