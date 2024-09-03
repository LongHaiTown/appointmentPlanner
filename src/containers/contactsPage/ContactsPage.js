import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contactList, addContacts, removeContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  function handleUserNameInput(e) {
    setName(e.target.value);
  }
  function handleUserPhoneInput(e) {
    setPhone(e.target.value);
  }
  function handleUserMailInput(e) {
    setEmail(e.target.value);
  }


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h1 style={{ backgroundColor:"#03a8d8", color:"white", paddingLeft:"2px"}}>Add Contact</h1>
        <ContactForm name={name}
          phone={phone}
          email={email}
          setName={handleUserNameInput}
          setPhone={handleUserPhoneInput}
          setEmail={handleUserMailInput}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h1 style={{ backgroundColor:"#03a8d8", color:"white", paddingLeft:"2px"}}>Contacts</h1>
        <TileList list={contactList} remov={removeContacts} />
      </section>
    </div>
  );
};
