import styled from "@emotion/styled";
import Link from "../Link";

const FooterSocialLink = styled(Link)`
  width: 20px;
  height: 20px;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export default FooterSocialLink;
