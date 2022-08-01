import styled from "@emotion/styled";

const HeaderLang = styled.div`
  display: flex;
  gap: 5px;
  align-self: center;
  position: relative;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 20px 16px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding: 20px;
  }

  &:after {
    display: block;
    width: 9px;
    height: 9px;
    content: "";
    transform: rotate(135deg);
    border-top: 2px solid ${({ theme }) => theme.palette.text.primary};
    border-right: 2px solid ${({ theme }) => theme.palette.text.primary};
    border-radius: 2px;

    ${({ theme }) => theme.breakpoints.up("md")} {
      margin-top: 6px;
    }
  }
`;

export default HeaderLang;
