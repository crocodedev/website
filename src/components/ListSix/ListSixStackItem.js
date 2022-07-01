import styled from "@emotion/styled";

const ListSixStackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 20px;
    padding: 20px;

    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.palette.secondary.main};
    }

    &:nth-child(even) {
      background-color: ${({ theme }) => theme.palette.secondary.light};
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      background-color: ${({ theme }) => theme.palette.secondary.main};
    }

    &:nth-child(4n + 2),
    &:nth-child(4n + 3) {
      background-color: ${({ theme }) => theme.palette.secondary.light};
    }
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 40px;
    padding: 100px 70px;
  }
`;

export default ListSixStackItem;
