import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ theme, align, disabled }) => css`
  &::after {
    ${align === "left"
      ? `
    transform: rotate(-45deg);
    ${theme.breakpoints.down("sm")} {
        left: 10px;
      }
       ${theme.breakpoints.between("sm", "md")} {
        left: 17px;
      }
      ${theme.breakpoints.between("md", "xl")} {
        left: 18px;
      }
      ${theme.breakpoints.up("xl")} {
         left: 13px;
      }
`
      : `
    transform: rotate(135deg);
    ${theme.breakpoints.down("sm")} {
        right: 10px;
      }
       ${theme.breakpoints.between("sm", "md")} {
        right: 17px;
      }
      ${theme.breakpoints.between("md", "xl")} {
        right: 18px;
      }
      ${theme.breakpoints.up("xl")} {
         right: 13px;
      }
`}
  }

  ${disabled
    ? `
    pointer-events: none;

  &::before {

    background-color: ${theme.palette.text.disabled};
     ${theme.breakpoints.down("sm")} {
      height: 1px;
    }
      ${theme.breakpoints.down("md")} {
      width: 20px;
      height: 1px;
    }
    ${theme.breakpoints.between("md", "xl")} {
      width: 21px;
    }
    ${theme.breakpoints.up("sm")} {
      height: 2px;
    }
    ${theme.breakpoints.up("xl")} {
      width: 38px;
    }
  }

  &::after {

     ${theme.breakpoints.down("sm")} {
      width: 5px;
      height: 5px;
      border-left: 1px solid ${theme.palette.text.disabled};
      border-top: 1px solid ${theme.palette.text.disabled};
    }
     ${theme.breakpoints.up("sm")} {
      width: 10px;
      height: 10px;
      border-left: 2px solid ${theme.palette.text.disabled};
      border-top: 2px solid ${theme.palette.text.disabled};
    }
  }
  `
    : `
    &::before {
    background-color: ${theme.palette.primary.main};
  }

  &::after {
     ${theme.breakpoints.down("sm")} {
      border-left: 1px solid ${theme.palette.primary.main};
      border-top: 1px solid ${theme.palette.primary.main};
    }
     ${theme.breakpoints.up("sm")} {
      border-left: 2px solid ${theme.palette.primary.main};
      border-top: 2px solid ${theme.palette.primary.main};
    }
  }
  `}
`;

const PaginationArrowLink = styled.button`
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
    ${({ theme }) => theme.breakpoints.down("sm")} {
      height: 1px;
    }
    ${({ theme }) => theme.breakpoints.up("sm")} {
      height: 2px;
    }
    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 20px;
    }
    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      width: 21px;
    }
    ${({ theme }) => theme.breakpoints.up("xl")} {
      width: 38px;
    }
  }

  &::after {
    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: 5px;
      height: 5px;
    }
    ${({ theme }) => theme.breakpoints.up("sm")} {
      width: 10px;
      height: 10px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 42px;
    height: 42px;
    padding: 21px 11px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "xl")} {
    width: 55px;
    height: 55px;
    padding: 28px 17px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    width: 62px;
    height: 62px;
    padding: 31px 12px;
  }

  ${dynamicStyles}
`;

export default PaginationArrowLink;
