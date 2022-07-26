import styled from "@emotion/styled";

const CaseContent = styled.div`
  & .swiper {
    max-width: 1570px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;

    & .swiper-slide {
      width: 516px;
      height: 350px;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.05);
      transition: transform 1.5s;
    }

    & .swiper-slide-active {
      transform: scale(1.45);
      z-index: 1;
      height: 415px;
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.06);
    }
  }
`;

export default CaseContent;
