import styled from "@emotion/styled";

const BenefitsList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  ${({ theme }) => theme.breakpoints.down("md")} {
    order: 1;
    gap: 20px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    padding-top: 155px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    padding-top: 140px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding-top: 280px;
  }
`;

export default BenefitsList;
