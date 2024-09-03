import React from "react";

export const Tile1 = ({ object, remove }) => {
    return (
        <div className="tile-container" >
            {/* <div className="tile-data">
                <div className="tile-img">
                    <img src="../AppointmentPic/PhuocTinhTown.jpg" alt="default"/>
                </div>
                <p id="nameAppointment">{object.title}</p>
                <p>Date: {object.date}</p>
                <p>Location: {object.location}</p>
                <p>Attendee: {object.attendee}</p>
                <p>Description: {object.description}</p>
            </div> */}

        <div className="tile-data">
            <button className="tileButtons" onClick={() => remove(object.name)}>X
            </button> 
            
            <div className="tile-img">
            <img src="../AppointmentPic/PhuocTinhTown.jpg" alt="default"/>
            </div>

            <p className="tile-title">{object.title}</p>
            
        </div>

            <div className="tile-data-details">

            <p>Date: {object.date}</p>
                    <p>Location: {object.location}</p>
                    <p>Attendee: {object.attendee}</p>
                    <p>Description: {object.description}</p>
            </div>

        </div >
    );
};
