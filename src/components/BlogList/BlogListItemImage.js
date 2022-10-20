import styled from "@emotion/styled";

const BlogListItemImage = styled.div`
  display: flex;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;


  & div ~ img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default BlogListItemImage;
