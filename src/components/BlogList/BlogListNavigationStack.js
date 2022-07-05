import styled from "@emotion/styled";

const BlogListNavigationStack = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 40px;
  }
`;
export default BlogListNavigationStack;
