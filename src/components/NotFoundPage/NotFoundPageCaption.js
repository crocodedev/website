import styled from "@emotion/styled";

const NotFoundPageCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &:before {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.palette.primary.main};
    margin: 0 auto;

    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 100px;
      height: 4px;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 176px;
      height: 8px;
    }
  }
`;

export default NotFoundPageCaption;
