import styled from "@emotion/styled";

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  max-width: 894px;
  text-align: center;

  > div {
    ${({ theme }) => theme.breakpoints.down("lg")} {
      padding-bottom: 150px;
    }
  }


`;

export default HeroContent;
