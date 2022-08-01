import styled from "@emotion/styled";
import Text from "../Text";

const CardHeadingLabel = styled(Text)`
  justify-self: flex-end;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: 100px;
  text-align: center;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    align-self: center;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    padding: 6px 10px;
    font-size: 12px;
    line-height: 12px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    align-self: flex-start;
    padding: 12px 25px;
    font-size: 14px;
    line-height: 20px;
  }
`;

export default CardHeadingLabel;
