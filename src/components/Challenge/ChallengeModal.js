import styled from "@emotion/styled";

const ChallengeModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 240px;
  align-items: flex-start;
  transition: 0.3s;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.shadows.popup};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 10px;
  top: calc(100% + 20px);

  &::before {
    content: "";
    width: 50%;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
  }
`;

export default ChallengeModal;
