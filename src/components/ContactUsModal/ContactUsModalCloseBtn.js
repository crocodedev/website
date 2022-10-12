import styled from "@emotion/styled";
import React from "react";

const ContactUsModalCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  & span {
    position: relative;
    display: flex;
    align-items: end;
    width: 48px;
    height: 48px;
    cursor: pointer;

    &:before, &:after {
      position: absolute;
      left: 15px;
      content: "";
      height: 24px;
      width: 3px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.palette.text.primary};
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
`;

export default ContactUsModalCloseBtn;
