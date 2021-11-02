import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: whitesmoke;
  border-radius: 20px;
  color: #333;
  padding: 1em;
  margin: 0.5em;
  // margin-left: auto;
  // margin-right: auto;
  height: 300px;

  h3  {
    color: blue;
    font-size: 20px;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.2em;
  }
`;

export default function card(props) {
  return (
    <Wrapper>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </Wrapper>
  );
}
