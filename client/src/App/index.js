import React, { Component } from 'react';
import Calendar from "react-calendar";
import Header from "./Header";
import Form from "./shared/Form";
import "./styles/App.css";

class App extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })
    render() {
        console.log(this.state.date);
        return (
            <div className="app-wrapper">
                <Header />
                <div className="calendar-wrapper">
                    <Calendar onChange={this.onChange} value={this.state.date} className="calendar" />
                </div>
                <div className="arrow">
                    <p><i className="down"></i></p>
                </div>
                <Form />
            </div>
        )
    }
}

export default App;
