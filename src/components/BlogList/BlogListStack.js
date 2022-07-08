import styled from "@emotion/styled";

const BlogListStack = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 20px;
  }
  
  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 60px;
  }
`;

export default BlogListStack;
