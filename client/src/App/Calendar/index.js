import React, { Component } from 'react';
import Calendar from "react-calendar";
import { connect } from "react-redux";
import moment from "moment";
import { modalToggle } from "../redux/modal";
import note from "../images/note.png";
import { getGig } from "../redux/gig";
import "../styles/Cal.css";


class Cal extends Component {
    constructor(props) {
        super(props);      
        this.state = {
            date: new Date()
        }
        this.handleDayClick = this.handleDayClick.bind(this);
        this.tileContent = this.tileContent.bind(this);
    }

    componentDidMount() {
        this.props.getGig();
    }

    handleDayClick(date) {
        this.props.modalToggle(date);
    }

    tileContent({date, view}) {
        if (view === "month") {
            const momentDate = moment(date)
            const gig = this.props.gig.data.find(gig => {
                const gigDate = moment(gig.date)
                return momentDate.isSame(gigDate, "day");
            });
            return gig && <img width="24px" height="24px" src={note} alt=""/>;
        }
    }

    onChange = date => this.setState({ date });
    render() {
        return (
            <div className="calendar-wrapper">
                {!this.props.gig.loading && 
                <Calendar
                    onClickDay={this.handleDayClick}
                    onChange={this.onChange}
                    value={this.state.date}
                    className="calendar"
                    calendarType="ISO 8601"
                    tileContent={this.tileContent}
                />
                }
            </div>
        )
    }
}

export default connect(state => state, { modalToggle, getGig })(Cal);
