import styled from "@emotion/styled";

const ReviewsPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  & .swiper-pagination-bullet-active {
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default ReviewsPagination;
