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
    height: 8px;

    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 160px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      width: 168px;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      width: 176px;
    }
  }
`;

export default NotFoundPageCaption;
