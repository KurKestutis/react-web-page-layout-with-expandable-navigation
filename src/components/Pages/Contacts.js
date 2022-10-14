import React from "react";
import "./Contacts.scss";
import Contact from "../Feature/Contact";

import contactsDB from "contacts.json";

const contactsFromDB = contactsDB.map((record) => (
  <Contact
    key={record.id}
    link={record.href}
    src={record.icon}
    alt={record.type}
    contact_text={record.text}
  />
));

const Contacts = (props) => {
  return (
    <div className="contacts">
      <h2 className="contacts__page-title">Contacts</h2>
      <div className="contacts__content">{contactsFromDB}</div>
    </div>
  );
};

export default Contacts;
