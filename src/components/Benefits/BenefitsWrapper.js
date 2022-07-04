import styled from "@emotion/styled";

const BenefitsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    grid-template-columns: 1fr 321px 1fr;
    grid-column-gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    grid-template-columns: 1fr 488px 1fr;
    grid-column-gap: 40px;
  }
`;

export default BenefitsWrapper;
