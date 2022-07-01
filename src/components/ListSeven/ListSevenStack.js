import styled from "@emotion/styled";

const ListSevenStack = styled.div`
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: flex;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    scrollbar-width: none;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

export default ListSevenStack;
