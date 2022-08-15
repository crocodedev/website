import styled from "@emotion/styled";

const TextThreeWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 20px;
    flex-direction: column-reverse;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    margin-top: 75px;
    gap: 68px;
  }
`;

export default TextThreeWrapper;
