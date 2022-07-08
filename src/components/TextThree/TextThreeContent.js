import styled from "@emotion/styled";

const TextThreeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul li {
    list-style-type: disc;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: 330px;
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    max-width: 450px;
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    max-width: 674px;
    gap: 20px;
  }
`;

export default TextThreeContent;
