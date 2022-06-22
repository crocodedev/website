import styled from "@emotion/styled";

const OurTeamImage = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default OurTeamImage;
