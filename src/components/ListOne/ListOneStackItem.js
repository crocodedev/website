import styled from "@emotion/styled";

const ListOneStackItem = styled.div`
  scroll-snap-align: start;
  padding: 5px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex: 0 0 100%;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    flex: 0 0 calc(50% - 10px);
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 25px;
  }
`;

export default ListOneStackItem;
