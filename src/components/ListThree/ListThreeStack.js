import styled from "@emotion/styled";

const ListThreeStack = styled.div`
  display: flex;
  align-items: center;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scrollbar-width: none;
  gap: 20px;
  align-items: flex-start;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    margin-left: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default ListThreeStack;
