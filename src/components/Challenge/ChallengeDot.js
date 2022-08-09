import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicStyle = ({ align, theme }) => css`
  ${align === "left"
    ? `
    ${theme.breakpoints.down("sm")} {
      top: 10%;
      left: 13%;
    }

    ${theme.breakpoints.between("sm", "md")} {
      top: 13px;
      left: 52px;
    }

    ${theme.breakpoints.between("md", "lg")} {
      top: 27px;
      left: 90px;
    }

    ${theme.breakpoints.between("lg", "xl")} {
      top: 39px;
      left: 123px;
    }

    ${theme.breakpoints.between("xl", "2xl")} {
      top: 64px;
      left: 165px;
    }

    ${theme.breakpoints.up("2xl")} {
    top: 64px;
    left: 170px;
    }
  `
    : ""}
  ${align === "right"
    ? `
    ${theme.breakpoints.down("sm")} {
      top: 12%;
      right: 8%;
    }

    ${theme.breakpoints.between("sm", "md")} {
      top: 19px;
      right: 30px;
    }

    ${theme.breakpoints.between("md", "lg")} {
      top: 34px;
      right: 51px;
    }

    ${theme.breakpoints.between("lg", "xl")} {
      top: 50px;
      right:93px;
    }

    ${theme.breakpoints.up("xl")} {
      top: 68px;
      right:93px;
    }
  `
    : ""}
  ${align === "center"
    ? `
    ${theme.breakpoints.down("sm")} {
      bottom: 31%;
      right: 31%;
    }

    ${theme.breakpoints.between("sm", "md")} {
      bottom: 60px;
      right: 136px;
    }

    ${theme.breakpoints.between("md", "lg")} {
      bottom: 101px;
      right: 228px;
    }

    ${theme.breakpoints.between("lg", "xl")} {
      bottom: 140px;
      right: 300px;
    }

    ${theme.breakpoints.between("xl", "2xl")} {
      bottom: 189px;
      right: 397px;
    }

    ${theme.breakpoints.up("2xl")} {
      bottom: 189px;
      right:408px;
    }
  `
    : ""}
`;

const ChallengeDot = styled.span`
  border-radius: 50%;
  width: 27px;
  height: 27px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  z-index: 1;

  &:hover {
    & div {
      display: flex;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 14px;
    height: 14px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    width: 20px;
    height: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 27px;
    height: 27px;
  }

  &:after {
    display: flex;
    border-radius: 50%;
    content: "";
    background-color: ${({ theme }) => theme.palette.primary.main};
    width: 13px;
    height: 13px;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: 7px;
      height: 7px;
      right: 6px;
    }

    ${({ theme }) => theme.breakpoints.between("sm", "md")} {
      width: 10px;
      height: 10px;
      right: 6px;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 13px;
      height: 13px;
      right: 6px;
    }
  }

  ${dynamicStyle}
`;

export default ChallengeDot;
