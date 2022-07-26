import styled from "@emotion/styled";

const CaseBottom = styled.ul`
  display: flex;
  width: 100%;

  & .swiper-slide {
    display: flex;
    text-align: center;

    ${({ theme }) => theme.breakpoints.down("md")} {
      flex-direction: column;
      gap: 20px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      justify-content: space-between;
    }

    ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
      justify-content: space-between;
    }

    ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
      gap: 80px;
      justify-content: center;
    }

    ${({ theme }) => theme.breakpoints.up("2xl")} {
      gap: 100px;
      justify-content: center;
    }
  }
`;

export default CaseBottom;
