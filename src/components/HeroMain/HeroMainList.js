import styled from "@emotion/styled";

const HeroMainList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 40px;
  }
`;

export default HeroMainList;
