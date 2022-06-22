import styled from "@emotion/styled";

const RelatedArticlesStack = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 30px;
    grid-template-rows: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 40px;
    grid-template-columns: 1fr 1fr;
  }
`;

export default RelatedArticlesStack;
