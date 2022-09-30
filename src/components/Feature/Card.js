import React from "react";

import "./Card.scss";

import Button from "./Button";

const Card = (props) => {
  return (
    <article className="card" key={props.kye}>
      <h3 className="card__name">{props.name}</h3>
      <img className="card__img" src={props.imgSrc} alt="project screenshot" />
      <div className="card__btn">
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
