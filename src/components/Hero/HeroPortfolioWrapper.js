import styled from "@emotion/styled";

const HeroPortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  > div {
    ${({ theme }) => theme.breakpoints.down("lg")} {
      padding-bottom: 150px;
    }
  }
`;

export default HeroPortfolioWrapper;