import './App.css';
import React from "react";
import Navbar from './Components/Navigation/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Components/Navigation/Main';
import Ajout from './Components/Add/Ajout';

export default function App() {
  return (
    <div className="App">
     Bienvenue sur mon site de réservation de salle de réunion
    <Router>
    <Main />
      <Switch>
        {/* <Route exact path="/" component={} /> */}
        {/* <Route exact path="/commande" component={} /> */}
        <Route exact path="/ajout" component={Ajout} /> 
      </Switch>
    </Router>
    </div>
  );
}
