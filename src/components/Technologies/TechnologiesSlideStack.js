import styled from "@emotion/styled";

const TechnologiesSlideStack = styled.div`
  display: grid;
  max-width: 790px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 30px;
  }
`;

export default TechnologiesSlideStack;
