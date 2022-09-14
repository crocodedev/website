import styled from "@emotion/styled";

const HeaderLang = styled.div`
  display: flex;
  gap: 5px;
  position: relative;
  padding: 30px 10px;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 20px 16px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding: 20px;
  }


  ${({theme}) => theme.breakpoints.down("xl")} {
    align-self: flex-start;
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
    margin-top: 2px;
    transition-duration: 0.2s;
  }
`;

export default HeaderLang;
