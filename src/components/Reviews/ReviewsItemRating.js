import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyles = ({ theme, rating }) => css`
  &::before {
    background: linear-gradient(
      90deg,
      #ffc107 ${`${(rating / 5) * 100 - 0.9 * Math.round(rating)}%`},
      ${theme.palette.text.disabled} ${`${(rating / 5) * 100 - 0.9 * Math.round(rating)}%`}
    );
  }
`;

const ReviewsItemRating = styled.div`
  display: inline-block;
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 16px;

    &::before {
      letter-spacing: 2px;
    }
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 24px;

    &::before {
      letter-spacing: 7px;
    }
  }
  ${dynamicStyles}

  &::before {
    content: "★★★★★";
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default ReviewsItemRating;
