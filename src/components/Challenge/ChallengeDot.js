import styled from "@emotion/styled";

const ChallengeDot = styled.div`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;

  &:first-of-type {
    top: 15%;
    left: 13.5%;

    & div {
      left: 0;
    }
  }

  &:nth-of-type(2) {
    top: 56%;
    left: 66%;
  }

  &:nth-of-type(3) {
    top: 16%;
    left: 90.5%;

    & div {
      right: 0;
    }
  }

  & div {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  &:not(:hover) {
    z-index: 1;
  }

  &:hover {
    z-index: 2;
    & div {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 13px;
    height: 13px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    width: 18px;
    height: 18px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 22px;
    height: 22px;
  }

  &:after {
    display: flex;
    border-radius: 50%;
    content: "";
    background-color: ${({ theme }) => theme.palette.primary.main};

    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: 7px;
      height: 7px;
    }

    ${({ theme }) => theme.breakpoints.between("sm", "md")} {
      width: 10px;
      height: 10px;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 14px;
      height: 14px;
    }
  }
`;

export default ChallengeDot;
