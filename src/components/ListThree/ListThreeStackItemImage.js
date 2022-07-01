import styled from "@emotion/styled";

const ListThreeStackItemImage = styled.div`
  img {
    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 80px;
      height: 80px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      width: 90px;
      height: 90px;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      width: 160px;
      height: 160px;
    }
  }
`;

export default ListThreeStackItemImage;
