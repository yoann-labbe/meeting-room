import { Card } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import Input from "./Input";

export default function Ajout() {
  const [form, setForm] = useState({
    title: "",
    size: "",
    hotdrink: "",
    object:"",
    description: "",
    place:"",
    price:"",
  });

  const handleClick = async () => {
    await axios
      .post("http://localhost:3031/room", form)
      .then((response) => {
        setForm(response.data);
        console.log("ok");
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          heigh: "600px",
          width: "500px",
        }}
      >
        Nom:
        <Input
          onChange={handleChange}
          value={form.title}
          name={"title"}
          placeholder="Nom de la salle"
        />
        Taille de la salle de réunion:
        <Input
          onChange={handleChange}
          value={form.size}
          name={"size"}
          placeholder="Taille en mètre carré"
        />
        Boissons:
        <Input
          onChange={handleChange}
          value={form.hotdrink}
          name={"hotdrink"}
          placeholder="Boissons chaude, froide ou les deux"
        />
        Objet:
        <Input
          onChange={handleChange}
          value={form.object}
          name={"object"}
          placeholder="Objet présent dans la salle"
        />
        Description:
        <Input
          onChange={handleChange}
          value={form.description}
          name={"description"}
          placeholder="Description"
        />
        Lieux:
        <Input
          onChange={handleChange}
          value={form.place}
          name={"place"}
          placeholder="Lieux"
        />
        Prix:
        <Input
          onChange={handleChange}
          value={form.price}
          name={"price"}
          placeholder="Prix de la salle"
        />
        <button onClick={handleClick}>Valider</button>
      </Card>
    </div>
  );
}
