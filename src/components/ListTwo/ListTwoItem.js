import styled from "@emotion/styled";

const ListTwoItem = styled.div`
  padding: 30px 30px 17px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: grid;
  gap: 30px;
`;

export default ListTwoItem;
