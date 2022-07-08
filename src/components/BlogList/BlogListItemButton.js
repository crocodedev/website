import styled from "@emotion/styled";

const BlogListItemButton = styled.button`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: block;
  }
`;

export default BlogListItemButton;
