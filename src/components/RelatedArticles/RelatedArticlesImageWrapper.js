import styled from "@emotion/styled";

const RelatedArticlesImageWrapper = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default RelatedArticlesImageWrapper;
