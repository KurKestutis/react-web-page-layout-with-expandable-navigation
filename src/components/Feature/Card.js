import React from "react";

import Button from "./Button";

const Card = (props) => {
  return (
    <article>
      <h3>Name</h3>
      <img src="#" alt="" />
      <Button link={props.siteLink} linkType="SITE" />
      <Button link={props.codeLink} linkType="CODE" />
    </article>
  );
};

export default Card;
