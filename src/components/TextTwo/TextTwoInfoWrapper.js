import styled from "@emotion/styled";

const TextTwoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    display: contents;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 40px;
    justify-content: center;
  }
`;

export default TextTwoInfoWrapper;
