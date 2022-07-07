import styled from "@emotion/styled";

const SliderStepsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .swiper {
    ${({ theme }) => theme.breakpoints.down("sm")} {
      max-width: 280px;
      padding-top: 10px;
    }

    ${({ theme }) => theme.breakpoints.between("sm", "md")} {
      max-width: 400px;
      padding-top: 20px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      max-width: 688px;
      padding-top: 20px;
    }

    ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
      max-width: 500px;
      padding-top: 93px;
    }

    ${({ theme }) => theme.breakpoints.up("2xl")} {
      max-width: 700px;
      padding-top: 93px;
    }
  }

  & .swiper-pagination-fraction {
    width: auto;
  }
`;

export default SliderStepsContent;
