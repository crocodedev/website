import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "./Link";

const dynamicStyle = ({ theme, variant, active }) => css`
  ${variant === "outlined"
    ? `
    ${
      active
        ? `
    color: ${theme.palette.primary.contrastText};
    background-color: ${theme.palette.primary.main};
    pointer-events: none;
    `
        : `
    color: ${theme.palette.primary.main};
    border: 1px solid ${theme.palette.primary.main};
    `
    }
    font-weight: ${theme.typography.fontWeight.bold};
    padding: 12px 25px;
    display: block;

    &:hover {
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.primary.main};
    }
  `
    : ""}

  ${variant === "contained"
    ? `
    color: ${theme.palette.primary.contrastText};
    background-color: ${theme.palette.primary.main};
    font-weight: ${theme.typography.fontWeight.bold};
    padding: 12px 25px;
    display: block;

    &:hover {
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.secondary.dark};
    }
  `
    : ""}

  ${variant === "text"
    ? `
    color: ${theme.palette.primary.main};
    font-weight: ${theme.typography.fontWeight.medium};
    padding: 12px 0;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      color: ${theme.palette.secondary.dark};

      & span {
        &::before{
          background-color: ${theme.palette.secondary.dark};
        }

        &::after {
          border-left-color: ${theme.palette.secondary.dark};
          border-top-color: ${theme.palette.secondary.dark};
        }
      }
    }

    & span {
      width: 20px;
      height: 10px;
      display: flex;
      align-items: center;
      position: relative;

      &::before,
      &::after {
        position: absolute;
        display: block;
        content: "";
      }

      &:before {
        width: 20px;
        height: 2px;
        background-color: ${theme.palette.primary.main};
        border-radius: 3px;
      }
      &:after {
        width: 10px;
        height: 10px;
        right: 0;
        transform: rotate(135deg);
        border-left: 2px solid ${theme.palette.primary.main};
        border-top: 2px solid ${theme.palette.primary.main};
        border-radius: 2px;
      }
    }
  `
    : ""}
`;

const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.typography.fontSize.captionText}px;
  border-radius: ${({ theme }) => theme.borderRadius.button};
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;

  ${dynamicStyle}
`;

const Button = ({ variant, handler, to, children, ...props }) =>
  to ? (
    <Link to={to} {...props}>
      <StyledButton as="a" variant={variant}>
        {children}
        {variant === "text" && <span />}
      </StyledButton>
    </Link>
  ) : (
    <StyledButton variant={variant} onClick={handler} {...props}>
      {children}
      {variant === "text" && <span />}
    </StyledButton>
  );

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handler: PropTypes.func,
  to: PropTypes.string,
};

Button.defaultProps = {
  handler: null,
  to: null,
};

export default Button;
