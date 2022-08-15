import styled from "@emotion/styled";

const TextTwoImageWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  border-radius: 40px;
  position: relative;

  & img {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default TextTwoImageWrapper;
