import styled from "@emotion/styled";
import Link from "../Link";

const HeaderContentItem = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 16px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    align-self: center;
  }

  &:hover {
    border-bottom: 3px solid #4b7223;
    padding-top: 3px;

    ${({ theme }) => theme.breakpoints.down("xl")} {
      border-bottom: none;
      padding: 20px;
    }
  }

  // &:nth-child(2) {
  //   ${({ theme }) => theme.breakpoints.down("xl")} {
  //     order: 1;
  //     gap: 10px;
  //   }

  //   ${({ theme }) => theme.breakpoints.up("2xl")} {
  //     gap: 5px;
  //   }

  //   ${({ theme }) => theme.breakpoints.up("2xl")} {
  //     margin-right: 44px;
  //   }
  //   &:hover {
  //     border-bottom: none;
  //     padding: 0px;
  //   }
  // }
`;

export default HeaderContentItem;
