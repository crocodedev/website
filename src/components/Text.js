import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ theme, color, fontWeight, fontSize, lineHeight, textAlign }) => css`
  color: ${color || theme.palette.text.primary};
  text-align: ${textAlign || "unset"};
  font-size: ${theme.typography.fontSize[fontSize] || theme.typography.fontSize.text}px;
  font-weight: ${theme.typography.fontWeight[fontWeight] || theme.typography.fontWeight.regular};
  line-height: ${theme.typography.lineHeight[lineHeight] || theme.typography.lineHeight.md};
`;

const Text = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};

  ${dynamicStyles}
`;

export default Text;
