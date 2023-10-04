// src/Player.js
// src/Player.js
import React from "react";
import Card from "react-bootstrap/Card";

const playerCardStyle = {
  width: "18rem",
  margin: "1rem",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
};


const imageStyle = {
  width: "100%",
  maxHeight: "250px",
  objectFit: "cover",
};






const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={playerCardStyle}>
      <Card.Img variant="top" src={image} style={imageStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;

