import React, { Component } from 'react';
import Calendar from "react-calendar";
import { connect } from "react-redux";
import { modalToggle } from "../redux/modal";
import "../styles/Cal.css";


class Cal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleDayClick(date) {
        this.props.modalToggle(date);
    }

    onChange = date => this.setState({ date });
    render() {
        return (
            <div className="calendar-wrapper">
                <Calendar onClickDay={this.handleDayClick} onChange={this.onChange} value={this.state.date} className="calendar" calendarType="ISO 8601" />
            </div>
        )
    }
}

export default connect(null, { modalToggle })(Cal);
