import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%;
  height: 60vh;
  background-color: white;
  color: #333;
  padding: 1em;
  border-radius: 20px;
  z-index: 10;
`;

const Backdrop = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 9;
`;

const Closer = styled.div`
  position: fixed;
  top: 2em;
  /* right: 1.9em; */
  transform: rotate(45deg);
  z-index: 11;
`;

export default function Modal() {
  return (
    <>
      <Closer>
        <CloseButton />
      </Closer>
      <Backdrop>
        <Wrapper>hey</Wrapper>
      </Backdrop>
    </>
  );
}
