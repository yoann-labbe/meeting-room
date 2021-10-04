import React from 'react';
import { Button } from '@material-ui/core';

export default function Navbar(props) {
    return (
        <div>
        <Button href="/search">Rechercher</Button>
        <Button href="/commande">Commande</Button>
        <Button href="/ajout">Ajouter</Button>
        </div>
    );
}

