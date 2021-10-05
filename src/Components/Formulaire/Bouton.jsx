import { Button } from '@material-ui/core';
import React from 'react';
import Popup from '../Formulaire/Popup'



export default function Bouton() {
    const [open, setOpen] = React.useState(false);
const handleClose = () => {
    setOpen(false);
  };
    return (
        <div>
        <Button onClick={()=> setOpen(true)}> Réservez 
            <Popup open={open} handleClose={handleClose}/>
        </Button>
        </div>
    );
}


  