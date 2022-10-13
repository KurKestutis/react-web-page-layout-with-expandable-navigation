import React from "react";

import "./Contact.scss";

const Contact = (props) => {
  return (
    <address className="contact">
      <a className="contact__link" href={props.link}>
        <img className="contact__logo" src={props.src} alt={props.alt} />
        {props.contact_text}
      </a>
    </address>
  );
};

export default Contact;
