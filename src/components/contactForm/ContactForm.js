import React from "react";
import { useState } from "react";
export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,

}) => {

  return (
    <div className="inputForm">  
      <form onSubmit={handleSubmit} >

        <div className="text-input important-input">
          <p >Full Name</p>
          <input type="text" value={name} onChange={setName} />
        </div>

        <div className="other-input">
        
            <div className="text-input">
              <p>Phone Num</p>
              <input type="text" value={phone} onChange={setPhone} />
            </div>

            <div className="text-input">
              <p >Email</p>
              <input type="text" value={email} onChange={setEmail} />
            </div>

        </div>
        <button type="submit" >Submit</button>        
      </form>
    </div >
  );

}
export default ContactForm;
