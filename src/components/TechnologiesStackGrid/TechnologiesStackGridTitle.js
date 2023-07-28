import styled from "@emotion/styled";

const TechnologiesStackGridTitle = styled.p`
  color: #222;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    font-size: 18px;
    line-height: 27px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: 28px;
    line-height: 42px;
  }
`;

export default TechnologiesStackGridTitle;
