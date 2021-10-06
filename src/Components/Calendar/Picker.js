
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Bouton from '../Formulaire/Bouton';



export default class Picker extends Component {

    state = {
        date : new Date(),
        showDate : false
    }

    onChange = date => {
        this.setState({
            date
        })
    }

    validation = () => {
        this.setState({
            showDate: true
        })
    }

    reset = () => {
        this.setState({
            showDate:false
        })
    }
  render() {

    return (
    <div style={{boxShadow: "5px 5px 25px"}}>
    <div onClick={this.reset}>
    <Calendar
    onChange={this.onChange}
    selectRange={true}
    value={this.state.date}
     />   
    </div>
    <button onClick={this.validation}>
    <Bouton/>
    </button>  
    {this.state.showDate ? (
        <div>
           <p>Du : {this.state.date[0].toLocaleDateString()}</p>
           <p>Au : {this.state.date[1].toLocaleDateString()}</p>
        </div>
    ) : null}
    </div>
    );
  }
}
