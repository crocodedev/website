import styled from "@emotion/styled";
import HeaderContentItem from "./HeaderContentItem";

const HeaderContentItemShopify = styled(HeaderContentItem)`
  ${({ theme }) => theme.breakpoints.down("xl")} {
    order: 1;
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    margin-right: 44px;
    gap: 5px;
  }

  &:hover {
    border-bottom: none;

    ${({ theme }) => theme.breakpoints.down("md")} {
      padding: 16px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      padding: 20px;
    }

    ${({ theme }) => theme.breakpoints.up("xl")} {
      padding: 0px;
    }
  }
`;

export default HeaderContentItemShopify;
