import styled from "@emotion/styled";

const ListSevenStack = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

export default ListSevenStack;
