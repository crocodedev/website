import styled from "@emotion/styled";

const ListTwoStack = styled.div`
  display: grid;
  gap: 10px;

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.breakpoints.up("xl")} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default ListTwoStack;
