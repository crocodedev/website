import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyles = ({ disablePaddingBottom }) => css`
  ${disablePaddingBottom
    ? ""
    : `
      padding-bottom: 78px;
  `}
`;

const BreadcrumbWrapper = styled.nav`
  width: 100%;
  max-width: 1525px;
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
  margin-left: auto;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-top: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding-top: 30px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding-top: 40px;
    ${dynamicStyles}
  }
`;

export default BreadcrumbWrapper;
