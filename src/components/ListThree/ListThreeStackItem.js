import styled from "@emotion/styled";

const ListThreeStackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 456px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 40px;
`;

export default ListThreeStackItem;
