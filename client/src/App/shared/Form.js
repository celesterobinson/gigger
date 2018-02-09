import React, { Component } from 'react';
import { connect } from "react-redux";
import { postGig, updateGig } from "../redux/gig";
import moment from "moment";
import "../styles/Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        let { bandName, eventName, date, street, city, state, zip, callTime, dress, equipmentChecklist, pay, travelDetails, notes } = props;
        this.state = {
            inputs: {
                bandName: bandName || "",
                eventName: eventName || "",
                date: date || new Date(),
                street: street || "",
                city: city || "",
                state: state || "",
                zip: zip || "",
                callTime: callTime || "",
                dress: dress || "",
                equipmentChecklist: equipmentChecklist || "",
                pay: pay || "",
                travelDetails: travelDetails || "",
                notes: notes || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange(e) {
        let { name, value, type } = e.target;
        let date;
        if (type === "date") {
            date = new Date(value);
            let day = date.getDate();
            date.setDate(day + 1);
        }
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === "date" ? date : value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                bandName: "",
                eventName: "",
                date: new Date(),
                street: "",
                city: "",
                state: "",
                zip: "",
                callTime: "",
                dress: "",
                equipmentChecklist: "",
                pay: "",
                travelDetails: "",
                notes: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let { _id, add, postGig, updateGig, clear, options, submit } = this.props;
        if (add) {
            postGig(this.state.inputs);
            submit()
        } else {
            updateGig(this.state.inputs, _id);
            options.toggle();
        }
        if (clear) {
            this.clearInputs();
        }
    }

    render() {
        let { bandName, eventName, date, street, city, state, zip, callTime, dress, equipmentChecklist, pay, travelDetails, notes } = this.state.inputs;
        date = (moment(date).format("YYYY-MM-DD"));
        return (
            <div>
                <form onSubmit={this.handleSubmit}  >
                    <input onChange={this.handleChange} value={bandName} name="bandName" placeholder="Band Name" type="text" />
                    <input onChange={this.handleChange} value={eventName} name="eventName" placeholder="Event Name(optional)" type="text" />
                    <input onChange={this.handleChange} value={date} name="date" placeholder="Date" type="date" />
                    <input onChange={this.handleChange} value={street} name="street" placeholder="Street" type="text" />
                    <input onChange={this.handleChange} value={city} name="city" placeholder="City" type="text" />
                    <input onChange={this.handleChange} value={state} name="state" placeholder="State" type="text" />
                    <input onChange={this.handleChange} value={zip} name="zip" placeholder="Zip" type="text" />
                    <input onChange={this.handleChange} value={callTime} name="callTime" placeholder="Call Time" type="text" />
                    <input onChange={this.handleChange} value={dress} name="dress" placeholder="Dress(optional)" type="text" />
                    <input onChange={this.handleChange} value={equipmentChecklist} name="equipmentChecklist" placeholder="Equipment Checklist(optional)" type="text" />
                    <input onChange={this.handleChange} value={pay} name="pay" placeholder="Pay(optional)" type="number" />
                    <textarea onChange={this.handleChange} value={travelDetails} name="travelDetails" placeholder="Travel Details(optional)" type="text" cols="30" rows="10"></textarea>
                    <textarea onChange={this.handleChange} value={notes} name="notes" placeholder="Notes(optional)" type="text" cols="30" rows="10"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { postGig, updateGig })(Form);
