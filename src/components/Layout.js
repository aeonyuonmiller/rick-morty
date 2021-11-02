import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5em;
`;

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
