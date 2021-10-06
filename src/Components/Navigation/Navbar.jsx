import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    button: {
      borderRadius: "45px",
    //   backgroundColor: "#cf9f25",
     backgroundColor: " #103f54",

      color: "white",
      width: "225px",
      height: "45px",
      border: "none",
      outline: "none",
      shadow: "none",
      marginTop: "40px",
      marginRight:"20px",
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: "#FFC93C",
      },
    },
    position: {
        zIndex: 2,
    }
  }));


export default function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.title}>
        <h1 style={{color:"#cf9f25", fontFamily:"fantasy"}}> Bienvenue sur mon site de réservation de salle de réunion </h1>
        <div className={classes.position}>
        <h2 style={{fontFamily:"fantasy"}}>Vous pouvez :</h2>
        <Button className={classes.button} href="/search">Rechercher une salle</Button>
        <Button className={classes.button} href="/ajout">Créer une nouvelle salle</Button>
        </div>
        </div>
    );
}

