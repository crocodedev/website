import styled from "@emotion/styled";

const ListSixStack = styled.div`
  display: grid;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr;
  }
`;

export default ListSixStack;
