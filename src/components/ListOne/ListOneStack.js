import styled from "@emotion/styled";

const ListOneStack = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    gap: 25px;
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 55px;
    flex-direction: row;
  }
`;

export default ListOneStack;
