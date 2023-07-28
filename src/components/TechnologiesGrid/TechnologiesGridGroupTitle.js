import styled from "@emotion/styled";

const TechnologiesGridGroupTitle = styled.p`
  color: #222;
  font-weight: 700;
  margin-bottom: 40px;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    font-size: 18px;
    line-height: 27px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: 28px;
    line-height: 42px;
  }
`;

export default TechnologiesGridGroupTitle;
