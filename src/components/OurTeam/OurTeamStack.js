import styled from "@emotion/styled";

const OurTeamStack = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 30px;
    row-gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 40px;
    row-gap: 40px;
  }
`;

export default OurTeamStack;
