import React from "react";
import "./Copywrite.css";

export default function Copywrite(props) {
  return (
    <p className="copywrite-content">
      {props.content}
      <a href={props.link}>{props.devloper}</a>
    </p>
  );
}
