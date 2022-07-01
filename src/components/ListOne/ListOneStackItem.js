import styled from "@emotion/styled";

const ListOneStackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  scroll-snap-align: start;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 15px;
    padding: 30px 20px;
    flex: 0 0 100%;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 25px;
    padding: 50px 40px;
    flex: 0 0 50%;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 40px;
    padding: 70px 60px;
  }
`;

export default ListOneStackItem;
