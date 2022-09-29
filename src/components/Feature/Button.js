import React from "react";

import "./Button.scss";

const Button = (props) => {
  return (
    <a className="btn" href={props.link} target="_blank" rel="noreferrer">
      {props.linkType}
    </a>
  );
};

export default Button;
