import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ theme, dir }) => css`
  ${theme.breakpoints.down("xl")} {
    display: none;
  }

  &::before {
    transform: ${dir === "right" ? "rotate(45deg)" : "rotate(-135deg)"} translate(-3px, 3px);
  }
`;

const ReviewsButton = styled.button`
  width: 64px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: 0.3s;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};

  ${dynamicStyles}

  &::before {
    content: "";
    width: 18px;
    height: 18px;
    border-radius: 3px;
    border-top: 3px solid ${({ theme }) => theme.palette.primary.main};
    border-right: 3px solid ${({ theme }) => theme.palette.primary.main};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};

    &::before {
      border-top-color: ${({ theme }) => theme.palette.primary.contrastText};
      border-right-color: ${({ theme }) => theme.palette.primary.contrastText};
    }
  }

  &.reviews__disabled {
    pointer-events: none;
    border-color: ${({ theme }) => theme.palette.text.disabled};
    
    &::before {
      border-top-color: ${({ theme }) => theme.palette.text.disabled};
      border-right-color: ${({ theme }) => theme.palette.text.disabled};
    }
  }
`;

export default ReviewsButton;
