import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  margin: 3em 0 6em 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    width: 80%;
    grid-template-columns: 1fr;
    gap: 1em;
  }
`;

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
