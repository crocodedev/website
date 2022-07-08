import styled from "@emotion/styled";
import Text from "../Text";

const BlogListItemHeading = styled(Text)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    max-width: 100%;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      max-width: 70%;
    }
  }
`;

export default BlogListItemHeading;
