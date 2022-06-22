import styled from "@emotion/styled";

const RelatedArticlesItem = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 20px;
  }
`;

export default RelatedArticlesItem;
