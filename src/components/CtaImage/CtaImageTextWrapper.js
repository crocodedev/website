import styled from "@emotion/styled";

const CtaImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: 330px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    max-width: 475px;
  }
`;

export default CtaImageTextWrapper;
