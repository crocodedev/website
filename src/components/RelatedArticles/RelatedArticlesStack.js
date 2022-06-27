import styled from "@emotion/styled";

const RelatedArticlesStack = styled.div`
  display: flex;
  width: 100%;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 40px;
  }
`;

export default RelatedArticlesStack;
