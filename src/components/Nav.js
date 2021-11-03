import React from "react";
import styled from "styled-components";
import Logo from "../image/Rick_and_Morty.js";

const Wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em 1em 1.5em;
  bottom: 30px;
  width: 60%;
  max-width: 600px;
  min-width: 320px;
  border-radius: 60px;
  background: var(--darkest);
`;

export default function Nav() {
  return (
    <Wrapper>
      <Logo />
      <input type="text" placeholder="Search.."></input>
    </Wrapper>
  );
}
