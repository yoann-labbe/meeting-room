import React from 'react';
import { Button } from '@material-ui/core';


export default function Navbar(props) {

    return (
        <div>
        <Button href="/search">Rechercher salle</Button>
        <Button href="/ajout">Ajouter une nouvelle salle</Button>
        </div>
    );
}

