import styled from "@emotion/styled";

const ListOneStackItemInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 15px;
    padding: 30px 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 25px;
    padding: 50px 40px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 25px;
    padding: 40px 30px;
  }
`;

export default ListOneStackItemInner;