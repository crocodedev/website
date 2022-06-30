import styled from "@emotion/styled";

const FAQStack = styled.div`
  display: grid;
  gap: 40px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr;
  }
`;

export default FAQStack;
