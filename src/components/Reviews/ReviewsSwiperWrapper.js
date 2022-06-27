import styled from "@emotion/styled";

const ReviewsSwiperWrapper = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 60px;
  }
`;

export default ReviewsSwiperWrapper;
