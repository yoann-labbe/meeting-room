import './App.css';
import React from "react";
// import Navbar from './Components/Navigation/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Components/Navigation/Main';
import Ajout from './Components/Add/Ajout';
import RoomList from './Components/Room/RoomList';

// import Picker from './Components/Calendar/Picker';

export default function App() {
  return (
    <div className="App">
     Bienvenue sur mon site de réservation de salle de réunion
    <Router>
    {/* <img
      src={"/sallereu.jpeg"}
      alt="Salle de réunion"
      style={{
        width:"100%",
        height:"100%",
        // objectFit:"cover",
        // position:"fixed",
        zIndex:-1,
        opacity: 0.4,
      }}
    /> */}
    <Main />
      <Switch>
        <Route exact path="/search" component={RoomList} />
        {/* <Route exact path="/commande" component={} /> */}
        <Route exact path="/ajout" component={Ajout} /> 
      </Switch>
    </Router>
    </div>
  );
}
