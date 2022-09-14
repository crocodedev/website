import styled from "@emotion/styled";

const BlogListItemContentTop = styled.div`
  display: flex;
  overflow: hidden;

  p {
    padding-bottom: 3px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 10px;
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 40px;
    flex-direction: column;
  }
`;

export default BlogListItemContentTop;
