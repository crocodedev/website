import styled from "@emotion/styled";

const OurClientsImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.background.default};
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 383px;
    height: 304px;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 224px;
    height: 177px;
  }
`;

export default OurClientsImageWrapper;
