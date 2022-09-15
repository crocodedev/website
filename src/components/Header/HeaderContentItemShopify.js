import styled from "@emotion/styled";
import Link from "../Link";

const HeaderContentItemShopify = styled(Link)`
  display: flex;
  align-items: center;
  align-self: center;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 16px;
    order: 1;
    gap: 10px;
    align-self: flex-start;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    order: 1;
    gap: 10px;
    padding: 20px;
    align-self: flex-start;
    width: 100%;
  }

  ${({theme}) => theme.breakpoints.between("xl", "2xl")} {
    margin-right: 30px;
    height: 100%;
    gap: 5px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    margin-right: 64px;
    gap: 5px;
    height: 100%;
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
      padding: 0;
    }
  }
`;

export default HeaderContentItemShopify;
