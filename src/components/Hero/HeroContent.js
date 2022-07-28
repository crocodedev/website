import styled from "@emotion/styled";

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  max-width: 894px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 250px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    height: 240px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    height: 360px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    height: 480px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    height: 580px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    height: 740px;
  }
`;

export default HeroContent;
