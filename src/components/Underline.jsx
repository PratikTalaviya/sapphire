import React from "react";
import "./Underline.css"; // Import CSS file for styling

const Underline = (props) => {
  return (
    <div className="hover-underline-temp">
      {props.text}
      <div className="underline-temp" style={{ height: props.thickness }}></div>
    </div>
  );
};

export default Underline;
