import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ theme, color, fontWeight, fontSize, lineHeight, textAlign }) => css`
  color: ${color === "white" ? theme.palette.text.secondary : theme.palette.text.primary};
  text-align: ${textAlign || "unset"};
`;

const Text = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 16px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 20px;
  }

  ${dynamicStyles}
`;

export default Text;
