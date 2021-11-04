import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5em;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
