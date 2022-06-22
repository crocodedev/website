import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ theme, color, fontWeight, fontSize, lineHeight, textAlign }) => css`
  color: ${color === "white" ? theme.palette.text.secondary : theme.palette.text.primary};
  text-align: ${textAlign || "unset"};
`;

const Text = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.fontSize.subtitle * 0.5};
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.fontSize.subtitle};
  }

  ${dynamicStyles}
`;

export default Text;
