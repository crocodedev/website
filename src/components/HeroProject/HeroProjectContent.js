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
      height: unset;

      &:not(.swiper-slide-active) {
        height: unset;

        & div {
          max-height: 80%;
        }
      }

      &-active {
        z-index: 1;

        & div {
          transition: transform 1.5s;
          height: 80%;

          ${({ theme }) => theme.breakpoints.down("md")} {
            width: 100%;
            transform: scale(1.9);
          }

          ${({ theme }) => theme.breakpoints.between("md", "lg")} {
            transform: scale(1.3);
          }

          ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
            transform: scale(1.35);
          }

          ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
            transform: scale(1.4);
          }

          ${({ theme }) => theme.breakpoints.up("2xl")} {
            transform: scale(1.45);
          }
        }
      }
    }
  }
`;

export default HeroProjectContent;
