import React, { Component } from 'react';
import Calendar from "react-calendar";
import Header from "./Header";
import Form from "./shared/Form";
import GigList from "./GigList";
import "./styles/App.css";

class App extends Component {
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })
    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <div className="calendar-wrapper">
                    <Calendar onChange={this.onChange} value={this.state.date} className="calendar" />
                </div>
                <div className="arrow">
                    <p><i className="down"></i></p>
                </div>
                <Form add clear/>
                <GigList />
            </div>
        )
    }
}

export default App;
