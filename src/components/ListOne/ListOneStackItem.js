import styled from "@emotion/styled";

const ListOneStackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 15px;
    padding: 30px 20px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 40px;
    padding: 70px 60px;
  }
`;

export default ListOneStackItem;
