import styled from "@emotion/styled";

const HeroProjectImage = styled.div`
  width: 100%;
  overflow: hidden;

  picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${({ theme }) => theme.breakpoints.down("lg")} {
      max-height: 180px;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      max-height: 505px;
    }
  }
`;

export default HeroProjectImage;
