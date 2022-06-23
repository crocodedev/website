import styled from "@emotion/styled";

const ListFiveStack = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 30px;
  }
  ${({ theme }) => theme.breakpoints.between("md", "2xl")} {
    grid-template-columns: repeat(2, 1fr);
    gap: 46px;
  }
  ${({ theme }) => theme.breakpoints.up("2xl")} {
    grid-template-columns: repeat(3, 1fr);
    gap: 76px;
  }
`;

export default ListFiveStack;
