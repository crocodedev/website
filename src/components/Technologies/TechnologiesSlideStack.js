import styled from "@emotion/styled";

const TechnologiesSlideStack = styled.div`
  display: grid;
  max-width: 790px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-column-gap: 11px;
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    grid-column-gap: 11px;
    grid-template-columns: repeat(4, 1fr);
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    grid-column-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    grid-row-gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 30px;
  }
`;

export default TechnologiesSlideStack;
