import styled from "@emotion/styled";

const PaginationStackItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.subtitle}px;
  line-height: ${({ theme }) => theme.typography.lineHeight.xsm};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
`;

export default PaginationStackItem;
