import styled from "@emotion/styled";

const ChallengeModal = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  max-width: 240px;
  align-items: flex-start;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.shadows.popup};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  white-space: nowrap;
  padding: 10px;
`;

export default ChallengeModal;
