import styled from "@emotion/styled";

const ReviewsContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 130px;

  & .swiper {
    max-width: 764px;
    margin-left: 4px;
    margin-right: 0;

    &-wrapper {
      gap: 1px;
    }
  }
`;

export default ReviewsContent;
