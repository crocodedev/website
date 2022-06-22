import styled from "@emotion/styled";
import Text from "../Text";

const RelatedArticlesItemDescription = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export default RelatedArticlesItemDescription;
