import React from "react";
import styled from "styled-components";
import Logo from "../image/Rick_and_Morty.js";

const Wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.3em;
  bottom: 30px;
  width: 80%;
  border-radius: 60px;
  background: var(--surface1-light);
`;

export default function Nav() {
  return (
    <Wrapper>
      <Logo />
      <input type="text" placeholder="Search.."></input>
    </Wrapper>
  );
}
