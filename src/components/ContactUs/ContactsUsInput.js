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

      &:before {
        cursor: pointer;
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background-color: ${theme.palette.primary.contrastText};
        border: 1px solid ${theme.palette.primary.main};
        border-radius: 3px;
        position: absolute;
        transition: background 0.1s linear, border 0.1s linear;
        top: -7px;
        left: 0px;
      }

      &:checked {
          &:before {
            content: "";
            background-color: ${theme.palette.primary.main};
            background-image: url(/uploads/custom-checkbox.svg);
            background-repeat:  no-repeat;
            background-size: 21px 23px;

            svg path {
              fill: ${theme.palette.primary.contrastText};
            }
          }
        }
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

  &:disabled {
    background-color: #eeeeee;
  }

  &:valid {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 0px 10px rgba(125, 190, 59, 0.1);
  }

  &:invalid {
    border: 1px solid #f40808;
    box-shadow: 0px 0px 10px rgba(244, 8, 8, 0.1);
  }

  ${dynamicStyle};
`;

const ContactsUsInput = ({ placeholder, type, variant, name, ...props }) => (
  <StyledContactsUsInput
    placeholder={placeholder}
    type={type}
    {...props}
    required
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
