import React, { Component } from 'react';
import Calendar from "react-calendar";
import Header from "./Header";
import GigList from "./GigList";
import * as Scroll from "react-scroll";
import "./styles/App.css";
import { connect } from "react-redux";
import { getGig } from "./redux/gig";


let scroll = Scroll.animateScroll;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }
    componentDidMount() {
        this.props.getGig();
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    onChange = date => this.setState({ date })
    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <div className="calendar-wrapper">
                    <Calendar onChange={this.onChange} value={this.state.date} className="calendar" calendarType="ISO 8601" />
                </div>
                <div className="arrow" onClick={this.scrollToBottom}>
                    <p>UPCOMING GIGS</p>
                    <p><i className="down"></i></p>
                </div>
                <GigList />
            </div>
        )
    }
}

export default connect(null, { getGig })(App);
