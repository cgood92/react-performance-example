import styled from "@emotion/styled";
import { css } from "@emotion/core";

export default styled.figure`
  box-sizing: border-box;
  margin: 5px;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #f3f3f3;
  border: 1px solid black;
  border-radius: 3px;
  overflow: hidden;

  transition: 0.25s all;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #bbbbe0;
      border: 10px solid #577af7;
      & img {
        opacity: 0.8;
      }
    `};
`;
