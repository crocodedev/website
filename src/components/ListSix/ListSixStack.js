import styled from "@emotion/styled";

const ListSixStack = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    grid-template-columns: 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    grid-template-columns: 1fr 1fr;
  }
`;

export default ListSixStack;
