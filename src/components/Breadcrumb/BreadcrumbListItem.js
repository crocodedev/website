import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyle = ({ color }) => css`
  ${color === "white"
    ? `
    & a {
      color: ${({ theme }) => theme.palette.primary.contrastText};

      &:after {
        content: "";
        background-image: url(/uploads/breadcrumb-arrow.svg);
      }
    }
  `
    : ""}
  ${color === "gray"
    ? `
    & a {
      color: #989898;

      &:after {
        content: "";
        background-image: url(/uploads/breadcrumb-arrow-gray.svg);
      }
    }
  `
    : ""}
`;

const BreadcrumbListItem = styled.li`
  display: flex;
  position: relative;

  & a {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding: 11px;
    font-size: 12px;

    &:after {
      content: "";
      background-image: url(/uploads/breadcrumb-arrow.svg);
      background-repeat: no-repeat;
      width: 15px;
      height: 8px;
      position: absolute;
      top: 15px;
      margin-left: 8px;
    }
  }

  & p {
    padding: 9px 10px 0px 4px;
    display: block;
    font-size: 12px;
  }

  ${dynamicStyle}
`;

export default BreadcrumbListItem;
