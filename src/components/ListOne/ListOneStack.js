import styled from "@emotion/styled";

const ListOneStack = styled.div`
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scrollbar-width: none;
  width: 100%;
  padding: 5px;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    gap: 35px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 55px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default ListOneStack;
