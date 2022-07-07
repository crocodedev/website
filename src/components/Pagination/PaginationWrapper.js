import styled from "@emotion/styled";

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 13px;
  }
  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 10px;
  }
  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 20px;
  }
`;

export default PaginationWrapper;
