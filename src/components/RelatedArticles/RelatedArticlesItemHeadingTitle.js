import styled from "@emotion/styled";
import Text from "../Text";

const RelatedArticlesItemHeading = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 135px;
    -webkit-line-clamp: 1;
    line-clamp: 1;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: 150px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    max-width: auto;
  }
`;

export default RelatedArticlesItemHeading;
