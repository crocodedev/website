import styled from "@emotion/styled";

const HeroProjectContent = styled.div`
  width: 100%;

  & .swiper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${({ theme }) => theme.breakpoints.down("md")} {
      padding-top: 50px;
      padding-bottom: 50px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      padding-top: 45px;
    }

    ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
      padding-top: 70px;
    }

    ${({ theme }) => theme.breakpoints.up("2xl")} {
      padding-top: 90px;
      padding-bottom: 35px;
    }

    & .swiper-slide {
      transition: transform 1.5s;
    }

    & .swiper-slide-active {
      z-index: 1;

      ${({ theme }) => theme.breakpoints.down("md")} {
        height: 100%;
        width: 100%;
        transform: scale(1.9);
      }

      ${({ theme }) => theme.breakpoints.between("md", "lg")} {
        height: 180px;
        transform: scale(1.3);
      }

      ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
        height: 250px;
        transform: scale(1.35);
      }

      ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
        height: 350px;
        transform: scale(1.4);
      }

      ${({ theme }) => theme.breakpoints.up("2xl")} {
        height: 415px;
        transform: scale(1.45);
      }
    }
  }
`;

export default HeroProjectContent;
