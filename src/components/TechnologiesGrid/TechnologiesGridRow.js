import styled from "@emotion/styled";

const TechnologiesStackGridRow = styled.div`
  display: grid;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${({ theme }) => theme.breakpoints.between("lg", "2xl")} {
    grid-template-columns: repeat(5, 1fr);
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export default TechnologiesStackGridRow;
