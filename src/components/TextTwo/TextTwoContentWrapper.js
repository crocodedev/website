import styled from "@emotion/styled";

const TextTwoContentWrapper = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    grid: 1/2/2/3;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    align-items: center;
    grid-template-columns: 280px 370px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
  }
`;

export default TextTwoContentWrapper;
