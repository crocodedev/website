import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ theme, variant }) => css`
  ${variant === "text"
    ? `
    width: 100%;
    display: flex;
    padding: 10px 15px;
    align-items: flex-start;
    box-shadow: ${theme.shadows.card};
    border-radius: ${theme.borderRadius.small};
  `
    : ""}
  ${variant === "checkbox"
    ? `
      position: relative;
      margin-right: 21px;

      & ~ span {
        position: absolute;
        content: "";
        display: block;
        cursor: pointer;
        width: 24px;
        height: 24px;
        background-color: ${theme.palette.primary.contrastText};
        border: 1px solid ${theme.palette.primary.main};
        border-radius: 3px;
        transition: background 0.1s linear, border 0.1s linear;
        top: 0px;
        left: 0px;
      }

      &:checked {
        & ~ span {
        background-color: ${theme.palette.primary.main}
        }

        & ~ span:before,
        & ~ span:after {
          content: "";
          position: absolute;
          background-color: ${theme.palette.primary.contrastText};
          border-radius: 10px;
        }

        & ~ span:before {
          width: 16px;
          height: 3px;
          transform: rotate(-45deg);
          transform: rotate(-54deg);
          top: 9px;
          left: 6px;
        }

        & ~ span:after {
          width: 10px;
          height: 3px;
          transform: rotate(50deg);
          top: 12px;
          left: 2px;
        }
  `
    : ""}

  ${variant === "file"
    ? `
      position: absolute;
      opacity: 0;
      top: 15px;
      z-index: -1;
      right: 0;
  `
    : ""}
`;

const StyledContactsUsInput = styled.input`
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.typography.lineHeight.md};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};

  &:focus-visible {
    outline: none;
  }

  &.invalid {
    border: 1px solid #f40808;
    box-shadow: 0px 0px 10px rgba(244, 8, 8, 0.1);
  }

  &.valid {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 0px 10px rgba(125, 190, 59, 0.1);
  }

  ${dynamicStyle};
`;

const ContactsUsInput = ({ placeholder, type, variant, name, ...props }) => (
  <StyledContactsUsInput
    {...props}
    placeholder={placeholder}
    type={type}
    variant={variant}
    name={name}
  />
);

ContactsUsInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  name: PropTypes.string,
};

ContactsUsInput.defaultProps = {
  placeholder: "",
  type: "text",
  variant: "text",
  name: "",
};

export default ContactsUsInput;
