import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyle = ({ color }) => css`
  ${color === "gray"
    ? `
    & a {
      color: #989898;
    }

    span {
      background-color: #989898;

      &::after {
        border: 1px solid #989898;
        border-bottom: none;
        border-left: none;
      }
    }
  `
    : ""}
`;

const BreadcrumbListItem = styled.li`
  display: flex;
  position: relative;
  align-items: center;

  & a {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding: 11px;
    font-size: 12px;
  }

  & span {
    width: 13px;
    height: 1px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    background-color: ${({ theme }) => theme.palette.primary.contrastText};

    &::after {
      top: 18px;
      right: 0px;
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      transform: rotate(45deg);
      border: 1px solid ${({ theme }) => theme.palette.primary.contrastText};
      border-bottom: none;
      border-left: none;
    }
  }

  & p {
    padding: 10px;
    display: block;
    font-size: 12px;
  }

  ${dynamicStyle}
`;

export default BreadcrumbListItem;
