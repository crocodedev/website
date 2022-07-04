import styled from "@emotion/styled";
import Text from "../Text";

const BlogListItemText = styled(Text)`
  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
  }
`;

// overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 3;
//   max-width: 132px;

export default BlogListItemText;
