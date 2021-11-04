import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60vh;
  background-color: white;
  color: #333;
  padding: 1em;
  border-radius: 20px;
  z-index: 10;
`;

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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

export default function Modal({ onClose, content, ...props }) {
  return (
    <Backdrop {...props}>
      <Closer onClick={() => onClose()}>
        <CloseButton />
      </Closer>
      <Wrapper>
        <div>{content}</div>
      </Wrapper>
    </Backdrop>
  );
}
