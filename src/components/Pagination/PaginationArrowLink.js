import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "../Link";

const dynamicStyles = ({ theme, align, disabled }) => css`
  &::after {
    ${align === "left"
      ? `
    transform: rotate(-45deg);
    left: 13px;
`
      : `
    transform: rotate(135deg);
    right: 13px;
`}
  }

  ${disabled
    ? `
    pointer-events: none;

  &::before {
    width: 38px;
    height: 2px;
    background-color: ${theme.palette.text.disabled};
  }

  &::after {
    width: 10px;
    height: 10px;
    border-left: 2px solid ${theme.palette.text.disabled};
    border-top: 2px solid ${theme.palette.text.disabled};
  }
  `
    : `
    &::before {
    background-color: ${theme.palette.primary.main};
  }

  &::after {
    border-left: 2px solid ${theme.palette.primary.main};
    border-top: 2px solid ${theme.palette.primary.main};
  }
  `}
`;

const PaginationArrowLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: "";
  }

  &::before {
    width: 38px;
    height: 2px;
  }

  &::after {
    width: 10px;
    height: 10px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 42px;
    height: 42px;
    padding: 21px 11px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    width: 55px;
    height: 55px;
    padding: 28px 17px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 62px;
    height: 62px;
    padding: 31px 12px;
  }

  ${dynamicStyles}
`;

export default PaginationArrowLink;
