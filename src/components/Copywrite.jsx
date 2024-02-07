import React from "react";
import "./Copywrite.css";

export default function Copywrite(props) {
  return (
    <p className={`copywrite-content ${props.className}`}>
      {props.content}
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.devloper}
      </a>
    </p>
  );
}
