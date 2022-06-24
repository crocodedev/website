import styled from "@emotion/styled";

const FooterSocials = styled.div`
  display: flex;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    justify-content: center;
  }
`;

export default FooterSocials;
