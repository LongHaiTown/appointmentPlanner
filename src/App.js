import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

import { contactData, appointmentData } from "./Database";



function App() {
  // alert("Check task list in the console!");
  // console.log("1. Add a delete button for Tile");
  // console.log("2. Finish the Appointments page (similar to previous Contacts page )")
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState(contactData);
  const [appointments, setAppointments] = useState(appointmentData);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContacts = (name, phone, email) => {
    setContacts((prev) => {
      const isContactAlreadyInList = prev.some(contact => contact.name === name && contact.phone === phone && contact.email === email);
      if (!isContactAlreadyInList) {
        return [...prev, { name, phone, email }];
      }
      else return prev;
    });
  };
  const removeContacts = (contactNameToRemove) => {
    setContacts((prev) => prev.filter(
      (contact) => contact.name !== contactNameToRemove
    ));
  }; 
  const addAppointments = (title, date, time, location, description , contact) => {
    setAppointments((prev) => {
      return [...prev, { title, date, time, location, description,contact}];
    });
  };
  const removeAppointments = (contactTitleToRemove) => {
    alert("CC")
  };


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contactList={contacts} addContacts={addContacts} removeContacts={removeContacts} /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointmentList={appointments} addAppointments={addAppointments} removeAppointments={removeAppointments} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
