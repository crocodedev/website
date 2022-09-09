import styled from "@emotion/styled";
import Link from "../Link";

const HeaderContentItemShopify = styled(Link)`
  display: flex;
  align-items: center;
  align-self: center;
  height: 100%;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 16px;
    order: 1;
    gap: 10px;
    align-self: flex-start;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    order: 1;
    gap: 10px;
    padding: 20px;
    align-self: flex-start;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    margin-right: 64px;
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
