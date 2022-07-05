import styled from "@emotion/styled";

const BlogListItem = styled.article`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    grid-template-columns: 1fr 1fr;

    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    grid-template-columns: 1fr 1fr;

    gap: 40px;
  }
`;

export default BlogListItem;
