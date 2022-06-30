import styled from "@emotion/styled";

const NotFoundPageImageWrapper = styled.div`
  img {
    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 258px;
      height: 94px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      width: 280px;
      height: 102px;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      width: 570px;
      height: 207px;
    }
  }
`;

export default NotFoundPageImageWrapper;
