import styled from "@emotion/styled";

const HeaderMenuIcon = styled.span`
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.palette.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  &:hover {
    cursor: pointer;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: relative;
    width: 24px;
    height: 2px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.text.primary};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }

  &::before {
    top: 6px;
  }

  &::after {
    bottom: 8px;
  }
`;

export default HeaderMenuIcon;
