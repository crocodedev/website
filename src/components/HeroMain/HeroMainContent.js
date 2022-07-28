import styled from "@emotion/styled";

const HeroMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 230px;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    height: 240px;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    height: 340px;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    height: 500px;
    padding-top: 100px;
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    height: 670px;
    padding-top: 140px;
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    height: 820px;
    padding-top: 172px;
    gap: 40px;
  }
`;

export default HeroMainContent;
