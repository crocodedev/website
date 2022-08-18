import styled from "@emotion/styled";

const HeroMainImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  display: flex;

  & div {
    width: 100%;
    max-width: 1920px;

    & img {
      ${({ theme }) => theme.breakpoints.down("sm")} {
        height: 435px;
      }

      ${({ theme }) => theme.breakpoints.between("sm", "md")} {
        height: 445px;
      }

      ${({ theme }) => theme.breakpoints.between("md", "lg")} {
        height: 575px;
      }

      ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
        height: 740px;
      }

      ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
        height: 990px;
      }

      ${({ theme }) => theme.breakpoints.up("2xl")} {
        height: 1130px;
      }
    }
  }
`;

export default HeroMainImage;
