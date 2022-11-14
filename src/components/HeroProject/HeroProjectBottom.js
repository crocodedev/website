import styled from "@emotion/styled";

const HeroProjectBottom = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 42px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 100px;
  }
`;

export default HeroProjectBottom;
