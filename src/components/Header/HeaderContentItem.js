import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "../Link";

const dynamicStyle = ({ active, theme }) => css`
  ${active &&
  `
  border-bottom: 3px solid #4b7223;
  padding-top: 3px;
  pointer-events: none;

  ${theme.breakpoints.down("md")} {
    border-bottom: none;
    padding: 16px;
    color: ${theme.palette.primary.main}
  }

  ${theme.breakpoints.between("md", "xl")} {
    border-bottom: none;
    padding: 20px;
    color: ${theme.palette.primary.main}
  }`}
`;

const HeaderContentItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 16px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    align-self: center;
    height: 100%;
  }

  &:hover {
    border-bottom: 3px solid #4b7223;
    padding-top: 3px;

    ${({ theme }) => theme.breakpoints.down("md")} {
      border-bottom: none;
      padding: 16px;
      color: ${({ theme }) => theme.palette.primary.main};
    }

    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      border-bottom: none;
      padding: 20px;
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  ${dynamicStyle}
`;

export default HeaderContentItem;
