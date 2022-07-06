import styled from "@emotion/styled";

const TextTwoImageWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  border-radius: 40px;

  img {
    border-radius: ${({ theme }) => theme.borderRadius.small};

    ${({ theme }) => theme.breakpoints.down("md")} {
      max-width: 280px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "2xl")} {
      width: 100%;
    }

    ${({ theme }) => theme.breakpoints.up("2xl")} {
      max-width: 860px;
    }
  }
`;

export default TextTwoImageWrapper;
