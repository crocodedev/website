import styled from "@emotion/styled";

const FooterTopStack = styled.div`
  display: grid;
  padding-top: 10px;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default FooterTopStack;
