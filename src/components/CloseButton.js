import React from "react";
import styled from "styled-components";
import Close from "../image/Close.js";

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  padding: 0.5em;
  transform: rotate(0deg) scale(1);
  transition: transform ease-in 0.4s;

  :hover  {
    transform: rotate(180deg) scale(1.1);
  }
`;

export default function CloseButton() {
  return (
    <Wrapper>
      <Close />
    </Wrapper>
  );
}
