import styled from "@emotion/styled";

const TextThreeList = styled.ul`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 10px;
    padding-left: 32px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    gap: 10px;
    padding-left: 32px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 20px;
    padding-left: 57px;
  }
`;

export default TextThreeList;
