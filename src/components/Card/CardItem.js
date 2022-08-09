import styled from "@emotion/styled";

const CardItem = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 35px;
  }
`;

export default CardItem;
