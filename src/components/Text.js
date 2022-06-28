import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({
  theme,
  color,
  fontWeight,
  fontSize,
  mobileMultiplier,
  lineHeight,
  textAlign,
}) => css`
  color: ${color || theme.palette.text.primary};
  text-align: ${textAlign || "unset"};
  font-weight: ${theme.typography.fontWeight[fontWeight] || theme.typography.fontWeight.regular};
  line-height: ${theme.typography.lineHeight[lineHeight] || theme.typography.lineHeight.md};
  ${mobileMultiplier
    ? `
  ${theme.breakpoints.down("md")} {
    font-size: ${
      theme.typography.fontSize[fontSize] * mobileMultiplier ||
      theme.typography.fontSize.text * mobileMultiplier
    }px;
  }

  ${theme.breakpoints.up("md")} {
    font-size: ${theme.typography.fontSize[fontSize] || theme.typography.fontSize.text}px;
  }
  `
    : `font-size: ${theme.typography.fontSize[fontSize] || theme.typography.fontSize.text}px;`}
`;

const Text = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};

  ${dynamicStyles}
`;

export default Text;
