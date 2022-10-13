import React from "react";
import Contact from "../Feature/Contact";

import "./Contacts.scss";

import contact from "img/NavigationIcons/contacts.png";

const Contacts = (props) => {
  return (
    <div className="contacts">
      <h2 className="contacts__page-title">Contacts</h2>
      <Contact
        link="mailo:kurkestutis@gmail.com"
        src={contact}
        alt="e-mail address"
        contact_text="kurkestutis@gmail.com"
      />
    </div>
  );
};

export default Contacts;
