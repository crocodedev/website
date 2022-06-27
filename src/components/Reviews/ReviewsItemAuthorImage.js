import styled from "@emotion/styled";

const ReviewsItemAuthorImage = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 60px;
    height: 60px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 90px;
    height: 90px;
  }
`;

export default ReviewsItemAuthorImage;
