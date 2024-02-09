import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link to={props.path}>
      <button className="btn">{props.name}</button>
    </Link>
  );
}
