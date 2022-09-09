import styled from "@emotion/styled";

const CardContent = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    gap: 10px;
  }
  

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 20px;
  }
`;

export default CardContent;
