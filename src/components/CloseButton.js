import React from "react";
import styled from "styled-components";
import Close from "../image/Close.js";

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  padding: 0.5em;
`;

export default function CloseButton() {
  return (
    <Wrapper>
      <Close />
    </Wrapper>
  );
}
