import React from "react";
import "./Card.css";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: whitesmoke;
  border: 0;
  border-radius: 20px;
  color: #333;
  // margin-left: auto;
  // margin-right: auto;
  height: 410px;
  transition: all ease 0.4s;
  overflow: hidden;

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

  img {
    width: 100%;
  }

  :hover {
    transform: scale(1.02) rotateY(180deg);
  }
`;

export default function card({ onClick, image, name, text, ...props }) {
  return (
    <Wrapper
      tabIndex="0"
      onClick={() => onClick({ image, text, name })}
      {...props}
    >
      <img src={image} alt={`Portrait of ${name}`} />
      <h3>{name}</h3>
      <p>{text}</p>
    </Wrapper>
  );
}
