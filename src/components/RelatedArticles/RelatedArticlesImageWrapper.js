import styled from "@emotion/styled";

const RelatedArticlesImageWrapper = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 220px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    height: 240px;
  }

  > div {
    height: 100%;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    height: 360px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default RelatedArticlesImageWrapper;
