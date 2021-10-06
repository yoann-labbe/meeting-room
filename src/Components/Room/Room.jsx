import { Card } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Picker from "../Calendar/Picker";

const Room = () => {
  const [list, setList] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3031/room")
      .then((response) => response.data)
      .then((data) => {
        setList(data);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      {list.map((row) => (
        <Card style={{display:"flex", marginBottom:"10px"}}>
          <div
            style={{
              borderTop: "1px solid lightgrey",
              marginLeft:"30px",
              height: "300px",
              width: "300px",
            }}
          >
            <h3 style={{ color: "blue" }} >Nom de la salle : {row.title}</h3>
            <p >Taille de la salle : {row.size} m²</p>
            <p >Boissons : {row.hotdrink}</p>
            <p >Materiel présent dans la salle : {row.object}</p>
            <p >Description de la salle : {row.description}</p>
            <p >Lieux : {row.place}</p>
            <p >Prix : {row.price} €/jour</p>
          </div>
        <div>
        <button title="Réservez" type="button"/>
        <Picker />
        </div>
        </Card>
      ))}
    </div>
  );
};

export default Room;
