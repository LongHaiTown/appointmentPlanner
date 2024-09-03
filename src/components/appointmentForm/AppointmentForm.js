import React from "react";
import { useState } from "react";
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  location,
  setLocation,
  description,
  setDescription,
  handleSubmit
}) => {

  return (
    <div className="inputForm" id= "AppointmentForm">  
      <form onSubmit={handleSubmit} >

        <div className="text-input important-input">
          <p >Title</p>
          <input type="text" value={title} onChange={setTitle} />
        </div>
        <button type="submit" >Submit</button>  
        <div className="other-input">

            <div className="text-input" id="time">
              <p>Time</p>
              <input type="text" value={time} onChange={setTime} />
            </div>

            <div className="text-input" id="date">
              <p >Date</p>
              <input type="text" value={date} onChange={setDate} />
            </div>
                    
            <div className="text-input" id="attendee">
              <p>Attendee</p>
              <input type="text" value={contact} onChange={setContact} />
            </div>

            <div className="text-input" >
              <p >Location</p>
              <input type="text" value={location} onChange={setLocation} />
            </div>

            <div className="text-input">
              <p >Description</p>
              <input type="text" value={description} onChange={setDescription} />
            </div>

        </div>
                
      </form>
    </div >
  );
};

export default AppointmentForm;