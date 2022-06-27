import styled from "@emotion/styled";

const MapStackInfoItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 127px 63px;
`;

export default MapStackInfoItem;
