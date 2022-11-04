import styled from "@emotion/styled";
import Title from "../Title";

const HeroProjectTitle = styled(Title)`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  text-transform: uppercase;
  display: grid;
  gap: 10px;
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};

  &:after,
  &:after {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down("2xl")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title2}px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "xl")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title1}px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title0}px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    font-size: 150px;
  }
`;

export default HeroProjectTitle;
