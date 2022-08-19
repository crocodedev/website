import styled from "@emotion/styled";

const TechnologiesStack = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  scroll-snap-type: x mandatory;

  ${({ theme }) => theme.breakpoints.up("xl")} {
    padding: 20px;
    box-shadow: ${({ theme }) => theme.shadows.card};
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    padding: 10px;
    box-shadow: ${({ theme }) => theme.shadows.header};
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    border-radius: ${({ theme }) => theme.borderRadius.small} 0 0
      ${({ theme }) => theme.borderRadius.small};
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: calc(100% + 20px);
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
`;

export default TechnologiesStack;
