import styled from "@emotion/styled";

const BackUpButtonContent = styled.button`
  position: fixed;
  z-index: 2;
  bottom: 50px;
  right: 50px;
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export default BackUpButtonContent;
