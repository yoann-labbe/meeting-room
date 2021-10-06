import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Components/Navigation/Main';
import Ajout from './Components/Add/Ajout';
import RoomList from './Components/Room/RoomList';
import Background from './Components/Navigation/Background';




export default function App() {
  

  return (
    <div className="App">
    <Router>
    <Background />
    <Main />
      <Switch>
        <Route exact path="/search" component={RoomList} />
        <Route exact path="/ajout" component={Ajout} /> 
      </Switch>
    </Router>
    
    </div>
  );
}
