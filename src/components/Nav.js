import React from "react";
import styled from "styled-components";
import Logo from "../image/Rick_and_Morty.js";

const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.3em;
  bottom: 30px;
  width: 80%;
  border-radius: 60px;
  background: #333;
`;

export default function Nav() {
  return (
    <Wrapper>
      <Logo />
      <input type="text" placeholder="Search.."></input>
    </Wrapper>
  );
}
