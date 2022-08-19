import styled from "@emotion/styled";

const HeroMainLogo = styled.div`
  & div img {
    ${({ theme }) => theme.breakpoints.down("sm")} {
      max-width: 280px;
      max-height: 53px;
    }

    ${({ theme }) => theme.breakpoints.between("sm", "lg")} {
      max-width: 405px;
      max-height: 77px;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      max-width: 717px;
      max-height: 137px;
    }
  }
`;

export default HeroMainLogo;
