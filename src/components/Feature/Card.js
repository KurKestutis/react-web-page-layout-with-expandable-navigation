import React from "react";

import "./Card.scss";

import Button from "./Button";

const Card = (props) => {
  return (
    <article className="card">
      <h3 className="card__name">Name</h3>
      <img className="card__img" src={props.imgSrc} alt="project screenshot" />
      <div class="card__btn">
        <Button
          className="card__btn--site"
          link={props.siteLink}
          linkType="SITE"
        />
        <Button
          className="card__btn--code"
          link={props.codeLink}
          linkType="CODE"
        />
      </div>
    </article>
  );
};

export default Card;
