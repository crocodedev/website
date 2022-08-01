import styled from "@emotion/styled";

const ArticleImage = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;

  picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
`;

export default ArticleImage;
