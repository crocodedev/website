import styled from "@emotion/styled";

const RelatedArticlesItem = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 280px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex: 0 0 100%;
    gap: 10px;

    &:last-child {
      margin-right: 20px;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex: 0 0 calc(50% - 20px);
    gap: 20px;
  }
`;

export default RelatedArticlesItem;
