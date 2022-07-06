import styled from "@emotion/styled";

const TextTwoInfoValues = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    gap: 80px;
    grid-area: 2/1/2/3;
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 20px;
  }
`;

export default TextTwoInfoValues;
