import styled from "@emotion/styled";

const HeroImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  overflow: hidden;
  display: flex;
  width: 100%;
  justify-content: center;

  & div {
    max-width: 1920px;
    width: 100%;

    img {
      ${({ theme }) => theme.breakpoints.down("sm")} {
        height: 435px;
      }

      ${({ theme }) => theme.breakpoints.between("sm", "md")} {
        height: 425px;
      }

      ${({ theme }) => theme.breakpoints.between("md", "lg")} {
        height: 574px;
      }

      ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
        height: 715px;
      }

      ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
        height: 940px;
      }

      ${({ theme }) => theme.breakpoints.up("2xl")} {
        height: 1100px;
      }
    }
  }
`;

export default HeroImage;
