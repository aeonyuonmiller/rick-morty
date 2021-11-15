import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 60vh;
  background-color: white;
  color: #333;
  border-radius: 20px;
  overflow: hidden;
  z-index: 10;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const Backdrop = styled(motion.div)`
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
  /* filter: blur(10px) contrast(40); // liquid-edge */
  z-index: 9;
`;

const Closer = styled.div`
  position: fixed;
  padding: 1em;
  top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(45deg);
  z-index: 11;
`;

const Content = styled.div`
  padding: 0 1em;
  width: 50%;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const ImagePos = styled.img`
  position: relative;
  top: 0;
  margin-bottom: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 950px) {
    width: 100%;
    height: 70%;
    padding-bottom: 1em;
  }
`;

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Modal({ onClose, content, char, ...props }) {
  return (
    <Backdrop
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Closer onClick={onClose}>
        <CloseButton />
      </Closer>
      <Wrapper>
        <ImagePos src={char.image} alt={char.name} />
        <Content>
          <h2>{char.name}</h2>
          <p>{char.species}</p>
        </Content>
      </Wrapper>
    </Backdrop>
  );
}
