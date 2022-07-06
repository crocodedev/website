import styled from "@emotion/styled";

const TechnologiesStack = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export default TechnologiesStack;
