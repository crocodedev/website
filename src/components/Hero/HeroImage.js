import styled from "@emotion/styled";

const HeroImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  overflow: hidden;
  display: flex;
  width: 100%;
  justify-content: center;

  & div img {
    width: 100%;
    object-fit: cover;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      height: 560px;
    }

    ${({ theme }) => theme.breakpoints.between("sm", "md")} {
      height: 540px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      height: 700px;
    }

    ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
      height: 870px;
    }

    ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
      height: 1160px;
    }

    ${({ theme }) => theme.breakpoints.up("2xl")} {
      height: 1330px;
    }
  }
`;

export default HeroImage;
