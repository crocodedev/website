import styled from "@emotion/styled";

const TextOneWrapper = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.paper};

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f8f8f8 100%);
    bottom: 0;
    z-index: 2;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    &:after {
      height: 15%;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    &:after {
      height: 20%;
    }
  }
`;

export default TextOneWrapper;
