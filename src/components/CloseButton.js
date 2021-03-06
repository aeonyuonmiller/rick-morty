import React from "react";
import styled from "styled-components";
import Close from "../image/Close.js";

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--brand);
  padding: 0.5em;
  transform: rotate(45deg) scale(1);
  transition: transform ease 0.2s;

  :hover  {
    transform: rotate(225deg) scale(1.1);
  }
`;

export default function CloseButton() {
  return (
    <Wrapper tabIndex="0">
      <Close />
    </Wrapper>
  );
}
