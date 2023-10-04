// src/PlayersList.js
import React from "react";
import Player from "./Player"; // Assuming Player component is in "./Player"
import data from './Data';



const PlayersList = () => {
  return (
    <div>
      {data.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList ;