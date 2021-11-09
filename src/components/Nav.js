import React from "react";
import styled from "styled-components";
import Logo from "../image/Rick_and_Morty.js";

const Wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0.7em 1em 1.5em;
  bottom: 30px;
  width: 60%;
  max-width: 600px;
  min-width: 320px;
  height: 80px;
  border-radius: 60px;
  background: var(--darkest);

  input {
    font-size: 12px;
    /* font-size: max(8px, 1em); */
    width: 30%;
    height: 3em;
    color: var(--surface1);
    font-family: inherit;
    padding: 0.25em 2em;
    background-color: var(--darkest);
    border: 1px solid var(--brand);
    border-radius: 30px;
    transition: all ease 0.3s;
    margin-left: 1em;
  }

  input:focus  {
    width: 80%;
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
