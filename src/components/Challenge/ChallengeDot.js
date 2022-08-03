import styled from "@emotion/styled";

const ChallengeDot = styled.span`
  border-radius: 50%;
  width: 27px;
  height: 27px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:after {
    display: flex;
    border-radius: 50%;
    content: "";
    background-color: ${({ theme }) => theme.palette.primary.main};
    width: 13px;
    height: 13px;
    right: 6px;
  }
`;

export default ChallengeDot;
