import styled from "@emotion/styled";

const FooterBottom = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    text-align: center;
    padding: 40px 0;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 20px 0;
  }
`;

export default FooterBottom;
