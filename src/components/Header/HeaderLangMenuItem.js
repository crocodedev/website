import styled from "@emotion/styled";
import { Link } from "gatsby";

const HeaderLangMenuItem = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: row;
  padding: 10px 15px;

  &:hover {
    p {
      color: ${({theme}) => theme.palette.primary.main};
    }
  }

  & div {
    min-width: 24px;
    min-height: 16px;

    & >img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default HeaderLangMenuItem;
