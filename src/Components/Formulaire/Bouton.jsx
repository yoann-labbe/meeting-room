import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Popup from '../Formulaire/Popup'

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

export default function Bouton() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
const handleClose = () => {
    setOpen(false);
  };
    return (
        <div>
        <Button className={classes.button} onClick={()=> setOpen(true)}> Réservez 
            <Popup open={open} handleClose={handleClose}/>
        </Button>
        </div>
    );
}


  