import styled from "@emotion/styled";

const BlogListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 40px;
    padding-top: 20px;
  }
`;

export default BlogListItemContent;
