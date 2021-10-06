import { Card, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useState } from "react";


const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "45px",
    backgroundColor: "#cf9f25",
    color: "white",
    width: "225px",
    height: "45px",
    border: "none",
    outline: "none",
    shadow: "none",
    marginTop: "20px",
    marginBottom: "10px",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#FFC93C",
    },
  },
}));

export default function Ajout() {
  const classes = useStyles();
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
          heigh: "800px",
          width: "400px",
        }}
      >
      <h3 style={{fontFamily:"fantasy"}}>Veuillez remplir tous les champs</h3>
        <TextField
          style={{marginTop: "5px", marginBottom: "5px", width: "220px"}}
          id="outlined-basic"
          label="Nom de la salle" 
          variant="outlined"
          onChange={handleChange}
          value={form.title}
          name={"title"}
        />

        <TextField
          style={{marginBottom: "5px", width: "220px"}}
          id="outlined-basic"
          label="Taille de la salle" 
          variant="outlined"
          onChange={handleChange}
          value={form.size}
          name={"size"}
          placeholder="Taille en mètre carré"
        />
        <TextField
          style={{marginBottom: "5px", width: "220px"}}
          id="outlined-basic"
          label="Boissons" 
          variant="outlined"
          onChange={handleChange}
          value={form.hotdrink}
          name={"hotdrink"}
          placeholder="Chaud, froid ou les deux"
        />
        <TextField
          style={{marginBottom: "5px", width: "220px"}}
          id="outlined-basic"
          label="Objet" 
          variant="outlined"
          onChange={handleChange}
          value={form.object}
          name={"object"}
          placeholder="Objet présent dans la salle"
        />
        <TextField
          style={{marginBottom: "5px", width: "220px"}}
          id="outlined-basic"
          label="Description" 
          variant="outlined"
          onChange={handleChange}
          value={form.description}
          name={"description"}
          placeholder="Description de la salle"
        />
        <TextField
          style={{marginBottom: "5px", width: "220px"}}
          id="outlined-basic"
          label="Lieux" 
          variant="outlined"
          onChange={handleChange}
          value={form.place}
          name={"place"}
          placeholder="Lieux"
        />
        <TextField
          style={{marginBottom: "5px", width: "220px"}}
          id="outlined-basic"
          label="Prix" 
          variant="outlined"
          onChange={handleChange}
          value={form.price}
          name={"price"}
          placeholder="Prix de la salle"
        />

        <button href="/ajout" className={classes.button} onClick={handleClick}>Valider</button>
      </Card>
    </div>
  );
}
