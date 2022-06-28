import styled from "@emotion/styled";

const ListThreeStackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
    max-width: 250px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    gap: 20px;
    flex: 0 0 50%;
    max-width: 334px;

    &:last-child {
      margin-right: 40px;
    }
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 40px;
    max-width: 477px;
  }
`;

export default ListThreeStackItem;
