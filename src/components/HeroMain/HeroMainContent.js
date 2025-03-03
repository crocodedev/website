import styled from "@emotion/styled";

const HeroMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.57);

  ${({ theme }) => theme.breakpoints.down("lg")} {
    gap: 20px;
    padding: 20px 20px;
    border-radius: 30px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 40px;
    padding: 20px 50px;
    border-radius: 50px;
  }
`;

export default HeroMainContent;
