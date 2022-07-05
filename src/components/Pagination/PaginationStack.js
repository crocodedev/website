import styled from "@emotion/styled";

const PaginationStack = styled.div`
  display: flex;
  padding: 5px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export default PaginationStack;
