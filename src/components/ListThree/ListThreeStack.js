import styled from "@emotion/styled";

const ListThreeStack = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    flex-direction: column;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    flex-direction: row;
    gap: 40px;
  }
`;

export default ListThreeStack;
