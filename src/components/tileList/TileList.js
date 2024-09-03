import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list, remov }) => {
  console.log(list[0])
  return (
    <div className="tile-list">
      {list.map((object) => (
        <Tile
          object={object}
          remove={remov}
        />

      ))}
    </div>
  );
};
