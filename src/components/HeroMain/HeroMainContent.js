import styled from "@emotion/styled";

const HeroMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 40px;
  }
`;

export default HeroMainContent;
