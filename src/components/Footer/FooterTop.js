import styled from "@emotion/styled";

const FooterTop = styled.div`
  display: grid;
  gap: 40px;
  width: 100%;
  padding-top: 40px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    justify-content: center;
    text-align: center;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    grid-template-columns: 1fr 3fr;
  }
`;

export default FooterTop;
