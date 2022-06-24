import styled from "@emotion/styled";

const OurClientsContent = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 0;
    padding-top: 40px;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 20px;
    padding-top: 60px;
  }

  & .swiper {
    width: 100%;

    & .swiper-slide {
      width: min-content;
      padding: 10px;
    }
  }
`;

export default OurClientsContent;
