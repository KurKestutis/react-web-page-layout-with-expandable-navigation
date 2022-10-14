import React from "react";

import "./Contact.scss";

const Contact = (props) => {
  return (
    <div>
      <address className="contact">
        <a
          className="contact__link"
          key={props.id}
          href={props.link}
          //if type==='mail' onClick={() => (window.location = `mailto:${props.contact_text}`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* prettier-ignore */}
          <img 
          className="contact__logo" 
          src={props.src} 
        
          alt={props.alt} />
          <p className="contact__text">{props.contact_text}</p>
        </a>
      </address>
    </div>
  );
};

export default Contact;
