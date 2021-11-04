import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  border: 0;
  border-radius: 20px;
  color: #333;
  padding: 1em;
  // margin-left: auto;
  // margin-right: auto;
  height: 300px;
  transition: all ease 0.4s;

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

  :hover {
    transform: scale(1.02) rotateY(180deg);
  }
`;

export default function card({ onClick, image, name, text, ...props }) {
  return (
    <Wrapper onClick={() => onClick({ image, text, name })} {...props}>
      <img src={image} alt={`Portrait of ${name}`} />
      <h3>{name}</h3>
      <p>{text}</p>
    </Wrapper>
  );
}
