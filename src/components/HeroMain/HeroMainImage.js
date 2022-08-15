import styled from "@emotion/styled";

const HeroMainImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;

  & div img {
    width: 100%;
    object-fit: cover;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      height: 480px;
    }

    ${({ theme }) => theme.breakpoints.between("sm", "md")} {
      height: 500px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      height: 650px;
    }

    ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
      height: 840px;
    }

    ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
      height: 1120px;
    }

    ${({ theme }) => theme.breakpoints.up("2xl")} {
      height: 1270px;
    }
  }
`;

export default HeroMainImage;
