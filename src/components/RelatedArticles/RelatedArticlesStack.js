import styled from "@emotion/styled";

const RelatedArticlesStack = styled.div`
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
    width: calc(100% + 20px);
    margin-right: -20px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 40px;
    width: 100%;
  }
`;

export default RelatedArticlesStack;
