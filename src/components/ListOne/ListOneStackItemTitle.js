import styled from "@emotion/styled";

const ListOneStackItemTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export default ListOneStackItemTitle;
