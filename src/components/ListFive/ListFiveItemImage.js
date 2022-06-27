import styled from "@emotion/styled";

const ListFiveItemImage = styled.div`
  width: 130px;
  height: 130px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  flex-shrink: 0;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ListFiveItemImage;
