import styled from "@emotion/styled";

const CardImage = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 59%;

  & div {
    position: absolute;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;

export default CardImage;
