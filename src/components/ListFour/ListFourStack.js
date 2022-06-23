import styled from "@emotion/styled";

const ListFourStack = styled.div`
  display: grid;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default ListFourStack;
