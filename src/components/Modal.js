import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const Wrapper = styled(motion.div)`
  position: relative;
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

const Closer = styled(motion.div)`
  position: fixed;
  padding: 1em;
  top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

const Content = styled.div`
  padding: 0 1em;
  width: 50%;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const ImagePos = styled(motion.img)`
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
  open: { scale: 1, y: 0, rotate: 0, transition: { delay: 0.2 } },
  closed: { scale: 0, y: -100, rotate: 360 },
  exit: { scale: 0, rotate: 800 },
};

export default function Modal({ onClose, content, char, ...props }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Backdrop
        {...props}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Closer
          onClick={onClose}
          initial="closed"
          animate="open"
          exit="exit"
          variants={variants}
        >
          <CloseButton />
        </Closer>
        <Wrapper
          initial={{ y: 50 }}
          animate={{ y: 0, transition: {} }}
          exit={{ y: -100 }}
        >
          <ImagePos
            initial={{ scale: 1.1, x: "-5%" }}
            animate={{ scale: 1, x: 0, transition: { duration: 0.8 } }}
            src={char.image}
            alt={char.name}
          />
          <Content>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
            >
              {char.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            >
              {char.species}
            </motion.p>
          </Content>
        </Wrapper>
      </Backdrop>
    </AnimatePresence>
  );
}
