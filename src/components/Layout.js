import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: 3em 0 5em 0;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 3em;
  transition: all ease-in-out 1s;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    width: 80%;
    grid-template-columns: 1fr;
  }
`;

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
