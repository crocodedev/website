import styled from "@emotion/styled";

const ListSevenStackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex: 0 0 100%;
    max-width: 280px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    flex: 0 0 50%;
    max-width: 334px;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 20px;
    padding: 30px 30px 18px;
    min-height: 300px;
    scroll-snap-align: start;

    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.palette.secondary.main};
    }

    &:nth-child(even) {
      background-color: ${({ theme }) => theme.palette.secondary.light};
    }
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 40px;
    padding: 60px 60px 48px;
    min-height: 400px;

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      background-color: ${({ theme }) => theme.palette.secondary.main};
    }

    &:nth-child(4n + 2),
    &:nth-child(4n + 3) {
      background-color: ${({ theme }) => theme.palette.secondary.light};
    }
  }
`;

export default ListSevenStackItem;
