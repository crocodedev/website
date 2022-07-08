import styled from "@emotion/styled";

const SliderStepsPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  & .swiper-pagination-bullet {
    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: 8px;
      height: 8px;
    }

    ${({ theme }) => theme.breakpoints.up("sm")} {
      width: 10px;
      height: 10px;
    }
  }

  & .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.palette.primary.main};

    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: 8px;
      height: 8px;
    }

    ${({ theme }) => theme.breakpoints.up("sm")} {
      width: 10px;
      height: 10px;
    }
  }
`;

export default SliderStepsPagination;
