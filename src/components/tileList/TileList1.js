import React from "react";
import { Tile1 } from "../tile/Tile1";

export const TileList1 = ({ list, remov }) => {
    const a = list;
    console.log(a);
    return (
        <div className="tile-list">
                  {list.map((object) => (
        <Tile1
          object={object}
          remove={remov}
        />

      ))}
        </div>
    );
};
