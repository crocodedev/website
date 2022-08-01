import styled from "@emotion/styled";
import HeaderContentItem from "./HeaderContentItem";

const HeaderContentItemShopify = styled(HeaderContentItem)`
  &:hover {
    border-bottom: none;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    order: 1;
    gap: 10px;

    &:hover {
      padding: 20px;
    }
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    margin-right: 44px;
    gap: 5px;

    &:hover {
      padding: 0px;
    }
  }
`;

export default HeaderContentItemShopify;
