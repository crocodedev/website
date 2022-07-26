import styled from "@emotion/styled";
import Title from "../Title";

const CaseTitle = styled(Title)`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  text-transform: uppercase;
  display: grid;
  gap: 10px;
  line-height: 150px;

  &:after,
  &:after {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title1}px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title0}px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: 150px;
  }
`;

export default CaseTitle;
