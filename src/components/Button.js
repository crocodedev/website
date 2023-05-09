import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Link from "./Link";

const dynamicStyle = ({ theme, variant, active, disablepointerevents }) => css`
  ${variant === "outlined"
    ? `
    ${
      active
        ? `
    color: ${theme.palette.primary.contrastText};
    background-color: ${theme.palette.primary.main};
    border: 1px solid ${theme.palette.primary.main};
    ${!disablepointerevents ? "pointer-events: none" : ""};
    `
        : `
    color: ${theme.palette.primary.main};
    `
    }
    font-weight: ${theme.typography.fontWeight.bold};
    padding: 12px 25px;
    display: block;
    border: 1px solid ${theme.palette.primary.main};

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
  transition: background-color 0.3s;
  outline: none;

  ${dynamicStyle}
`;

const Button = ({
  variant,
  handler,
  link,
  baseUrl,
  active,
  disablePointerEvents,
  children,
  ...props
}) =>
  link ? (
    <Link baseUrl={baseUrl} {...link} {...props}>
      <StyledButton
        as="span"
        disablepointerevents={disablePointerEvents}
        active={active}
        variant={variant}
      >
        {children}
        {variant === ("text" || "backUp") && <span />}
      </StyledButton>
    </Link>
  ) : (
    <StyledButton
      variant={variant}
      disablepointerevents={disablePointerEvents}
      active={active}
      onClick={handler}
      {...props}
    >
      {children}
      {variant === "text" && <span />}
    </StyledButton>
  );

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
  active: PropTypes.bool,
  handler: PropTypes.func,
  disablePointerEvents: PropTypes.bool,
  link: PropTypes.object,
};

Button.defaultProps = {
  handler: null,
  active: false,
  baseUrl: null,
  disablePointerEvents: false,
  link: null,
};

export default Button;
