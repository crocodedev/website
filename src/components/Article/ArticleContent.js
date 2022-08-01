import styled from "@emotion/styled";

const ArticleContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 60px;
  }
`;

export default ArticleContent;
