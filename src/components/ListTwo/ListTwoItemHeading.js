import styled from "@emotion/styled";

const ListTwoItemHeading = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 20px;
  }
  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 30px;
  }
  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 45px;
  }
`;

export default ListTwoItemHeading;
