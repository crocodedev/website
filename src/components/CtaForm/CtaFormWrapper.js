import styled from "@emotion/styled";

const CtaFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 26px;
  }
`;

export default CtaFormWrapper;
