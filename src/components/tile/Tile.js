import React from "react";

export const Tile = ({ object, remove }) => {

  return (
    <div className="tile-container" >
      
      <div className="tile-data">
        <button className="tileButtons" onClick={() => remove(object.name)}>X
        </button> 
        
        <div className="tile-img">
          <img src="../ContactPic/VanPhucCT.jpg" alt="default"/>
        </div>

        <p className="tile-title">{object.name}</p>

      </div>

        <div className="tile-data-details">
          <p>Phone: {object.phone}</p>
          <p>Email: {object.email}</p>
        </div>

    </div >
  );
};
