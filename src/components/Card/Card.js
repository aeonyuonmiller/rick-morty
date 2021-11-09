import React from "react";
import "./Card.css";

export default function Card({ onClick, image, name, text, ...props }) {
  return (
    <div
      className="flip-card"
      tabIndex="0"
      onClick={() => onClick({ image, text, name })}
      {...props}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={`Portrait of ${name}`} />
        </div>
        <div className="flip-card-back">
          <h3>{name}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
