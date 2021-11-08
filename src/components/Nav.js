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

  input {
    font-size: 12px;
    font-size: max(12px, 1em);
    width: 5em;
    color: var(--surface1);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: var(--darkest);
    border: 1px solid var(--brand);
    border-radius: 30px;
    transition: all ease 0.3s;
    margin-left: 1em;
  }

  input:focus  {
    width: 8em;
  }

  input::placeholder {
    text-align: end;
    color: var(--brand);
  }
`;

export default function Nav() {
  return (
    <Wrapper>
      <Logo />
      <input type="text" placeholder="Search.."></input>
    </Wrapper>
  );
}
