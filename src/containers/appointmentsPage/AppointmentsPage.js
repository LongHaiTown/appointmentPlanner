import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList1 } from "../../components/tileList/TileList1";


export const AppointmentsPage = ({ appointmentList, addAppointments, removeAppointments }) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  
  function handleUserTitle(e) {
    setTitle(e.target.value);
  }
  function handleUserContact(e) {
    setContact(e.target.value);
  }
  function handleUserDate(e) {
    setDate(e.target.value);
  }
  function handleUserTime(e) {
    setTime(e.target.value);
  }
  function handleUserLocation(e) {
    setLocation(e.target.value);
  }
  function handleUserDescription(e) {
    setDescription(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (title && contact && date && time) {
      addAppointments(title, contact, date, time);
      setTitle("");
      setContact("");
      setLocation("");
      setTime("");
      setDate("");
      setDescription("")
    } else { alert("Can't insert if values are empty") }
  };
  console.log(appointmentList)

  return (
    <div>
      <section>
        <h1 style={{ backgroundColor:"#03a8d8", color:"white", paddingLeft:"2px"}} >Add Appointment</h1>
        <AppointmentForm 
          title={title}
          setTitle= {handleUserTitle}
          contact ={contact}
          setContact= {handleUserContact}
          date={date}
          setDate={handleUserDate}
          time={time}
          setTime={handleUserTime}
          location={location}
          setLocation ={handleUserLocation}
          description={description}
          setDescription={handleUserDescription}
          handleSubmit ={handleSubmit}
        
        
        
        />
      </section>
      <hr />
      <section>
        <h1 style={{ backgroundColor:"#03a8d8", color:"white", paddingLeft:"2px"}} >Appointments</h1>
        <TileList1 list={appointmentList} remov={removeAppointments}/>
      </section>
    </div>
  );
};

